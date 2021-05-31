import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState, useAuthDispatch } from "../context/auth";
import Dropdown from "./Dropdown";
import HamburgerButton from "./HamburgerButton";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const { authenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch({ type: "LOGOUT" });
    router.push("/");
    // window.location.reload(); might not be needed
  };

  const login = () => {
    router.push("/login");
  };

  const register = () => {
    router.push("/register");
  };

  const goToCreatePage = () => {
    setIsHamburgerOpen(false);
    router.push("/create");
  };

  return (
    <>
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
        <nav className="hidden md:flex">
          {!authenticated ? (
            <>
              <NavButton label="Login" doAction={login} />
              <NavButton label="Register" doAction={register} />
            </>
          ) : (
            <>
              <NavButton label="Logout" doAction={logout} />
              <NavButton label="Create" doAction={goToCreatePage} />
            </>
          )}
        </nav>
        {/* Will only show on screen sizes < 768px */}
        <HamburgerButton
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
        />
      </div>
      {isHamburgerOpen && authenticated && (
        <Dropdown
          options={[
            { label: "Logout", action: logout },
            { label: "Create", action: goToCreatePage },
          ]}
        />
      )}
      {isHamburgerOpen && !authenticated && (
        <Dropdown
          options={[
            { label: "Login", action: login },
            { label: "Register", action: register },
          ]}
        />
      )}
    </>
  );
};

export default Navbar;
