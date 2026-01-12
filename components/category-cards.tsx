import { Card } from "@/components/ui/card"
import { Coins, Heart, Leaf, ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "wealth",
    title: "财富",
    subtitle: "WEALTH",
    description: "招财进宝，财源广进。精选貔貅、金蟾、聚宝盆等招财圣物，助您事业亨通。",
    icon: Coins,
    image: "/chinese-feng-shui-gold-coins-wealth-fortune.jpg",
  },
  {
    id: "health",
    title: "健康",
    subtitle: "HEALTH",
    description: "延年益寿，身心康泰。甄选天然玉石、葫芦、五帝钱等保平安法器。",
    icon: Leaf,
    image: "/chinese-jade-green-health-wellness-natural-stone.jpg",
  },
  {
    id: "romance",
    title: "姻缘",
    subtitle: "ROMANCE",
    description: "月老牵线，良缘美满。粉晶、鸳鸯、红绳等助您觅得真爱，姻缘美满。",
    icon: Heart,
    image: "/chinese-red-string-love-romance-mandarin-ducks.jpg",
  },
]

export function CategoryCards() {
  return (
    <section id="categories" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3 text-muted-foreground/60">
            <div className="h-px w-8 bg-current" />
            <span className="text-xs tracking-[0.4em]">三大主题</span>
            <div className="h-px w-8 bg-current" />
          </div>
          <h2 className="text-3xl font-light tracking-wider text-foreground lg:text-4xl">
            开运<span className="font-semibold text-primary">之道</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border-0 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icon badge */}
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-background/20 bg-background/80 text-primary backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Title row */}
                  <div className="mb-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-wider text-card-foreground lg:text-3xl">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground">{category.subtitle}</p>
                    </div>
                    {/* Arrow link */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>

                  {/* Bottom line accent */}
                  <div className="mt-6 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
