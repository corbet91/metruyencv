import { PropsWithChildren } from "react";
import AppQueryProvider from "./query-provider";
import { SessionProviders } from "./session-provider";
import TopBar from "@/components/layout/top-bar";
import { ThemeProvider } from "./theme-provider";
import Banner from "@/components/layout/banner";
import Footer from "@/components/layout/footer";

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
          <div className="max-w-[1024px] m-auto">
            <TopBar />
            <Banner src={null} />
            {children}
            <Footer />
          </div>
        </SessionProviders>
      </AppQueryProvider>
    </ThemeProvider>
  );
};

export default Providers;
