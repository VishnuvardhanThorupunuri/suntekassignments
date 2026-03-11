import { useLocation } from "react-router" //when the component loaded it checks what was the previous object loaded 
function Product() {

    const {state}=useLocation()
    console.log(state?.product)
  return (
    <div className="flex justify-between p-10">
        <div className=" w-2/5 mt-14">
        <img src={state?.product?.image} className="w-full" alt="" />
        </div>
        <div className="text-center pt-10 m-10 w-3/4">
        <p>{state?.product.title}</p>
        <p>{state?.product.description}</p>
        <p>{state?.product.price}</p>
        <p>{state?.product.category}</p>
        </div>
    </div>
  )
}

export default Product;