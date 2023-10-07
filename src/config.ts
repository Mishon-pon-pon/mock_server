import { TestRule } from "./rules/test";

export type TCallback = (
  queyr: Record<string, any>,
  body: Record<string, any>
) => Object;

interface IConfig {
  url: string;
  method: "POST" | "GET";
  callback: TCallback;
}

export const config: IConfig[] = [
  {
    url: "/test",
    method: "GET",
    callback: TestRule,
  },
  {
    url: "/",
    method: "GET",
    callback: (query, body) => {
      return "hello world!";
    },
  },
];
