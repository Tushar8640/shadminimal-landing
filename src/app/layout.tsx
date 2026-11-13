import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShadMinimal - Modern UI Kit & Dashboard Template",
  description:
    "The starting point for your next web application. Pixel-perfect, responsive React & Next.js 16 UI Kit with Tailwind CSS and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[#F9FAFB] dark:bg-[#161C24] text-[#1C252E] dark:text-white antialiased selection:bg-[#00A76F]/20 selection:text-[#00A76F] transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
