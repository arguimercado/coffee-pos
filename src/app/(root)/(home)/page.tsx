import CategoryTab from "@/app/(root)/(home)/_components/CategoryTab";
import {products} from "@/data/product";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/app/(root)/(home)/_components/ProductList";


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
      <div className="w-full flex">
        <div className="flex-1 flex flex-col w-full gap-4">
          <CategoryTab/>
          <ProductList category={category} />
        </div>
        <div className="w-[250px]">

        </div>
      </div>
    </>
  );
}

export default Home;
