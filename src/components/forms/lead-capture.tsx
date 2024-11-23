import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LEAD_FORM } from "@/lib/constants"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function LeadCaptureForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // here you'd typically send this to your api
      await new Promise(resolve => setTimeout(resolve, 1000)) // simulate api call
      setIsSuccess(true)
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="size-16 mx-auto mb-4 rounded-full bg-success/10 text-success flex items-center justify-center">
          <CheckCircle weight="fill" className="size-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{LEAD_FORM.success.title}</h3>
        <p className="text-muted-foreground">{LEAD_FORM.success.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
          className="resize-none"
        />
      </div>
      <div>
        <Input
          placeholder="Email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          className="resize-none"
        />
      </div>
      <div>
        <Textarea
          placeholder="How can we help?"
          {...register("message")}
          error={errors.message?.message}
          className="resize-none h-[120px]"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : LEAD_FORM.submitButton}
      </Button>
    </form>
  )
} 