import { useEffect } from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  // ({value, handleChange}: InputProps)

  // ---------------------------------------->
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };
  const { value, handleChange } = props;

  return (
    <>
      <input
        type="text"
        placeholder="firstName"
        value={value}
        onChange={handleChange}
      />
      <h1 className="h1"></h1>
    </>
  );
};
