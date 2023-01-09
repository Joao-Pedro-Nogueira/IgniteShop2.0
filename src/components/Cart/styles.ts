import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflowY: 'auto',
  }
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8125rem',
})

export const CartProductImage = styled('div', {
  height: '5.8125rem',
  width: '6.3125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'center',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
    border: 'none'
  },
})

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: 'auto',
  gap: '0.25rem',

  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  span: {
    color: '$gray300',
    fontSize: '1rem',
  },

  p: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 700, 
  },

  strong: {
    color: '$gray100',
    fontSize: '$xl',
    fontWeight: 700, 
  },

  button: {
    width: '100%',
    padding: '1.25rem 2rem',
    backgroundColor: '$green500',
    border: 'none',
    borderRadius: 8,
    color: '$white',
    fontSize: '$md',
    fontWeight: 700, 
    transition: '0.15s',
    marginTop: '3.375rem',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-alowed',
    },
  },
})