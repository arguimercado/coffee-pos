"use client";
import React from 'react'
import {categories} from "@/data/product";
import {cn} from "@/lib/utils";
import {useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery, removeKeysFromUrlQuery} from "@/lib/url";

const CategoryTab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("category");

  const [selectedTab, setSelectedTab] = React.useState(filterParam);

  const handleSelectTab = (category:string) => {
    let newUrl;
    if(category === selectedTab) {
      setSelectedTab("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"]
      });

    }
    else {
      setSelectedTab(category);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: category
      });
    }

    router.push(newUrl,{scroll:false});

  }
  return (
    <div className="w-full background-light900_dark200
                    border
                    light-border-2 dark:border-dark-400
                    flex items-center rounded-md px-3 py-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className={cn("mr-4 px-2 cursor-pointer hover:bg-primary-500 hover:rounded-lg",
                selectedTab === category.name ? "rounded-lg text-white  bg-primary-500" : "")}
          onClick={() => handleSelectTab(category.name)}
        >
          <span className="text-sm font-semibold">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  )
}
export default CategoryTab
