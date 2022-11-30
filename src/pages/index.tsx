import { styled } from "../styles"

const Button = styled('button', {
  border: 'none',
  borderRadius: 4,
  backgroundColor: '$green500',
  padding: '4px 8px',
  fontWeight: 'bold',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <>
      <h1>Salve Ignite</h1>
      <Button>
        Botão personalizado
      </Button>
    </>
  )
}
