/**
 * @file print.js
 * @description Handles CV print preparation, PDF generation, and dynamic title management.
 * 
 * Key Responsibilities:
 * 1. Reads the sanitized export filename from <meta name="print-title"> (e.g. "CV_Alejandro_Rodríguez_(EN)").
 * 2. Dynamically switches document.title right before printing so Chrome's "Save as PDF"
 *    suggests the clean, underscored filename automatically.
 * 3. Expands all accordion panels to visible/unrestricted height so the entire CV renders across pages.
 * 4. Guards the real website title (webPageTitle) against double-print event overwrites.
 * 5. Restores the website title and accordion collapse states immediately after print completes or is cancelled.
 */
(function () {
  /**
   * Retrieves the target export filename from the <meta name="print-title"> tag in <head>.
   * @returns {string} The formatted PDF filename string.
   */
  const getPrintTitle = () => {
    const meta = document.querySelector('meta[name="print-title"]');
    return meta ? meta.getAttribute("content") : "";
  };

  // Preserves the genuine web document title (e.g. "Alejandro Rodríguez S. - Android & Flutter Specialist")
  let webPageTitle = document.title;

  /**
   * Captures the actual webpage title once, ensuring it is never
   * accidentally replaced by the temporary print title.
   */
  const captureWebTitle = () => {
    const printTitle = getPrintTitle();
    if (document.title && document.title !== printTitle) {
      webPageTitle = document.title;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", captureWebTitle);
  } else {
    captureWebTitle();
  }

  /**
   * Prepares the entire DOM for printing:
   * - Sets document.title to the desired PDF file export name.
   * - Expands all accordion panels without height limits so content isn't clipped.
   */
  const expandAllForPrint = () => {
    captureWebTitle();
    const printTitle = getPrintTitle();
    if (printTitle) {
      document.title = printTitle;
    }
    document.querySelectorAll(".panel").forEach((panel) => {
      panel.style.maxHeight = "none";
      panel.style.overflow = "visible";
      panel.style.display = "block";
    });
  };

  /**
   * Restores normal web mode after print dialog finishes or cancels:
   * - Reverts document.title to the original website title.
   * - Collapses non-active accordion panels back to their normal state.
   */
  const restoreAfterPrint = () => {
    if (webPageTitle) {
      document.title = webPageTitle;
    }
    document.querySelectorAll(".accordion-section").forEach((section) => {
      const acc = section.querySelector(".accordion");
      const panel = section.querySelector(".panel");
      if (acc && panel) {
        if (acc.classList.contains("active")) {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.overflow = "";
          panel.style.display = "";
        } else {
          panel.style.maxHeight = null;
          panel.style.overflow = "";
          panel.style.display = "";
        }
      }
    });
  };

  // Native browser print lifecycle listeners (works with Cmd+P, Ctrl+P, and browser menu)
  window.addEventListener("beforeprint", expandAllForPrint);
  window.addEventListener("afterprint", restoreAfterPrint);

  // Expose globally for the top-bar print button in header.html
  window.expandAllForPrint = expandAllForPrint;
  window.restoreAfterPrint = restoreAfterPrint;
})();
