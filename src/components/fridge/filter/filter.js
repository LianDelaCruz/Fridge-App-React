import React from "react";

class Filter extends React.Component {
  submitCategories = (e) => {
    e.preventDefault();
    this.props.addCategories(this.fridgeInput.productCategory);
  };
  render() {
    return (
      <div>
        {this.props.categories.map((category, index) => {
          return (
            <button
              onClick={() => this.props.applyFilter(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
        {<button onClick={() => this.props.resetFilter()}>All</button>}
      </div>
    );
  }
}

export default Filter;
