import { useState } from 'react';

type Product = {
  name: string;
  brand: string;
  brandType: string;
  productType: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
    unit: string;
  };
  price: string;
  currency: string;
  image: File | null;
};

export default function ProductAddPage() {
  const [product, setProduct] = useState<Product>({
    name: '',
    brand: '',
    brandType: '',
    productType: '',
    dimensions: {
      length: '0000',
      width: '0000',
      height: '0000',
      unit: 'sm'
    },
    price: '000000000',
    currency: 'som',
    image: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('dimensions.')) {
      const dimensionField = name.split('.')[1];
      setProduct(prev => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [dimensionField]: value
        }
      }));
    } else {
      setProduct(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProduct(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the data to your backend
    console.log('Submitting product:', product);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mahsulot muvaffaqiyatli qo\'shildi!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mahsulot qo'shish</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 sm:p-8">
          {/* Product Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mahsulot nomi</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Mahsulot nomini kiriting
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Mahsulot nomi"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Mahsulot brendi
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={product.brand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Brend nomi"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="brandType" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand turini yozing
                </label>
                <input
                  type="text"
                  id="brandType"
                  name="brandType"
                  value={product.brandType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Brand turi"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                  Mahsulot turini tanlang
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={product.productType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="elektronika">Elektronika</option>
                  <option value="kiyim">Kiyim</option>
                  <option value="oziq-ovqat">Oziq-ovqat</option>
                  <option value="mebel">Mebellar</option>
                  <option value="sport">Sport anjomlari</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Dimensions Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">O'lchamlari</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="dimensions.length" className="block text-sm font-medium text-gray-700 mb-1">
                  Uzunlik
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="dimensions.length"
                    name="dimensions.length"
                    value={product.dimensions.length}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                  <span className="inline-flex items-center px-3 rounded-r-md bg-gray-50 text-gray-500 border border-l-0 border-gray-300">
                    sm
                  </span>
                </div>
              </div>
              
              <div>
                <label htmlFor="dimensions.width" className="block text-sm font-medium text-gray-700 mb-1">
                  Kenglik
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="dimensions.width"
                    name="dimensions.width"
                    value={product.dimensions.width}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                  <span className="inline-flex items-center px-3 rounded-r-md bg-gray-50 text-gray-500 border border-l-0 border-gray-300">
                    sm
                  </span>
                </div>
              </div>
              
              <div>
                <label htmlFor="dimensions.height" className="block text-sm font-medium text-gray-700 mb-1">
                  Balandlik
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="dimensions.height"
                    name="dimensions.height"
                    value={product.dimensions.height}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                  <span className="inline-flex items-center px-3 rounded-r-md bg-gray-50 text-gray-500 border border-l-0 border-gray-300">
                    sm
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Price Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mahsulot narxi</h2>
            
            <div className="flex items-center">
              <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required
              />
              <span className="inline-flex items-center px-4 py-2 rounded-r-md bg-gray-50 text-gray-500 border border-l-0 border-gray-300">
                {product.currency}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Image Upload Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Rasm qo'shish</h2>
            
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Rasmni yuklash uchun bosing</span> yoki sudrab olib keling
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG yoki GIF (MAX. 5MB)
                  </p>
                </div>
                <input
                  id="image"
                  name="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            
            {product.image && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">Tanlangan fayl: {product.image.name}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Jo'natilmoqda...
                </span>
              ) : (
                "Qo'shish"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}