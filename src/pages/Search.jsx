import React, { useState } from 'react'

const Search = () => {
  const data = {
    length: "",
    input: ""
  }

  const [formData, setFormData] = useState(data);

  const reset = () => {
    setFormData(data);
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitting Data", formData);
    reset();
  }

  // e.target.length : e.target.value = 5
  // e.target.input : e.target.value = 3,5,6,7,9,9

  return (
    <>
      {/* Feed Data */}
      <div>
        <h1>Feed Data</h1>
        <form onSubmit={submitHandler}>
          <label>Length:</label>
          <input
            type="text"
            name="length"
            value={formData.length}
            onChange={changeHandler}
          />

          <label>Input:</label>
          <input
            type="text"
            name="input"
            value={formData.input}
            onChange={changeHandler}
          />

          <button className='btn btn-active'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Search