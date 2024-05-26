import React from 'react';
import Image from 'next/image';

interface Product{
  id: number,
  image: string,
  price: string,
  title: string
}

const ProductCard = ({ product } : {product: Product}) => {
  return (
    <div className="group relative bg-emerald-400 bg-opacity-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 items-center justify-center w-full">
      <div className=' w-full h-60 sm:w-60 overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none'>
        <img
          src={/* product.image */ '/card-fruta.jpg'}
          alt={product.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className="p-4">
        <p className="text-lg font-medium">{product.title}</p>
        <p className="text-gray-500">{product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;