export default function Favorite() {
  const stocks = [
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "+201.01", balance: "$201.01", trend: "up" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "+201.01", balance: "$201.01", trend: "down" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", trend: "down" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "+201.01", balance: "$201.01", trend: "up" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", trend: "down" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "+201.01", balance: "$201.01", trend: "up" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "-201.01", balance: "$201.01", trend: "down" },
    { name: "AAPL", company: "Apple Inc", price: "$201.01", value: "+201.01", balance: "$201.01", trend: "up" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Watchlist</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">Updated 20/07/2024 at 04:30 PM</p>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Watchlist Table */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between mb-4">
            <div>
              <select className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded">
                <option>Watchlist</option>
              </select>
              <button className="ml-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded">+</button>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">+ Watchlist</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400 border-b dark:border-gray-700">
                  <th className="py-2">Stock Name</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Value</th>
                  <th className="py-2">Balance</th>
                  <th className="py-2">Chart</th>
                  <th></th>
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
                    <td
                      className={`py-2 ${
                        s.value.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {s.value}
                    </td>
                    <td className="py-2 text-gray-700 dark:text-gray-300">{s.balance}</td>
                    <td className="py-2">
                      <div
                        className={`w-16 h-6 ${
                          s.trend === "up"
                            ? "bg-green-300 dark:bg-green-600"
                            : "bg-red-300 dark:bg-red-600"
                        } rounded`}
                      ></div>
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
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {/* Stock Buy Card */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Stock</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">Coin</label>
                <input
                  type="text"
                  defaultValue="$2.00"
                  className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700"
                />
              </div>
              <div className="text-center text-gray-600 dark:text-gray-400">⇅</div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">Coin</label>
                <input
                  type="text"
                  defaultValue="$2.00"
                  className="w-full mt-1 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700"
                />
              </div>
              <p className="text-xs text-gray-400">No extra fees</p>
              <button className="w-full py-2 bg-blue-600 text-white rounded">Button</button>
            </div>
          </div>

          {/* Stock Market list */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Stock Market</h2>
              <button className="text-blue-600 text-sm">See All</button>
            </div>

            <div className="flex gap-2 mb-4">
              <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded">Top Market</button>
              <button className="px-3 py-1 bg-black text-white text-sm rounded">New Stock</button>
            </div>

            <div className="flex flex-col gap-2">
              {stocks.slice(0, 6).map((s, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <span className="text-gray-800 dark:text-gray-200 text-sm">{s.name}</span>
                    <span className="text-gray-500 text-xs">{s.company}</span>
                  </div>
                  <div
                    className={`w-16 h-6 ${
                      s.trend === "up"
                        ? "bg-green-300 dark:bg-green-600"
                        : "bg-red-300 dark:bg-red-600"
                    } rounded`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
