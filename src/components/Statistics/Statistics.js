import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(data);
    return (
      <div className="stats">
        <h2>Quiz Statistics</h2>
        <div className="chart">
          <LineChart width={300} height={300} data={data}>
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
        <p>Total Available Questions</p>
      </div>
    );
  };

export default Statistics;