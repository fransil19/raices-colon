"use client"; // remove this line if you choose Pages Router
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";
import LoginPage from './LoginPage';
import { ProductList, ProductShow } from "./products";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";

import 'firebase/compat/storage';

import {firebaseConfig} from '@/firebaseConfig';
const config = firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: "",
  watch: []
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const AdminApp = () => (
  
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
        <Resource
          name="products"
          list={ProductList}
          show={ProductShow}
          create={ProductCreate}
          edit={ProductEdit}
        />
      </Admin>
);

export default AdminApp;