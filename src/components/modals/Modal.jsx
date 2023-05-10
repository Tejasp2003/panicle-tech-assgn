

const Modal = ({userRows, setShowModal,params}) => {
  return (
    <div className="fixed top-0 left-80 w-[30vw] rounded-xl h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-xl">
      <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          value={
            userRows.find((row) => row.id === params.row.id)
              .first_name
          }
          placeholder="First Name"
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          value={
            userRows.find((row) => row.id === params.row.id)
              .last_name
          }
          placeholder="Last Name"
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          value={
            userRows.find((row) => row.id === params.row.id).email
          }
          placeholder="Email"
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          value={
            userRows.find((row) => row.id === params.row.id).dob
          }
          placeholder="DOB"
          className="border p-2 rounded-lg"
        />

        <div className="flex flex-row gap-4">
          <button className="border p-2 rounded-lg bg-green-800 text-white font-semibold border-white hover:bg-white hover:text-green-800">
            Save
          </button>
          <button
            className="border p-2 rounded-lg bg-red-800 text-white font-semibold border-white hover:bg-white hover:text-red-800"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Modal