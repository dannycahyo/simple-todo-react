import React from "react";
import { Input as AntdInput, Button } from "antd";

type InputProps = {
  placeholder: string;
  label: string;
  onSubmit: (value: string) => void;
};
const Input = ({ placeholder, label, onSubmit }: InputProps) => {
  const [value, setValue] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleButtonClick = () => {
    onSubmit(value);
  };

  return (
    <div style={{ display: "flex" }}>
      <AntdInput
        placeholder={placeholder}
        type="text"
        onChange={handleInputChange}
        value={value}
      />
      <Button onClick={handleButtonClick} type="primary">
        {label}
      </Button>
    </div>
  );
};

export default Input;
