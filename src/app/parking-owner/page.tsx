// import React from 'react'

// const ParkingOwnerPage = () => {
//   return (
//     <div>Parking owner page</div>
//   )
// }

// export default ParkingOwnerPage;

import React from "react";

const ParkingOwnerPage = () => {
  // Dummy data, API call se replace kar sakte ho
  const bookings = [
    { id: 1, name: "Amit Kumar", email: "amit@example.com", date: "2024-02-28" },
    { id: 2, name: "Sneha Sharma", email: "sneha@example.com", date: "2024-02-27" },
    { id: 3, name: "Rahul Verma", email: "rahul@example.com", date: "2024-02-26" },
  ];

  return (
    <div className="mx-auto p-6 max-w-4xl">
      <h1 className="mb-4 font-bold text-2xl">Parking Owner Dashboard</h1>

      {bookings.length > 0 ? (
        <table className="border border-gray-300 w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">User Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((user, index) => (
              <tr key={user.id} className="bg-white hover:bg-gray-100 text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No bookings yet.</p>
      )}
    </div>
  );
};

export default ParkingOwnerPage;
