import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { querySelector } from "@plasmohq/selector"

import { addToQueue } from "~utils"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

// export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
//     const anchor = querySelector('div[role="dialog"].dialog-content')
//     return anchor
// }

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector("div.surface-composer + div > div:nth-of-type(2) > div:nth-of-type(2)"),
  insertPosition: "beforebegin"
})

export default function QueuePrompt() {
  return (
    <button
      // style={{
      //   backgroundColor: "blue",
      //   color: "white",
      //   border: "none",
      //   padding: "10px 20px",
      //   borderRadius: "4px",
      //   cursor: "pointer"
      // }}
      onClick={addToQueue}>
      Queue Prompt
    </button>
  )
}
