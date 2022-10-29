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
      setFilteredProducts(filteredProducts);
    }
  };

  const resetFilter = () => {
    setCurrentFilter("");
  };

  useEffect(applyFilter, [currentFilter, products]);

  return (
    <Fragment>
      <div className="main-wrapper">
        <header>
          <h1>Fridge</h1>
        </header>
        <div className="flex-wrapper">
          <section className="section-left space">
            <Fridge addProduct={addProduct} />
          </section>
          <div className="section-right-wrapper">
            <section className="section-right-top space">
              {products.length > 0 && (
                <Filter
                  applyFilter={setCurrentFilter}
                  categories={categories}
                  resetFilter={resetFilter}
                />
              )}
            </section>
            <section className="section-right-bottom space">
              <RenderProducts filteredProducts={filteredProducts} />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
