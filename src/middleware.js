import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
// import Cookies from "js-cookie";

// Extract locales from the routing config
const locales = [...routing.locales];

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Check if user is authenticated using NextRequest cookies
  const userTokenCookie = request.cookies.get("userToken");
  const userToken = userTokenCookie?.value
    ? JSON.parse(userTokenCookie.value)
    : null;

  const authRoute = ["login", "register"];
  // If user is authenticated and tries to access login, register, or reset-password, redirect to home
  if (userToken && authRoute.some((route) => pathname.includes(route))) {
    const currentLocale = getCurrentLocale(request);
    return NextResponse.redirect(new URL(`/${currentLocale}`, request.url));
  }

  // Matches '/', as well as all paths that start with a locale like '/en'
  const urlIncludesLocale =
    pathname === "/" ||
    new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  // If the URL does not include a locale, redirect to the default/preferred locale
  if (!urlIncludesLocale) {
    // Determine the user's preferred language
    const preferredLanguage =
      request.cookies.get("NEXT_LOCALE")?.value ||
      request.headers.get("accept-language")?.split(",")[0].split("-")[0] ||
      routing.defaultLocale;
    // Redirect to the preferred language
    return NextResponse.redirect(
      new URL(`/${preferredLanguage}${pathname}${searchParams.toString().length ? "?"+ searchParams.toString() : ""}`, request.url)
    );
  }

  return handleI18nRouting(request);
}

// Function to get current locale
function getCurrentLocale(request) {
  // Try to get locale from URL
  const pathname = request.nextUrl.pathname;
  const localeMatch = pathname.match(new RegExp(`^/(${locales.join("|")})`));

  if (localeMatch) {
    // If locale found in URL, ensure it's a valid locale
    const foundLocale = localeMatch[1];
    if (isValidLocale(foundLocale)) {
      return foundLocale;
    }
  }

  // Try to get locale from cookies
  const localeCookie = request.cookies.get("NEXT_LOCALE");
  if (localeCookie && isValidLocale(localeCookie.value)) {
    return localeCookie.value;
  }

  // Try to get locale from headers
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLanguage = acceptLanguage.split(",")[0].split("-")[0];
    if (isValidLocale(preferredLanguage)) {
      return preferredLanguage;
    }
  }

  // Use default locale
  return routing.defaultLocale;
}

// Helper function to check valid locales
function isValidLocale(locale) {
  return locales.includes(locale);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with /api, /_next or /_vercel
    // - … the ones containing a dot (e.g. favicon.ico)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};