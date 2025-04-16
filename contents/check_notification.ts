import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

// content-script.js

// Function to initialize the observer on the target notify button.
const initNotifyButtonObserver = () => {
  // Get all elements with class "surface-nav-element"
  const buttons = document.querySelectorAll(".surface-nav-element")

  // Check if at least 8 buttons exist
  if (buttons.length < 8) {
    console.warn(
      "Less than 8 buttons found. The notify button may not be available yet."
    )
    return
  }

  // Select the 8th button (index 7)
  const notifyButton = buttons[7]
  console.log("Notify button found:", notifyButton)

  // Create a MutationObserver to monitor changes on this button.
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      // Log attribute and child list changes for debugging.
      if (mutation.type === "attributes") {
        console.log("Notification button attribute changed:", mutation)
      }
      if (mutation.type === "childList") {
        console.log("Notification button child nodes changed:", mutation)
      }
    })
  })

  // Start observing the notify button for attribute and child list changes.
  observer.observe(notifyButton, {
    attributes: true, // Observe attribute changes (like data attributes or aria states)
    childList: true, // Observe changes to the child elements (if any)
    subtree: true // Include deeper nodes in case changes are nested
  })

  console.log("Observer is initialized on the notify button.")
}

// Wait until the DOM is sufficiently loaded
document.addEventListener("DOMContentLoaded", initNotifyButtonObserver)
