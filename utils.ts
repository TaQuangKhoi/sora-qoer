async function generateSoraImage(aspectRatio = "2:3") {
  const url = "https://sora.com/backend/video_gen"

  const aspectMap = {
    "1:1": [480, 480],
    "2:3": [480, 720],
    "3:2": [720, 480]
  }

  const [width, height] = aspectMap[aspectRatio] || [480, 720] // Mặc định là 2:3

  const payload = {
    type: "image_gen",
    operation: "simple_compose",
    prompt:
      "a small planet in the universe full of sakura trees and petals covering the whole soil of the planet. fotorealistic picture.",
    n_variants: 1,
    width,
    height,
    n_frames: 1,
    inpaint_items: []
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // 'Authorization': 'Bearer YOUR_API_KEY' nếu cần
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`)
    }

    const data = await response.json()
    console.log(`Image generated with aspect ratio ${aspectRatio}:`, data)
    return data
  } catch (error) {
    console.error("Error during image generation:", error)
  }
}

export function addToQueue() {
  const value = getAspectRatioButton()
    ?.querySelector("span")
    ?.textContent.trim()
  console.log("aspect Ratio", value)
}

function getAspectRatioButton() {
  return getSurfaceComposerButton(1)
}

function getSurfaceComposerButton(index: number) {
  const buttons = document.querySelectorAll(
    "button.bg-token-bg-composer-button"
  )
  const button = buttons[index]
  return button
}
