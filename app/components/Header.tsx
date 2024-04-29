import Link from 'next/link';
import LoginModal from './LoginModal';
import BasicMenu from './Menu';
import FileUploadModal from './FileUploadModal';

const Header = () => {
  
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
        {/* <Link href="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Iniciar sesión</button>
        </Link> */}
        <FileUploadModal />
        <LoginModal />
        <BasicMenu />
      </nav>
      
    </header>
  );
};

export default Header;

