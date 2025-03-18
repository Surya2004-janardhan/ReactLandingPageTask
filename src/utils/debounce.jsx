import { debounce } from "lodash";

export const debounceFunc = (func, delay = 300) => {
  return debounce(func, delay);
};
