// import { Name } from "./Person.type";
export const Person = (props: Name) => {
  const {data: {
         first,
      lastName,
      data: { number, age },
    },
  } = props;
  const styles = {
    color: "blue",
    fontSize: "50px",
  };
  return (
    <div style={styles}>
      {first} {lastName}
      {number}
      {age}
    </div>
  );
};
