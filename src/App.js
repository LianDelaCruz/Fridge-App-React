import React, { Fragment, useEffect, useState } from "react";
import Fridge from "./components/fridge/fridge/fridge";
import Filter from "./components/fridge/filter/filter";
import RenderProducts from "./components/fridge/renderProducts/renderProducts";

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");

  const addProduct = (fridgeInput) => {
    setProducts((product) => [...product, fridgeInput]);
    addCategories(fridgeInput);
  };

  const addCategories = (fridgeInput) => {
    const newCategories = [...categories, fridgeInput.productCategory];
    const uniqueCategories = [...new Set(newCategories)];
    setCategories(uniqueCategories);
  };

  const applyFilter = () => {
    if (currentFilter === "") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.productCategory === currentFilter
      );
      /* const filteredProducts = products.filter(product => {
      return product.productCategory === filterCategory
    }); */
      setFilteredProducts(filteredProducts);
    }
  };

  const resetFilter = () => {
    setCurrentFilter("");
  };

  useEffect(applyFilter, [currentFilter, products]);

  return (
    <Fragment>
      <Fridge addProduct={addProduct} />
      {products.length > 0 && (
        <Filter
          applyFilter={setCurrentFilter}
          categories={categories}
          resetFilter={resetFilter}
        />
      )}
      <RenderProducts filteredProducts={filteredProducts} />
    </Fragment>
  );
};
export default App;
