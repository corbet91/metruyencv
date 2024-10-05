import { PropsWithChildren } from "react";
import AppQueryProvider from "./query-provider";
import { SessionProviders } from "./session-provider";
import TopBar from "@/components/layout/top-bar";

const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <AppQueryProvider>
      <SessionProviders>
        <TopBar />
        {children}
      </SessionProviders>
    </AppQueryProvider>
  );
};

export default Providers;
