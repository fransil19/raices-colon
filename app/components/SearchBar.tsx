'use client'
import { useEffect, useRef, useState } from "react";

interface Product{
  id: number,
  image: string,
  price: string,
  title: string
}


const SearchBar = ({products, setProducts}: {products: Array<Product>, setProducts: any}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = filterData(event.target.value, products);
    setProducts(filteredData);
    setSearchTerm(event.target.value);
  };
  
  const handleFocus = () => {
    searchInputRef.current?.classList.remove('border-gray-300');
    searchInputRef.current?.classList.add('border-blue-500');
  };

  const handleBlur = () => {
    searchInputRef.current?.classList.remove('border-blue-500');
    searchInputRef.current?.classList.add('border-gray-300');
  };

  const filterData = (searchTerm: string, data: Product[]): Product[] => {
    return data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="flex flex-row items-center mb-5">
      <input
        type="text"
        placeholder="Buscar por nombre"
        className=" rounded-md border-2 border-gray-400 border-opacity-40 focus:border-green-500 px-4 py-2 w-11/12"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className="ml-2 text-gray-500 hover:text-gray-700">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.19-5.19-5.19 5.19" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;