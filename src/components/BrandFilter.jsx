import React, { useState } from 'react';
import { X } from 'lucide-react';
import { products } from '../constants/ProductData';

const BrandFilter = () => {
    const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleBrandChange = (brand) => {
    let newSelectedBrands;
    if (selectedBrands.includes(brand)) {
      newSelectedBrands = selectedBrands.filter(b => b !== brand);
    } else {
      newSelectedBrands = [...selectedBrands, brand];
    }
    setSelectedBrands(newSelectedBrands);
    applyFilters(newSelectedBrands);
  };

  const applyFilters = (brands) => {
    if (brands.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => brands.includes(product.brand));
      setFilteredProducts(filtered);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setFilteredProducts(products);
  };

  const allBrands = [...new Set(products.map(product => product.brand))];
  return (
    <div className="container mx-auto p-4 bg-[#FAF5EF]">
      <div className="flex flex-col md:flex-row">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>
          
          {/* Brand Filter */}
          <div className="mb-4 bg-[#FAF5EF] p-4">
            <h3 className="font-semibold mb-2 text-gray-700">Brands</h3>
            {allBrands.map(brand => (
              <label key={brand} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2 form-checkbox text-green-500"
                />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center"
          >
            <X size={18} className="mr-1" />
            Clear Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className={`p-4 flex flex-col justify-between`}>
                <div className="mb-2">
                  <img src={product.image} alt={product.name} className="object-cover rounded-md mb-2" />
                  <h3 className="font-bold text-black text-lg my-1">{product.name}</h3>
                  <p className="text-black text-sm">{product.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandFilter
