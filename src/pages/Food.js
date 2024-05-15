import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";

export default function Food() {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const isAdmin = UserService.isAdmin();

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    const result = await axios.get("http://localhost:8080/foods");
    setFoods(result.data);
  };

  const deleteFood = async (id) => {
    await axios.delete(`http://localhost:8080/food/${id}`);
    loadFoods();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.pavadinimas.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full overflow-x-auto mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
        />
      </div>
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
            {filteredFoods.map((food, index) => (
              <tr key={food.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{food.pavadinimas}</td>
                <td className="border px-4 py-2">{food.aprasymas}</td>
                <td className="border px-4 py-2">{food.kaina}</td>
                <td className="border px-4 py-2">
                  <img src={food.nuotrauka} alt={food.pavadinimas} className="max-w-xs" />
                </td>
                <td className="border px-4 py-2">{food.kiekis}</td>
                <td className="border px-4 py-2">{food.kategorija}</td>
                <td className="border px-4 py-2 flex justify-center">
                  {isAdmin ? (
                    <>
                      <Link className="btn btn-outline-primary mx-2 py-1 px-4 rounded-xl border border-blue-500 hover:border-blue-600 text-blue-500" to={`/edit-food/${food.id}`}>
                        Edit
                      </Link>
                      <button className="btn btn-danger mx-2 py-1 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white" onClick={() => deleteFood(food.id)}>
                        Delete
                      </button>
                    </>
                  ) : (
                    <button className="btn mx-2 py-1 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white">
                        Reserve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
