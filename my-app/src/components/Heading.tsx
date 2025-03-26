type HeadingProps = {
  children: string;
};
export const Heading = (Props: HeadingProps) => {
  const style = {
    fontSize: "20px",
  };
  return <div style={style}>{Props.children}</div>;
};
