"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type PresetColor = "#00A76F" | "#078DEE" | "#7635dc" | "#2065D1" | "#fda92d" | "#ff3030";

export interface ColorPresetConfig {
  name: string;
  value: PresetColor;
  darker: string;
  lighter: string;
  rgb: string;
}

export const COLOR_PRESETS: ColorPresetConfig[] = [
  { name: "Default (Green)", value: "#00A76F", darker: "#007867", lighter: "#C8FAD6", rgb: "0, 167, 111" },
  { name: "Cyan", value: "#078DEE", darker: "#0059B2", lighter: "#C8F2FF", rgb: "7, 141, 238" },
  { name: "Purple", value: "#7635dc", darker: "#431A9E", lighter: "#EBD6FD", rgb: "118, 53, 220" },
  { name: "Blue", value: "#2065D1", darker: "#103996", lighter: "#D1E9FF", rgb: "32, 101, 209" },
  { name: "Orange", value: "#fda92d", darker: "#B76E00", lighter: "#FFF5CC", rgb: "253, 169, 45" },
  { name: "Red", value: "#ff3030", darker: "#B71D18", lighter: "#FFE7D9", rgb: "255, 48, 48" },
];

function applyColorPreset(color: PresetColor) {
  if (typeof document === "undefined") return;
  const config = COLOR_PRESETS.find((c) => c.value === color) || COLOR_PRESETS[0];
  const root = document.documentElement;

  root.style.setProperty("--primary", config.value);
  root.style.setProperty("--primary-main", config.value);
  root.style.setProperty("--primary-darker", config.darker);
  root.style.setProperty("--primary-lighter", config.lighter);
  root.style.setProperty("--primary-rgb", config.rgb);
  root.style.setProperty("--ring", config.value);
  root.setAttribute("data-color-preset", config.value);

  // Inject or update stylesheet to override all hardcoded #00A76F classes dynamically
  let styleEl = document.getElementById("minimal-color-preset-style") as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "minimal-color-preset-style";
    document.head.appendChild(styleEl);
  }

  if (config.value === "#00A76F") {
    // Default green: clear dynamic overrides
    styleEl.innerHTML = "";
    return;
  }

  styleEl.innerHTML = `
    /* Minimal UI Preset Overrides for ${config.name} */
    [data-color-preset] .bg-\\[\\#00A76F\\],
    [data-color-preset] [class*="bg-[#00A76F]"]:not([class*="/"]):not([class*="hover"]) {
      background-color: ${config.value} !important;
    }
    [data-color-preset] .text-\\[\\#00A76F\\],
    [data-color-preset] [class*="text-[#00A76F]"]:not([class*="hover"]) {
      color: ${config.value} !important;
    }
    [data-color-preset] .border-\\[\\#00A76F\\],
    [data-color-preset] [class*="border-[#00A76F]"]:not([class*="/"]):not([class*="hover"]) {
      border-color: ${config.value} !important;
    }
    [data-color-preset] .ring-\\[\\#00A76F\\],
    [data-color-preset] [class*="ring-[#00A76F]"] {
      --tw-ring-color: ${config.value} !important;
    }
    [data-color-preset] .fill-\\[\\#00A76F\\] {
      fill: ${config.value} !important;
    }
    [data-color-preset] .stroke-\\[\\#00A76F\\] {
      stroke: ${config.value} !important;
    }

    /* Hover & Group Hover */
    [data-color-preset] [class*="hover:bg-[#00A76F]"]:hover {
      background-color: ${config.value} !important;
    }
    [data-color-preset] [class*="hover:text-[#00A76F]"]:hover {
      color: ${config.value} !important;
    }
    [data-color-preset] [class*="hover:border-[#00A76F]"]:hover {
      border-color: ${config.value} !important;
    }
    [data-color-preset] [class*="group-hover:text-[#00A76F]"]:hover,
    [data-color-preset] .group:hover [class*="group-hover:text-[#00A76F]"] {
      color: ${config.value} !important;
    }
    [data-color-preset] [class*="group-hover:border-[#00A76F]"]:hover,
    [data-color-preset] .group:hover [class*="group-hover:border-[#00A76F]"] {
      border-color: ${config.value} !important;
    }

    /* Focus */
    [data-color-preset] [class*="focus:border-[#00A76F]"]:focus {
      border-color: ${config.value} !important;
    }
    [data-color-preset] [class*="focus:ring-[#00A76F]"]:focus {
      --tw-ring-color: ${config.value} !important;
      border-color: ${config.value} !important;
    }

    /* Alpha Opacity Overlays */
    [data-color-preset] [class*="bg-[#00A76F]/4"] {
      background-color: rgba(${config.rgb}, 0.04) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/6"] {
      background-color: rgba(${config.rgb}, 0.06) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/8"] {
      background-color: rgba(${config.rgb}, 0.08) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/10"] {
      background-color: rgba(${config.rgb}, 0.10) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/12"] {
      background-color: rgba(${config.rgb}, 0.12) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/15"] {
      background-color: rgba(${config.rgb}, 0.15) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/20"] {
      background-color: rgba(${config.rgb}, 0.20) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/25"] {
      background-color: rgba(${config.rgb}, 0.25) !important;
    }
    [data-color-preset] [class*="bg-[#00A76F]/30"] {
      background-color: rgba(${config.rgb}, 0.30) !important;
    }

    /* Border opacities */
    [data-color-preset] [class*="border-[#00A76F]/20"] {
      border-color: rgba(${config.rgb}, 0.20) !important;
    }
    [data-color-preset] [class*="border-[#00A76F]/30"] {
      border-color: rgba(${config.rgb}, 0.30) !important;
    }

    /* Darker primary (button hovers, badges) */
    [data-color-preset] [class*="text-[#007867]"] {
      color: ${config.darker} !important;
    }
    [data-color-preset] [class*="hover:bg-[#007867]"]:hover {
      background-color: ${config.darker} !important;
    }

    /* Shadows & Glows */
    [data-color-preset] [class*="shadow-[#00A76F]"] {
      --tw-shadow-color: ${config.value} !important;
      box-shadow: 0 8px 16px 0 rgba(${config.rgb}, 0.24) !important;
    }

    /* Gradients */
    [data-color-preset] [class*="from-[#00A76F]"] {
      --tw-gradient-from: ${config.value} var(--tw-gradient-from-position) !important;
    }
    [data-color-preset] [class*="from-[#00A76F]/10"] {
      --tw-gradient-from: rgba(${config.rgb}, 0.10) var(--tw-gradient-from-position) !important;
    }
    [data-color-preset] [class*="from-[#00A76F]/20"] {
      --tw-gradient-from: rgba(${config.rgb}, 0.20) var(--tw-gradient-from-position) !important;
    }
  `;
}

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  colorPreset: PresetColor;
  setColorPreset: (color: PresetColor) => void;
  resetDefault: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [colorPreset, setColorPresetState] = useState<PresetColor>("#00A76F");

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = (localStorage.getItem("minimal-theme") as Theme) || "light";
    setThemeState(savedTheme);

    const savedColor = (localStorage.getItem("minimal-color-preset") as PresetColor) || "#00A76F";
    setColorPresetState(savedColor);
    applyColorPreset(savedColor);

    const updateResolvedTheme = (t: Theme) => {
      let active: "light" | "dark" = "light";
      if (t === "system") {
        active = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      } else {
        active = t;
      }
      setResolvedTheme(active);

      const root = document.documentElement;
      if (active === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-theme", "light");
      }
    };

    updateResolvedTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        updateResolvedTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("minimal-theme", newTheme);

    let active: "light" | "dark" = "light";
    if (newTheme === "system") {
      active = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      active = newTheme;
    }
    setResolvedTheme(active);

    const root = document.documentElement;
    if (active === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  };

  const setColorPreset = (newColor: PresetColor) => {
    setColorPresetState(newColor);
    localStorage.setItem("minimal-color-preset", newColor);
    applyColorPreset(newColor);
  };

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const resetDefault = () => {
    setTheme("light");
    setColorPreset("#00A76F");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        colorPreset,
        setColorPreset,
        resetDefault,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
