// "use client";

// import Link from "next/link";
// import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function AdminSidebar() {
//   const router = useRouter();

//   return (
//     <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
//       <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
//       <nav>
//         <ul>
//           <li className="mb-4">
//             <Link href="/admin/dashboard" className="hover:text-gray-300">
//               Dashboard
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/products" className="hover:text-gray-300">
//               Products
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/orders" className="hover:text-gray-300">
//               Orders
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link href="/admin/users" className="hover:text-gray-300">
//               Users
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <button 
//         onClick={() => signOut({ callbackUrl: "/admin/login" })} 
//         className="mt-6 bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaCogs, FaBox, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-gray-800 text-white p-4 relative`}>
      {/* Toggle button for collapsing the sidebar */}
      <button
        className="absolute top-4 right-4 text-white"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      <nav>
        <ul>
          {/* Dashboard Link */}
          <li className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-700">
            <FaHome className="text-xl" />
            {!isCollapsed && <Link href="/dashboard">Dashboard</Link>}
          </li>

          {/* Profile Link */}
          <li className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-700">
            <FaUser className="text-xl" />
            {!isCollapsed && <Link href="/profile">Profile</Link>}
          </li>

          {/* Orders Link */}
          <li className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-700">
            <FaShoppingCart className="text-xl" />
            {!isCollapsed && <Link href="/orders">Orders</Link>}
          </li>

          {/* Products Link */}
          <li className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-700">
            <FaBox className="text-xl" />
            {!isCollapsed && <Link href="/products">Products</Link>}
          </li>

          {/* Settings Link */}
          <li className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-gray-700">
            <FaCogs className="text-xl" />
            {!isCollapsed && <Link href="/settings">Settings</Link>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
