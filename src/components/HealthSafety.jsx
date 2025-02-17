import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useForm}  from "react-hook-form";

function HealthSafety({formData , setFormData}) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formData });
   const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    navigate("/confirmation");
};

  return (
    <div className="p-6 bg-white rounded-xl shadow-md shadow-zinc-800 border-none border-gray-300 text-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-center">Health and Safety</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">Health Declaration <span className="text-red-500">*</span></label>
        <select className="w-full p-2 border border-gray-400 rounded mb-3" {...register("healthDeclaration", { required: "Health declaration is required" })}>
          <option value="">Select an Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.healthDeclaration && <p className="text-red-500">{errors.healthDeclaration.message}</p>}
        
        <label className="block mb-2">Emergency Contact <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="text" placeholder="Emergency Contact" {...register("emergencyContact", { required: "Emergency contact is required" })} />
        {errors.emergencyContact && <p className="text-red-500">{errors.emergencyContact.message}</p>}
        
        <label className="block mb-2">Medical Conditions</label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="text" placeholder="Medical Conditions (if any)" {...register("medicalConditions")} />
        
        <div className="flex justify-between mt-4">
          <button className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded" type="button" onClick={() => navigate("/travel-preferences")}>Back</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded" type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default HealthSafety;