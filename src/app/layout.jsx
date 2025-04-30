import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "sonner";
import Background from "@/components/Background";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gustavo Paiva",
  description: "Desenvolvedor fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://analytics.gustavo-paiva.dev.br/script.js"
          data-website-id="d9b222d9-c68c-4c0f-86e9-e66a3c585aad"
          strategy="lazyOnload"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Background />
          <Toaster richColors position="top-center" expand={true} />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
