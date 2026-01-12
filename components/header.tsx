"use client"

import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [cartCount] = useState(2)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/30 bg-primary/5" />
            <span className="relative font-sans text-xl font-bold text-primary">玄</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-widest text-foreground">玄境阁</span>
            <span className="text-[10px] font-light tracking-[0.3em] text-muted-foreground">MYSTIC PAVILION</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {[
            { name: "首页", href: "#", active: true },
            { name: "开运分类", href: "#categories" },
            { name: "精选法器", href: "#products" },
            { name: "品牌理念", href: "#philosophy" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative py-2 text-sm tracking-wide transition-colors ${
                item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              {item.active && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent" />}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative h-10 w-10 text-foreground hover:bg-primary/5">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                {cartCount}
              </span>
            )}
            <span className="sr-only">购物车</span>
          </Button>

          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="h-10 w-10 lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
