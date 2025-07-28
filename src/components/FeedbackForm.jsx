import React, { useState } from 'react'

function FeedbackForm() {
    const [formData, setFormData] = useState({name:"", email:"", message:""})
    const handleChange = (e)=>{
        const { name, value} = e.target;

        setFormData(prev =>({
            ...prev,
            [name]: value
        }))


    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Thanks ${formData.name}, Your data is submitted Successfully`);
        setFormData({name:"", email:"", message:""})

    }
  return (
    <>
        <form onSubmit={handleSubmit} action="" method="post">
            <input type="text" name="name" id="" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" id="" value={formData.email} onChange={handleChange} />
            <textarea name="message" id="" cols="30" rows='5' value={formData.message} onChange={handleChange}></textarea>
            <button type='submit' >Submit</button>
        </form>
    </>
  )
}

export default FeedbackForm