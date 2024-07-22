import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';
import ImageUploadInput from './ImageUploadInput';

const ProductCreate = (props : any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="price" />
      <SelectInput source='category' choices={[
        {id: "verduras", name: "Verduras"},
        {id: "frutas", name: "Frutas"},
        {id: "mayorista", name: "Mayorista"},
        {id: "almacen", name: "Almacen"},
      ]}/>
      <SelectInput source='medida' choices={[
        {id: "kg", name: "Kg"},
        {id: "unidad", name: "Unidad"},
        {id: "pack", name: "Pack"},
      ]}/>
      <ImageUploadInput source="image" />
    </SimpleForm>
  </Create>
);

export default ProductCreate;