import React from "react";
import data from "./../data/dsa.json";


const Option = () => {
    return (
        <div className="flex justify-center gap-4 max-w-6xl mx-auto mt-6">
            {data.search.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-xl border border-gray-300 w-full">
                    <div className="card-body text-center">
                        <h2 className="text-lg font-semibold">{item}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Option;
