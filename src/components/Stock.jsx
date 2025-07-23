const categories = [
  "Finance Service", "Energy", "Materials", "Technology", "Consumer Staples", "Media", "Industrials", "Healthcare"
];

const stocks = [
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
  { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "$201.01", balance: "-201.01" },
];

export default function Stock() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Stock</h1>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Table */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Stock Market</h2>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(cat => (
              <span
                key={cat}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400 border-b dark:border-gray-700">
                  <th className="py-2">Name</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Value</th>
                  <th className="py-2">Balance</th>
                  <th className="py-2">Watchlist</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((s, idx) => (
                  <tr key={idx} className="border-b dark:border-gray-700">
                    <td className="py-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      <span className="text-gray-800 dark:text-gray-200">{s.name}</span>
                    </td>
                    <td className="py-2 text-gray-700 dark:text-gray-300">{s.price}</td>
                    <td className="py-2 text-gray-700 dark:text-gray-300">{s.value}</td>
                    <td className="py-2 text-red-600">{s.balance}</td>
                    <td className="py-2">
                      <button className="text-gray-500 hover:text-blue-500">
                        📌
                      </button>
                    </td>
                    <td className="py-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Buy</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Stock Market</h2>
            <button className="text-blue-600 text-sm">See All</button>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded">Get Started</button>
            <button className="px-3 py-1 bg-black text-white text-sm rounded">Get Started</button>
          </div>

          <div className="flex flex-col gap-2">
            {stocks.slice(0, 6).map((s, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <span className="text-gray-800 dark:text-gray-200 text-sm">{s.name}</span>
                  <span className="text-gray-500 text-xs">{s.company}</span>
                </div>
                <div className="w-16 h-6 bg-green-300 dark:bg-green-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// import { FaRegBookmark } from "react-icons/fa";
// import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

// const stocks = [
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "🍎" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "🔷" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "🅰️" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "📦" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "🎮" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "💻" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "📱" },
//   { name: "AAPL Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", icon: "🖥️" },
// ];

// const Dashboard = () => {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Stock</h1>

//       <div className="flex flex-col lg:flex-row gap-4">
//         {/* Left - Table */}
//         <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex-1">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
//             Stock Market
//           </h2>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {["Finance", "Energy", "Materials", "Tech", "Consumer", "Media", "Industrial", "Healthcare"].map((tag) => (
//               <span
//                 key={tag}
//                 className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>
//                 <tr className="text-left text-gray-600 dark:text-gray-300 border-b dark:border-gray-700">
//                   <th className="py-2">Name</th>
//                   <th className="py-2">Price</th>
//                   <th className="py-2">Value</th>
//                   <th className="py-2">Balance</th>
//                   <th className="py-2">Watchlist</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stocks.map((stock, idx) => (
//                   <tr key={idx} className="border-b dark:border-gray-700">
//                     <td className="py-2 flex items-center gap-2">
//                       <span>{stock.icon}</span> {stock.name}
//                     </td>
//                     <td className="py-2">{stock.price}</td>
//                     <td className="py-2 text-red-500 flex items-center gap-1">
//                       <FiTrendingDown /> {stock.value}
//                     </td>
//                     <td className="py-2">{stock.balance}</td>
//                     <td className="py-2">
//                       <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//                         <FaRegBookmark />
//                       </button>
//                       <button className="ml-2 px-3 py-1 text-sm bg-blue-500 text-white rounded">
//                         Buy
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Right - Sidebar */}
//         <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full lg:w-1/3">
//           <div className="flex justify-between mb-2">
//             <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Stock Market</h2>
//             <button className="text-sm text-blue-500">See All</button>
//           </div>

//           <div className="space-y-2">
//             {stocks.slice(0, 5).map((stock, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded"
//               >
//                 <div className="flex items-center gap-2">
//                   <span>{stock.icon}</span>
//                   <span className="text-sm text-gray-700 dark:text-gray-300">{stock.name}</span>
//                 </div>
//                 <div className="text-green-500">
//                   <FiTrendingUp />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-8 py-4 border-t dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 text-center">
//         &copy; 2024 MaxFit — Twitter — Instagram — Facebook
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
