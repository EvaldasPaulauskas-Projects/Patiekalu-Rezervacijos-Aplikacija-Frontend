import React, { useEffect, useState } from 'react';
import UserService from '../service/UserService';

export default function Dashboard() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.ourUsers);
    } catch (error) {
      console.error('Error fetching profile information:', error);
    }
  };

  return (
    <div>
      <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md mb-4">
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

      {/* Table for profile information */}
      <div className="w-full overflow-x-auto">
        <table className="table-auto border shadow-lg bg-white w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">
                <img className="max-w-xs" />
              </td>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">NULL</td>
              <td className="border px-4 py-2">Action Button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
