import Products from "./components/Products"

function App() {
  return (
    <div className="min-h-screen bg-gray-50-600-100 p-10">
      <h1 className="text-4xl bg-blue-600 p-3.5 font-bold text-center mb-10">
        Tech Products
      </h1>

      <Products />
    </div>
  )
}

export default App