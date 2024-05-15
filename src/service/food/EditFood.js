import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditFood() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [food, setFood] = useState({
    pavadinimas: "",
    aprasymas: "",
    kaina: "",
    nuotrauka: "",
    kiekis: "",
    kategorija: ""
  });

  const { pavadinimas, aprasymas, kaina, nuotrauka, kiekis, kategorija } = food;

  const onInputChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadFood();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/food/${id}`, food);
    navigate("/food");
  };

  const loadFood = async () => {
    const result = await axios.get(`http://localhost:8080/food/${id}`);
    setFood(result.data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="w-full p-4">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Edit Food</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-4">
                <label htmlFor="pavadinimas" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter food name"
                  name="pavadinimas"
                  value={pavadinimas}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="aprasymas" className="block text-gray-700 font-bold mb-2">Description</label>
                <input
                  type="text"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter food description"
                  name="aprasymas"
                  value={aprasymas}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kaina" className="block text-gray-700 font-bold mb-2">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter food price"
                  name="kaina"
                  value={kaina}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kiekis" className="block text-gray-700 font-bold mb-2">Quantity</label>
                <input
                  type="number"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter quantity available"
                  name="kiekis"
                  value={kiekis}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kategorija" className="block text-gray-700 font-bold mb-2">Category</label>
                <input
                  type="text"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter food category"
                  name="kategorija"
                  value={kategorija}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="nuotrauka" className="block text-gray-700 font-bold mb-2">Image URL</label>
                <input
                  type="text"
                  className="form-input border-2 border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter URL of food image"
                  name="nuotrauka"
                  value={nuotrauka}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Submit</button>
                <Link className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" to="/">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
