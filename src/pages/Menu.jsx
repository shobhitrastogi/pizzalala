import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '../helper/MenuList';

import BannerImage from  '../assets/pizza.jpeg'
const MenuItem = React.lazy(() => import('./MenuItem')); 

const Menu = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-cover bg-no-repeat flex align-left justify-center  bg-center flex-col" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {MenuList.map((item, index) => (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <MenuItem item={item} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
