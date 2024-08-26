"use client";

import { useEffect, useState } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/store/slices/productsSlice";
//STYLES
import styles from "@/styles/home.module.scss";
//COMPONENTS
import ProductBrowser from "@/components/organisms/ProductBrowser/ProductBrowser";
import Loader from "@/components/molecules/Loader/Loader";
import GenreForm from "@/components/organisms/GenreForm/GenreForm";
import Products from "@/components/organisms/Products/Products";
import CustomPagination from "@/components/molecules/CustomPagination/CustomPagination";
import Backdrop from "@/components/atoms/Backdrop/Backdrop";
import BtnCustom from "@/components/atoms/BtnCustom/BtnCustom";
import ProductBrowser2 from "@/components/organisms/ProductBrowser/ProductBrowser2";
import Browser from "@/components/molecules/Browser/Browser";
import ListMui from "@/components/molecules/ListMui/ListMui";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [showBtnClear, setShowBtnClear] = useState(false);
  const [termsToSearch, setTermsToSearch] = useState({
    page: 1,
    productInfo: "",
    categoryId: "",
  });
  const [inputValue, setInputValue] = useState();
  const [genres,setGenres] = useState();
  const [selectedGenre,setSelectedGenre] = useState("");
  
  useEffect(() => {
    dispatch(getProducts(termsToSearch));
  }, [termsToSearch]);

  useEffect(() =>{
    showCategories()
      .then(data=>setGenres(data.data))
      .catch(err=>console.log({err}));
  },[])
    
  
  const clearTerms = () => {
    setShowBtnClear(false);
    setTermsToSearch({ page: 1, productInfo: "", categoryId: "" });
  };

  const showCategories = async () => {
    try{
      const response = await fetch(`${apiUrl}/api/v1/categories`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    }catch(err){
      console.log(err)  
    }
  };

  return (
    <section className={styles.homeContainer}>
      {products.isLoading && (
        <Backdrop customClass={"pFixed"}>
          <Loader />
        </Backdrop>
      )}
      <section className={styles.searchSection}>
        <Browser
          placeholder="Type a product"
          btnText="Search"
          btnCustomClass="btnThree"
          value={inputValue}
          onChange={(e) =>setInputValue(e.target.value)}
        />
        <ListMui 
          label="Genres"
          items={genres}
          value={selectedGenre}
          onChange={(e)=>setSelectedGenre(e.target.value)}
        />
      </section>
      <hr/ >
      {products.products.length > 0 ? (
        <Products products={products.products} />
      ) : (
        <h2>{products.message}</h2>
      )}
      {products.totalPages > 0 && (
        <CustomPagination
          totalPages={products.totalPages}
          termsToSearch={termsToSearch}
          setTermsToSearch={setTermsToSearch}
        />
      )}
    </section>
  );
}
