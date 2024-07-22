'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import useProductsStore from '../store';

const Category = ({src, alt, text} : {src: string, alt: string, text: string}) => {
  const [isHovering, setIsHovered] = useState(false);
  const [filter, setFilter] = useState('');
  const { products, categoryFilter, filterProducts, setFilteredProducts, setCategoryFilter } = useProductsStore();

  const handleClick = () => {    
    if(categoryFilter && categoryFilter === alt.toLowerCase()){
      setFilteredProducts(products);
      setCategoryFilter('')
    }
    else{
      setCategoryFilter(alt.toLowerCase())
      filterProducts(alt.toLowerCase());
    }
  }
  return (
    <div
      className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`transition-colors rounded-full border duration-500 ease-in-out ${
          isHovering ? 'opacity-0' : ''
        }`}
      />

      <div
        className={`absolute top-0 left-0 w-full h-full rounded-full border-none flex items-center justify-center ${
          isHovering ? 'text-white bg-black bg-opacity-35 text-opacity-75' : 'hidden'
        }`}
      >
        {text}
      </div>
      <h4 className='absolute top-full left-3 sm:left-8'>{text}</h4>
    </div>
  );
};

export default Category;