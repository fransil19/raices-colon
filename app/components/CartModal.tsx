// components/CartModal.tsx
import useProductsStore from '../store';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const cart = useProductsStore((state) => state.cart);
  const removeFromCart = useProductsStore((state) => state.removeFromCart);
  const reduceProductQuantity = useProductsStore((state) => state.reduceProductQuantity);
  const increaseProductQuantity = useProductsStore((state) => state.increaseProductQuantity);
  const emptyCart = useProductsStore((state) => state.emptyCart);
  
  const handleCheckout = () => {
    console.log("entra checkout");
    
    const message = cart
      .map(product => {
        console.log(product);
        return `Item: ${product.title}, Cantidad: ${product.quantity}, Precio: ${product.price}`
      })
      .join('\n');
    const whatsappUrl = `https://wa.me/541140589423?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    emptyCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-5/6 md:w-1/3 relative z-60">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div> 
            <ul>
              {cart.map((product) => (
                <li key={product.id} className="grid grid-cols-3 gap-1 justify-between items-center my-2">
                  <span className='break-words min-w-0'>{product.title}</span>
                  <div className="flex flex-row content-between w-24">
                    <button onClick={() => {
                      if(product.quantity === 1){
                        removeFromCart(product.id)
                      } 
                      else{ 
                        reduceProductQuantity(product.id)
                      }
                      }} className="border border-gray-300 rounded-sm w-1/3 mr-2 bg-slate-100">-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseProductQuantity(product.id)} className="border border-gray-300 rounded-sm w-1/3 ml-2 bg-slate-100">+</button>
                  </div>
                  <div className='flex flex-row justify-center'>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded w-16 items-center"
                  >
                    Quitar
                  </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-0 sm:mt-6 justify-between'>
              <button
                      onClick={handleCheckout}
                      className=" bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Finalizar Compra
              </button>
              <button
                      onClick={emptyCart}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;