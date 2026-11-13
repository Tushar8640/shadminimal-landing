"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Moon,
  Sun,
  LayoutDashboard,
  BarChart3,
  ShoppingBag,
  Landmark,
  CalendarDays,
  FolderLock,
  GraduationCap,
  MessageSquare,
  Kanban,
  FolderOpen,
  Zap,
  ShieldCheck,
  Smartphone,
  Palette,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  Code2,
  Check,
  Star,
  Users,
  Menu,
  X,
  CreditCard,
  Package,
  Mail,
  Send,
  MapPin,
  Clock,
  LifeBuoy,
} from "lucide-react";
import { useTheme, PresetColor } from "@/components/theme/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DASHBOARD_URL = "https://minimal-indol.vercel.app";
const GITHUB_URL = "https://github.com/Tushar8640/minimal";

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const COLOR_PRESETS: { name: string; value: PresetColor; bg: string }[] = [
  { name: "Default Green", value: "#00A76F", bg: "bg-[#00A76F]" },
  { name: "Cyan", value: "#078DEE", bg: "bg-[#078DEE]" },
  { name: "Purple", value: "#7635dc", bg: "bg-[#7635dc]" },
  { name: "Blue", value: "#2065D1", bg: "bg-[#2065D1]" },
  { name: "Orange", value: "#fda92d", bg: "bg-[#fda92d]" },
  { name: "Red", value: "#ff3030", bg: "bg-[#ff3030]" },
];

const DASHBOARDS = [
  {
    id: "app",
    title: "App Dashboard",
    category: "Applications",
    desc: "Complete overview with installed apps, active downloads, widget summaries, and quick navigation.",
    icon: LayoutDashboard,
    badge: "Most Used",
    stats: "38.5k Active",
    url: `${DASHBOARD_URL}/`,
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    category: "Metrics",
    desc: "Website visits, conversion rates, traffic sources breakdown, bounce tracking, and geographic data.",
    icon: BarChart3,
    badge: "Popular",
    stats: "+24.8% Growth",
    url: `${DASHBOARD_URL}/?tab=analytics`,
  },
  {
    id: "ecommerce",
    title: "Ecommerce Dashboard",
    category: "Commerce",
    desc: "Sales revenue metrics, product inventory turnover, profit margins, and customer order history.",
    icon: ShoppingBag,
    badge: "Essential",
    stats: "$84,230 Rev",
    url: `${DASHBOARD_URL}/?tab=ecommerce`,
  },
  {
    id: "banking",
    title: "Banking Dashboard",
    category: "Finance",
    desc: "Digital wallet balance, recent card transfers, income vs expenses chart, and quick sending tools.",
    icon: Landmark,
    badge: "Finance",
    stats: "$42,500 Bal",
    url: `${DASHBOARD_URL}/?tab=banking`,
  },
  {
    id: "booking",
    title: "Booking Dashboard",
    category: "Hospitality",
    desc: "Room reservations, check-in schedules, customer reviews, and occupancy trends monitoring.",
    icon: CalendarDays,
    badge: "Hotels",
    stats: "94% Booked",
    url: `${DASHBOARD_URL}/?tab=booking`,
  },
  {
    id: "file",
    title: "File Storage Dashboard",
    category: "Cloud",
    desc: "Drive usage breakdowns, category storage meters, recent uploaded media, and cloud sync status.",
    icon: FolderLock,
    badge: "Storage",
    stats: "75.4 GB Used",
    url: `${DASHBOARD_URL}/?tab=file`,
  },
  {
    id: "course",
    title: "Course Dashboard",
    category: "Education",
    desc: "Student learning progress, hours spent studying, completed lessons, and certificate issuance.",
    icon: GraduationCap,
    badge: "LMS",
    stats: "88% Completed",
    url: `${DASHBOARD_URL}/?tab=course`,
  },
];

const APPS_LIST = [
  {
    title: "Chat Messenger",
    desc: "Full conversation threads, real-time typing indicators, and simulated audio/video calls.",
    icon: MessageSquare,
    badge: "Interactive",
    href: `${DASHBOARD_URL}/chat`,
  },
  {
    title: "Interactive Calendar",
    desc: "Month, week, and day grid views with color-coded event creation and outside-click modals.",
    icon: CalendarDays,
    badge: "Full Featured",
    href: `${DASHBOARD_URL}/calendar`,
  },
  {
    title: "Kanban Board",
    desc: "Agile task cards, customizable columns, subtask tracking, priorities, and slide-over editors.",
    icon: Kanban,
    badge: "Agile Ready",
    href: `${DASHBOARD_URL}/kanban`,
  },
  {
    title: "File Manager",
    desc: "Grid & list views, file inspector drawer, folder creation, file uploads, and share links.",
    icon: FolderOpen,
    badge: "Cloud Ready",
    href: `${DASHBOARD_URL}/file-manager`,
  },
  {
    title: "Product Catalog",
    desc: "Filter drawer by category, rating, price slider, stock statuses, and product details view.",
    icon: Package,
    badge: "Store Ready",
    href: `${DASHBOARD_URL}/products`,
  },
  {
    title: "Invoice & Orders",
    desc: "Detailed billing invoices, status tags (Paid/Pending/Overdue), customer records, and print views.",
    icon: CreditCard,
    badge: "Billing",
    href: `${DASHBOARD_URL}/invoice`,
  },
];

const FAQS = [
  {
    q: "What makes ShadMinimal different from other dashboard kits?",
    a: "ShadMinimal is built specifically on the modern Next.js 16 App Router and Tailwind CSS with shadcn/ui. It recreates the clean, world-renowned Minimals design language with pixel-perfect precision, dynamic color theming, and full interactive states without unnecessary bloat.",
  },
  {
    q: "Are the color presets dynamic across the entire application?",
    a: "Yes! The theme provider supports 6 curated color presets (Green, Cyan, Purple, Blue, Orange, Red) alongside Light, Dark, and System modes. All buttons, badges, borders, gradients, and active navigation indicators change dynamically and persist in localStorage.",
  },
  {
    q: "Can I use ShadMinimal for commercial projects and SaaS?",
    a: "Absolutely. ShadMinimal is designed as a foundational template for SaaS applications, admin panels, CRM systems, analytics dashboards, and custom client web apps.",
  },
  {
    q: "Does it support TypeScript and modern React 19?",
    a: "Yes, 100% TypeScript with strict type checking, React 19 compatibility, and zero compile errors across all 79 static pages.",
  },
  {
    q: "How does outside-click closing work for modals and popovers?",
    a: "Every modal, search spotlight (⌘K), language picker, notifications drawer, and mobile menu is wired with outside-click detection and keyboard Escape key listeners for an effortless user experience.",
  },
];

export default function LandingPage() {
  const { resolvedTheme, toggleTheme, colorPreset, setColorPreset } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [activeTab, setActiveTab] = useState<"app" | "analytics" | "ecommerce" | "banking">("app");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isAnnual, setIsAnnual] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactTopic, setContactTopic] = useState("General Inquiry");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#161C24] text-[#1C252E] dark:text-white transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. NAVBAR                                                                 */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full border-b border-[#919EAB]/12 bg-white/80 dark:bg-[#161C24]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00A76F] to-[#00B8D9] shadow-md shadow-[#00A76F]/20">
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-[#1C252E] dark:text-white">
                ShadMinimal
              </span>
              <span className="rounded-md bg-[#00A76F]/15 px-1.5 py-0.5 text-[10px] font-bold text-[#00A76F]">
                v6.0
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#637381] dark:text-[#919EAB]">
            <a href="#features" className="hover:text-[#00A76F] transition-colors">
              Features
            </a>
            <a href="#dashboards" className="hover:text-[#00A76F] transition-colors">
              Dashboards
            </a>
            <a href="#apps" className="hover:text-[#00A76F] transition-colors">
              Apps
            </a>
            <a href="#theming" className="hover:text-[#00A76F] transition-colors">
              Color Presets
            </a>
            <a href="#pricing" className="hover:text-[#00A76F] transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-[#00A76F] transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[#00A76F] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Color Presets Picker in Header */}
            <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#919EAB]/8">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setColorPreset(preset.value)}
                  className={`h-5 w-5 rounded-full transition-transform ${preset.bg} ${
                    colorPreset.toLowerCase() === preset.value.toLowerCase()
                      ? "ring-2 ring-offset-2 ring-[#00A76F] scale-110"
                      : "opacity-80 hover:scale-105"
                  }`}
                  title={preset.name}
                />
              ))}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#637381] hover:bg-[#919EAB]/8 hover:text-[#1C252E] dark:text-[#919EAB] dark:hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* GitHub Link */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#637381] hover:bg-[#919EAB]/8 hover:text-[#1C252E] dark:text-[#919EAB] dark:hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            {/* Go to Dashboard CTA */}
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
              <Button
                size="sm"
                className="bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-xs rounded-xl shadow-md shadow-[#00A76F]/25 h-9 px-4 gap-1.5"
              >
                <span>Live Dashboard</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[#637381] dark:text-[#919EAB]"
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#637381] dark:text-[#919EAB] hover:bg-[#919EAB]/8"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-[#919EAB]/12 bg-white dark:bg-[#161C24] p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2 text-sm font-semibold">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Features
              </a>
              <a
                href="#dashboards"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Dashboards
              </a>
              <a
                href="#apps"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Apps
              </a>
              <a
                href="#theming"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Color Presets
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#919EAB]/8"
              >
                Contact
              </a>
            </nav>
            <div className="pt-2 border-t border-[#919EAB]/12 flex flex-col gap-2">
              <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="w-full">
                <Button className="w-full bg-[#00A76F] text-white font-bold text-xs rounded-xl h-10">
                  Open Live Dashboard
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Glow Effects in Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#00A76F]/20 via-[#078DEE]/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Floating Pill Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A76F]/30 bg-[#00A76F]/8 px-4 py-1.5 text-xs font-bold text-[#00A76F] shadow-sm animate-in fade-in duration-300">
            <Sparkles className="h-3.5 w-3.5 text-[#00A76F]" />
            <span>Next.js 16 + shadcn/ui + Tailwind CSS • ShadMinimal v6.0</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1C252E] dark:text-white leading-[1.12]">
              The Starting Point For Your Next{" "}
              <span className="bg-gradient-to-r from-[#00A76F] via-[#00B8D9] to-[#078DEE] bg-clip-text text-transparent">
                Web Application
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#637381] dark:text-[#919EAB] max-w-2xl mx-auto font-normal leading-relaxed">
              Ultra-clean, pixel-perfect dashboard UI kit designed to scale. Includes 7+ comprehensive dashboards, full interactive apps, and real-time color presets.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-sm rounded-xl shadow-xl shadow-[#00A76F]/25 h-12 px-7 gap-2 transition-transform hover:scale-105"
              >
                <span>Explore Live Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-[#919EAB]/25 hover:bg-[#919EAB]/8 font-bold text-sm rounded-xl h-12 px-6 gap-2 text-[#1C252E] dark:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Star on GitHub</span>
              </Button>
            </a>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {["Next.js 16.4.6", "React 19", "Tailwind CSS 4", "shadcn/ui", "TypeScript 5", "Turbopack", "79 Static Pages"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#919EAB]/15 bg-white dark:bg-[#212B36] px-3 py-1 text-xs font-semibold text-[#637381] dark:text-[#919EAB] shadow-xs"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* ========================================================================= */}
          {/* LIVE DASHBOARD SHOWCASE PREVIEW                                           */}
          {/* ========================================================================= */}
          <div className="pt-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl border border-[#919EAB]/16 bg-white dark:bg-[#1E2632] shadow-2xl p-2 sm:p-4 overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#919EAB]/12">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5630]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFAB00]" />
                  <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
                  <span className="ml-2 text-[11px] font-mono text-[#919EAB] hidden sm:inline">
                    https://shadminimal.dev/dashboard
                  </span>
                </div>
                {/* Dashboard Switcher Tabs */}
                <div className="flex items-center gap-1 bg-[#919EAB]/8 p-1 rounded-xl text-xs font-bold">
                  {(["app", "analytics", "ecommerce", "banking"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-lg capitalize transition-colors ${
                        activeTab === tab
                          ? "bg-white dark:bg-[#212B36] text-[#00A76F] shadow-xs"
                          : "text-[#637381] dark:text-[#919EAB] hover:text-[#1C252E] dark:hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Dashboard View Inside */}
              <div className="p-4 sm:p-6 space-y-6 text-left">
                {/* Metric Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="rounded-2xl border border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24] p-4">
                    <p className="text-xs font-semibold text-[#919EAB]">Total Active Users</p>
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="text-2xl font-extrabold text-[#1C252E] dark:text-white">18,765</h3>
                      <span className="text-xs font-bold text-[#00A76F] bg-[#00A76F]/10 px-2 py-0.5 rounded-md">
                        +18.4%
                      </span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24] p-4">
                    <p className="text-xs font-semibold text-[#919EAB]">Total Installed Apps</p>
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="text-2xl font-extrabold text-[#1C252E] dark:text-white">4,876</h3>
                      <span className="text-xs font-bold text-[#078DEE] bg-[#078DEE]/10 px-2 py-0.5 rounded-md">
                        +8.2%
                      </span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24] p-4">
                    <p className="text-xs font-semibold text-[#919EAB]">Monthly Revenue</p>
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="text-2xl font-extrabold text-[#1C252E] dark:text-white">$67,890</h3>
                      <span className="text-xs font-bold text-[#00A76F] bg-[#00A76F]/10 px-2 py-0.5 rounded-md">
                        +32.6%
                      </span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24] p-4">
                    <p className="text-xs font-semibold text-[#919EAB]">Cloud Storage Used</p>
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="text-2xl font-extrabold text-[#1C252E] dark:text-white">84.2 GB</h3>
                      <span className="text-xs font-bold text-[#FFAB00] bg-[#FFAB00]/10 px-2 py-0.5 rounded-md">
                        75%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Banner Inside Simulated Dashboard */}
                <div className="rounded-2xl bg-gradient-to-r from-[#00A76F]/15 via-[#00B8D9]/10 to-transparent p-5 sm:p-6 border border-[#00A76F]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#1C252E] dark:text-white">
                      Welcome back, Jaydon Frankie 👋
                    </h4>
                    <p className="text-xs text-[#637381] dark:text-[#919EAB] max-w-md">
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing.
                    </p>
                  </div>
                  <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
                    <Button size="sm" className="bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-xs rounded-xl h-9">
                      Launch Full Dashboard
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COLOR PRESETS & DYNAMIC THEMING                                        */}
      {/* ========================================================================= */}
      <section id="theming" className="py-20 border-t border-[#919EAB]/12 bg-white dark:bg-[#1E2632]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <Badge variant="outline" className="text-[#00A76F] border-[#00A76F]/30 bg-[#00A76F]/8 text-xs font-bold">
              Color Customizer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Instant Dynamic Theming & Presets
            </h2>
            <p className="text-sm sm:text-base text-[#637381] dark:text-[#919EAB]">
              Click any color preset below to watch the buttons, badges, indicators, and focus outlines adapt in real time across the application.
            </p>

            {/* Interactive Color Circles */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {COLOR_PRESETS.map((preset) => {
                const isSelected = colorPreset.toLowerCase() === preset.value.toLowerCase();
                return (
                  <button
                    key={preset.value}
                    onClick={() => setColorPreset(preset.value)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all ${
                      isSelected
                        ? "border-[#00A76F] bg-[#00A76F]/10 text-[#00A76F] shadow-sm scale-105"
                        : "border-[#919EAB]/20 bg-white dark:bg-[#212B36] text-[#637381] dark:text-[#919EAB] hover:border-[#919EAB]/40"
                    }`}
                  >
                    <span className={`h-4 w-4 rounded-full ${preset.bg}`} />
                    <span>{preset.name}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#919EAB]">Button Styles</span>
                <Badge className="bg-[#00A76F] text-white">Active Accent</Badge>
              </div>
              <div className="space-y-2.5">
                <Button className="w-full bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-xs rounded-xl h-10 shadow-md shadow-[#00A76F]/20">
                  Primary Theme Action
                </Button>
                <Button variant="outline" className="w-full border-[#00A76F] text-[#00A76F] font-bold text-xs rounded-xl h-10 hover:bg-[#00A76F]/8">
                  Outlined Themed Button
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#919EAB]">Badges & Statuses</span>
                <span className="h-2 w-2 rounded-full bg-[#00A76F] animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#00A76F]/12 text-[#00A76F] font-bold text-xs px-2.5 py-1 rounded-md">
                  Active Preset
                </span>
                <span className="bg-[#00A76F]/20 text-[#00A76F] font-semibold text-xs px-2.5 py-1 rounded-md">
                  +34.2% Growth
                </span>
                <span className="border border-[#00A76F] text-[#00A76F] font-medium text-xs px-2.5 py-1 rounded-md">
                  Validated
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#919EAB]">Storage Meter</span>
                <span className="text-xs font-bold text-[#00A76F]">82% Filled</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="bg-[#00A76F] h-full rounded-full transition-all duration-300 w-[82%]" />
              </div>
              <p className="text-xs text-[#919EAB]">Dynamic bar accent updates with selected preset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DASHBOARDS TEMPLATES SHOWCASE                                          */}
      {/* ========================================================================= */}
      <section id="dashboards" className="py-20 border-t border-[#919EAB]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="text-[#00B8D9] border-[#00B8D9]/30 bg-[#00B8D9]/8 text-xs font-bold">
              7 Curated Dashboards
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Purpose-Built for Every Industry
            </h2>
            <p className="text-sm sm:text-base text-[#637381] dark:text-[#919EAB]">
              Whether building an e-commerce platform, SaaS metrics panel, financial wallet, or LMS, ShadMinimal has dedicated templates ready to deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARDS.map((dash) => {
              const Icon = dash.icon;
              return (
                <div
                  key={dash.id}
                  className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A76F]/10 text-[#00A76F] group-hover:bg-[#00A76F] group-hover:text-white transition-colors duration-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-md bg-gray-100 dark:bg-white/5 px-2.5 py-1 text-[11px] font-bold text-[#637381] dark:text-[#919EAB]">
                        {dash.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#1C252E] dark:text-white group-hover:text-[#00A76F] transition-colors">
                        {dash.title}
                      </h3>
                      <p className="text-xs text-[#637381] dark:text-[#919EAB] mt-1.5 leading-relaxed">
                        {dash.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#919EAB]/12 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00A76F]">{dash.stats}</span>
                    <a
                      href={dash.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1C252E] dark:text-white hover:text-[#00A76F] transition-colors"
                    >
                      <span>Preview</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. APPS MODULES SECTION                                                   */}
      {/* ========================================================================= */}
      <section id="apps" className="py-20 border-t border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="text-[#8E33FF] border-[#8E33FF]/30 bg-[#8E33FF]/8 text-xs font-bold">
              Full Application Modules
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Not Just Mockups. Fully Interactive Apps.
            </h2>
            <p className="text-sm sm:text-base text-[#637381] dark:text-[#919EAB]">
              Real state management, drag-and-drop support, filter drawers, event creation, and interactive dialogs out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS_LIST.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] p-6 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00A76F]/20 to-[#00B8D9]/20 text-[#00A76F]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">{app.title}</h4>
                      <span className="text-[10px] font-bold text-[#00A76F]">{app.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed mb-4">
                    {app.desc}
                  </p>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A76F] hover:underline"
                  >
                    <span>Launch Module</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. KEY ARCHITECTURAL FEATURES                                             */}
      {/* ========================================================================= */}
      <section id="features" className="py-20 border-t border-[#919EAB]/12 bg-white dark:bg-[#1E2632]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Badge variant="outline" className="text-[#FFAB00] border-[#FFAB00]/30 bg-[#FFAB00]/8 text-xs font-bold">
              Engineering Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Engineered with Modern Web Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A76F]/12 text-[#00A76F]">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Turbopack Powered</h4>
              <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed">
                Lightning-fast HMR and build times with Next.js 16 and Rust-based Turbopack bundling.
              </p>
            </div>

            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#078DEE]/12 text-[#078DEE]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Strict TypeScript</h4>
              <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed">
                Zero compiler errors, complete prop types, and strictly safe mock data schemas.
              </p>
            </div>

            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8E33FF]/12 text-[#8E33FF]">
                <Smartphone className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">100% Responsive</h4>
              <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed">
                Tested across mobile viewports, iPads, laptops, and ultra-wide desktop monitors.
              </p>
            </div>

            <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5630]/12 text-[#FF5630]">
                <Palette className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Light & Dark Modes</h4>
              <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed">
                Seamless color mode toggle with zero hydration flicker and persistent state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PRICING PLANS                                                          */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-20 border-t border-[#919EAB]/12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <Badge variant="outline" className="text-[#00A76F] border-[#00A76F]/30 bg-[#00A76F]/8 text-xs font-bold">
              Simple Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Transparent Plans for Developers & Teams
            </h2>
            <p className="text-sm sm:text-base text-[#637381] dark:text-[#919EAB]">
              Everything you need to ship world-class web products in record time.
            </p>

            {/* Monthly / Annual Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 rounded-full border border-[#919EAB]/20 bg-white dark:bg-[#212B36] text-xs font-bold mt-4">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  !isAnnual ? "bg-[#00A76F] text-white" : "text-[#637381] dark:text-[#919EAB]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  isAnnual ? "bg-[#00A76F] text-white" : "text-[#637381] dark:text-[#919EAB]"
                }`}
              >
                <span>Yearly</span>
                <span className="rounded-md bg-white/20 px-1 py-0.2 text-[9px]">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Tier */}
            <div className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#1C252E] dark:text-white">Standard</h4>
                <p className="text-xs text-[#919EAB]">Perfect for personal projects and prototypes.</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl font-extrabold text-[#1C252E] dark:text-white">
                    ${isAnnual ? "49" : "59"}
                  </span>
                  <span className="text-xs text-[#919EAB]">/ project</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-[#919EAB]/12 text-xs font-medium text-[#637381] dark:text-[#919EAB]">
                  {[
                    "One end product license",
                    "7+ Interactive dashboards",
                    "6 Color preset themes",
                    "6 Months technical support",
                    "Free minor version updates",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#00A76F] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="block mt-8">
                <Button variant="outline" className="w-full font-bold text-xs rounded-xl h-11 border-[#919EAB]/25">
                  Choose Standard
                </Button>
              </a>
            </div>

            {/* Plus Tier (Popular) */}
            <div className="rounded-2xl border-2 border-[#00A76F] bg-white dark:bg-[#212B36] p-8 shadow-2xl relative flex flex-col justify-between">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#00A76F] px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
                POPULAR
              </span>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#1C252E] dark:text-white">Plus</h4>
                <p className="text-xs text-[#919EAB]">For commercial products, startups, and clients.</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl font-extrabold text-[#1C252E] dark:text-white">
                    ${isAnnual ? "79" : "99"}
                  </span>
                  <span className="text-xs text-[#919EAB]">/ license</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-[#919EAB]/12 text-xs font-medium text-[#1C252E] dark:text-white">
                  {[
                    "Unlimited client products",
                    "All 7 dashboards & 6 full apps",
                    "Full authentication workflows",
                    "Lifetime component updates",
                    "Figma design tokens included",
                    "12 Months priority support",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#00A76F] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="block mt-8">
                <Button className="w-full bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-xs rounded-xl h-11 shadow-lg shadow-[#00A76F]/25">
                  Get Plus License
                </Button>
              </a>
            </div>

            {/* Extended Tier */}
            <div className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#1C252E] dark:text-white">Extended</h4>
                <p className="text-xs text-[#919EAB]">For enterprise SaaS platforms with paying users.</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl font-extrabold text-[#1C252E] dark:text-white">
                    ${isAnnual ? "199" : "249"}
                  </span>
                  <span className="text-xs text-[#919EAB]">/ enterprise</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-[#919EAB]/12 text-xs font-medium text-[#637381] dark:text-[#919EAB]">
                  {[
                    "SaaS application charging users",
                    "Full source code ownership",
                    "Custom branding & token guide",
                    "Unlimited developer seats",
                    "24/7 dedicated support team",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#00A76F] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="block mt-8">
                <Button variant="outline" className="w-full font-bold text-xs rounded-xl h-11 border-[#919EAB]/25">
                  Contact Sales
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ ACCORDION                                                          */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 border-t border-[#919EAB]/12 bg-[#F9FAFB] dark:bg-[#161C24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <Badge variant="outline" className="text-[#00A76F] border-[#00A76F]/30 bg-[#00A76F]/8 text-xs font-bold">
              Got Questions?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#1C252E] dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#919EAB] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180 text-[#00A76F]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#637381] dark:text-[#919EAB] leading-relaxed border-t border-[#919EAB]/8">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONTACT SECTION                                                        */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 border-t border-[#919EAB]/12 bg-white dark:bg-[#1E2632]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <Badge variant="outline" className="text-[#00A76F] border-[#00A76F]/30 bg-[#00A76F]/8 text-xs font-bold">
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C252E] dark:text-white">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-sm sm:text-base text-[#637381] dark:text-[#919EAB]">
              Have questions about ShadMinimal, custom licensing, or feature requests? Drop us a line and our engineering team will get back to you within hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-[#919EAB]/16 bg-[#F9FAFB] dark:bg-[#161C24] p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A76F]/12 text-[#00A76F] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Direct Email</h4>
                    <p className="text-xs text-[#919EAB] mt-0.5">Reach our dedicated developer team</p>
                    <a
                      href="mailto:support@shadminimal.dev"
                      className="text-xs font-semibold text-[#00A76F] hover:underline mt-1 inline-block"
                    >
                      support@shadminimal.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#078DEE]/12 text-[#078DEE] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Fast Response SLA</h4>
                    <p className="text-xs text-[#919EAB] mt-0.5">Average response time: &lt; 15 minutes</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#22C55E] mt-1">
                      <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
                      Support Team Online
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E33FF]/12 text-[#8E33FF] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">Global Headquarters</h4>
                    <p className="text-xs text-[#919EAB] mt-0.5">San Francisco, CA & Remote Worldwide</p>
                    <span className="text-xs text-[#637381] dark:text-[#919EAB] mt-1 block">
                      Operating across all global timezones
                    </span>
                  </div>
                </div>
              </div>

              {/* Status / GitHub Community Card */}
              <div className="rounded-2xl border border-[#919EAB]/16 bg-gradient-to-br from-[#00A76F]/10 via-[#078DEE]/5 to-transparent p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00A76F]">Open Source & Docs</span>
                  <GithubIcon className="h-4 w-4 text-[#637381] dark:text-[#919EAB]" />
                </div>
                <h4 className="text-sm font-bold text-[#1C252E] dark:text-white">
                  Join our developer community
                </h4>
                <p className="text-xs text-[#637381] dark:text-[#919EAB] leading-relaxed">
                  Contribute to the roadmap, report issues, and chat with hundreds of builders using ShadMinimal.
                </p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#00A76F] hover:underline pt-1"
                >
                  <span>Visit GitHub Community</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#919EAB]/16 bg-white dark:bg-[#212B36] p-6 sm:p-8 shadow-xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00A76F]/20 text-[#00A76F]">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C252E] dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-[#637381] dark:text-[#919EAB] max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out to the ShadMinimal team. We have received your inquiry and will reply to your email shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="font-bold text-xs rounded-xl h-10 mt-2"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1C252E] dark:text-white mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Harrison"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full rounded-xl border border-[#919EAB]/20 bg-[#F9FAFB] dark:bg-[#161C24] px-3.5 py-2.5 text-xs text-[#1C252E] dark:text-white placeholder:text-[#919EAB] focus:border-[#00A76F] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1C252E] dark:text-white mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full rounded-xl border border-[#919EAB]/20 bg-[#F9FAFB] dark:bg-[#161C24] px-3.5 py-2.5 text-xs text-[#1C252E] dark:text-white placeholder:text-[#919EAB] focus:border-[#00A76F] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1C252E] dark:text-white mb-1.5">
                        Inquiry Topic
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          "General Inquiry",
                          "Custom Features",
                          "Enterprise License",
                          "Bug / Support",
                        ].map((topic) => (
                          <button
                            type="button"
                            key={topic}
                            onClick={() => setContactTopic(topic)}
                            className={`rounded-xl border py-2 px-2 text-[11px] font-semibold transition-all text-center ${
                              contactTopic === topic
                                ? "border-[#00A76F] bg-[#00A76F]/10 text-[#00A76F]"
                                : "border-[#919EAB]/20 bg-[#F9FAFB] dark:bg-[#161C24] text-[#637381] dark:text-[#919EAB] hover:border-[#919EAB]/40"
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1C252E] dark:text-white mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your project requirements or what you need help with..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full rounded-xl border border-[#919EAB]/20 bg-[#F9FAFB] dark:bg-[#161C24] p-3 text-xs text-[#1C252E] dark:text-white placeholder:text-[#919EAB] focus:border-[#00A76F] focus:outline-none transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-xs rounded-xl h-11 shadow-lg shadow-[#00A76F]/20 gap-2 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. BOTTOM CTA BANNER                                                     */}
      {/* ========================================================================= */}
      <section className="py-20 border-t border-[#919EAB]/12 bg-white dark:bg-[#1E2632]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-tr from-[#1C252E] via-[#212B36] to-[#161C24] p-8 sm:p-14 text-white overflow-hidden shadow-2xl text-center space-y-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A76F]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B8D9]/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Start Building Faster Today with{" "}
              <span className="bg-gradient-to-r from-[#00A76F] to-[#00B8D9] bg-clip-text text-transparent">
                ShadMinimal
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#919EAB] max-w-xl mx-auto">
              Skip weeks of boilerplate design and component wiring. Launch your next project with clean, pixel-perfect Minimals code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  className="bg-[#00A76F] hover:bg-[#007b55] text-white font-bold text-sm rounded-xl h-12 px-8 shadow-xl shadow-[#00A76F]/30"
                >
                  Launch Dashboard Live
                </Button>
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold text-sm rounded-xl h-12 px-7"
                >
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER                                                                */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#919EAB]/12 bg-white dark:bg-[#161C24] py-12 text-xs text-[#919EAB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#00A76F] to-[#00B8D9] text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-sm text-[#1C252E] dark:text-white">ShadMinimal UI</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#features" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#dashboards" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              Dashboards
            </a>
            <a href="#apps" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              Apps
            </a>
            <a href="#pricing" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              Contact
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-[#1C252E] dark:hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          <div>
            <span>© 2026 ShadMinimal UI Kit. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
