
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";

const CountryPopulationChart= (props) => {
  const countrSet = new Set(props.values.map((value) => value.country));
  const labels = Array.from(countrSet);

 const populationMap = props.values.reduce((acc, curr) => {
  if (acc[curr.country]) {
    acc[curr.country]++
  } else {
    acc[curr.country] = 1
  }
  return acc
}, {})

const populationArray = Object.values(populationMap)

    console.log(populationArray)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Population",
        backgroundColor: ["blue", "red", "green", "yellow", "purple", "orange"],
        borderColor: ["slateblue", "salmon", "palegreen", "khaki", "plum", "coral"],
        borderWidth: 2,

        
        data: populationArray,
      },
    ],
  };
  return (

    <div className="w-[700px]  m-auto bg-purple-300/40 rounded-md p-4 border-4 border-black">
      <Bar data={data} />
    </div>
  );
};

export default CountryPopulationChart;