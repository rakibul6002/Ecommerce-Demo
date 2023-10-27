'use client'
import Image from 'next/image';
import React from 'react';

const Product = ({products}:any) => {
  return (
    <div className="grid grid-cols-5 gap-10 z-50">
      {
        products.map((item:any) =>(
          <div key={item._id}>
            <Image src={item?.image}
            alt="product image"
            width={500}
            height={500}/>
              <div className="px-4 py-4 border-t-[1px] border-t-gray-400">
              <p>{item?.title}</p>
                <p>${item?.price}</p>
                <p>{item?.brand}</p>
                <p>{item?.description.substring(0, 100)}</p>
                <p>{item?.isNew ? "New products" : ""}</p>
              </div>
          </div>
          
        ))
      }
    </div>
  )
}

export default Product