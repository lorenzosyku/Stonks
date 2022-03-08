import SearchBar from "./dashboard/SearchBar";
import Sidebar from "./dashboard/Sidebar";
import { auth, useAuth, signOut } from "../src/firebase";

function DashboardPage() {
  const handleLogout = () => {
    return signOut(auth);
  };

  const currentUser = useAuth();
  return (
    <div className="">
      {/*<Sidebar />*/}
      <SearchBar />
      <div className="">
        <h1>current user:{currentUser?.email}</h1>
        <button
          onClick={handleLogout}
          className="bg-shade-lightblue font-semibold text-gray-100 p-2 shadow-lg rounded-md"
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
