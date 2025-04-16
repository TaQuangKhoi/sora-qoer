import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
  return document.querySelector(`h2`)
}

const DoQuyen = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchNotifications = async () => {
      console.log("Fetching notifications...")
      try {
        const res = await fetch("https://sora.com/backend/notif?limit=10", {
          credentials: "include" // để giữ cookie nếu cần
        })
        if (!res.ok) throw new Error("API Error")
        const json = await res.json()
        setData(json)
        console.log("Fetched:", json)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }

    const interval = setInterval(fetchNotifications, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        borderRadius: 4,
        background: "black",
        padding: 4,
        color: "white"
      }}>
      Love Đỗ Quyên
    </span>
  )
}

export default DoQuyen
