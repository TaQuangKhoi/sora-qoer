import { Storage } from "@plasmohq/storage"

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

setInterval(fetchNotifications, INTERVAL_MS)
