import React from 'react' // Importing React library
import CategoryList from '../components/CategoryList' // Importing CategoryList component
import BannerProduct from '../components/BannerProduct' // Importing BannerProduct component
import HorizontalCardProduct from '../components/HorizontalCardProduct' // Importing HorizontalCardProduct component
import VerticalCardProduct from '../components/VerticalCardProduct' // Importing VerticalCardProduct component

const Home = () => {
  // The components below only display products from the database.
  // To add these products to your database, you need to insert them on the backend (e.g., via an admin panel, seed script, or API).
  // This frontend code does NOT add products to the database.

  return (
    <div>
      {/* Rendering CategoryList component */}
      <CategoryList/>
      
      {/* Rendering BannerProduct component */}
      <BannerProduct/>

      {/* Rendering HorizontalCardProduct components with different categories and headings */}
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      {/* Rendering VerticalCardProduct components with different categories and headings */}
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"airpodes"} heading={"More Airpodes"}/>
      <VerticalCardProduct category={"watches"} heading={"More Watches"}/>
    </div>
  )
}

export default Home // Exporting Home component as default