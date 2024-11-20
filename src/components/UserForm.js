import React, { useState, useEffect } from 'react';
import { addUser, updateUser } from '../services/api';
import { toast } from 'react-toastify';

const UserForm = ({ user, onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        department: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await updateUser(user.id, formData);
        toast.success('User updated successfully');
      } else {
        await addUser(formData);
        toast.success('User added successfully');
      }
      onSuccess();
      onClose();
    } catch (error) {
      toast.error('Failed to save user');
    }
  };

  return (
    <div>
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <button type="submit" className='add-btn'>{user ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
