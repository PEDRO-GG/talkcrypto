interface NavButtonProps {
  label: string;
  doAction: () => void;
}
const NavButton: React.FC<NavButtonProps> = ({ label, doAction }) => {
  return (
    <button
      onClick={() => doAction()}
      className="flex items-center justify-center w-24 h-full text-xs font-medium text-white uppercase border-l-2 border-white hover:bg-white hover:text-black"
    >
      {label}
    </button>
  );
};

export default NavButton;
