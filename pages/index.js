import Head from "next/head";
import Home_product from "../components/reusable/Home_product";

export default function Home() {
  const imageAtr = [
    { key: 1, height: "32.5rem" },
    { key: 2, height: "32.5rem" },
    { key: 3, height: "35rem" },
    { key: 5, height: "45rem" },
    { key: 4, height: "27rem" },  
    { key: 6, height: "28rem" },
    { key: 7, height: "32rem" },
    { key: 8, height: "27rem" },
    { key: 9, height: "41rem" },
  ];
  return (
    <div className="container">
      <Head>
        <title>Amado</title>
      </Head>
      <main className="home">
        <div className="home_products" style={{ flexWrap: "wrap" }}>
          {imageAtr.map((img) => (
            <Home_product
              src={`/images/product_${img.key}.png`}
              key={img.key}
              height={img.height}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
