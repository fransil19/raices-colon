import {create} from 'zustand';

interface Product {
  id: string;
  title: string;
  price: string;
  image: string
  category: string;
}

interface ProductsState {
  products: any[];
  filteredProducts: any[];
  cart: any[];
  categoryFilter: string;
  setProducts: (products: any) => void;
  setFilteredProducts: (filteredProducts: any[]) => void;
  filterProducts: (criteria: string) => void;
  addToCart: (product:any ) => void;
  removeFromCart: (productId: any) => void;
  emptyCart: () => void;
  reduceProductQuantity: (productId: any) => void;
  increaseProductQuantity: (productId: any) => void;
  setCategoryFilter: (criteria: string) => void;
}

const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  filteredProducts: [],
  cart: [],
  categoryFilter: '',
  setProducts: (products) => set({ products }),
  setFilteredProducts: (filteredProducts) => set({ filteredProducts }),
  
  filterProducts: (criteria) => set((state) => ({
    filteredProducts: state.products.filter((product) => {
      return product.category === criteria
    }
    ),
  })),
  addToCart: (product:any ) => set((state) => ({
    cart: [...state.cart, product]
  })),
  removeFromCart: (productId: any) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== productId)
  })),
  emptyCart: () => set((state) => ({
    cart: []
  })),
  reduceProductQuantity: (productId: any) => set((state) => ({
    cart: state.cart.map((product) => {
      if(product.id === productId){
        return {...product, quantity: product.quantity-1}
      }
      return product
    })
  })),
  increaseProductQuantity: (productId: any) => set((state) => ({
    cart: state.cart.map((product) => {
      if(product.id === productId){
        return {...product, quantity: product.quantity+1}
      }
      return product
    })
  })),
  setCategoryFilter: (criteria) => set({ categoryFilter: criteria }),
}));

export default useProductsStore;