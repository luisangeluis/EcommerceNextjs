//DEPENDENCIES
import Providers from "../store/Provider";
//STYLES
import "./globals.css";
import { Inter,Roboto } from "next/font/google";
//FONTAWESOME
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
//COMPONENTS
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import Cart from "@/components/molecules/Cart/Cart";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['400', '900'],
  style: ['normal'],
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable:"--font-roboto-mono"
})

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
    <html lang="en" className={`${roboto.variable} ${inter.variable}`} > 
      <Providers>
        <body >
          <Header />
          <Cart />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
