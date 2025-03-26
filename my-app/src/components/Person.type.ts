export type Names = {
  data: {
    first: string;
    lastName: string;
    data: {
      number: number;
      age: number;
    };
  };
};

export type PersonProps = {
  name: Names;
};

export type Person = {
  id: number;
  age: number;
  name: string;
};
