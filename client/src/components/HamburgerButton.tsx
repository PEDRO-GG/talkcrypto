interface HamburgerButtonProps {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: (newValue: boolean) => void;
}
const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isHamburgerOpen,
  setIsHamburgerOpen,
}) => {
  return (
    <nav className="absolute top-3 right-3 md:hidden">
      <button
        className="focus:outline-none"
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        {/* Show hamburger button or an X depending on isOpen state */}
        {!isHamburgerOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default HamburgerButton;
