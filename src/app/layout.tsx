//DEPENDENCIES
import Providers from "../store/Provider";
//STYLES
import "./globals.css";
import { Inter } from "next/font/google";
//FONTAWESOME
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//COMPONENTS
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import Cart from "@/components/molecules/Cart/Cart";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header />
          <Cart />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
