import React from 'react'
import { useNavigate } from 'react-router-dom';

function Confirmation({ formData , setFormData}) {
    const navigate = useNavigate();
  
  const handleRestart = () => {
    setFormData({
      fullName: "",
      dateOfBirth: "",
      nationality: "",
      email: "",
      phone: "",
      departureDate: "",
      returnDate: "",
      accommodation: "",
      specialRequests: "",
      healthDeclaration: "",
      emergencyContact: "",
      medicalConditions: "",
    });
    navigate("/");
  };
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-none border-gray-300 text-gray-900 text-center">
    <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
    <p className="text-gray-600 mb-2">Thank you for applying for the Mars Visit!</p>
    <div className="relative bg-gray-100 p-4 rounded-lg mt-4 shadow-lg border border-gray-300">
      <h3 className="text-lg font-semibold">Your Details:</h3>
      <p><strong>Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Departure:</strong> {formData.departureDate}</p>
      <p><strong>Return:</strong> {formData.returnDate}</p>
      <p><strong>Accommodation:</strong> {formData.accommodation}</p>
    </div>
    <div className="flex justify-center space-x-4 mt-4">
      <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded shadow-md" onClick={() => alert("Form Submitted Successfully!")}>Submit</button>
      <button className="bg-red-600 hover:bg-red-500 text-white p-2 rounded shadow-md" onClick={handleRestart}>Fill Again</button>
    </div>
  </div>
  );
};

export default Confirmation;