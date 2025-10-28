import Profile from "./components/Tabs/Profile";

import Sidebar from "./components/Tabs/Sidebar";
const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Profile />
      </main>
    </div>
  );
};
export default App;
