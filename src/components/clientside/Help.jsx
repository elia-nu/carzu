import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faUserCircle, faCalendarAlt, faCreditCard, faShieldAlt, faExclamationTriangle, faChevronDown, faChevronUp, faSearch, faCar, faKey, faWallet } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const sidebarItems = [
    { id: 'getting-started', icon: faPlayCircle, text: 'Getting Started' },
    { id: 'account', icon: faUserCircle, text: 'Account' },
    { id: 'booking', icon: faCalendarAlt, text: 'Booking' },
    { id: 'payments', icon: faCreditCard, text: 'Payments' },
    { id: 'insurance', icon: faShieldAlt, text: 'Insurance' },
    { id: 'safety', icon: faExclamationTriangle, text: 'Safety' },
  ];

  const categories = [
    { icon: faCar, title: "Renting a Car", description: "Learn about the car rental process, policies, and what to expect." },
    { icon: faKey, title: "Hosting", description: "Get information on listing your car and managing rentals." },
    { icon: faWallet, title: "Payments", description: "Understand pricing, fees, and payment methods." },
    { icon: faShieldAlt, title: "Safety & Insurance", description: "Learn about our safety measures and insurance coverage." },
  ];

  const faqSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner of our homepage. Fill in your personal information, verify your email address, and you\'re ready to go!',
        },
        {
          question: 'What documents do I need to rent a car?',
          answer: 'You\'ll need a valid driver\'s license, proof of insurance, and a credit card for the security deposit. Some car owners may require additional documentation.',
        },
      ],
    },
    {
      id: 'account',
      title: 'Account',
      items: [
        {
          question: 'How do I reset my password?',
          answer: 'Go to the login page and click on "Forgot Password". Enter your email address, and we\'ll send you instructions to reset your password.',
        },
        {
          question: 'Can I change my email address?',
          answer: 'Yes, you can change your email address in your account settings. Make sure to verify your new email address after making the change.',
        },
      ],
    },
    {
      id: 'booking',
      title: 'Booking',
      items: [
        {
          question: 'How do I book a car?',
          answer: 'Search for available cars in your area, select the dates you need, and click "Book Now". Review the details and confirm your booking. You\'ll receive a confirmation email with all the necessary information.',
        },
        {
          question: 'Can I cancel my booking?',
          answer: 'Yes, you can cancel your booking, but cancellation policies vary depending on the car owner and how close you are to the rental start date. Check the cancellation policy for your specific booking in your account.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      items: [
        {
          question: 'What payment methods are accepted?',
          answer: 'We accept major credit cards, debit cards, and PayPal. Some locations may also offer other local payment options.',
        },
        {
          question: 'When will I be charged for my rental?',
          answer: 'You\'ll typically be charged when you pick up the car. For some bookings, a hold or authorization may be placed on your card at the time of reservation.',
        },
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      items: [
        {
          question: 'Is insurance included with my rental?',
          answer: 'Basic insurance is included with all rentals. You can choose to upgrade to more comprehensive coverage for an additional fee.',
        },
        {
          question: 'What does the insurance cover?',
          answer: 'Our basic insurance typically covers collision damage and theft protection. For full details, please check the specific policy for your rental.',
        },
      ],
    },
    {
      id: 'safety',
      title: 'Safety',
      items: [
        {
          question: 'What safety measures are in place for rentals?',
          answer: 'We verify all users, conduct regular vehicle inspections, and offer 24/7 roadside assistance. We also have a dedicated support team to handle any safety concerns.',
        },
        {
          question: 'What should I do in case of an accident?',
          answer: 'In case of an accident, ensure everyone`s safety first, then contact local authorities if necessary. After that, contact our support team immediately for further assistance.',
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const filteredFAQs = faqSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 max-w-screen-xl mx-auto">
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-500 mb-6">How can we help you?</h1>
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                className="w-full p-4 pr-12 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                placeholder="Search for help topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                <FontAwesomeIcon icon={category.icon} className="text-4xl text-red-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-64">
              <ul>
                {sidebarItems.map((item) => (
                  <li key={item.id} className="mb-2">
                    <a href={`#${item.id}`} className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                      <FontAwesomeIcon icon={item.icon} className="text-red-500 mr-3" />
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="flex-1">
              {filteredFAQs.map((section) => (
                <section key={section.id} id={section.id} className="mb-8">
                  <h2 className="text-2xl font-semibold text-teal-600 mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h3 className="text-lg font-medium">{item.question}</h3>
                          <FontAwesomeIcon icon={activeAccordion === index ? faChevronUp : faChevronDown} />
                        </button>
                        {activeAccordion === index && (
                          <div className="p-4 bg-white">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <section className="bg-gray-100 rounded-lg p-8 text-center mt-16">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">Still need help?</h2>
            <p className="text-xl text-gray-600 mb-6">Our support team is always ready to assist you with any questions or concerns.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
              Contact Support
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Help;
