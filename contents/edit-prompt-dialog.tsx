import styled from "@emotion/styled"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import React from "react"

import { querySelector } from "@plasmohq/selector"

import { addToQueue } from "~utils"

export const config: PlasmoCSConfig = {
  matches: ["https://sora.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(
    "div.surface-composer + div > div:nth-of-type(2) > div:nth-of-type(2)"
  )
  // insertPosition: "beforebegin"
})

const QueueButton = styled.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 50px;
  border: none;
  background-color: ${(props) =>
    props.disabled
      ? "var(--token-bg-composer-button)"
      : "var(--token-bg-inverse)"};
  color: ${(props) =>
    props.disabled ? "var(--token-text-primary)" : "var(--token-text-inverse)"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`

const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export default function QueuePrompt() {
  return (
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
  )
}
