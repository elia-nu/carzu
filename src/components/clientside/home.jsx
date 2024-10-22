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
    { id: 1, name: 'Tesla Model 3', type: 'Electric', seats: 5, rating: 4.9, price: 85, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'BMW X5', type: 'SUV', seats: 7, rating: 4.7, price: 120, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Mercedes-Benz C-Class', type: 'Luxury', seats: 5, rating: 4.8, price: 100, image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBjJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Audi A4', type: 'Sedan', seats: 5, rating: 4.6, price: 95, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaSUyMGE0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Toyota RAV4', type: 'SUV', seats: 5, rating: 4.5, price: 80, image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwcmF2NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Ford Mustang', type: 'Sports', seats: 4, rating: 4.7, price: 110, image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Chevrolet Bolt', type: 'Electric', seats: 5, rating: 4.6, price: 75, image: 'https://images.unsplash.com/photo-1566443280617-35db331c54fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hldnJvbGV0JTIwYm9sdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 8, name: 'Lexus RX', type: 'Luxury SUV', seats: 5, rating: 4.8, price: 130, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxleHVzJTIwcnh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 9, name: 'Honda Civic', type: 'Compact', seats: 5, rating: 4.5, price: 70, image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 10, name: 'Volvo XC90', type: 'SUV', seats: 7, rating: 4.9, price: 140, image: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdm8lMjB4YzkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 11, name: 'Porsche 911', type: 'Sports', seats: 4, rating: 5.0, price: 200, image: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 12, name: 'Nissan Leaf', type: 'Electric', seats: 5, rating: 4.4, price: 65, image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlzc2FuJTIwbGVhZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 13, name: 'Jeep Wrangler', type: 'Off-road', seats: 5, rating: 4.6, price: 100, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVlcCUyMHdyYW5nbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 14, name: 'Hyundai Sonata', type: 'Sedan', seats: 5, rating: 4.5, price: 80, image: 'https://images.unsplash.com/photo-1629421889558-e2315ffc869d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHl1bmRhaSUyMHNvbmF0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 15, name: 'Mazda CX-5', type: 'SUV', seats: 5, rating: 4.7, price: 90, image: 'https://images.unsplash.com/photo-1612356700139-ba3b20f5f468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF6ZGElMjBjeDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 16, name: 'Kia Telluride', type: 'SUV', seats: 8, rating: 4.8, price: 110, image: 'https://images.unsplash.com/photo-1601066525716-3cca33c6d4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwdGVsbHVyaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 17, name: 'Subaru Outback', type: 'Wagon', seats: 5, rating: 4.6, price: 85, image: 'https://images.unsplash.com/photo-1626443252351-4f3a387d6d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ViYXJ1JTIwb3V0YmFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 18, name: 'Volkswagen Golf', type: 'Hatchback', seats: 5, rating: 4.5, price: 75, image: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sa3N3YWdlbiUyMGdvbGZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 19, name: 'Jaguar F-PACE', type: 'Luxury SUV', seats: 5, rating: 4.7, price: 150, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFndWFyJTIwZiUyMHBhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 20, name: 'Mini Cooper', type: 'Compact', seats: 4, rating: 4.4, price: 70, image: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWluaSUyMGNvb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="font-sans text-gray-900  ">
      <main>
        <section className=" min-h-full h-fit md:h-[80vh] bg-black/50 bb-12 md:mb-0  flex items-center flex-col justify-center relative " >
     
          <div className="z-10 text-center text-white mb-8 mt-10 ">
            <h1 className="text-4xl mx-4 md:text-5xl font-bold mb-4 ">Find Your Perfect Ride</h1>
            <p className="text-md mx-4 md:text-xl mb-8">Discover the freedom of car sharing with CarShare</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-xl z-10 w-full max-w-4xl mb-12">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input type="text" name="location" placeholder="Where are you going?" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="date" name="pickupDate" placeholder="Pick-up date" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="date" name="dropoffDate" placeholder="Drop-off date" className="border border-gray-300 rounded-md text-sm p-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <button type="submit" className="bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 w-full md:w-auto">Search Cars</button>
            </form>
          </div>
        </section>

        <div className='bg-white'>
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold font-roboto-slab">Popular Cars Nearby</h2>
            <button onClick={() => navigate('/all-cars')} className="text-red-500 hover:text-red-600 font-semibold">
              See more
            </button>
          </div>
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
        {/*
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
        */}
</div>
        <section className="bg-cover bg-center py-20 mt-12 bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"}}>
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
