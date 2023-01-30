import { ReactNode } from "react";

export {};

declare global {
  interface Children {
    children: ReactNode;
  }
}
