type RandomnumberType = {
  value: number;
};
type PositiveNumber = RandomnumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomnumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = RandomnumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;
export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <h1>
        {value} {isPositive && "isPositive"} {isNegative && "Nagetiv"}
        {isZero && "isZero"}
      </h1>
    </div>
  );
};
