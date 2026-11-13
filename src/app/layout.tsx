import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-public-sans",
  display: "swap",
});

const SITE_URL = "https://shadminimal-landing.vercel.app";
const DASHBOARD_URL = "https://minimal-indol.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9FAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#161C24" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ShadMinimal - Modern Next.js 16 UI Kit & Dashboard Template",
    template: "%s | ShadMinimal UI Kit",
  },
  description:
    "ShadMinimal is an ultra-clean, pixel-perfect UI kit built with Next.js 16 App Router, Tailwind CSS 4, and shadcn/ui. Featuring 7+ interactive dashboards, 6 full apps, and dynamic real-time color presets.",
  applicationName: "ShadMinimal",
  authors: [{ name: "Tushar Imran", url: "https://github.com/Tushar8640" }],
  generator: "Next.js 16",
  keywords: [
    "Next.js 16 dashboard",
    "shadcn ui template",
    "Tailwind CSS admin template",
    "Minimal UI kit",
    "React 19 dashboard",
    "Next.js App Router template",
    "Turbopack admin dashboard",
    "TypeScript UI kit",
    "Analytics dashboard template",
    "Ecommerce admin template",
    "Banking dashboard React",
    "Kanban board Next.js",
    "Calendar app React",
    "Chat messenger UI",
    "File manager Next.js",
    "Dark mode dashboard",
    "Responsive web application template",
  ],
  creator: "Tushar",
  publisher: "ShadMinimal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ShadMinimal UI Kit",
    title: "ShadMinimal - Modern Next.js 16 UI Kit & Dashboard Template",
    description:
      "Pixel-perfect, high-converting Next.js 16 & shadcn/ui admin dashboard with 7+ industry templates, interactive apps, and 6 dynamic color presets.",
    images: [
      {
        url: "/assets/images/minimal-free-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ShadMinimal Dashboard & UI Kit Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShadMinimal - Modern Next.js 16 UI Kit & Dashboard Template",
    description:
      "Pixel-perfect Next.js 16, Tailwind CSS & shadcn/ui template with 7+ interactive dashboards and real-time color theming.",
    images: ["/assets/images/minimal-free-preview.jpg"],
    creator: "@shadminimal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "ShadMinimal",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "49.00",
          "priceCurrency": "USD",
        },
        "description":
          "Pixel-perfect UI kit built with Next.js 16, Tailwind CSS, and shadcn/ui with 7+ interactive dashboards.",
        "url": SITE_URL,
        "screenshot": `${SITE_URL}/assets/images/minimal-free-preview.jpg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "ShadMinimal UI Kit",
        "description": "Next.js 16 & shadcn/ui Dashboard & UI Kit",
        "publisher": {
          "@type": "Organization",
          "name": "ShadMinimal",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/assets/icons/workspaces/logo-1.webp`,
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] dark:bg-[#161C24] text-[#1C252E] dark:text-white antialiased selection:bg-[#00A76F]/20 selection:text-[#00A76F] transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
