"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { 
  Clock, Fire, Leaf, Heart, Star,
  Coffee, Bread, Pizza, Cookie
} from "@phosphor-icons/react/dist/ssr"
import { MENU_CONTENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Items", icon: Star },
  { id: "bread", label: "Breads", icon: Bread },
  { id: "pastry", label: "Pastries", icon: Cookie },
  { id: "lunch", label: "Lunch", icon: Pizza },
  { id: "weekend", label: "Weekend Specials", icon: Heart },
] as const

type MenuItem = {
  name: string
  category: string[]
  description?: string
  image: string
  tags: string[]
  isWeekendOnly?: boolean
  isBestseller?: boolean
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Sourdough",
    category: ["bread"],
    description: "Our signature naturally leavened sourdough bread with a perfectly crispy crust",
    image: "sourdough-window.jpg",
    tags: ["Bestseller", "Vegan"],
    isBestseller: true
  },
  {
    name: "Multigrain Sourdough",
    category: ["bread"],
    description: "Wholesome blend of grains and seeds in our signature sourdough",
    image: "wholewheat-sourdough.jpg",
    tags: ["Healthy", "Vegan"],
  },
  {
    name: "Focaccia",
    category: ["bread"],
    description: "Italian-style flatbread with olive oil and herbs",
    image: "frenchbread-wall.jpg",
    tags: ["Vegan"],
  },
  {
    name: "Baguette",
    category: ["bread"],
    description: "Traditional French bread with a crispy crust",
    image: "frenchbread-wall.jpg",
    tags: ["Vegan"],
  },
  {
    name: "Olive Sourdough",
    category: ["bread"],
    description: "Our classic sourdough studded with Kalamata olives",
    image: "sourdough-sunny.jpg",
    tags: ["Vegan"],
    isWeekendOnly: true
  },
  {
    name: "Rye Sourdough",
    category: ["bread"],
    description: "Dark and flavorful rye bread with our sourdough culture",
    image: "sourdough-window.jpg",
    tags: ["Vegan"],
    isWeekendOnly: true
  },
  {
    name: "Walnut Raisin Sourdough",
    category: ["bread"],
    description: "Sweet and nutty sourdough perfect for breakfast",
    image: "WalnutRaisin2.png",
    tags: ["Vegan"],
    isWeekendOnly: true
  },

  {
    name: "Croissant",
    category: ["pastry"],
    description: "Flaky, buttery French pastry made with premium butter",
    image: "row-of-croissants.jpg",
    tags: ["Bestseller"],
    isBestseller: true
  },
  {
    name: "Almond Croissant",
    category: ["pastry"],
    description: "Our classic croissant filled with almond cream",
    image: "AlmondCroissant.png",
    tags: ["Contains Nuts"],
    isBestseller: true
  },
  {
    name: "Danish",
    category: ["pastry"],
    description: "Flaky pastry with seasonal fruit fillings",
    image: "peach-tart.jpg",
    tags: ["Seasonal"],
  },
  {
    name: "Pain au Chocolat",
    category: ["pastry"],
    description: "Chocolate-filled croissant made with dark chocolate",
    image: "Croissant3.png",
    tags: ["Contains Chocolate"],
  },
  {
    name: "Raspberry Cookie",
    category: ["pastry"],
    description: "Buttery shortbread with raspberry jam",
    image: "raspberry-cookie.jpg",
    tags: ["Sweet"],
  },
  {
    name: "Chocolate Tart",
    category: ["pastry"],
    description: "Rich chocolate ganache in a buttery tart shell",
    image: "ChocolateTart.png",
    tags: ["Contains Chocolate"],
  },
  {
    name: "Strawberry Tart",
    category: ["pastry"],
    description: "Fresh strawberries on vanilla cream",
    image: "strawberry-tart.jpg",
    tags: ["Seasonal", "Fresh Fruit"],
  },
  {
    name: "Almond Tart",
    category: ["pastry"],
    description: "Classic frangipane tart with sliced almonds",
    image: "AlmondTart.png",
    tags: ["Contains Nuts"],
  },
  {
    name: "Cinnamon Bun",
    category: ["pastry"],
    description: "Soft and gooey cinnamon roll with cream cheese frosting",
    image: "cinnamon-bun.jpg",
    tags: ["Bestseller"],
    isBestseller: true
  },

  {
    name: "Quiche of the Day",
    category: ["lunch"],
    description: "Savory tart with seasonal ingredients",
    image: "TomatoTart.png",
    tags: ["Daily Special"],
  },
  {
    name: "Meat Pie",
    category: ["lunch"],
    description: "Traditional meat pie with flaky crust",
    image: "meatpie.jpg",
    tags: ["Savory"],
  },
  {
    name: "Tomato Tart",
    category: ["lunch"],
    description: "Fresh tomatoes and herbs on puff pastry",
    image: "TomatoTart.png",
    tags: ["Vegetarian"],
  },
  {
    name: "Artisan Pizza",
    category: ["lunch"],
    description: "Sourdough pizza with daily toppings",
    image: "TomatoTart.png",
    tags: ["Daily Special"],
  }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeSort, setActiveSort] = useState<"az" | "popular">("popular")

  const filteredItems = useMemo(() => {
    let items = menuItems

    if (activeCategory !== "all") {
      items = items.filter(item => 
        activeCategory === "weekend" 
          ? item.isWeekendOnly
          : item.category.includes(activeCategory)
      )
    }

    return items.sort((a, b) => {
      if (activeSort === "az") {
        return a.name.localeCompare(b.name)
      }
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)
    })
  }, [activeCategory, activeSort])

  return (
    <main className="min-h-screen pt-20">
      {/* hero section - updated to match home/about style */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 mask-radial-faded" />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="content-badge">Our Daily Selection</div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Menu</h1>
            <p className="text-lg text-muted-foreground">
              {MENU_CONTENT.intro}
            </p>
          </div>
        </div>
      </section>

      {/* filters + sort */}
      <section className="py-4 sm:py-8 border-y bg-background-secondary/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="container">
          <div className="menu-filters">
            {/* categories */}
            <div className="category-buttons">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <category.icon weight="duotone" className="size-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* sort */}
            <div className="sort-buttons">
              <Button
                variant={activeSort === "popular" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSort("popular")}
                className="w-full sm:w-auto"
              >
                <Fire weight="duotone" className="size-4 mr-2" />
                Popular
              </Button>
              <Button
                variant={activeSort === "az" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSort("az")}
                className="w-full sm:w-auto"
              >
                A-Z
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* menu grid - updated for mobile */}
      <section className="py-12 sm:py-20">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div key={item.name} className="group menu-card">
                <div className="menu-image aspect-[4/3] relative overflow-hidden rounded-t-xl">
                  <Image
                    src={`/menu/${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {item.isWeekendOnly && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-white text-sm">
                      Weekend Only
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.category.map(cat => (
                      <div key={cat} className="menu-badge">
                        {cat}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Clock weight="duotone" className="size-4" />
                      Fresh Daily
                    </span>
                    {item.isBestseller && (
                      <span className="flex items-center gap-1.5">
                        <Fire weight="duotone" className="size-4" />
                        Bestseller
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/50 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* allergy note */}
        <div className="container mt-20">
          <div className="bg-accent/50 rounded-xl p-6">
            <p className="text-sm text-muted-foreground">
              {MENU_CONTENT.allergyNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 