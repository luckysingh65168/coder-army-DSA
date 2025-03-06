import React, { useState,useEffect} from 'react';
import ProgressBar from './ProgressBar';

const Search = () => {
    const [array, setArray] = useState([30, 50, 20, 80, 10]);
    const [compareIndex, setCompareIndex] = useState(null);
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        setArray([...array]);
    }, []);

    const startVisualizer = async () => {
        const tempArray = [...array];
        let sortedIndexes = [];
        for (let i = 0; i < tempArray.length; i++) {
            for (let j = 0; j < tempArray.length - i - 1; j++) {
                setCompareIndex(j);
                await new Promise((resolve) => setTimeout(resolve, 500));
                if (tempArray[j] > tempArray[j + 1]) {
                    [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
                }
                setArray([...tempArray]);
            }
            sortedIndexes.push(tempArray.length - i - 1);
            setSorted([...sortedIndexes]);
        }
        setCompareIndex(null);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl text-center mb-6 font-bold text-primary">
                🔥 Searching Visualizer
            </h1>

            <div className="grid grid-cols-5 gap-4">
                {array.map((value, index) => (
                    <ProgressBar
                        key={index}
                        value={value}
                        index={index}
                        compareIndex={compareIndex}
                        sorted={sorted.includes(index)}
                    />
                ))}
            </div>

            <button
                className="btn btn-primary w-full mt-6"
                onClick={startVisualizer}
            >
                Start Visualization
            </button>
        </div>
    );
};

export default Search;
