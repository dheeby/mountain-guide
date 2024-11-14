import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "@components/providers/providers";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "@config/theme";

import 'mapbox-gl/dist/mapbox-gl.css';
import "./globals.css";
import Header from "@components/Header";

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Peak List",
  description: "Exploring the outdoors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
