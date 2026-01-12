import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "开光貔貅",
    category: "招财进宝",
    price: "¥1,288",
    image: "/chinese-jade-pixiu-fortune-statue-green-gold.jpg",
  },
  {
    id: 2,
    name: "平安玉佩",
    category: "护身辟邪",
    price: "¥888",
    image: "/chinese-jade-pendant-green-protection-amulet.jpg",
  },
  {
    id: 3,
    name: "姻缘手串",
    category: "月老红线",
    price: "¥688",
    image: "/chinese-red-string-bracelet-rose-quartz-love-beads.jpg",
  },
  {
    id: 4,
    name: "金蟾摆件",
    category: "财源滚滚",
    price: "¥1,688",
    image: "/chinese-golden-toad-feng-shui-wealth-gold-ornament.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 flex items-center justify-center gap-3 text-muted-foreground/60">
            <div className="h-px w-8 bg-current" />
            <span className="text-xs tracking-[0.4em]">精心甄选</span>
            <div className="h-px w-8 bg-current" />
          </div>
          <h2 className="mb-4 text-3xl font-light tracking-wider text-foreground lg:text-4xl">
            开运<span className="font-semibold text-primary">法器</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            每件法器均由大师亲自开光加持，蕴含天地灵气
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-primary/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground transition-transform hover:scale-110">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-110">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 lg:p-6">
                <p className="mb-2 text-[10px] tracking-[0.25em] text-muted-foreground">{product.category}</p>
                <h3 className="mb-3 text-lg font-semibold tracking-wide text-card-foreground">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-accent">{product.price}</span>
                  <span className="text-xs text-muted-foreground">已开光</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            variant="outline"
            size="lg"
            className="h-12 min-w-[220px] border-primary/30 bg-transparent tracking-wider text-foreground hover:bg-primary/5"
          >
            查看全部法器
          </Button>
        </div>
      </div>
    </section>
  )
}
