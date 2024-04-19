import React from 'react'

import BannerImage from  '../assets/pizza.jpeg'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
const About = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-cover bg-no-repeat flex align-left justify-center  bg-center flex-col"style={{backgroundImage: `url(${BannerImage})`}}>
  <div className="container mx-auto flex px-8 pr-32 text-xl py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Pizza Haven: Your Destination for Delicious Pizza</h1>
      <p className="mb-8 leading-relaxed text-black">Welcome to Pizza Haven, your ultimate destination for mouthwatering pizza creations! Whether you're craving a classic Margherita, a spicy Pepperoni, or a unique specialty pizza, we've got you covered with our diverse menu and top-quality ingredients.</p>
      <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-black">Pizza Haven: Your Destination for Delicious Pizza</h2>
      <p className="mb-8 leading-relaxed text-black">At Pizza Haven, we take pride in offering a wide variety of pizzas to satisfy every taste bud. From traditional favorites to innovative combinations, our menu features something for everyone. Indulge in our signature Pepperoni Pizza loaded with savory pepperoni slices and gooey cheese, or savor the simplicity of our Margherita Pizza topped with fresh tomatoes, basil, and mozzarella. For the adventurous pizza lover, we offer specialty pizzas like the PedroTech Special, Vegan, Pineapple, and more!</p>
      
     
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img className="object-cover object-center rounded" alt="hero" src={MultiplePizzas}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default About