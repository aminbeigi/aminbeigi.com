---
title: Functional Programming with TypeScript
date: 2024-09-16
---

Functional programming (FP) focuses on creating code that is predictable, easy to understand and resilient to bugs. At its core, FP revolves around key principles such as immutability, pure functions and higher-order functions. In this article, we'll delve into these fundamental concepts and illustrate how we can refactor our code to embrace a FP style.

## Immutability

Immutability means that once you create a data structure (like an array or object), you don't change it. Instead of modifying data, you create new versions of it. This makes code easier to understand and less prone to bugs because you avoid unexpected side effects. For example:

```ts
const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

const newNumbers = [...numbers, 4]; // create a new array with an added element
newNumbers; // [1, 2, 3, 4]
```

The original `numbers` array remains unchanged. Instead, we use the spread operator to create a new array, which maintains immutability.

## Pure Functions

A pure function always produces the same output for the same input and does not have side effects (like changing a global variable or modifying an external object). This predictability makes pure functions easy to test and debug.

```ts
const add = (a: number, b: number): number => a + b;
add(2, 3); // 5
add(2, 3); // 5
add(2, 3); // 5
```

No matter how many times you call `add` with the same arguments, it always returns the same result and does not alter any external state.

## First-Class Functions

In TypeScript, functions are first-class citizens. This means you can treat functions like any other value - they can be passed as arguments, returned from other functions and assigned to variables.

```ts
// function that takes another function as an argument
const applyFunction = <T>(value: T, func: (input: T) => T): T => func(value);

// function to be passed
const square = (x: number): number => x * x;

// using applyFunction to apply square to a value
const result = applyFunction(5, square);
result; // 25
```

`applyFunction` demonstrates how functions can be passed around and applied in different contexts.

## Higher-Order Functions

Higher-order functions are your best friends in FP. They either take other functions as arguments or return functions. For example, map is a higher-order function that applies a given function to each element of an array:

```ts
const addEmoji = (str: string): string => `${str} 😊`;
const result = ['hello', 'world'].map(addEmoji); // ['hello 😊', 'world 😊']
```

The `map` function applies `addEmoji` to each element of the array, showcasing how higher-order functions can transform data.

## Function Composition

Function composition involves combining multiple functions to create a new function. This is a core concept in functional programming that allows for cleaner and more modular code.

```ts
const compose =
  <T, U, V>(f: (x: T) => U, g: (x: U) => V) =>
  (x: T): V =>
    g(f(x));

const double = (x: number): number => x * 2;
const increment = (x: number): number => x + 1;

const doubleThenIncrement = compose(double, increment);
doubleThenIncrement(3); // 7
```

Here, `compose` creates a new function `doubleThenIncrement` by combining `double` and `increment`, demonstrating how composition can streamline complex operations.

## Refactoring to Functional Programming Style

Suppose we have an array of transactions and we want to perform a series of transformations on this data. The transformations are:

1. Filter transactions that are completed.
2. Calculate the total amount for each transaction.
3. Format the total amount as a currency string.
4. Sort the transactions by the formatted total amount.

Here's the sample data we'll work with:

```ts
interface Transaction {
  id: number;
  amount: number;
  completed: boolean;
}

const transactions: Transaction[] = [
  { id: 1, amount: 200, completed: true },
  { id: 2, amount: 150, completed: false },
  { id: 3, amount: 300, completed: true },
  { id: 4, amount: 250, completed: true },
];
```

#### Imperative (Traditional) Approach

Here’s how you might traditionally approach this problem using imperative code:

```ts
function processTransactions(transactions: Transaction[]): string[] {
  const completedTransactions: Transaction[] = [];
  for (const transaction of transactions) {
    if (transaction.completed) {
      completedTransactions.push(transaction);
    }
  }

  const totals: number[] = [];
  for (const transaction of completedTransactions) {
    totals.push(transaction.amount);
  }

  const formattedTotals: string[] = [];
  for (const total of totals) {
    formattedTotals.push(`$${total.toFixed(2)}`);
  }

  formattedTotals.sort();
  return formattedTotals;
}

const result = processTransactions(transactions);
result; // ['$200.00', '$250.00', '$300.00']
```

#### Functional Programming Approach (with Composition)

To refactor this into a more functional approach, we’ll use function composition to chain our transformations together. We’ll create smaller, reusable functions and compose them to achieve the final result.

```ts
const filterCompleted = (transactions: Transaction[]): Transaction[] =>
  transactions.filter((transaction) => transaction.completed);

const extractAmounts = (transactions: Transaction[]): number[] =>
  transactions.map((transaction) => transaction.amount);

const formatAsCurrency = (amount: number): string => `$${amount.toFixed(2)}`;

const formatAmounts = (amounts: number[]): string[] =>
  amounts.map(formatAsCurrency);

const compose =
  <T, U, V>(f: (x: T) => U, g: (x: U) => V) =>
  (x: T): V =>
    g(f(x));

const processTransactions = compose(
  (transactions: Transaction[]) =>
    formatAmounts(extractAmounts(filterCompleted(transactions))),
  (formattedTotals: string[]) => formattedTotals.sort()
);

const result = processTransactions(transactions);
result; // ['$200.00', '$250.00', '$300.00']
```

In this refactored code, we use function composition to chain our operations in a clean and modular way. Each function handles a specific part of the process, making the code easier to understand and maintain.

## Final Reflection

Adopting functional programming principles in TypeScript can sharpen code reliability and maintainability. Ultimately, creativity remains your most important tool - use these principles to guide your design and let creativity drive innovative solutions.
