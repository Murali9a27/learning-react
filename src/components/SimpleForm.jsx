import React, { useState } from 'react';

function SimpleForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${formData.name}, your form was submitted successfully`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter your name"
                />
                <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                />
                <button type="submit" disabled={!formData.email}>Submit</button>
            </form>
        </>
    );
}

export default SimpleForm;
