import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

// export default async function TranslationLayout({ children }) {
export default async function TranslationLayout({ children }) {

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
