
import Product from "@/components/Product";

const getData =async ()=>{
    const res = await fetch("https://jsonserver.reactbd.com/watch")

    if(!res.ok){
        throw new Error("Product faild to fetch");
    }
    return res.json();
};

const  phonepage =async () => {
    const products =await getData()
  return (
    <div>
        <Product products={products}/>
    </div>
  )
};

export default phonepage