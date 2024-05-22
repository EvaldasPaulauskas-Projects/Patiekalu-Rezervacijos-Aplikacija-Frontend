import React, { useEffect, useState } from 'react';
import UserService from '../service/UserService';

export default function Dashboard() {
  const [profileInfo, setProfileInfo] = useState({});
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem('token');
      const profileResponse = await UserService.getYourProfile(token);
      setProfileInfo(profileResponse.ourUsers);

      const reservationsResponse = await UserService.getReservationsByUserId(profileResponse.ourUsers.id, token);
      setReservations(reservationsResponse);
    } catch (error) {
      console.error('Error fetching profile information:', error);
    }
  };

  const handleUnreserve = async (reservationId) => {
    try {
      const token = localStorage.getItem('token');
      await UserService.deleteReservationById(reservationId, token);
      setReservations(reservations.filter(reservation => reservation.id !== reservationId));
    } catch (error) {
      console.error('Error deleting reservation:', error);
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

      {/* Table for reservations */}
      <h1 className='text-2xl font-bold ml-4'>Reserved Foods :</h1>
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
            {reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <tr key={reservation.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{reservation.pavadinimas}</td>
                  <td className="border px-4 py-2">{reservation.aprasymas}</td>
                  <td className="border px-4 py-2">{reservation.kaina}</td>
                  <td className="border px-4 py-2">
                    <img className="max-w-xs" src={reservation.nuotrauka} alt="Reservation" />
                  </td>
                  <td className="border px-4 py-2">{reservation.kiekis}</td>
                  <td className="border px-4 py-2">{reservation.kategorija}</td>
                  <td className="border px-4 py-2 flex items-center justify-center">
                    <button 
                      className="btn mx-2 py-1 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => handleUnreserve(reservation.id)}
                    >
                      Unreserve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="border px-4 py-2 text-center">No reservations found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
