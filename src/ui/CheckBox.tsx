import { Dispatch, SetStateAction } from "react";

type CheckBoxProps = {
  text: string;
  name: string;
  isValid?: boolean;
  errorMessage?: string[];
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

function CheckBox({ text, name, isChecked, setIsChecked }: CheckBoxProps) {
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="flex items-center justify-between w-full h-12 px-4 py-3 text-sm rounded-lg cursor-pointer bg-gray-50 dark:bg-neutral-dark text-neutral-dark ring-1 ring-gray-300 dark:ring-neutral-dark">
      <span className="text-sm text-neutral-mid">{text}</span>
      <input
        checked={isChecked}
        onChange={handleCheck}
        name={name}
        type="checkbox"
        className="w-4 h-4 transition-colors duration-500 rounded-tr-full cursor-pointer accent-primary-blue dark:accent-primary-blue-dark"
      />
    </label>
  );
}

export default CheckBox;
