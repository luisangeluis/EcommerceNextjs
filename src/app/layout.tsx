//Dependencies
import { useSelector } from "react-redux";
import Providers from "../store/Provider";
//Styles
import "./globals.css";
import { Inter } from "next/font/google";
//Components
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import Cart from "@/components/molecules/Cart/Cart";
import Alert from "@/components/molecules/Alert/Alert";

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
          <Alert />
        </body>
      </Providers>
    </html>
  );
}
