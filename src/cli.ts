import { react } from "./react";

const input = process.argv[2];
if (typeof input !== "string") {
    console.error("Usage:", process.argv[1], "<input>"); // tslint:disable-line:no-console
    process.exit(1);
}

const result = react(input);
console.log(`Result: "${result}"`); // tslint:disable-line:no-console
