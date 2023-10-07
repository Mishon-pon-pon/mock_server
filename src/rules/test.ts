import { TCallback } from "../config";
import json from "../data/test.json";

export const TestRule: TCallback = (query, body) => {
  return json;
};
