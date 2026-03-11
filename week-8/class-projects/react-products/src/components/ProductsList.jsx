import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router'
function ProductsList() {
  let [productslist,setProducts]=useState([])
  let [loading,setLoading]=useState(false)
  let [error,setError]=useState(null)
  const navigate=useNavigate()

  //navigate to product component
  const gotoProduct=(productObj)=>{
    //navigation logic
    //while navigating transfer product obj to
    navigate('/products',{state:{product:productObj}})
  }
  
  useEffect(()=>{
    setLoading(true);
    async function getProducts(){
      try{
        let res=await fetch("https://fakestoreapi.com/products")
        if(res.status===200){
          let productsData=await res.json();
          setProducts(productsData);
        }else{
          throw new Error("failed to fetch")
        }
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    getProducts();
  },[]);
  if(loading===true){
    return <p className='text-center text-2xl text-blue-300'> Loading...</p>
  }
  if(error!=null){
    return <p className='text-2xl text-center text-red-500'> {error.message}</p>
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {productslist.map((productObj)=>{
          return (
          <div onClick={()=>gotoProduct(productObj)} key={productObj.id} className='shadow-md p-10 mb-10 rounded-2xl cursor-progress m-5'>
            <img src={productObj.image} alt="" 
            className='h-44 object-contain block mx-auto mb-10' />
            <p>{productObj.title}</p>
          </div>
          )
        })}
    </div>
  )
}

export default ProductsList;