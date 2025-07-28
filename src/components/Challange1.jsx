import React, { useState } from 'react'

function Challange1() {
    const [formData, setFormData] = useState({firstName:'', lastName:'', country:''});
    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData((prev)=>{
            return{
            ...prev,
            [name]: value
        }})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`${formData.firstName} form submitted successfully.`)
    }
  return (
    <>
    <form onSubmit={handleSubmit} action="" method="post">
        <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} />
        <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} />
        <input type="text" name='country' value={formData.country} onChange={handleChange} />
        <button type='submit' disabled={!formData.firstName || !formData.lastName || !formData.country} >Submit</button>
    </form>

    <p>{formData.firstName} {formData.lastName} ({formData.country})</p>
    </>
  )
}

export default Challange1