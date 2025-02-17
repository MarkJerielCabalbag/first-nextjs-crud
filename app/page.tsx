import Image from "next/image";
import Greet from "./components/Greet";
import Counter from "./components/Counter";
import ProductDetails from "./products/[id]/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>HI</h1>
      <Greet />
      <Counter />
      {/* <ProductDetails /> */}
    </div>
  );
}
