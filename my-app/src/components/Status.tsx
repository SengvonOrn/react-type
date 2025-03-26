type Props = {
  Status: "yes" | "OK" | "NO";
};
export const Status = (Props: Props) => {
  let message;
  if (Props.Status === "OK") {
    message = "Loading status";
  } else if (Props.Status === "NO") {
    message = "Try against!";
  } else {
    message = "Error";
  }

  const style = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  return <div style={style}>{message}</div>;
};
