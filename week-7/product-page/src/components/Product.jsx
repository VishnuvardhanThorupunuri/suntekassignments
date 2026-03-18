function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-semibold mb-1">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm mb-2">
          {product.brand}
        </p>

        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>

        <p className="text-lg font-bold text-blue-600">
          ${product.price}
        </p>

      </div>

    </div>
  )
}

export default Product