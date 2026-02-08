"use client"

import * as React from "react"

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = React.useCallback((text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      },
      (err) => {
        console.error("Failed to copy text: ", err)
      },
    )
  }, [])

  return { copyToClipboard, isCopied }
}
