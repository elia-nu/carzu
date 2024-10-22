import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faLock, faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch car details based on id
    // This is a mock implementation. Replace with actual API call.
    setCar({
      id: 1,
      title: 'Tesla Model 3',
      meta: 'Electric · 5 seats · 4.9 ★',
      price: 85,
      images: [
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      ],
      description: 'Experience the future of driving with this all-electric Tesla Model 3. Featuring autopilot capabilities, long-range battery, and a minimalist interior design.',
      features: ['Autopilot', 'All-electric', '15" touchscreen', 'Wireless charging', 'Premium audio system'],
      host: {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: '4.9 ★ Superhost',
      },
      location: [51.505, -0.09],
    });
  }, [id]);

  if (!car) return <div>Loading...</div>;

  const handleBookNow = () => {
    navigate('/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 hover:text-blue-700">
        &larr; Back to listings
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative">
            <img src={car.images[currentImageIndex]} alt={car.title} className="w-full h-96 object-cover rounded-lg" />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
              <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)} className="bg-white rounded-full p-2 shadow-md">
                &lt;
              </button>
              <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % car.images.length)} className="bg-white rounded-full p-2 shadow-md">
                &gt;
              </button>
            </div>
          </div>
          <div className="flex mt-4 space-x-2">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.title} - ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
          <p className="text-gray-600 mb-4">{car.meta}</p>
          <p className="text-2xl font-bold mb-4">${car.price} <span className="text-gray-500 text-lg font-normal">/ day</span></p>
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-2">Book this car</h3>
            <div className="flex space-x-4 mb-4">
              <input type="date" className="border rounded p-2 flex-grow" placeholder="Pick-up date" />
              <input type="date" className="border rounded p-2 flex-grow" placeholder="Drop-off date" />
            </div>
            <button onClick={handleBookNow} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Book Now
            </button>
          </div>
          <div className="mb-6">
            <div className="flex border-b">
              <button
                className={`py-2 px-4 ${activeTab === 'description' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'features' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2 border-blue-500' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
            <div className="py-4">
              {activeTab === 'description' && <p>{car.description}</p>}
              {activeTab === 'features' && (
                <ul className="list-disc pl-5">
                  {car.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'reviews' && <p>No reviews yet.</p>}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Car Location</h3>
            <MapContainer center={car.location} zoom={13} style={{ height: '300px' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={car.location}>
                <Popup>Car location</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About the host</h3>
            <div className="flex items-center">
              <img src={car.host.image} alt={car.host.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-medium">{car.host.name}</p>
                <p className="text-gray-600">{car.host.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment
    alert('Payment processed successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 hover:text-blue-700">
        &larr; Back to car details
      </button>
      <h2 className="text-2xl font-bold mb-4">Complete your booking</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</div>
            <span>Car Details</span>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</div>
            <span className="font-bold">Payment</span>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">3</div>
            <span className="text-gray-600">Confirmation</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Car:</span>
                <span className="font-medium">Tesla Model 3</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Dates:</span>
                <span className="font-medium">Jun 1, 2023 - Jun 5, 2023</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>$425</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <FontAwesomeIcon icon={faCreditCard} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="MM/YY"
                      required
                    />
                    <FontAwesomeIcon icon={faCalendarAlt} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="123"
                      required
                    />
                    <FontAwesomeIcon icon={faLock} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardholderName">
                  Cardholder Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    value={paymentDetails.cardholderName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="John Doe"
                    required
                  />
                  <FontAwesomeIcon icon={faUser} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billingAddress">
                  Billing Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    value={paymentDetails.billingAddress}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="123 Main St, City, Country"
                    required
                  />
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Confirm and Pay
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faLock} className="mr-1" />
              Secure Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CarDetail, Payment };
