

import CategoryTab from "@/app/(root)/(home)/_components/CategoryTab";
import {products} from "@/data/product";
import ProductCard from "@/components/ProductCard";


interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({searchParams}: SearchParams) => {

  const { page, pageSize, query, category } = await searchParams;

  const filterProducts = products.filter((product) => product.category === category);
  console.log("filter",category);

  const handleCategorySelect = () => {
    console.log("Category Selected");
  }

  return (
    <>
      <div className="w-full flex">
        <div className="flex-1 flex flex-col w-full gap-4">
          <CategoryTab />

          <div
            className="w-full grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4 mt-8 gap-3">
            {filterProducts.map((product) => (
              <ProductCard
                key={product.id}
                data={product}
              />
            ))}
          </div>
        </div>
        <div className="w-[250px]">

        </div>
      </div>
    </>
  );
}

export default Home;
