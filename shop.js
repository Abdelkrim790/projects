import React, { Fragment, memo, useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar311 from '../components/navbar311'
import Footer3 from '../components/footer3'
import './shop.css'

const ProductCard = memo(({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price-row">
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
))

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Pro Gaming Headset",
      description: "Premium gaming headset with 7.1 surround sound and noise-canceling microphone",
      price: 129.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Mechanical Gaming Keyboard",
      description: "RGB mechanical keyboard with Cherry MX switches and customizable macros",
      price: 159.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Gaming PC - Pro Edition",
      description: "High-end gaming PC with RTX 4080, 32GB RAM, and 2TB SSD",
      price: 2499.99,
      category: "computers",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Gaming Mouse",
      description: "Precision gaming mouse with 16000 DPI and programmable buttons",
      price: 79.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Gaming Laptop",
      description: "Powerful gaming laptop with RTX 3070, 16GB RAM, and 1TB SSD",
      price: 1799.99,
      category: "computers",
      image: "https://images.unsplash.com/photo-1640865993619-cb8f720bf908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Gaming Monitor",
      description: "27-inch 4K gaming monitor with 144Hz refresh rate and 1ms response time",
      price: 499.99,
      category: "monitors",
      image: "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'computers', name: 'Computers' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'monitors', name: 'Monitors' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="shop-container">
      <Helmet>
        <title>Gaming Shop - Pristine Defensive Vulture</title>
        <meta property="og:title" content="Gaming Shop - Pristine Defensive Vulture" />
        <meta name="description" content="Shop for premium gaming gear, computers, and accessories" />
      </Helmet>
      
      <Navbar311 
        rootClassName="navbar311root-class-name3"
        link1={<span>Home</span>}
        link2={<span>About Us</span>}
        link3={<span>Services</span>}
        link4={<span>Shop</span>}
        link5={<span>Contact Us</span>}
      />
      
      <main className="shop-main">
        <div className="shop-header">
          <h1>Gaming Shop</h1>
          <p>Premium Gaming Gear for Professional Gamers</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      <Footer3 
        rootClassName="footer3root-class-name3"
        logoSrc="/images-1500h.png"
      />
    </div>
  )
}

export default memo(Shop)
