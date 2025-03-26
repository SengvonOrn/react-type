type ButtonProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
    name: string
  ) => void;
};

export const Button = (Props: ButtonProps) => {
  return (
    <>
      <button onClick={(event) => Props.handleClick(event, 100, "Aleina")}>
        Click me
      </button>
    </>
  );
};
