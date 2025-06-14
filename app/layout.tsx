"use client";
import "./globals.css";
import { ThemeProvider } from "../store/ThemeContext";
import Header from "./components/Header";
import { LayoutDirectionProvider } from "@/store/LayoutDirectionContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <LayoutDirectionProvider>
          <body>
            <Header />
            <main>{children}</main>
          </body>
        </LayoutDirectionProvider>
      </ThemeProvider>
    </html>
  );
}
