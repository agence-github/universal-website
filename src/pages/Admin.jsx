import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrashIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

const API_URL = 'http://localhost:5000';

const Admin = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get(`${API_URL}/career-forms`);
      setForms(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching forms:', error);
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await axios.put(`${API_URL}/career-forms/${id}/mark-as-read`);
      fetchForms();
    } catch (error) {
      console.error('Error marking form as read:', error);
    }
  };

  const deleteForm = async (id) => {
    try {
      await axios.delete(`${API_URL}/career-forms/${id}`);
      fetchForms();
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Career Form Submissions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <div key={form._id} className={`bg-white rounded-lg shadow-md p-6 ${form.isRead ? 'opacity-75' : ''}`}>
            <h2 className="text-xl font-semibold mb-2">{`${form.firstName} ${form.lastName}`}</h2>
            <p className="text-gray-600 mb-2">{form.email}</p>
            <p className="text-gray-600 mb-2">{form.phone}</p>
            <p className="text-gray-600 mb-4">{new Date(form.createdAt).toLocaleDateString()}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => markAsRead(form._id)}
                className={`px-4 py-2 rounded-full ${form.isRead ? 'bg-gray-200 text-gray-600' : 'bg-blue-500 text-white'} flex items-center`}
              >
                {form.isRead ? <EyeOffIcon className="w-4 h-4 mr-2" /> : <EyeIcon className="w-4 h-4 mr-2" />}
                {form.isRead ? 'Mark as Unread' : 'Mark as Read'}
              </button>
              <button
                onClick={() => deleteForm(form._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-full flex items-center"
              >
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;