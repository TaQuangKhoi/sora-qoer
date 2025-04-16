import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

const initIconObserver = () => {
  // Adjust the selector to match the notify icon’s identifying attribute/class.
  const targetSelector = ".notify-icon"
  const targetElement = document.querySelector(targetSelector)

  if (!targetElement) {
    console.warn("Notify icon not found. Retrying...")
    // Optionally add a timeout or re-check logic if the element loads later.
    return
  }

  // Create a new MutationObserver that will listen for attribute or child changes.
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      // Check for attribute changes which may indicate a state update.
      if (mutation.type === "attributes") {
        console.log("Notification icon attribute changed:", mutation)
        // Here, you can read the new attribute value or perform any other logic,
        // such as sending a message to your background script to update the extension icon.
      }
      // If the notification data is contained in text or child elements, check for child list changes.
      if (mutation.type === "childList") {
        console.log("Notification icon children changed:", mutation)
      }
    })
  })

  // Specify what kinds of changes to observe
  observer.observe(targetElement, {
    attributes: true, // watch attribute changes
    childList: true, // watch for added/removed nodes (if the icon text or sub-elements change)
    subtree: false // set to true if you suspect nested elements might change
  })

  console.log("Observer is initialized on notify icon.")
}

// Wait until the DOM is sufficiently loaded (or use your timing from Plasmo's configuration).
document.addEventListener("DOMContentLoaded", initIconObserver)
