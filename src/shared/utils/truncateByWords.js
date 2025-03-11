export function truncateByWords(text, wordLimit = 220) {
    const words = text.split(/\s+/); // Split text into words using spaces
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
}