import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useRef } from "react";
import Card from "../components/forms/UserDataCard";
export default function Form() {
    const dispatch = useDispatch();
    const registerForm = useRef(null);
  
    const onSubmit = (data) => {
      dispatch(addUser(data));
      registerForm.current.reset(); // Reset the form
    };
  



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

 
  return (
    <div className="bg-purple-400/50 min-h-[100vh] h-full flex  flex-col items-center justify-center font-semibold">
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 p-4 bg-white/40 shadow-md rounded-2xl  w-[60vw] border-2 border-black/20 "
        ref={registerForm}
      >
        <h2 className="text-lg font-semibold mb-4 text-center">User Form</h2>
        <label className="flex flex-col space-y-1">
          <span className="text-gray-700 font-medium">Name:</span>
          <input
            type="text"
            {...register("name", { required: true })}
            className="rounded-xl border  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <span className="text-gray-700 font-medium">Age:</span>
          <input
            type="number"
            {...register("age", { required: true })}
            className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <span className="text-gray-700 font-medium">Gender:</span>
          <select
            {...register("gender", { required: true })}
            className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <span className="text-gray-700 font-medium">Email:</span>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </label>
        <input
          type="submit"
          disabled={Object.keys(errors).length > 0}
          value="Submit"
          className="bg-blue-500/40 text-white rounded p-2 cursor-pointer hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed mt-4"
        />
      </form>

      <div className="m-5">
        <h2 className="text-lg font-semibold mb-4 text-center">User Data</h2>
        <Card />
      </div>
    </div>
  );
}
