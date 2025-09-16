import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Inter, Montserrat, Plaster } from "next/font/google";
import localFont from "next/font/local";

import useLenisScroll from "@/hooks/useLenisScroll";

const plaster = Plaster({
  weight: "400",
  variable: "--font-next-plaster", // bikin variable untuk dipakai Tailwind
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-next-inter", // bikin variable untuk dipakai Tailwind
});

const montserrat = Montserrat({
  variable: "--font-next-montserrat", // bikin variable untuk dipakai Tailwind
});

const thunder = localFont({
  src: "../public/fonts/thunder/Thunder-BlackLC.ttf",
  weight: "900",
  variable: "--font-next-thunder",
});

const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayRegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-haas/NeueHaasDisplayBlack.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-next-neue-haas",
});

export default function App({ Component, pageProps }: AppProps) {
  useLenisScroll();

  return (
    <>
      <div
        className={`${inter.variable} ${montserrat.variable} ${thunder.variable} ${plaster.variable} ${neueHaas.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
