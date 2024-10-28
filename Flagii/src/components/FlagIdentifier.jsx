import React, { useState } from 'react';
import axios from 'axios';
import { FaHome, FaUpload } from 'react-icons/fa'; // Import an icon from react-icons (optional)
import { Link } from 'react-router-dom';

const FlagIdentifier = () => {
  const [image, setImage] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setError(''); // Clear previous error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);
    try {
      const response = await axios.post('YOUR_GEMINI_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCountryInfo(response.data); // Adjust according to your API response structure
    } catch (error) {
      setError('Error fetching country info. Please try again.');
      console.error('Error fetching country info:', error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input click when the icon or button is clicked
  const triggerFileInput = () => {
    document.getElementById('hiddenFileInput').click();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-slate-800 to-blue-900">
      <section className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-2xl mx-auto max-w-xl">
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">Identify the Country</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">

          {/* Hidden file input */}
          <input
            type="file"
            id="hiddenFileInput"
            accept="image/*"
            onChange={handleChange}
            style={{ display: 'none' }} // Hide the default file input
          />

          {/* Custom icon or button to trigger the file upload */}
          <div
            onClick={triggerFileInput}
            className="flex flex-col items-center cursor-pointer mb-4"
          >
            <FaUpload className="text-6xl text-yellow-400 hover:text-yellow-300 mb-2" /> {/* Icon for upload */}
            <p className="text-white text-lg font-bold">Click to upload an image</p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-white font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform duration-300 hover:scale-105"
          >
            Upload and Identify
          </button>
        </form>

        {loading && <p className="mt-4 text-white text-center">Loading...</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {countryInfo && (
          <div className="mt-4 text-white text-center">
            <h3 className="text-xl font-semibold text-white">Country Information:</h3>
            <p><strong>Country:</strong> {countryInfo.name}</p>
            <p><strong>Capital:</strong> {countryInfo.capital}</p>
            <p><strong>President:</strong> {countryInfo.president}</p>
            <p><strong>Currency:</strong> {countryInfo.currency}</p>
          </div>
        )}
      </section>
      <Link to="/">
        <button className='bg-yellow-400 px-5 py-4 rounded-full fixed top-2 right-2'><FaHome className='text-white' /></button>
      </Link>
    </div>
  );
};

export default FlagIdentifier;
