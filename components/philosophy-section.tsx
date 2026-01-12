export function PhilosophySection() {
  const philosophyPoints = [
    {
      title: "古法传承",
      description: "遵循千年玄学精髓，承袭大师真传",
      symbol: "传",
    },
    {
      title: "专业开光",
      description: "法器均由高僧道长亲自开光加持",
      symbol: "光",
    },
    {
      title: "私人定制",
      description: "根据生辰八字，量身定制开运方案",
      symbol: "定",
    },
  ]

  return (
    <section id="philosophy" className="bg-primary py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Main Content */}
          <div className="mb-16 text-center lg:mb-20">
            <div className="mb-4 flex items-center justify-center gap-3 text-primary-foreground/50">
              <div className="h-px w-8 bg-current" />
              <span className="text-xs tracking-[0.4em]">传承智慧</span>
              <div className="h-px w-8 bg-current" />
            </div>
            <h2 className="mb-6 text-3xl font-light tracking-wider text-primary-foreground lg:text-4xl">
              天人合一 · 道法自然
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-loose text-primary-foreground/70 lg:text-base">
              玄学源于《易经》，融汇阴阳五行、天干地支之理。玄境阁秉承古法，结合现代生活，
              为您提供专业的风水布局、命理分析、吉祥物选择等服务，助您顺应天时，趋吉避凶。
            </p>
          </div>

          {/* Philosophy Points */}
          <div className="mb-16 grid gap-8 md:grid-cols-3 lg:gap-12">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="mb-5 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5">
                    <span className="text-3xl font-light text-accent">{point.symbol}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-wider text-primary-foreground">{point.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/60">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Decorative Quote */}
          <div className="relative border-l-2 border-accent/50 bg-primary-foreground/5 p-8 lg:p-10">
            <div className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-accent" />
            <blockquote className="text-lg font-light italic leading-loose tracking-wide text-primary-foreground lg:text-xl">
              "天行健，君子以自强不息；地势坤，君子以厚德载物。"
            </blockquote>
            <p className="mt-4 text-right text-sm tracking-wider text-primary-foreground/50">—— 《周易》</p>
          </div>
        </div>
      </div>
    </section>
  )
}
