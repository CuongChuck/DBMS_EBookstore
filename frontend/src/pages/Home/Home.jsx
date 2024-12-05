import React from 'react';
import Image from '../../component/Image';

const products = [
  {
    id: 1,
    name: "CONAN",
    price: "25.000đ",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpua2zi70jbm1b",
  },
  {
    id: 2,
    name: "GIỚI HẠN CỦA SỨ MỆNH VÀ LINH HỒN",
    price: "170.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/gioi-han-cua-su-menh-va-linh-hon-01.jpg?v=1731407323940",
  },
  {
    id: 3,
    name: "VƯỜN HOA XẾP GỖ",
    price: "169.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/vuon-hoa-xep-go-01.jpg?v=1731407337413",
  },
  {
    id: 4,
    name: "LỊCH SỬ VIỆC LÀM",
    price: "200.000đ",
    image: "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/lich-su-viec-lam-01.jpg?v=1731407307480",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Image className="w-full h-auto" />

      <div className="w-full py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Best Seller</h2>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{product.price}</p>
                <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full py-8 bg-gray-200">
        <p className="text-center text-gray-600">© 2024 E-Bookstore. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;