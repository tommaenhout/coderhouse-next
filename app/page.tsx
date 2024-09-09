
import { NextPage } from "next";
import Image from 'next/image'
import gabberin from '@/public/gabber-woman.webp';
import Link from "next/link";
import Products from "@/components/Products";

const Home : NextPage = async () => {

  const response = await fetch(`http://${process.env.VERCEL_URL}/api/all`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
});

console.log(response)

const allProducts = await response.json();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className=" relative h-[400px] bg-black lg:w-8/12 w-full">
          <Image
            src={gabberin}
            alt="gabberin"
            fill
            className="object-cover object-top"
        />
        <div className="inset-0 absolute flex justify-end items-center p-5">
            <div className="bg-white text-center gap-y-4 flex flex-col p-6">
                    <h1 className="text-base uppercase">Full hardcore merch</h1>
                    <p className="text-3xl font-bold">70% discount</p>
                    <p className="text-xl font-bold">Code: HARDCORE</p>
                    <p className="italic text-sm font-light">*Only available for the first 100 customers</p>
                    <Link
                      href="/clothes"
                      className="bg-black hover:font-semibold text-white hover:shadow-lg hover:scale-110 transition-all duration-500 p-2 rounded"
                      >Start Shopping</Link>
            </div>
        </div>
      </div>
      <div>
        <Products
          products={allProducts.docs}
        />
      </div>
    
    </main>
  );
}

export default Home;
