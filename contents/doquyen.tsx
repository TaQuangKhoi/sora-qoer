import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetOverlayAnchorList
} from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () => {
  return document.querySelector(`h2`)
}

const DoQuyen = () => (
  <span
    style={{
      borderRadius: 4,
      background: "black",
      padding: 4
    }}>
    Love Đỗ Quyên
  </span>
)

export default DoQuyen
