import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quaerat voluptatum incidunt voluptas tempore libero? Ullam similique recusandae, laboriosam incidunt, nobis a illum eveniet reiciendis molestias enim mollitia eaque maiores.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Stron text',
    as: 'strong',
  },
}
