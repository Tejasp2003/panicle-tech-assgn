import { useSelector } from "react-redux";

export default function Card() {
    const users = useSelector((state) => state.user.value);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="bg-green-600 py-2 px-4">
              <h3 className="text-lg font-semibold text-white">{user.name}</h3>
            </div>
            <div className="px-4 py-2">
              <p className="text-gray-700 font-semibold">Age: {user.age}</p>
              <p className="text-gray-700 font-semibold">Gender: {user.gender}</p>
              <p className="text-gray-700 font-semibold">Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  