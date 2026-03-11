import { useState } from "react";
import { addProduct } from "services/productService";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    await addProduct(product);
    alert("Product Added Successfully");
    setProduct({ name: "", price: "", category: "" });
  };

  return (
    <form onSubmit={saveProduct}>
      <h2>Add Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />

      <button>Add</button>
    </form>
  );
}

export default AddProduct;
