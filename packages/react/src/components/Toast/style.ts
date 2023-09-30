import { keyframes, styled } from '../../styles'
import * as RadixToast from '@radix-ui/react-toast'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastRoot = styled(RadixToast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: "'title action' 'description action'",
  gridTemplateColumns: 'auto max-content',
  columnGap: '$1',
  alignItems: 'center',
  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 200ms ease-in`,
  },

  '&[data-state="move"]': {
    animation: `${hide} 200ms ease-in`,
  },

  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-state="end"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export const ToastViewport = styled(RadixToast.Viewport, {
  padding: '25px',
  position: 'relative',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '360px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(RadixToast.Title, {
  gridArea: 'title',
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$lg',
  lineHeight: '$base',
})

export const ToastDescription = styled(RadixToast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  fontWeight: '$regular',
})

export const ToastAction = styled(RadixToast.Action, {
  gridArea: 'action',
})
