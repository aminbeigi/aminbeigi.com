import type { TBlogPost } from './types';

export const blogPosts: TBlogPost[] = [
    {
        id: 0,
        title: 'Functional Programming with Typescript',
        date: 'Aug 3, 2024',
        content:
            "Functional programming (FP) focuses on creating code that is predictable, easy to understand, and resilient to bugs. At its core, FP revolves around key principles such as immutability, pure functions, and higher-order functions. In this article, we'll delve into these fundamental concepts and illustrate how refactoring your code to embrace an FP style can enhance your programming practices.\n\n## Immutability\nImmutability means that once you create a data structure (like an array or object), you don't change it. Instead of modifying data, you create new versions of it. This makes code easier to understand and less prone to bugs because you avoid unexpected side effects. For example:\n\n```ts\nconst numbers: readonly number[] = [1, 2, 3];\n// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'\n\nconst newNumbers = [...numbers, 4]; // create a new array with an added element\nnewNumbers; // [1, 2, 3, 4]\n```\n\nIn this example, the original `numbers` array remains unchanged. Instead, we use the spread operator to create a new array, which maintains immutability.\n\n## Pure Functions\nA pure function always produces the same output for the same input and does not have side effects (like changing a global variable or modifying an external object). This predictability makes pure functions easy to test and debug.\n\n```ts\nconst add = (a: number, b: number): number => a + b;\nadd(2, 3); // 5\nadd(2, 3); // 5\n```\n\nNo matter how many times you call add with the same arguments, it always returns the same result and does not alter any external state.\n\n## First-Class Functions\nIn TypeScript, functions are first-class citizens. This means you can treat functions like any other value - they can be passed as arguments, returned from other functions, and assigned to variables.\n\n```ts\n// function that takes another function as an argument\nconst applyFunction = <T>(value: T, func: (input: T) => T): T => func(value);\n\n// function to be passed\nconst square = (x: number): number => x * x;\n\n// using applyFunction to apply square to a value\nconst result = applyFunction(5, square);\nresult; // 25\n```\n\nHere, `applyFunction` demonstrates how functions can be passed around and applied in different contexts.\n\n## Higher-Order Functions\nHigher-order functions are your best friends in FP. They either take other functions as arguments or return functions. For example, map is a higher-order function that applies a given function to each element of an array:\n\n```ts\nconst addEmoji = (str: string): string => `${str} 😊`;\nconst result = ['hello', 'world'].map(addEmoji); // ['hello 😊', 'world 😊']\n```\n\nThe `map` function applies `addEmoji` to each element of the array, showcasing how higher-order functions can transform data.\n\n## Function Composition\nFunction composition involves combining multiple functions to create a new function. This is a core concept in functional programming that allows for cleaner and more modular code.\n\n```ts\nconst compose = <T, U, V>(f: (x: T) => U, g: (x: U) => V) => (x: T): V => g(f(x));\n\nconst double = (x: number): number => x * 2;\nconst increment = (x: number): number => x + 1;\n\nconst doubleThenIncrement = compose(double, increment);\ndoubleThenIncrement(3); // 7\n```\n\nHere, `compose` creates a new function `doubleThenIncrement` by combining `double` and `increment`, demonstrating how composition can streamline complex operations.\n\n## Refactoring to Functional Programming Style\nSuppose we have an array of transactions, and we want to perform a series of transformations on this data. The transformations are:\n1. Filter transactions that are completed.\n2. Calculate the total amount for each transaction.\n3. Format the total amount as a currency string.\n4. Sort the transactions by the formatted total amount.\n\n#### Traditional Code Example\nHere’s how you might traditionally approach this problem using imperative code:\n\n```ts\ninterface Transaction {\n    id: number;\n    amount: number;\n    completed: boolean;\n}\n\nconst transactions: Transaction[] = [\n    { id: 1, amount: 200, completed: true },\n    { id: 2, amount: 150, completed: false },\n    { id: 3, amount: 300, completed: true },\n    { id: 4, amount: 250, completed: true }\n];\n\nfunction processTransactions(transactions: Transaction[]): string[] {\n    const completedTransactions: Transaction[] = [];\n    for (const transaction of transactions) {\n        if (transaction.completed) {\n            completedTransactions.push(transaction);\n        }\n    }\n\n    const totals: number[] = [];\n    for (const transaction of completedTransactions) {\n        totals.push(transaction.amount);\n    }\n\n    const formattedTotals: string[] = [];\n    for (const total of totals) {\n        formattedTotals.push(`$${total.toFixed(2)}`);\n    }\n\n    formattedTotals.sort();\n    return formattedTotals;\n}\n\nconst result = processTransactions(transactions);\nresult; // ['$200.00', '$250.00', '$300.00']\n```\n\n#### Refactored FP Code Example with Function Composition\nTo refactor this into a more functional approach, we’ll use function composition to chain our transformations together. We’ll create smaller, reusable functions and compose them to achieve the final result.\n\n```ts\ninterface Transaction {\n    id: number;\n    amount: number;\n    completed: boolean;\n}\n\nconst transactions: Transaction[] = [\n    { id: 1, amount: 200, completed: true },\n    { id: 2, amount: 150, completed: false },\n    { id: 3, amount: 300, completed: true },\n    { id: 4, amount: 250, completed: true }\n];\n\nconst filterCompleted = (transactions: Transaction[]): Transaction[] =>\n    transactions.filter(transaction => transaction.completed);\n\nconst extractAmounts = (transactions: Transaction[]): number[] =>\n    transactions.map(transaction => transaction.amount);\n\nconst formatAsCurrency = (amount: number): string =>\n    `$${amount.toFixed(2)}`;\n\nconst formatAmounts = (amounts: number[]): string[] =>\n    amounts.map(formatAsCurrency);\n\nconst compose = <T, U, V>(f: (x: T) => U, g: (x: U) => V) => (x: T): V => g(f(x));\n\nconst processTransactions = compose(\n    (transactions: Transaction[]) => formatAmounts(extractAmounts(filterCompleted(transactions))),\n    (formattedTotals: string[]) => formattedTotals.sort()\n);\n\nconst result = processTransactions(transactions);\nresult; // ['$200.00', '$250.00', '$300.00']\n```\n\nIn this refactored code, we use function composition to chain our operations in a clean and modular way. Each function handles a specific part of the process, making the code easier to understand and maintain.\n\n## Final Reflection\nAdopting functional programming principles in TypeScript can significantly enhance your code’s clarity and reliability. Though at the end of the day, creativity is your most important tool. Use these principles to enhance your coding, and let your creativity drive innovative solutions."
    }
]