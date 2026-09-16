/**
 * @file theme.js
 * @description Theme management (Dark & Light modes).
 * 
 * Key Responsibilities:
 * 1. Checks localStorage for a previously saved theme.
 * 2. Falls back to OS/system preference (prefers-color-scheme: dark).
 * 3. Applies the appropriate CSS class (.dark or .light) directly to <html>.
 *    (Loaded early in <head> to eliminate Flash of Unstyled Content / FOUC).
 * 4. Toggles between themes and updates the toggle button icon.
 */
(function () {
  const html = document.documentElement;
  let theme = window.localStorage.getItem("theme");

  /**
   * Updates the theme toggle icon in the header (Moon vs Sun).
   * @param {string} currentTheme - 'dark' or 'light'
   */
  const fixThemeToggleIcon = (currentTheme) => {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      if (currentTheme === "dark") {
        themeToggle.classList.remove("bi-moon");
        themeToggle.classList.add("bi-brightness-high");
      } else {
        themeToggle.classList.remove("bi-brightness-high");
        themeToggle.classList.add("bi-moon");
      }
    }
  };

  /**
   * Applies the theme to the <html> tag, persists it in localStorage,
   * and synchronizes the header toggle button icon.
   * @param {string} newTheme - 'dark' or 'light'
   */
  const setTheme = (newTheme) => {
    html.classList.remove("light");
    if (newTheme === "dark") {
      html.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
    fixThemeToggleIcon(newTheme);
  };

  // If no saved theme in localStorage, determine initial theme from HTML class or system preference
  if (theme == null) {
    if (html.classList.contains("dark")) {
      theme = "dark";
    } else if (html.classList.contains("light")) {
      theme = "light";
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      theme = prefersDark ? "dark" : "light";
    }
  }

  // Apply immediately so the page renders with the correct palette before paint
  setTheme(theme);

  /**
   * Toggles the current theme between dark and light modes.
   * Invoked by the header theme toggle button.
   */
  const toggleTheme = () => {
    html.classList.contains("dark") ? setTheme("light") : setTheme("dark");
  };

  // Expose functions globally for inline HTML event handlers (e.g. onclick="toggleTheme()")
  window.setTheme = setTheme;
  window.toggleTheme = toggleTheme;
  window.fixThemeToggleIcon = fixThemeToggleIcon;

  // Ensure the toggle icon matches the theme once the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    fixThemeToggleIcon(html.classList.contains("dark") ? "dark" : "light");
  });
})();
