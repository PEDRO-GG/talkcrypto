import classNames from "classnames";

interface InputGroupProps {
  type: string;
  label: string;
  error: boolean;
  value: string;
  setValue: (newValue: string) => void;
}
const InputGroup: React.FC<InputGroupProps> = ({
  type,
  label,
  error,
  value,
  setValue,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-light text-md" htmlFor={label}>
        {label}
      </label>
      <input
        className={classNames(
          "w-full p-4 font-light leading-tight border border-gray-500 appearance-none focus:outline-none",
          { "border-red-500": error }
        )}
        type={type}
        name={label}
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
