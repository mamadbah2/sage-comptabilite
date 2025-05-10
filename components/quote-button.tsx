"use client"

import type React from "react"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"

interface QuoteButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function QuoteButton({ children, ...props }: QuoteButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <QuoteModal open={open} onOpenChange={setOpen} />
    </>
  )
}
