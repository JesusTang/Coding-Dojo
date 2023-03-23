import React, { useState } from "react";

const ProductForm = (props) => {
  const { initialTitle, initialPrice, initialDescription, onSubmitProp } =
    props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <input
            type="number"
            min={0}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
