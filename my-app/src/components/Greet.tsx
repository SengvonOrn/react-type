type GreetProps = {
  name: string;
  messageCount?: number;
  bool: boolean;
};
export const Greet = (props: GreetProps) => {
  const { name, messageCount, bool } = props;
  return (
    <>
      <h1>
        {bool
          ? `${name}! You have ${messageCount} unreade message`
          : "try against"}
      </h1>
    </>
  );
};
