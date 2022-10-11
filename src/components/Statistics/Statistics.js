import React from 'react';
import { useLoaderData } from "react-router-dom";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(data);
    return (
      <div>
          <h2 className='mt-6 underline font-bold text-blue-900 text-3xl'>Total Question Statistics - Each Courses</h2>
          <div className="chart my-12 w-full flex flex-col sm:flex-col md:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-center">
          <LineChart width={450} height={400} data={data}>
          <CartesianGrid stroke="#3a92e4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    );
  };

export default Statistics;