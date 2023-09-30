import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@atx-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Notification/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button
            onClick={() => {
              setOpen(true)
            }}
          >
            Make a Toast
          </Button>
          <Story
            args={{
              open,
              setOpen,
              title: 'Toast title',
              description: 'Toast description',
            }}
          />
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
