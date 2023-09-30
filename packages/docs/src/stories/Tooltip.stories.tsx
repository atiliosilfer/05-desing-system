import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@atx-ignite-ui/react'

export default {
  title: 'Accessibility/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Send</Button>,
    description: 'Description',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
