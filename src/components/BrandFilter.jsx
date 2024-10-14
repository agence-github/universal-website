import React, { useState, useEffect } from 'react';
import { X, Filter } from 'lucide-react';
import { products } from '../constants/ProductData';

const BrandFilter = ({brand}) => {
  const [selectedBrands, setSelectedBrands] = useState([`${brand}`]); 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    applyFilters([`${brand}`], []);
  }, []);

  const handleBrandChange = (brand) => {
    let newSelectedBrands;
    if (selectedBrands.includes(brand)) {
      newSelectedBrands = selectedBrands.filter(b => b !== brand);
    } else {
      newSelectedBrands = [...selectedBrands, brand];
    }
    setSelectedBrands(newSelectedBrands);
    applyFilters(newSelectedBrands, selectedCategories);
  };

  const handleCategoryChange = (category) => {
    let newSelectedCategories;
    if (selectedCategories.includes(category)) {
      newSelectedCategories = selectedCategories.filter(c => c !== category);
    } else {
      newSelectedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(newSelectedCategories);
    applyFilters(selectedBrands, newSelectedCategories);
  };

  const applyFilters = (brands, categories) => {
    let filtered = products;

    if (brands.length > 0) {
      filtered = filtered.filter(product => brands.includes(product.brand));
    }
    if (categories.length > 0) {
      filtered = filtered.filter(product => categories.includes(product.category));
    }
    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setFilteredProducts(products);
  };

  const allBrands = [...new Set(products.map(product => product.brand))];
  const allCategories = [...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto p-4 bg-[#FAF5EF]">
      <div className="flex flex-col md:flex-row">
        
 
        <div className="md:hidden mb-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)} 
            className="bg-gray-900 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

 
        <div className={`w-full md:w-1/4 pr-4 mb-4 md:mb-0 md:h-screen md:sticky md:top-0 ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <div className="h-full overflow-y-auto bg-white shadow-lg p-4 rounded-lg md:rounded-none">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

      
            <div className="mb-4">
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

            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-700">Categories</h3>
              {allCategories.map(category => (
                <label key={category} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2 form-checkbox text-green-500"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>

            <button
              onClick={clearFilters}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center"
            >
              <X size={18} className="mr-1" />
              Clear Filters
            </button>
          </div>
        </div>


        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <div key={product.id} className={`p-4 flex flex-col justify-between`}>
                <div className="mb-2">
                  <img src={product.image} alt={product.name} className="object-cover rounded-md mb-2" />
                  <h3 className="font-bold text-black text-lg my-1">{product.name}</h3>
                  <p className="text-black text-sm">{product.brand}</p>
                  <p className="text-black text-sm">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
