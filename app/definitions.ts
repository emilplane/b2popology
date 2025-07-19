import { createContext } from 'react';

export type Category = "other" | "primary" | "military" | "magic" | "support" | "hero";

export const CategoryContext = createContext<Category>("other");

export const SetPathContext = createContext<(index: number, value: number) => void>(() => {});