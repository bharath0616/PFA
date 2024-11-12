import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SalaryCalculator() {
  const [formData, setFormData] = useState({
    ctc: 600000,
    bonusPercentage: 15,
    monthlyProfessionalTax: 200,
    monthlyEmployerPF: 1800,
    monthlyEmployeePF: 1800,
    monthlyAdditionalDeduction1: 0,
    monthlyAdditionalDeduction2: 0,
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: parseFloat(e.target.value),
    });
  };

  const calculateSalary = () => {
    const { ctc, bonusPercentage, monthlyProfessionalTax, monthlyEmployerPF, monthlyEmployeePF, monthlyAdditionalDeduction1, monthlyAdditionalDeduction2 } = formData;

    const bonus = (bonusPercentage / 100) * ctc;
    const annualGrossSalary = ctc - bonus;

    const monthlyDeductions = monthlyProfessionalTax + monthlyEmployerPF + monthlyEmployeePF + monthlyAdditionalDeduction1 + monthlyAdditionalDeduction2;
    const annualDeductions = monthlyDeductions * 12;

    const monthlyTakeHome = (annualGrossSalary / 12) - monthlyDeductions;
    const annualTakeHome = monthlyTakeHome * 12;

    setResults({
      monthlyDeductions,
      annualDeductions,
      monthlyTakeHome,
      annualTakeHome,
    });

    toast.success("Salary calculated successfully!");
  };

  return (
    <div className="ml-20 mr-20 mt-20" data-aos="fade-down">
      <Toaster />
      <h className="text-white font-bold text-5xl tracking-tight mb-20">
        Salary Calculator
      </h>
      <p className="text-white text-md mt-8">
        Enter the details to calculate your take-home salary, monthly and annual deductions.
      </p>

      <div className="container mx-auto px-4 mt-20">
        <form className="flex flex-col gap-10 p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2" data-aos="fade-right">
              <label htmlFor="ctc" className="text-white text-md">Cost to Company (CTC)</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="ctc"
                value={formData.ctc}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2" data-aos="fade-left">
              <label htmlFor="bonusPercentage" className="text-white text-md">Bonus Included in CTC (%)</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] shadow-md border-transparent rounded-full text-white"
                id="bonusPercentage"
                value={formData.bonusPercentage}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="flex flex-col gap-2" data-aos="fade-right">
              <label htmlFor="monthlyProfessionalTax" className="text-white text-md">Monthly Professional Tax</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="monthlyProfessionalTax"
                value={formData.monthlyProfessionalTax}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2" data-aos="fade-up">
              <label htmlFor="monthlyEmployerPF" className="text-white text-md">Monthly Employer PF</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="monthlyEmployerPF"
                value={formData.monthlyEmployerPF}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2" data-aos="fade-left">
              <label htmlFor="monthlyEmployeePF" className="text-white text-md">Monthly Employee PF</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="monthlyEmployeePF"
                value={formData.monthlyEmployeePF}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2" data-aos="fade-up">
              <label htmlFor="monthlyAdditionalDeduction1" className="text-white text-md">Monthly Additional Deduction (Optional)</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="monthlyAdditionalDeduction1"
                value={formData.monthlyAdditionalDeduction1}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2" data-aos="fade-up">
              <label htmlFor="monthlyAdditionalDeduction2" className="text-white text-md">Monthly Additional Deduction (Optional)</label>
              <input
                type="number"
                className="border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white"
                id="monthlyAdditionalDeduction2"
                value={formData.monthlyAdditionalDeduction2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={calculateSalary}
              className="bg-red-800 text-white p-3 rounded-full border-transparent hover:bg-gray-700 text-xs uppercase"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>

      {results && (
        <div className="flex flex-col justify-center mt-10">
          <div className="flex justify-around gap-4 mt-10 text-white">
            <div className="text-lg font-heading">
              <p>Total Monthly Deductions: ₹{results.monthlyDeductions.toLocaleString()}</p>
              <p>Total Annual Deductions: ₹{results.annualDeductions.toLocaleString()}</p>
              <p>Take Home Monthly Salary: ₹{results.monthlyTakeHome.toLocaleString()}</p>
              <p>Take Home Annual Salary: ₹{results.annualTakeHome.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
