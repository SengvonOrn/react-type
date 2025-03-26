import { Person } from "./Person.type";

type PropsList = {
  // name: string;
  // age: number;
  // id: number;
  // rename: {
  //   name: string;
  //   age: number;
  //   id: number;
  // }[];
  rename: Person[];
};

export const PersonList = (props: PropsList) => {
  // const { id, name, age } = props;
  const { rename } = props;
  return (
    <>
      <div>
        {/* <span>{id}</span>
        <span>{name}</span>
        <span>{age}</span> */}
        {rename.map((p) => {
          return (
            <h2 key={p.id}>
              {p.name} {p.age}
            </h2>
          );
        })}
      </div>
    </>
  );
};
