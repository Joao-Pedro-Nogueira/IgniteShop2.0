import Image from 'next/image'
import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Home() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta Maratona Explorer 2.0</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae exercitationem accusantium minima odio debitis vel placeat quibusdam molestias, veniam temporibus nam quod, in ullam pariatur quis nesciunt asperiores eum?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}