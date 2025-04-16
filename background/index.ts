import { Storage } from "@plasmohq/storage"

// setInterval(fetchNotifications, INTERVAL_MS)

import windowChanger from "./injected-helper"

// import { generateMnemonic } from "bip39"

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked: ${Math.random()}`)
})

const storage = new Storage()

const ENDPOINT = "https://sora.com/backend/notif?limit=10"
const INTERVAL_MS = 1000

console.log("Interval set to fetch notifications every 1 second")

async function fetchNotifications() {
  try {
    const response = await fetch(ENDPOINT)
    if (!response.ok) throw new Error("Fetch failed")
    const data = await response.json()

    // Tuỳ chỉnh xử lý dữ liệu tại đây
    console.log("Fetched data:", data)

    // Lưu vào storage nếu muốn
    await storage.set("latestNotif", data)
  } catch (error) {
    console.error("Error fetching notifications:", error)
  }
}

const inject = async (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN", // MAIN in order to access the window object
      func: windowChanger
    },
    () => {
      console.log("Background script got callback after injection")
    }
  )
}

// Simple example showing how to inject.
// You can inject however you'd like to, doesn't have
// to be with chrome.tabs.onActivated
chrome.tabs.onActivated.addListener((e) => {
  inject(e.tabId)
})
