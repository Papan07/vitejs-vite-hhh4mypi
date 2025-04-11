// write the component code here
import React from 'react';

const Usercard = () => {
  // Static dummy data
  const profilePhoto = 'https://c.ndtvimg.com/2025-04/e1uk4fj8_virat-kohli-bcci_625x300_10_April_25.jpg?im=FeatureCrop,algorithm=dnn,width=306,height=200';
  const name = 'Virat Kohli';
  const email = 'virat.kohli@example.com';
  const phone = '2837XXXXX';
  const address = 'Benglore,India';

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4 mt-6">
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          src={profilePhoto}
          alt="Profile"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-3">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{email}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
        <p className="text-gray-600 text-sm text-center mt-2 px-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;

