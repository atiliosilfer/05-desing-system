import { Button } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    size: 'big',
  },
}
