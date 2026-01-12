"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-primary/[0.03]">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative circle - like a moon */}
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-40 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 lg:px-12">
        {/* Top decorative line */}
        <div className="mb-8 flex items-center gap-4 text-muted-foreground/50">
          <div className="h-px w-16 bg-current" />
          <span className="text-xs tracking-[0.4em]">东方智慧</span>
          <div className="h-px w-16 bg-current" />
        </div>

        {/* Main content */}
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-5xl font-light leading-tight tracking-wider text-foreground lg:text-7xl">
            <span className="block">顺天应时</span>
            <span className="mt-2 block font-semibold text-primary">趋吉避凶</span>
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-base leading-loose tracking-wide text-muted-foreground lg:text-lg">
            汇聚东方玄学之精髓，以传统智慧启迪人生
            <br />
            精选开光法器，助您开运纳福，事业昌盛
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="group h-12 min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span className="tracking-wider">探索奥秘</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 min-w-[200px] border-primary/30 bg-transparent tracking-wider text-foreground hover:bg-primary/5"
            >
              预约咨询
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
