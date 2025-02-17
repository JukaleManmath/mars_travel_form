import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import TravelPreferences from "./components/TravelPreferences";
import HealthSafety from "./components/HealthSafety";
import Confirmation from "./components/Confirmation";

const App = () => {
  const [formData, setFormData] = useState({
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

  return (
    <Router>
      <div className="min-h-screen bg-[url(./img/mars.jpg)] bg-cover bg-center bg-no-repeat py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl opacity-80"></div>
          <div className="relative px-4 py-10 bg-white bg-opacity-80 shadow-lg sm:rounded-3xl sm:p-20 backdrop-blur-md">
            <div className="max-w-3xl mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center"> Mars Visit Application</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
                  <Routes>
                    <Route path="/" element={<PersonalInfo formData={formData} setFormData={setFormData} />} />
                    <Route path="/travel-preferences" element={<TravelPreferences formData={formData} setFormData={setFormData} />} />
                    <Route path="/health-safety" element={<HealthSafety formData={formData} setFormData={setFormData} />} />
                    <Route path="/confirmation" element={<Confirmation formData={formData} setFormData={setFormData} />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
