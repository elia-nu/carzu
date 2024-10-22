import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const pickupDate = e.target.elements.pickupDate.value;
    const dropoffDate = e.target.elements.dropoffDate.value;
    
    console.log(`Searching for cars in ${location} from ${pickupDate} to ${dropoffDate}`);
    alert(`Searching for cars in ${location} from ${pickupDate} to ${dropoffDate}`);
  };

  const sampleCars = [



    { id: 1, name: 'Tesla Model 3', type: 'Electric', seats: 5, rating: 4.9, price: 85, image: 'tesla-model3.jpg' },
    { id: 2, name: 'BMW X5', type: 'SUV', seats: 7, rating: 4.7, price: 120, image: 'bmw-x5.jpg' },
    { id: 3, name: 'Mercedes-Benz C-Class', type: 'Luxury', seats: 5, rating: 4.8, price: 100, image: 'mercedes-c-class.jpg' },
    { id: 4, name: 'Tesla Model 3', type: 'Electric', seats: 5, rating: 4.9, price: 85, image: 'tesla-model3.jpg' },
    { id: 5, name: 'BMW X5', type: 'SUV', seats: 7, rating: 4.7, price: 120, image: 'bmw-x5.jpg' },
    { id: 6, name: 'Mercedes-Benz C-Class', type: 'Luxury', seats: 5, rating: 4.8, price: 100, image: 'mercedes-c-class.jpg' },
    { id: 7, name: 'Tesla Model 3', type: 'Electric', seats: 5, rating: 4.9, price: 85, image: 'tesla-model3.jpg' },
    { id: 8, name: 'BMW X5', type: 'SUV', seats: 7, rating: 4.7, price: 120, image: 'bmw-x5.jpg' },
    { id: 9, name: 'Mercedes-Benz C-Class', type: 'Luxury', seats: 5, rating: 4.8, price: 100, image: 'mercedes-c-class.jpg' },

 

 ];

  return (
    <div className="font-sans text-gray-900 bg-white ">
      <main>
        <section className="bg-cover bg-center h-screen md:h-[70vh]  flex items-center flex-col justify-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"}}>
          <div className="absolute inset-0 bg-black/20 opacity-80"></div>
          <div className="z-10 text-center text-white mb-8 ">
            <h1 className="text-5xl font-bold mb-4 ">Find Your Perfect Ride</h1>
            <p className="text-xl mb-8">Discover the freedom of car sharing with CarShare</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-xl z-10 w-full max-w-4xl">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input type="text" name="location" placeholder="Where are you going?" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="date" name="pickupDate" placeholder="Pick-up date" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="date" name="dropoffDate" placeholder="Drop-off date" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <button type="submit" className="bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 w-full md:w-auto">Search Cars</button>
            </form>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold mb-8">Popular Cars Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sampleCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => navigate(`/car/${car.id}`)}>
                <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h3 className="font-semibold text-base mb-1">{car.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">{car.type} · {car.seats} seats · {car.rating} ★</p>
                  <p className="font-semibold text-sm">${car.price} / day</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between">
            {['Electric', 'Luxury', 'SUVs', 'Convertibles'].map((category) => (
              <div key={category} className="text-center">
                <img src={`${category.toLowerCase()}.jpg`} alt={category} className="w-24 h-24 rounded-lg mb-2" />
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-cover bg-center py-20 mt-12" style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"}}>
          <div className="container mx-auto px-4">
            <div className="bg-white bg-opacity-90 p-12 rounded-lg text-center">
              <h2 className="text-4xl font-bold mb-4">Share your car, earn extra income</h2>
              <p className="text-xl mb-8">Turn your car into a money-making machine when you're not using it.2</p>
              <Link to="/rent-your-car" className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300">Learn more</Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
