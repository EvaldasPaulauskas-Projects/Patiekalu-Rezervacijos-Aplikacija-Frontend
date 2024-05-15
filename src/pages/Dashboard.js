import React, { useEffect, useState } from 'react';
import UserService from '../service/UserService';


export default function Dashboard() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
}, []);

const fetchProfileInfo = async () => {
  try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      console.log(token + "TOKEN");
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
  } catch (error) {
      console.error('Error fetching profile information:', error);
  }
};

return (
  <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">
    <div className="flex items-center mb-4">
      <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
      <div>
        <p className="text-base font-semibold">{profileInfo.name}</p>
        <p className="text-xs text-gray-600">Name</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
      <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
      <div>
        <p className="text-base font-semibold">{profileInfo.email}</p>
        <p className="text-xs text-gray-600">Email</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
      <div>
        <p className="text-base font-semibold">{profileInfo.role}</p>
        <p className="text-xs text-gray-600">Role</p>
      </div>
    </div>
  </div>
);





}