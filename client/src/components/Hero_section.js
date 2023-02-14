import React from 'react'
import shopping_image from '../images/family_shopping.jpg'
const HeroSection = () => {
  return (
    <div>
        <div className='flex px-7 flex-col md:flex-row'>
            <img src={shopping_image} alt="Family_shopping_picture" className=' w-screen md:w-2/5' />
            <div className='flex justify-center items-center  flex-col '>
                <h1 className='text-3xl mt-3 text-blue-600 my-2 font-medium'>Welcome to Avira</h1>
                <p className='sm:w-3/4'>Avira is an online shopping website that offers a wide range of products from clothing to electronics, at affordable prices. With a user-friendly interface, customers can easily navigate the site and find what they need quickly. Avira prides itself on offering high-quality products and fast delivery. The website also features a customer service team that is available 24/7 to assist with any questions or concerns. Shop with confidence and experience the ease and convenience of online shopping with Avira.</p>
                <button className='border border-yellow-500 rounded px-3 py-1 w-max font-medium my-3'><a href="#products">Explore Now</a></button>
            </div>
        </div>
        <hr className='my-4' />
    </div>
  )
}

export default HeroSection