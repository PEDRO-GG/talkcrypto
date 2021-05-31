import { useRouter } from "next/router";
import { useAuthState, useAuthDispatch } from "../context/auth";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
const Navbar: React.FC = () => {
  const { authenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: "LOGOUT" });
    router.push("/");
    // window.location.reload(); might not be needed
  };

  const goToCreatePage = () => {
    router.push("/create");
  };
  return (
    <div className="flex justify-between h-16 bg-black">
      {/* Logo and Searchbar*/}
      <div className="flex">
        <div className="flex items-center justify-center p-3 text-2xl text-white bg-black ">
          TC
        </div>
        {/* SearchBar */}
        <SearchBar />
      </div>
      {/* Login & Sign Up on unathenticated. Logout & Create on authenticated */}
      <nav className="flex ">
        {!authenticated ? (
          <>
            <NavLink href="/login" label="Login" />
            <NavLink href="/register" label="Register" />
          </>
        ) : (
          <>
            <NavButton label="Logout" doAction={logout} />
            <NavButton label="Create" doAction={goToCreatePage} />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
