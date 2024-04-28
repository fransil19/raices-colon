import Image from "next/image";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <CategoryBar />
        <ProductContainer />
      </div>
      <Footer />
    </>
  );
}
