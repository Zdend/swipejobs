/* eslint-disable */
import Global = NodeJS.Global;

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
    }
  }
}
