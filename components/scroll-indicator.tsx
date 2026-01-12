"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 判断是否到达底部（距离底部 100px 以内视为到达底部）
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isBottom = scrollTop + windowHeight >= documentHeight - 100
      setIsAtBottom(isBottom)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // 初始化检查
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    if (isAtBottom) {
      // 返回顶部
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // 向下滚动一个视口高度
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 cursor-pointer rounded-full border border-primary/20 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-background/95"
      aria-label={isAtBottom ? "返回顶部" : "向下探索"}
    >
      <div className="flex flex-col items-center gap-1 text-muted-foreground">
        <span className="text-[10px] tracking-[0.2em]">{isAtBottom ? "返回顶部" : "向下探索"}</span>
        {isAtBottom ? (
          <ChevronUp className="h-4 w-4 animate-bounce" />
        ) : (
          <ChevronDown className="h-4 w-4 animate-bounce" />
        )}
      </div>
    </button>
  )
}
