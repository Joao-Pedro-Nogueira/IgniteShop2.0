import Image from "next/image"
import Link from "next/link"
import Head from 'next/head'

import { HomeContainer, Product, SliderContainer } from "../styles/pages/home"

import { stripe } from "../../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import useEmblaCarousel from "embla-carousel-react"
import { CartButton } from "../components/CartButton"
import { useCart } from "../hooks/useCart"
import { TheProduct } from "../contexts/CartContext"
import { MouseEvent } from "react"

interface HomeProps {
  products: TheProduct[],
}

export default function Home({ products }: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true, 
  })

  const { addToCart, checkIfItemAlreadyExistsInCart } = useCart()

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: TheProduct) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map(product => {
                return (
                  <Link href={`/product/${product.id}`} key={product.id} prefetch={true} >
                    <Product className="embla__slide" >
                      <Image src={product.imageUrl} width={520} height={480} alt='' priority={true} />
            
                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        <CartButton 
                          color='green' 
                          size='large' 
                          disabled={checkIfItemAlreadyExistsInCart(product)!}
                          onClick={(e) => handleAddToCart(e, product)} 
                        />
                      </footer>
                    </Product>
                  </Link>
                )
              })}  
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  
  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      numberPrice: price.unit_amount! / 100,
      defaultPriceId: price.id
    }
  })

  console.log(response.data)

  return {
    props: {
      products,
    }
  }
}