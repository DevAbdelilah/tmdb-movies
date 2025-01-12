"use client";

import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { store } from "@/core/store";

export function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
