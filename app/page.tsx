'use client'
import Image from "next/image";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="">
        <Header />
        <div className="flex flex-col items-center min-h-screen">
          <CategoryBar />
          <ProductContainer />
        </div>
        <Footer />
      </div>
    </>
  );
}
