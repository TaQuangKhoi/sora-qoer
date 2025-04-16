import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
  return document.querySelector("h2")
}

async function generateSoraImage() {
  const url = "https://sora.com/backend/video_gen"

  const payload = {
    type: "image_gen",
    operation: "simple_compose",
    prompt:
      "a small planet in the universe full of sakura trees and petals covering the whole soil of the planet. fotorealistic picture.",
    n_variants: 1,
    width: 480,
    height: 720,
    n_frames: 1,
    inpaint_items: []
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Thêm 'Authorization' nếu API yêu cầu token:
        // 'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`)
    }

    const data = await response.json()
    console.log("Image generation result:", data)
    return data
  } catch (error) {
    console.error("Error during image generation:", error)
  }
}

const DoQuyen = () => {
  const [data, setData] = useState<any>(null)
  // Replace this with your actual Bearer token value
  const BEARER_TOKEN = process.env.PLASMO_PUBLIC_BEARER_TOKEN

  useEffect(() => {
    const fetchNotifications = async () => {
      console.log("Fetching notifications...")
      try {
        const res = await fetch("https://sora.com/backend/notif?limit=10", {
          credentials: "include",
          headers: {
            authorization: `Bearer ${BEARER_TOKEN}`,
            accept: "*/*",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language":
              "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,ja;q=0.6,fr;q=0.5,ko;q=0.4,de;q=0.3,mt;q=0.2"
          }
        })

        if (!res.ok) throw new Error("API Error")
        const json = await res.json()
        setData(json)
        console.log("Fetched:", json)
      } catch (err) {
        console.error("Fetch error:", err)
      }
    }

    const interval = setInterval(fetchNotifications, 10000)
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
