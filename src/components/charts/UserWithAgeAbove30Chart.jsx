

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const UserWithAgeAbove30 = (props) => {
  // Calculate male and female counts
  const totalMaleFemale = [0, 0];
  props.values.forEach((user) => {
    if (user.gender === "Male") {
      totalMaleFemale[0]++;
    } else if (user.gender === "Female") {
      totalMaleFemale[1]++;
    }
  });

  // Calculate male and female counts above 30
  const maleFemaleAbove30 = [0, 0];
  props.values.forEach((user) => {
    // Calculate age based on date of birth

    const dobParts = user.dob.split('/');
   
    const dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
    

    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(age);
   
    
    
    if (age > 30) {
      if (user.gender === "Male") {
        maleFemaleAbove30[0]++;
      } else if (user.gender === "Female") {
        maleFemaleAbove30[1]++;
      }
    }
  });

  const labels = ["Male", "Female"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User Count",
        backgroundColor: ["blue", "red"],
        borderColor: "rgb(255, 99, 132)",
        data: totalMaleFemale,
      },
      {
        label: "User Count above age 30",
        backgroundColor: ["green", "yellow"],
        borderColor: "rgb(54, 162, 235)",
        data: maleFemaleAbove30,
      },
    ],
  };
  return (
    <div className="w-[700px]  m-auto bg-purple-300/40 rounded-md p-4 border-4 border-black" >
      <Bar data={data} />
    </div>
  );
};

export default UserWithAgeAbove30;
