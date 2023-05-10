import { Link, Outlet } from "react-router-dom";

const Chart = () => {
  return (
    <div className="h-[100vh] bg-gray-100">
      <h1 className="text-3xl font-bold text-center ">Chart</h1>
      <h2 className=" text-xl font-bold text-center mb-5">
        Select a chart from the list below to see the chart
      </h2>

      <div
        className="
 flex flex-row items-center justify-center space-x-4 border-b-2 mb-5 pb-5"
      >
        <button className=" bg-blue-500  hover:bg-blue-700  text-white font-bold py-2 px-4 rounded ">
          <Link to="/chart/country-population">Country Population</Link>
        </button>

        <button
          className="

        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded

        "
        >
          <Link to="/chart/user-with-age-above-30">User With Age Above 30</Link>
        </button>
      </div>
      <div className="w-90 p-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Chart;
