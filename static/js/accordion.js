/**
 * @file accordion.js
 * @description Interactive accordion logic for CV sections (Experience, Projects, Education, etc.).
 * 
 * Key Responsibilities:
 * 1. Coordinates panel expansion and collapse with smooth CSS height transitions.
 * 2. Enforces single-active-panel behavior across accordion groups.
 * 3. Resets and re-triggers skill progress bar animations when navigating.
 * 4. Automatically calculates and initializes the default active panel's height
 *    on initial load, window resize, and DOM ready events.
 */
(function () {
  /**
   * Expands the clicked accordion header and collapses any currently active accordion.
   * Invoked inline via onclick="expandAccordion(this)".
   * 
   * @param {HTMLElement} elem - The clicked element inside the accordion header.
   */
  const expandAccordion = (elem) => {
    const allPanels = Array.from(document.querySelectorAll(".panel"));
    const allAccordion = Array.from(document.querySelectorAll(".accordion"));
    const headerParent = elem.parentElement;

    if (!headerParent.classList.contains("active")) {
      // 1. Deactivate all accordion headers
      allAccordion.forEach((acc) => {
        acc.classList.remove("active");
      });

      // 2. Mark this header as active
      headerParent.classList.add("active");

      // 3. Collapse all panels
      allPanels.forEach(function (panel) {
        panel.style.maxHeight = null;
      });

      // 4. Locate the corresponding panel directly following this header
      const activePanel = headerParent.nextElementSibling;

      // 5. If navigating away from the skills panel, reset skill progress bars to 0
      if (
        activePanel &&
        activePanel.id !== "skill-panel" &&
        document.querySelector("#skill-panel")
      ) {
        const skillBars = Array.from(
          document.querySelectorAll("#skill-percent"),
        );
        skillBars.forEach((bar) => {
          bar.style.width = "0";
        });
      }

      // 6. Expand the active panel to its natural scroll height
      if (activePanel) {
        activePanel.style.maxHeight = activePanel.scrollHeight + "px";
      }
    } else {
      // If clicking an already active panel, collapse it
      headerParent.classList.remove("active");
      const activePanel = headerParent.nextElementSibling;
      if (activePanel) {
        activePanel.style.maxHeight = null;
      }
    }
  };

  /**
   * Computes and sets the height of the default active panel
   * (e.g., Knowledge / Experience) when the page is loaded or resized.
   */
  const initActiveAccordion = () => {
    const defaultActivePanel = document.querySelector(".accordion.active");
    if (defaultActivePanel && defaultActivePanel.nextElementSibling) {
      defaultActivePanel.nextElementSibling.style.maxHeight =
        defaultActivePanel.nextElementSibling.scrollHeight + "px";
    }
  };

  // Expose globally for HTML onclick handlers
  window.expandAccordion = expandAccordion;
  window.initActiveAccordion = initActiveAccordion;

  // Initialize and keep accordion heights responsive to viewport changes
  window.addEventListener("load", initActiveAccordion);
  window.addEventListener("resize", initActiveAccordion);
  document.addEventListener("DOMContentLoaded", initActiveAccordion);
})();
