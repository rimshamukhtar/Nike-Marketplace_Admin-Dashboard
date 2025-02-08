// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import AdminSidebar from "../../components/AdminSidebar";

// export default function AdminDashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === "loading") return <p>Loading...</p>;
//   if (!session) {
//     router.push("/admin/login");
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />
//       <main className="flex-1 p-6 bg-gray-100 relative">
//         <div className="absolute top-4 right-6">
//           <button
//             onClick={() => signOut()}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </div>
//         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
//         <p>Welcome, {session.user?.email}!</p>
//       </main>
//     </div>
//   );
// }


"use client";


import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../components/AdminSidebar";
import LogoutButton from "../../components/LogoutButton";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/admin/login");
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{session.user?.email}</span>
            <LogoutButton />
          </div>
        </header>
  
         <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Orders Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Orders</h3>
            <p className="text-3xl font-semibold text-blue-500">50</p>
            <p className="text-gray-600">Total Orders</p>
          </div>

          {/* Products Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Products</h3>
            <p className="text-3xl font-semibold text-green-500">200</p>
            <p className="text-gray-600">Total Products</p>
          </div>

          {/* Users Summary Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Users</h3>
            <p className="text-3xl font-semibold text-orange-500">150</p>
            <p className="text-gray-600">Total Users</p>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}
