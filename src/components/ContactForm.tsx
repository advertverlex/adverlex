"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  interest: z.string().min(1, { message: "Please select an area of interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success("Message Sent! We'll get back to you within 24 hours.")
    form.reset()
  }

  return (
    <div className="glass p-8 md:p-16 rounded-3xl border-white/5 bg-brand-surface/50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-brand-dark/50 border-white/10 rounded-xl focus:border-brand-primary h-14 text-sm tracking-wide" />
                  </FormControl>
                  <FormMessage className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="bg-brand-dark/50 border-white/10 rounded-xl focus:border-brand-primary h-14 text-sm tracking-wide" />
                  </FormControl>
                  <FormMessage className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Inc." {...field} className="bg-brand-dark/50 border-white/10 rounded-xl focus:border-brand-primary h-14 text-sm tracking-wide" />
                  </FormControl>
                  <FormMessage className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Area of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-brand-dark/50 border-white/10 rounded-xl focus:border-brand-primary h-14 text-left text-sm tracking-wide">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-brand-surface border-white/10 text-white rounded-xl">
                      <SelectItem value="digital" className="text-[10px] font-bold tracking-widest py-3">Digital Marketing</SelectItem>
                      <SelectItem value="affiliate" className="text-[10px] font-bold tracking-widest py-3">Affiliate Marketing</SelectItem>
                      <SelectItem value="both" className="text-[10px] font-bold tracking-widest py-3">Both Services</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    {...field} 
                    className="bg-brand-dark/50 border-white/10 rounded-xl focus:border-brand-primary min-h-[150px] text-sm tracking-wide"
                  />
                </FormControl>
                <FormMessage className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-16 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-primary/20"
          >
            <Send className="w-6 h-6 mr-3" />
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  )
}

