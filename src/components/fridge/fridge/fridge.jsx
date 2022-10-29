const Fridge = (props) => {
  const fridgeInput = {
    productName: "",
    productAmount: 0,
    productCategory: "",
    productDate: "",
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addProduct(fridgeInput);
  };

  return (
    <div className="form-container">
      <h1>Fridge</h1>
      <form onSubmit={submitForm}>
        <input
          required
          className="form-input"
          type="text"
          placeholder="Product Name"
          onChange={(e) => (fridgeInput.productName = e.target.value)}
        />
        <input
          required
          className="form-input"
          type="number"
          placeholder="Product Amount"
          onChange={(e) =>
            (fridgeInput.productAmount = parseInt(e.target.value))
          }
        />
        <input
          required
          className="form-input"
          type="text"
          placeholder="Product Category"
          onChange={(e) => (fridgeInput.productCategory = e.target.value)}
        />
        <input
          required
          className="form-input"
          type="date"
          onChange={(e) => (fridgeInput.productDate = e.target.value)}
        />
        <input
        required 
        className="form-input" type="submit" onClick={submitForm} />
      </form>
    </div>
  );
};

export default Fridge;
