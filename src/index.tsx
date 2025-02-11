import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Theme } from "@radix-ui/themes";
import { CustomerProvider } from "contexts/CustomerContext";
import Main from "Main";
import queryClient from "api/queryClient";
import reportWebVitals from "reportWebVitals";

import "@radix-ui/themes/styles.css";
import "styles/base.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme accentColor="violet" appearance="dark">
        <CustomerProvider>
          <Main />
        </CustomerProvider>
      </Theme>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
