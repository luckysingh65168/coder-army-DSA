import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dsa = ["Linear Search", "Binary Search"]

const Search = () => {
  const initialData = {
    length: '',
    input: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [array, setArray] = useState([]);
  const [sortArray, setSortedArray] = useState([]);
  const [searchElement, setSearchElement] = useState(null);
  const [result, setResult] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const reset = () => {
    setFormData(initialData);
    setHighlightIndex(-1);
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputArray = formData.input.split(',').map(Number);
    const searchElement = parseInt(formData.length);

    const sortedWithIndices = inputArray.map((value, index) => ({ value, originalIndex: index }));
    sortedWithIndices.sort((a, b) => a.value - b.value);

    setArray(inputArray);
    setSortedArray(sortedWithIndices);
    setSearchElement(searchElement);
    reset();
  };

  const linearSearch = (array, searchElement) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        setHighlightIndex(i);
        return i;
      }
    }
    return -1;
  }

  const binarySearch = (sortArray, target) => {
    let left = 0;
    let right = sortArray.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      setHighlightIndex(sortArray[mid].originalIndex);
      if (sortArray[mid].value === target) {
        return sortArray[mid].originalIndex;
      } else if (sortArray[mid].value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  const handleLinearSearch = () => {
    const index = linearSearch(array, searchElement);
    setResult(index !== -1 ? `Element found at index ${index}` : 'Element not found');
  };

  const handleBinarySearch = () => {
    const index = binarySearch(sortArray, searchElement);
    setResult(index !== -1 ? `Element found at index ${index}` : 'Element not found');
  }

  const chartData = {
    labels: array.map((_, index) => `Index ${index}`),
    datasets: [
      {
        label: 'Array Elements',
        data: array,
        backgroundColor: array.map((_, index) => index === highlightIndex ? 'rgba(75, 192, 192, 0.6)' : 'rgba(54, 162, 235, 0.6)'),
      }
    ]
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='flex justify-center p-4'>
        <fieldset className='border border-base-300 p-6 rounded-lg shadow-lg bg-base-200 w-full max-w-md'>
          <legend className='text-lg font-semibold text-center mb-4'>Feed Data</legend>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Array Elements</label>
            <input
              type='text'
              className='input input-bordered w-full'
              placeholder='e.g., 2,3,4,6'
              name='input'
              value={formData.input}
              onChange={changeHandler}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Element to Search For</label>
            <input
              type='text'
              className='input input-bordered w-full'
              placeholder='e.g., 4'
              name='length'
              value={formData.length}
              onChange={changeHandler}
            />
          </div>

          <button className='btn btn-outline btn-primary w-full transition-transform duration-300'>Submit</button>
        </fieldset>
      </form>

      <div className="mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center bg-base-100 p-6">
          <h1 className="text-3xl font-bold text-primary mb-6">Searching Algorithms 🔍</h1>
          <ul className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
            {dsa.map((algorithm, index) => (
              <li key={index}>
                <button className="btn btn-outline btn-primary w-full transition-transform duration-300" onClick={index === 0 ? handleLinearSearch : handleBinarySearch}>
                  {algorithm}
                </button>
                <div className='mt-2 flex gap-3'>
                  <p>Execution Time: {algorithm === 'Linear Search' ? 'O(n)' : 'O(log n)'}</p>
                  <p>Space: O(1)</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4">
        <h1 className="text-3xl text-primary font-bold">🎯 Result</h1>
        <div className="w-3/4 h-96 border border-greaen-400 rounded-2xl shadow-xl bg-base-100 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4">
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        {result && <p className="text-lg font-medium mt-4">{result}</p>}
      </div>
    </div>
  );
};

export default Search;