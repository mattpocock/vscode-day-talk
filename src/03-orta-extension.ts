type ToUppercaseWithPrefix<T extends string> = `PREFIX:${Uppercase<T>}`;

// Try using Orta's extension here!

type Example1 = ToUppercaseWithPrefix<"hello">;

type Example2 = ToUppercaseWithPrefix<"goodbye">;
