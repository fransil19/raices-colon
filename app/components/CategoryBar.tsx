import React from 'react';
import Category from './Category';

const CategoryBar = () => {

  return (
    <div className="flex gap-2 sm:gap-8 lg:gap-32 mt-10">
      <Category src='/verduras.jpg' alt='Verduras' text='Verduras'/>
      <Category src='/frutas.jpg' alt='Frutas' text='Frutas'/>
      <Category src='/mayorista.jpg' alt='Mayorista' text='Mayorista'/>
      <Category src='/mayorista.jpg' alt='Almacen' text='Almacen'/>
    </div>
  );
};

export default CategoryBar;
