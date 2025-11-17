export const beforeCode = `export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Logout
        </button>
      </header>
      
      <main className="max-w-7xl mx-auto p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h3 className="text-sm text-gray-500 uppercase">Total Users</h3>
            <p className="text-3xl font-bold text-gray-800">1,234</p>
          </div>
          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h3 className="text-sm text-gray-500 uppercase">Active Now</h3>
            <p className="text-3xl font-bold text-green-500">89</p>
          </div>
          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h3 className="text-sm text-gray-500 uppercase">New Today</h3>
            <p className="text-3xl font-bold text-orange-500">23</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="p-3 hover:bg-gray-50 rounded cursor-pointer text-gray-800">
              User john@example.com registered
            </li>
            <li className="p-3 hover:bg-gray-50 rounded cursor-pointer text-gray-800">
              Payment processed: $129.99
            </li>
            <li className="p-3 hover:bg-gray-50 rounded cursor-pointer text-gray-800">
              New ticket submitted
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}`;

export const afterCode = `@use "./tailwind.mixins.scss" as *;

.div {
  min-height: 100vh;
  background-color: #f9fafb;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.h1 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.button {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.25rem;
  &:hover {
    background-color: #2563eb;
  }
}

.main {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.div_nth-of-type_2 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.div_nth-of-type_3 {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.h3 {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
  text-transform: uppercase;
}

.p {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #1f2937;
}

.div_nth-of-type_4 {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.p_nth-of-type_2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #10b981;
}

.div_nth-of-type_5 {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.p_nth-of-type_3 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #f97316;
}

.div_nth-of-type_6 {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.ul_nth-of-type_1 {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.li_nth-of-type_1 {
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #1f2937;
  &:hover {
    background-color: #f9fafb;
  }
}`;
