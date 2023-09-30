import { styled } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(RadixTooltip.Content, {
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
  backgroundColor: '$gray900',
  color: '$gray100',

  borderRadius: 4,
  padding: '$3 $4',
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})
