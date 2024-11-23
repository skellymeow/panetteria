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
      {/* hero section - updated with tighter mobile spacing */}
      <section className="menu-hero">
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 mask-radial-faded" />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="content-badge">Our Daily Selection</div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Menu</h1>
            <p className="text-lg text-muted-foreground">
              {MENU_CONTENT.intro}
            </p>
          </div>
        </div>
      </section>

      {/* filters + sort */}
      <section className="py-2 sm:py-4 border-y bg-background-secondary/50 backdrop-blur-sm sticky top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-between">
            {/* categories - simplified for mobile */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="h-8 px-3"
                >
                  <category.icon weight="duotone" className="size-3.5 mr-1.5" />
                  <span className="text-sm">{category.label}</span>
                </Button>
              ))}
            </div>

            {/* sort - simplified */}
            <div className="flex gap-1.5">
              <Button
                variant={activeSort === "popular" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSort("popular")}
                className="h-8 px-3"
              >
                <Fire weight="duotone" className="size-3.5 mr-1.5" />
                <span className="text-sm">Popular</span>
              </Button>
              <Button
                variant={activeSort === "az" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSort("az")}
                className="h-8 px-3"
              >
                <span className="text-sm">A-Z</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* menu grid - updated for 2 columns on mobile */}
      <section className="py-8 sm:py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div key={item.name} className="group menu-card">
                <div className="menu-image aspect-[3/2]">
                  <Image
                    src={`/menu/${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {item.isWeekendOnly && (
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-primary/90 text-white text-[10px] sm:text-xs">
                      Weekend Only
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-4 space-y-1 sm:space-y-2">
                  <h3 className="font-medium text-sm sm:text-lg leading-tight">{item.name}</h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  )}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full bg-accent/50 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* allergy note - fixed spacing */}
      <div className="container pb-12">
        <div className="bg-accent/50 rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            {MENU_CONTENT.allergyNote}
          </p>
        </div>
      </div>
    </main>
  )
} 