
import { useParams } from "react-router-dom";
import rows from "../../../public/data/data.json";

const UserDetails = () => {

  
  const { id } = useParams();
    const user = rows.find((row) => row.id === parseInt(id));
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900">{user.first_name} {user.last_name}</h2>
          <p className="mt-1 max-w-2xl text-sm font-medium text-gray-500">{user.email}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="sm:flex sm:px-6 sm:py-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Date of Birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-4">
                {user.dob}
              </dd>
            </div>
            <div className="sm:flex sm:px-6 sm:py-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Gender
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-4">
                {user.gender}
              </dd>
            </div>
            <div className="sm:flex sm:px-6 sm:py-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-4">
                {user.address}
              </dd>
            </div>
            <div className="sm:flex sm:px-6 sm:py-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Country
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-4">
                {user.country}
              </dd>
            </div>
            <div className="sm:flex sm:px-6 sm:py-4">
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Bio
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-4">
                {user.bio}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default UserDetails;




