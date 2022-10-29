const RenderProducts = (props) => {

  return (
    <div className="product-list-container">
      <ul>
        {/* console.log(props.filteredProducts) */}
        {props.filteredProducts.map((productList) => {
          return (
            <li className="product-list-content" key={productList.productName}>
              <h2>{productList.productName}</h2>
              <h3>{productList.productAmount}</h3>
              <h3>{productList.productCategory}</h3>
              <h3>{productList.productDate}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderProducts;