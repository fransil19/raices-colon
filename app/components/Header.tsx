import Link from 'next/link';
import useProductStore from '../store';
import CartModal from './CartModal';
import { useState } from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useProductStore((state) => state.cart);
  
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-14 w-14 rounded-full" />
        <h1 className="text-lg font-bold ml-4">Raíces de Colon</h1>
      </div>
      
      <nav className="flex gap-4">
        {/* <Link href="/" className="text-gray-600 hover:text-gray-800">
         Inicio
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-800">
          Sobre nosotros
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800">
          Contacto
        </Link> */}
        <IconButton aria-label="cart" onClick={() => setIsOpen(true)}>
          <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
        <Link href="/admin">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Iniciar sesión</button>
        </Link>
{/*         <FileUploadModal />
        <LoginModal />
        <BasicMenu /> */}
      </nav>
      
    </header>
  );
};

export default Header;

