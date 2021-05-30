import { useAuthState, useAuthDispatch } from "../context/auth";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
const Navbar: React.FC = () => {
  const { authenticated } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: "LOGOUT" });
    // window.location.reload(); might not be needed
  };
  return (
    <div className="flex justify-between h-16 bg-black">
      {/* Logo and Searchbar*/}
      <div className="flex">
        <div className="flex items-center justify-center p-3 text-2xl text-white bg-black ">
          TC
        </div>
        {/* SearchBar */}
        <input
          type="text"
          placeholder="search"
          className="p-4 font-light leading-tight border border-gray-500 appearance-none md:w-80 focus:outline-none"
        />
      </div>
      {/* Login & Sign Up on unathenticated. Logout & Create on authenticated */}
      <nav className="flex ">
        {!authenticated ? (
          <>
            <NavLink href="/login" label="Login" />
            <NavLink href="/login" label="Register" />
          </>
        ) : (
          <>
            <NavButton label="Logout" doAction={logout} />
            <NavButton label="Create" doAction={() => console.log("clicked")} />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
