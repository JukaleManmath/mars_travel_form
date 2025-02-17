import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useForm}  from "react-hook-form";

function TravelPreferences({formData , setFormData}) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formData });
    const onSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        navigate("/health-safety");
    };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md shadow-zinc-800 border-none border-gray-300 text-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-center">Travel Preferences</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">Departure Date <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="date" {...register("departureDate", { required: "Departure date is required" })} />
        {errors.departureDate && <p className="text-red-500">{errors.departureDate.message}</p>}
        
        <label className="block mb-2">Return Date <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="date" {...register("returnDate", { required: "Return date is required" })} />
        {errors.returnDate && <p className="text-red-500">{errors.returnDate.message}</p>}
        
        <label className="block mb-2">Accommodation Preference <span className="text-red-500">*</span></label>
        <select className="w-full p-2 border border-gray-400 rounded mb-3" {...register("accommodation", { required: "Accommodation selection is required" })}>
          <option value="">Select Accommodation</option>
          <option value="Space Hotel">Space Hotel</option>
          <option value="Martian Base">Martian Base</option>
        </select>
        {errors.accommodation && <p className="text-red-500">{errors.accommodation.message}</p>}
        
        <label className="block mb-2">Special Requests or Preferences</label>
        <textarea className="w-full p-2 border border-gray-400 rounded mb-3" placeholder="Special Requests or Preferences" {...register("specialRequests")} />
        
        <div className="flex justify-between mt-4">
          <button className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded" type="button" onClick={() => navigate("/")}>Back</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded" type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default TravelPreferences;