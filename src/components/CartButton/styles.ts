import { styled } from "@stitches/react";

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',
  width: '3.5rem',
  height: '3.5rem',

  '$:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
  },

  backgroundColor: '$gray800',
  color: '$gray500',

  svg: {
    fontSize: 24,
  }
})