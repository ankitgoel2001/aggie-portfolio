import { useState } from 'react';
import { FormInput } from './types';
import './InputForm.css';


interface InputFormProps {
  onSubmit: (data: FormInput) => void;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  const [formData, setFormData] = useState<FormInput>({
    name: '',
    email: '',
    phone: '',
    photo: '',
    location: '',
    year: '',
    major: '',
    gradDate: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/aggie-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to generate Aggie Card');
      }

      // Call the onSubmit callback with the form data
      onSubmit(formData);
    } catch (error) {
      console.error(error);
      // Display error message to user
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Photo URL:
          <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>
          Year in College:
          <input type="text" name="year" value={formData.year} onChange={handleChange} />
        </label>
        <label>
          Major:
          <input type="text" name="major" value={formData.major} onChange={handleChange} />
        </label>
        <label>
          Graduation Date:
          <input type="text" name="gradDate" value={formData.gradDate} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputForm;




