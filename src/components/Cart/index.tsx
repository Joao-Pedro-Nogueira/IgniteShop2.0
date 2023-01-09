import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image';
import { X } from 'phosphor-react';
import { MouseEvent } from 'react';
import { TheProduct } from '../../contexts/CartContext';
import { useCart } from '../../hooks/useCart';
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage } from './styles';

export function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  function handleRemoveCartItem(e: MouseEvent<HTMLButtonElement>, product: TheProduct) {
    e.preventDefault()
    removeCartItem(product)
  }

  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Parece que o carrinho está vazio...</p>}

            {cartItems.map(cartItem => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image 
                    width={100}
                    height={93}
                    alt=''
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={(e) => handleRemoveCartItem(e, cartItem)}>Remover</button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <div>
              <span>Quantidade</span>
              <span>{cartQuantity} {cartQuantity < 2 ? 'item' : 'itens'}</span>
            </div>
            <div>
              <p>Valor total</p>
              <strong>{formattedCartTotal}</strong>
            </div>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}