interface ErrorMessageProps {
  show: boolean;
  errors: string[];
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ show, errors }) => {
  return (
    <>
      {show && (
        <div className="p-5 text-red-500 bg-red-200 sm:w-96 w-72">
          <h1 className="font-bold">Oops!</h1>
          <ul className="ml-10">
            {errors.map((err, idx) => (
              <li key={idx} className="list-disc">
                {err}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
