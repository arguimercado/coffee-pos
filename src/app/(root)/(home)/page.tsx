import CategoryTab from "@/app/(root)/(home)/_components/CategoryTab";
import {products} from "@/data/product";
import ProductCard from "@/app/(root)/(home)/_components/ProductCard";
import ProductList from "@/app/(root)/(home)/_components/ProductList";
import OrderTab from "@/app/(root)/(home)/_components/OrderTab";


interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({searchParams}: SearchParams) => {

  const {page, pageSize, query, category} = await searchParams;

  const filterProducts = products.filter((product) => product.category === category);


  const handleCategorySelect = () => {
    console.log("Category Selected");
  }

  return (
    <>
      <div className="w-full flex ">
        <div className="flex-1 flex p-2 flex-col w-full gap-4 background-gray100_dark200">
          <CategoryTab/>
          <ProductList category={category} />
        </div>
        <div className="w-[450px]">
          <OrderTab />

        </div>
      </div>
    </>
  );
}

export default Home;
