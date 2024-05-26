// firebaseConfig.js o un archivo separado como firestoreService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const getProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({ ...doc.data() }));
  return productsList;
};

export { getProducts };