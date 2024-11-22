import { Star } from 'lucide-react'

// real testimonials from the image
const testimonials = [
  {
    name: "Tim Pelling",
    location: "Kingsville ON",
    content: "Attention to detail is second to none. They will not allow anything but the best out the door and they have a rigorous QA inspection process that ensures your order is of the highest quality. I've worked with a few companies and in my opinion they are the best for quality and pricing.",
    rating: 5,
    image: "/testimonials/placeholder.jpg"
  },
  {
    name: "Denise Spearing",
    location: "Amherstburg ON",
    content: "Wonderful company to deal with, prompt and professional service. We have had company shirts made with them for years. Always happy with their work!",
    rating: 5,
    image: "/testimonials/placeholder.jpg"
  },
  {
    name: "Frank Spidalieri",
    location: "Tecumseh ON",
    content: "I have been dealing with Game Gear Attire for years. Diana makes ordering my company shirts so easy from the initial telephone call with the order from the time when my product will be ready. I definitely recommend Diana and her staff.",
    rating: 5,
    image: "/testimonials/placeholder.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="home-section bg-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <span className="content-badge mb-4">Customer Reviews</span>
          <h2 className="mb-4">What People Are Saying</h2>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <GoogleLogo className="size-6" />
            <span className="font-semibold">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span>rating</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="feature-card hover:scale-[1.02] cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              
              <p className="text-base leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Google Logo Component
function GoogleLogo({ className = "size-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
} 