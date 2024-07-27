import Header from "@/components/Header";
import { NextPage } from "next";

const Home : NextPage = () => {
  return (
    <main>
      <Header/>
      <div className="relative -z-10">hola</div>
    </main>
  );
}

export default Home;
