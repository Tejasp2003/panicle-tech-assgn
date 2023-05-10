import { DataGrid } from "@mui/x-data-grid";

import userRows from "../../public/data.json";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/modals/Modal";

const Datatable = () => {

 
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "first_name",
      headerName: "First name",
      width: 230,
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 230,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },

    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className=" text-center gap-4 space-x-4 flex items-center justify-center ">
            <button
              className=" border p-4  h-8 rounded-2xl w-32 flex items-center justify-center 
                        bg-green-800 text-white font-semibold border-white hover:bg-white hover:text-green-800 "
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
            {showModal && (
                <Modal userRows={userRows} setShowModal={setShowModal} params={params}/>
            )}
            <button
              className="border p-4 h-8 rounded-2xl w-32 flex items-center justify-center bg-blue-800 text-white font-semibold border-white hover:bg-white hover:text-blue-800"
              onClick={() => navigate(`/user/${params.row.id}`)}
            >
              View
            </button>
          </div>
        );
      },
    },
  ];

  const rows = userRows.map((row) => {
    const dobParts = row.dob.split("/");
    const dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return {
      id: row.id,
      first_name: row.first_name,
      last_name: row.last_name,
      email: row.email,
      age: age,
    };
  });

  return (
    <div
      className="m-5 
    bg-purple-300/40 rounded-md  border-4 border-black
        cursor-pointer
    "
    >
      <h1 className="text-center text-2xl font-bold p-4">User List</h1>
      <DataGrid
        style={{
          color: "black",
          fontSize: "16px",
          fontFamily: "Nunito",
          fontWeight: "bold",
        }}
        rows={rows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30, 40, 50]}
      />
    </div>
  );
};

export default Datatable;
