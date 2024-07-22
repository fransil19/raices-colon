'use client'
import { useState } from "react";
import useProductsStore from '../store';

export default function QuantitySelector({product} : {product: any}) {
  const [quantity, setQuantity] = useState(0);
  const addtToCart = useProductsStore((state) => state.addToCart);
  const removeFromCart = useProductsStore((state) => state.removeFromCart);
  const reduceProductQuantity = useProductsStore((state) => state.reduceProductQuantity);
  const increaseProductQuantity = useProductsStore((state) => state.increaseProductQuantity);
  const cart = useProductsStore((state) => state.cart);
  const productInCart = cart.find((p) => p.id === product.id);

  const onClickSubstract = () => {
    (productInCart?.quantity-1) === 0 ? removeFromCart(product.id) : reduceProductQuantity(product.id)
    /* if((product?.quantity-1) === 0) {
      removeFromCart(product.id)
    }
    else{
      //setQuantity(quantity-1)
    reduceProductQuantity(product.id) */
  }

  const onClickAdd = () => {
    increaseProductQuantity(product.id)
  }

  const onClickAddToCart = () => {
    const cartProd = {...product, quantity: 1}
    addtToCart(cartProd);
  }

  if(!productInCart){
    return (
      <div className="flex flex-row content-between w-24 h-10">
        <button onClick={onClickAddToCart} className="border border-gray-300 rounded-sm w-3/3 bg-slate-100 text-sm">Agregar al carrito</button>
      </div>
    );
  }

  return (
    <div className="flex flex-row content-between w-24 h-8">
      <button onClick={onClickSubstract} className="border border-gray-300 rounded-sm w-1/3 mr-2 bg-slate-100">-</button>
      <p>{productInCart.quantity}</p>
      <button onClick={onClickAdd} className="border border-gray-300 rounded-sm w-1/3 ml-2 bg-slate-100">+</button>
    </div>
  );
}

