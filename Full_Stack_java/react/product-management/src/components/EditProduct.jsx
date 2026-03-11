
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "/services/productService";

function EditProduct() {

  const { id } = useParams();      // get id from URL
  const navigate = useNavigate();  // for redirect

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  // Load product by id
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const res = await getProductById(id);
    setProduct(res.data);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const update = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    alert("Product Updated Successfully");
    navigate("/");
  };

  return (
    <form onSubmit={update}>
      <h2>Edit Product</h2>

      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <button>Update</button>
    </form>
  );
}

export default EditProduct;

