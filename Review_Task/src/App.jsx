import { useState, useEffect } from 'react';
import './App.css';

const PRODUCTS = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 99 },
  { id: 4, name: 'Running Shoes', category: 'Footwear', price: 79 },
  { id: 5, name: 'T-Shirt', category: 'Clothing', price: 29 },
  { id: 6, name: 'Jeans', category: 'Clothing', price: 59 },
  { id: 7, name: 'Coffee Maker', category: 'Kitchen', price: 49 },
  { id: 8, name: 'Blender', category: 'Kitchen', price: 39 },
  { id: 9, name: 'Desk Chair', category: 'Furniture', price: 150 },
  { id: 10, name: 'Bookshelf', category: 'Furniture', price: 89 },
];


function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    const matchesPrice = p.price >= min && p.price <= max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Furniture">Furniture</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button onClick={() => {
          setSearchText('');
          setCategory('');
          setMinPrice('');
          setMaxPrice('');
        }}>
          Reset
        </button>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="product">
              <h3>{p.name}</h3>
              <p>{p.category}</p>
              <p>Rs. {p.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
