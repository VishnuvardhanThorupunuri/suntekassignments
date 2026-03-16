import Products from "./components/Products"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Tech Products
      </h1>

      <Products />
    </div>
  )
}

export default App