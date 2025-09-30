import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArival from "../components/Products/NewArival";
import ProductDetail from "../components/Products/ProductDetail";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=1",
        alt: "Product 1 Image",
      } 
    ]
  },

    {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=4",
        alt: "Product 1 Image",
      } 
    ]
  },

    {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=5",
        alt: "Product 1 Image",
      } 
    ]
  },

    {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=6",
        alt: "Product 1 Image",
      } 
]
  },

  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=9",
        alt: "Product 1 Image",
      } 
    ]
  },

    {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=8",
        alt: "Product 1 Image",
      } 
    ]
  },

    {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=4",
        alt: "Product 1 Image",
      } 
]
  },

  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/300/300?random=8",
        alt: "Product 1 Image",
      } 
]
  }


]
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Collection Section */}
      <GenderCollectionSection />
      {/* New Arrival */}
      <NewArival />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetail />
      {/* Women's Collection*/}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wear for Women
        </h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
    </div>
  );
};

export default Home;
