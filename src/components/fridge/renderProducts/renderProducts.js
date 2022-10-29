const RenderProducts = (props) => {

  return (
    <div>
      <ul>
        {/* console.log(props.filteredProducts) */}
        {props.filteredProducts.map((productList) => {
          return (
            <li key={productList.productName}>
              <h2>{productList.productName}</h2>
              <p>{productList.productAmount}</p>
              <p>{productList.productCategory}</p>
              <p>{productList.productDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderProducts;