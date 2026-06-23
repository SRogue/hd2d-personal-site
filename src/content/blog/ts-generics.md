---
title: "TypeScript Generics: The Final Boss"
date: 2026-05-21
icon: "⚔️"
description: "Defeating mapped types and conditional types once and for all."
readMin: 12
tags: ["typescript", "generics", "types"]
category: "教程"
---

Generics feel like a final boss until you realize they're just functions for types.

## Level 1: Generic Functions

```ts
function identity<T>(value: T): T {
  return value;
}
```

Read it as: "give me a type T, and I'll return the same type T." The `<T>` is a type parameter — like a function parameter, but for types.

## Level 2: Constraints

Sometimes you need T to have certain properties:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alex', age: 28 };
const name = getProperty(user, 'name'); // type: string
const age = getProperty(user, 'age');   // type: number
```

`K extends keyof T` means "K must be one of the keys of T." This is how you get type-safe property access.

## Level 3: Mapped Types

Mapped types let you transform existing types:

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

`[P in keyof T]` iterates over every key of T, like a `for...in` loop for types.

## Level 4: Conditional Types

```ts
type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'
```

This is a type-level ternary. It's powerful when combined with `infer`:

```ts
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;

type Result = UnpackPromise<Promise<string>>; // string
```

## Level 5: Template Literal Types

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // 'onClick'
```

## Boss Strategy

Once you see types as values, the rest is muscle memory:

1. **Generics** = function parameters for types
2. **Constraints** = type-level guards
3. **Mapped types** = type-level loops
4. **Conditional types** = type-level if/else
5. **infer** = type-level variable assignment

Defeat the boss, collect the loot, and your TypeScript codebase becomes dramatically safer.
