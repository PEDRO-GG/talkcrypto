interface DropdownProps {
  options: { label: string; action: () => void }[];
}
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <div className="flex flex-col p-2 text-white bg-black">
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => option.action()}
          className="p-4 border-2 border-white "
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
