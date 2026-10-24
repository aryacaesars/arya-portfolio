import assert from "node:assert/strict";
import fs from "node:fs";

// 1. Verify layout has inline script preventing FOUC and default logic
const layout = fs.readFileSync("app/layout.tsx", "utf-8");
assert(layout.includes("arya-portfolio-theme"), "Layout must reference theme storage key");
assert(layout.includes("ThemeProvider"), "Layout must wrap tree with ThemeProvider");
assert(layout.includes("suppressHydrationWarning"), "html element must have suppressHydrationWarning");
assert(layout.includes("dark:bg-"), "Body must contain dark background style");

// 2. Verify ThemeProvider defaults to 'light'
const provider = fs.readFileSync("components/providers/ThemeProvider.tsx", "utf-8");
assert(provider.includes('useState<Theme>("light")'), "Default state must be light");
assert(provider.includes('savedTheme === "dark" ? "dark" : "light"'), "Default savedTheme check must fallback to light");

// 3. Verify ThemeToggle component exists and has accessible labels
const toggle = fs.readFileSync("components/ui/ThemeToggle.tsx", "utf-8");
assert(toggle.includes("toggleTheme"), "ThemeToggle must call toggleTheme");
assert(toggle.includes("aria-label"), "ThemeToggle must provide aria-label");

// 4. Verify Navbar includes ThemeToggle for desktop and mobile
const navbar = fs.readFileSync("components/Navbar.tsx", "utf-8");
assert(navbar.includes("<ThemeToggle"), "Navbar must render ThemeToggle");

// 5. Verify globals.css has dark variants configured
const globals = fs.readFileSync("app/globals.css", "utf-8");
assert(globals.includes("@custom-variant dark"), "globals.css must configure dark variant");
assert(globals.includes(".dark"), "globals.css must contain .dark definitions");

// 6. Verify Services reset animation
const services = fs.readFileSync("components/sections/Services.tsx", "utf-8");
assert(services.includes("isResetting"), "Services must track resetting state");
assert(services.includes("handleReset"), "Services must handle reset");

console.log("All theme checks passed successfully.");
