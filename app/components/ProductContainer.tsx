'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { getProducts } from '../services/firestoreServices';

interface Product{
  id: number,
  image: string,
  price: string,
  title: string
}

const ProductContainer = () => {
  const products = [
    {
      "id": 1,
      "image": "/card-fruta.jpg",
      "price": "$250",
      "title": "Acelga"
    },
    {
      "id": 2,
      "image": "/card-fruta.jpg",
      "price": "$180",
      "title": "Apio"
    },
    {
      "id": 3,
      "image": "/card-fruta.jpg",
      "price": "$100",
      "title": "Ajo"
    },
    {
      "id": 4,
      "image": "/card-fruta.jpg",
      "price": "$150",
      "title": "Berenjena"
    },
    {
      "id": 5,
      "image": "/card-fruta.jpg",
      "price": "$120",
      "title": "Betarraga"
    },
    {
      "id": 6,
      "image": "/card-fruta.jpg",
      "price": "$200",
      "title": "Brócoli"
    },
    {
      "id": 7,
      "image": "/card-fruta.jpg",
      "price": "$80",
      "title": "Cebolla"
    },
    {
      "id": 8,
      "image": "/card-fruta.jpg",
      "price": "$100",
      "title": "Cebolla de verdeo"
    },
    {
      "id": 9,
      "image": "/card-fruta.jpg",
      "price": "$220",
      "title": "Champiñón"
    },
    {
      "id": 10,
      "image": "/card-fruta.jpg",
      "price": "$160",
      "title": "Coliflor"
    },
    {
      "id": 11,
      "image": "/card-fruta.jpg",
      "price": "$140",
      "title": "Espinaca"
    },
    {
      "id": 12,
      "image": "/card-fruta.jpg",
      "price": "$110",
      "title": "Garbanzo"
    },
    {
      "id": 13,
      "image": "/card-fruta.jpg",
      "price": "$130",
      "title": "Haba"
    },
    {
      "id": 14,
      "image": "/card-fruta.jpg",
      "price": "$90",
      "title": "Lechuga"
    },
    {
      "id": 15,
      "image": "/card-fruta.jpg",
      "price": "$100",
      "title": "Lenteja"
    },
    {
      "id": 16,
      "image": "/card-fruta.jpg",
      "price": "$120",
      "title": "Maíz"
    },
    {
      "id": 17,
      "image": "/card-fruta.jpg",
      "price": "$150",
      "title": "Morrón"
    },
    {
      "id": 18,
      "image": "/card-fruta.jpg",
      "price": "$80",
      "title": "Papa"
    },
    {
      "id": 19,
      "image": "/card-fruta.jpg",
      "price": "$110",
      "title": "Poroto"
    },
    {
      "id": 20,
      "image": "/card-fruta.jpg",
      "price": "$140",
      "title": "Puerro"
    },
    {
      "id": 21,
      "image": "/card-fruta.jpg",
      "price": "$120",
      "title": "Repollo"
    },
    {
      "id": 22,
      "image": "/card-fruta.jpg",
      "price": "$150",
      "title": "Remolacha"
    },
    {
      "id": 23,
      "image": "/card-fruta.jpg",
      "price": "$180",
      "title": "Ruibarbo"
    },
    {
      "id": 24,
      "image": "/card-fruta.jpg",
      "price": "$100",
      "title": "Tomate"
    },
    {
      "id": 25,
      "image": "/card-fruta.jpg",
      "price": "$120",
      "title": "Zanahoria"
    },
    {
      "id": 26,
      "image": "/card-fruta.jpg",
      "price": "$60",
      "title": "Banana"
    },
    {
      "id": 27,
      "image": "/card-fruta.jpg",
      "price": "$200",
      "title": "Cereza"
    },
    {
      "id": 28,
      "image": "/card-fruta.jpg",
      "price": "$150",
      "title": "Frutilla"
    },
    {
      "id": 29,
      "image": "/card-fruta.jpg",
      "price": "$250",
      "title": "Kiwi"
    },
    {
      "id": 30,
      "image": "/card-fruta.jpg",
      "price": "$80",
      "title": "Manzana"
    },
    {
      "id": 31,
      "image": "/card-fruta.jpg",
      "price": "$70",
      "title": "Naranja"
    },
    {
      "id": 32,
      "image": "/card-fruta.jpg",
      "price": "$90",
      "title": "Pera"
    }
    ];
  
  const [productFirestore, setProductFirestore] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProdAsync = async () => {
      const productsFire = await getProducts();
      setProductFirestore(productsFire)

      const productsSorted = productsFire.sort((a,b) => {
        let nameA = a.title?.toLowerCase(), nameB = b.title?.toLowerCase();
        if (nameA < nameB) //sort string ascending
          return -1;
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      })
      setFilteredProducts(productsSorted)
    }
    getProdAsync()
  },[])
  
  
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8 bg-white mt-8 mb-8 rounded-md">
      <SearchBar products={productFirestore} setProducts={setFilteredProducts}/>
      <h2 className=' text-xl border-b-2'>Productos</h2>
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 w-full">
        {filteredProducts.map((product:any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;