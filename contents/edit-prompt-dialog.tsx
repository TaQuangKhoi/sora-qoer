import createCache from "@emotion/cache"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import React from "react"

import { QueueButton, SrOnly } from "~components"
import { addToQueue } from "~utils"
import {CacheProvider} from "@emotion/react";

const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "plasmo-emotion-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => styleElement

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(
    "div.surface-composer + div > div:nth-of-type(2) > div:nth-of-type(2)"
  )
  // insertPosition: "beforebegin"
})

export default function QueuePrompt() {
  return (
      <CacheProvider value={styleCache}>
          <QueueButton onClick={addToQueue}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                      fill="currentColor"
                      d="M11.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 8.414V18a1 1 0 1 1-2 0V8.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z"
                  />
              </svg>
              <SrOnly>Create image</SrOnly>
          </QueueButton>
      </CacheProvider>

  )
}
