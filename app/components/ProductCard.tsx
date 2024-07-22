import React from 'react';
import Image from 'next/image';
import QuantitySelector from './QuantitySelector';

interface Product{
  id: number;
  image: string;
  price: string;
  title: string;
  medida: string;
}

const ProductCard = ({ product } : {product: Product}) => {
  return (
    <div className="group relative bg-emerald-400 bg-opacity-50 rounded-lg  border-neutral-600 shadow-md hover:shadow-lg transition-all duration-300 items-center justify-center w-full">
      <div className=' w-full h-60 sm:w-60 overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full w-full object-center lg:h-full lg:w-full'
        />
      </div>
      <div className="p-4">
        <p className="text-lg font-medium">{product.title}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-600">{product.medida}</p>
          </div>
          <QuantitySelector product={product}/>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;