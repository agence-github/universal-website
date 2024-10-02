import React, { useState } from 'react';
import axios from 'axios';

const InputField = ({ type, name, placeholder, value, onChange, required = false }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F] p-2"
    placeholder={placeholder}
    required={required}
  />
);

const SelectField = ({ name, options, defaultOption, value, onChange, required = false }) => (
  <select 
    name={name}
    value={value}
    onChange={onChange}
    className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F] p-2"
    required={required}
  >
    <option value="">{defaultOption}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

const FormRow = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{children}</div>
);

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C49E5F]"></div>
  </div>
);

const Alert = ({ message, type }) => (
  <div className={`p-4 mb-4 text-sm rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} role="alert">
    {message}
  </div>
);

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    fatherOrHusbandName: '',
    gender: '',
    maritalStatus: '',
    city: '',
    state: '',
    email: '',
    phone: '',
    experience: '',
    areaOfInterest: '',
    qualification: '',
    cvLink: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);

    try {
      const response = await axios.post('https://universal-backend-ga13.onrender.com/submit-career-form', formData);
      setAlert({ message: 'Form submitted successfully!', type: 'success' });
      console.log(response.data);
     
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        fatherOrHusbandName: '',
        gender: '',
        maritalStatus: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        experience: '',
        areaOfInterest: '',
        qualification: '',
        cvLink: '',
        message: ''
      });
    } catch (error) {
      setAlert({ message: 'Error submitting form. Please try again.', type: 'error' });
      console.error('Error:', error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f3ee] flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        {alert && <Alert message={alert.message} type={alert.type} />}
        
        <FormRow>
          <InputField type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <InputField type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
          <InputField type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </FormRow>

        <FormRow>
          <InputField type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
          <InputField type="text" name="fatherOrHusbandName" placeholder="Father's/Husband's Name" value={formData.fatherOrHusbandName} onChange={handleChange} required />
          <SelectField 
            name="gender"
            options={['Male', 'Female', 'Other']} 
            defaultOption="Select Gender" 
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow>
          <SelectField 
            name="maritalStatus"
            options={['Single', 'Married']} 
            defaultOption="--Marital Status--" 
            value={formData.maritalStatus}
            onChange={handleChange}
            required
          />
          <InputField type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <InputField type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        </FormRow>

        <FormRow>
          <InputField type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required />
          <InputField type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <InputField type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
        </FormRow>

        <FormRow>
          <InputField type="text" name="areaOfInterest" placeholder="Area of Interest" value={formData.areaOfInterest} onChange={handleChange} required />
          <InputField type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
          <InputField type="url" name="cvLink" placeholder="Your CV link" value={formData.cvLink} onChange={handleChange} required />
        </FormRow>

        <div className="grid grid-cols-1 gap-10">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full bg-[#f9f3ee] border-b-2 border-b-[#C49E5F] p-2"
            placeholder="Message"
            maxLength={1000}
            required
          ></textarea>
        </div>

        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="px-10 py-4 border-[#C49E5F] border-2 mt-4 hover:text-white text-[#B38D4E] rounded-full hover:bg-[#B38D4E] transition duration-300 text-xl"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;