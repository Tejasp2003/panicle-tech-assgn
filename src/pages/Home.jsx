import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center p-5 gap-4 bg-pink-400/30 h-screen'>
      <h1 className="text-3xl font-bold">Panicle Tech Assignment</h1>
      <div className='flex flex-row items-center justify-center space-x-6 '>
        <Link
          to='/chart'
          className='w-64 max-w-xs p-6 bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white hover:shadow-xl'
        >
          <h2 className='text-2xl font-bold mb-2'>Chart</h2>
          <p className='text-gray-700'>Visualize data using charts</p>
        </Link>
        <Link
          to='/table'
          className='w-64 max-w-xs p-6 bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white hover:shadow-xl'
        >
          <h2 className='text-2xl font-bold mb-2'>Table</h2>
          <p className='text-gray-700'>Display data in a table</p>
        </Link>
        <Link
          to='/form'
          className='w-64 max-w-xs p-6 bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white hover:shadow-xl'
        >
          <h2 className='text-2xl font-bold mb-2'>Form</h2>
          <p className='text-gray-700'>Add or update user information</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
