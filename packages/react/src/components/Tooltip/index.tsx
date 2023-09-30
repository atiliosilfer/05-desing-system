import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer } from './style'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  description: string
}

export function Tooltip({ children, description }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContainer sideOffset={5}>
            {description}
            <TooltipArrow />
          </TooltipContainer>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
