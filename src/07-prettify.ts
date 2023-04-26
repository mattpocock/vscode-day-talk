export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type Intersected = {
  a: number;
} & {
  b: string;
} & {
  c: boolean;
} & {
  d: number[];
};

// Try wrapping me in Prettify!
type Example = Intersected;
