import React from 'react';
import { FaBell, FaShoppingCart, FaServer, FaCreditCard, FaUnlock, FaClipboardList } from 'react-icons/fa';

const OrdersOverview = () => {
  const orders = [
    {
      id: 1,
      icon: <FaBell className="text-green-500" />,
      description: '$2400, Design changes',
      date: '22 DEC 7:20 PM',
    },
    {
      id: 2,
      icon: <FaShoppingCart className="text-red-500" />,
      description: 'New order #1832412',
      date: '21 DEC 11 PM',
    },
    {
      id: 3,
      icon: <FaServer className="text-blue-500" />,
      description: 'Server payments for April',
      date: '21 DEC 9:34 PM',
    },
    {
      id: 4,
      icon: <FaCreditCard className="text-orange-500" />,
      description: 'New card added for order #4395133',
      date: '20 DEC 2:20 AM',
    },
    {
      id: 5,
      icon: <FaUnlock className="text-pink-500" />,
      description: 'Unlock packages for development',
      date: '18 DEC 4:54 AM',
    },
    {
      id: 6,
      icon: <FaClipboardList className="text-blue-500" />,
      description: 'New order #9583120',
      date: '17 DEC',
    },
  ];

  return (
    <div className=''> 
      <h3 className="text-xl font-semibold mb-2">Orders overview</h3>
      <p className="text-sm text-gray-500 mb-4">24% this month</p>
      <ul className="relative z-9 space-y-6">
        <div className="line" ></div>
        {orders.map((order) => (
          <li key={order.id} className="flex items-start">
            <div className="mr-4">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                {order.icon}
              </div>
              <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
            </div>
            <div>
              <p className="text-sm font-medium">{order.description}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersOverview;
