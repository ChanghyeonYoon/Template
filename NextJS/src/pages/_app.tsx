// _app.tsx

import React from "react";
import {
  DefaultOptions,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import type { AppProps } from "next/app";

import "styles/globals.css";
import "styles/reset.css";

const milliSec = 1000;
const sec = 60;
const min = 60;
const hour = 24;
const week = 7;
const staleTime = milliSec * sec * min * hour; // data refresh 기간: 12시간
const cacheTime = staleTime * week; // data 보존 기간: 7일

const DEFAULT_OPTIONS: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime,
    cacheTime,
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(
    new QueryClient({ defaultOptions: DEFAULT_OPTIONS }),
  );
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
