import { PropsWithChildren } from "react";
import AppQueryProvider from "./query-provider";
import { SessionProviders } from "./session-provider";
import TopBar from "@/components/layout/top-bar";
import { ThemeProvider } from "./theme-provider";

const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppQueryProvider>
        <SessionProviders>
          <TopBar />
          {children}
        </SessionProviders>
      </AppQueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
