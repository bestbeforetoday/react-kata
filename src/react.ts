export function react(input: string): string {
    const chars = Array.from(input);
    return reactArray(chars).join("");
}

function reactArray(chars: string[]): string[] {
    for (let i = 0; i + 1 < chars.length; ) {
        if (i < 0 || !isReaction(chars[i], chars[i + 1])) {
            i++;
        } else {
            chars.splice(i, 2);
            i--;
        }
    }

    return chars;
}

function isReaction(a: string, b: string): boolean {
    return a !== b && a.toLowerCase() === b.toLowerCase();
}
