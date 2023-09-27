import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@atx-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/atiliosilfer.png',
    alt: 'Atílio Ferreira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Atílio Ferreira',
  },
}
