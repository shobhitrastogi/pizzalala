import React from 'react';

import BannerImage from  '../assets/pizza.jpeg'
import { Link, useParams } from 'react-router-dom';
import { MenuList } from '../helper/MenuList';
const SinglePage = () => {
    const { id } = useParams();
    // Find the item in MenuList array based on the id parameter
    const selectedItem = MenuList.find(item => item.id === parseInt(id));

    if (!selectedItem) {
        return <div>Item not found!</div>;
    }
  return (
    <div>
     <section className="text-gray-600 body-font overflow-hidden bg-cover bg-no-repeat flex align-left justify-center  bg-center flex-col"style={{backgroundImage: `url(${BannerImage})`}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={selectedItem.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-6xl title-font font-medium mb-1">{selectedItem.name}</h1>
       
        <p className="leading-relaxed">{selectedItem.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
          <div className="flex ml-6 items-center">
            <span className="mr-3 text-white">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none  py-2 focus:outline-none    text-base pl-3 pr-10 bg-black hover:bg-transparent ">
                <option className='bg-transparent focus:outline-none '>SM</option>
                <option className='bg-transparent focus:outline-none '>M</option>
                <option className='bg-transparent focus:outline-none '>L</option>
                <option className='bg-transparent focus:outline-none '>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex ">
          <span className="title-font font-medium text-2xl text-gray-900 py-2 px-6">{selectedItem.price}</span>
          <Link to={{ pathname: "/cart", state: { item: selectedItem } }}>
          <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded">Add to Cart</button>
</Link>

        
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default SinglePage;
