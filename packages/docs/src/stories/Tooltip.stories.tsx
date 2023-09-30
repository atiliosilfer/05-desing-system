import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@atx-ignite-ui/react'

export default {
  title: 'Accessibility/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Send</Button>,
    description: 'Description',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
