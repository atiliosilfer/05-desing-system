import { X } from 'phosphor-react'
import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './style'
import { colors } from '@atx-ignite-ui/tokens'

export interface ToastProps {
  title: string
  description: string
  open: boolean
  setOpen: (value: boolean) => void
}

export function Toast({ title, description, open, setOpen }: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle className="ToastTitle">{title}</ToastTitle>
        <ToastDescription asChild>
          <span>{description}</span>
        </ToastDescription>
        <ToastAction className="ToastAction" asChild altText="close">
          <X size={20} color={colors.gray200} />
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  )
}
