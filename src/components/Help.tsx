import React from 'react'

const Help = () => {
  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='text-4xl font-semibold mt-5 py-2 border-b-4 border-black'>Explore Categories:</p>
             <div className="flex flex-col gap-2 mt-8 text-2xl font-semibold">
                <a href="https://jsonserver.reactbd.com/phone" target="_blank">
                    Phone Data
                </a>
                <a href="https://jsonserver.reactbd.com/phonecase" target="_blank">
                    Phone Case Data
                </a>
                <a href="https://jsonserver.reactbd.com/accessories" target="_blank">
                    Accessories Data
                </a>
                <a href="https://jsonserver.reactbd.com/watch" target="_blank">
                    Watches Data
                </a>
            </div>
        </div>
    </div>
  )
}

export default Help