import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useForm}  from "react-hook-form";

function PersonalInfo({formData , setFormData}) {
    const navigate = useNavigate();
    const { register, handleSubmit , formState: {errors}} = useForm({ defaultValues: formData });
    const onSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        navigate("/travel-preferences");
    };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md shadow-zinc-800 border-none border-gray-300 text-gray-900 ">
      <h2 className="text-2xl font-semibold mb-4 text-center">Personal Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">Full Name <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="text" placeholder="Full Name" {...register("fullName", { required: "Full name is required" })} />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        
        <label className="block mb-2">Date of Birth <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="date" {...register("dateOfBirth", { required: "Date of birth is required",
            validate: value => {
                const birthDate = new Date(value);
                const age = new Date().getFullYear() - birthDate.getFullYear();
                return age >= 18 || "You must be at least 18 years old";
              }
        })} />
        {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth.message}</p>}
        
        <label className="block mb-2">Nationality <span className="text-red-500">*</span></label>
        <select className="w-full p-2 border border-gray-400 rounded mb-3" {...register("nationality", { required: "Nationality is required" })} >
        <option value="">Select Nationality</option>
          <option value="American">American</option>
          <option value="Canadian">Canadian</option>
          <option value="Indian">Indian</option>
          <option value="British">British</option>
          <option value="Other">Other</option>
        </select>
        {errors.nationality && <p className="text-red-500">{errors.nationality.message}</p>}
        
        <label className="block mb-2">Email <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <label className="block mb-2">Phone <span className="text-red-500">*</span></label>
        <input className="w-full p-2 border border-gray-400 rounded mb-3" type="tel" placeholder="Phone" {...register("phone", { required: "Phone number is required" })} />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        
        <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded w-full" type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalInfo;