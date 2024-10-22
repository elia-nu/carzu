import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faShieldAlt, faCalendarAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const RentYourCar = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const benefits = [
    { icon: faMoneyBillWave, title: "Earn Extra Income", description: "Make money from your car when you're not using it. Our hosts earn an average of $500 per month." },
    { icon: faShieldAlt, title: "Insurance Coverage", description: "Rest easy with our comprehensive insurance coverage for every rental, protecting you and your vehicle." },
    { icon: faCalendarAlt, title: "Flexible Scheduling", description: "You're in control. Set your own availability and pricing to fit your lifestyle and preferences." },
  ];

  const steps = [
    { number: 1, title: "List Your Car", description: "Create a free listing with photos, pricing, and availability." },
    { number: 2, title: "Accept Bookings", description: "Review and approve rental requests from verified renters." },
    { number: 3, title: "Get Paid", description: "Earn money securely through our platform after each completed rental." },
  ];

  const testimonials = [
    { content: "CarShare has been a game-changer for me. I'm able to offset my car payments and even save extra money each month. The process is so simple, and the support team is fantastic!", author: "Sarah J.", location: "Los Angeles, CA", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { content: "I was skeptical at first, but CarShare has exceeded my expectations. The extra income has helped me pay off debts, and I've met some great people along the way. Highly recommended!", author: "Michael T.", location: "New York, NY", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  ];

  const faqs = [
    { question: "Is my car eligible for CarShare?", answer: "Most cars are eligible for CarShare. Generally, your car should be in good condition, have a clean title, and be no more than 12 years old. Some luxury and specialty vehicles may have different requirements." },
    { question: "How much can I earn?", answer: "Your earnings depend on various factors, including your car's make and model, your location, and how often you rent it out. On average, hosts earn $500 per month, but some earn significantly more." },
    { question: "How does insurance work?", answer: "CarShare provides comprehensive insurance coverage for every rental. This includes liability protection, collision coverage, and 24/7 roadside assistance. Your personal insurance is not affected by renting out your car." },
    { question: "How do I get paid?", answer: "You'll receive payments directly to your bank account within 3-5 business days after each completed rental. We handle all the payment processing securely through our platform." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 max-w-screen-xl mx-auto">
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Turn Your Car into Cash</h1>
              <p className="text-xl mb-8">Join thousands of car owners who are earning extra income by renting out their vehicles on CarShare. It's easy, secure, and flexible.</p>
              <a href="/signup" className="inline-block px-8 py-4 bg-red-500 text-white rounded-full font-semibold text-lg transition duration-300 hover:bg-red-600">Get Started</a>
            </div>
            <div className="flex-1">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Happy car owner with keys" className="w-full rounded-lg shadow-lg" />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-8 text-center transition duration-300 hover:shadow-lg hover:-translate-y-1">
                <FontAwesomeIcon icon={benefit.icon} className="text-4xl text-red-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className="w-16 h-16 bg-red-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-100 py-16 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Hosts Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                  <p className="text-lg italic mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`transition-transform duration-300 ${faqOpen[index] ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                  {faqOpen[index] && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RentYourCar;