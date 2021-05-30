import { useAuthState, useAuthDispatch } from "../context/auth";
const Navbar: React.FC = () => {
  const { authenticated } = useAuthState();
  return (
    <nav className="flex justify-between h-16 bg-black">
      {/* Logo */}
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
      {/* Login, Logout, Add article */}
      <div className="flex items-center justify-center w-16 bg-black ">
        <svg width="36" height="36" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.5 7.5V4H7.5V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
