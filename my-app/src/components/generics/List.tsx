// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      <div>
        <h2>List Of items</h2>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {typeof item === "object"
                ? JSON.stringify(item)
                : item.toString()}
            </div>
          );
        })}
      </div>
    </>
  );
};

//----------------------------------------------->
// interface ListProps<T> {
//   items: T[];
//   onClick: (item: T) => void;
// }

// export const List = <T extends { id: number; first: string; last: string }>({
//   items,
//   onClick,
// }: ListProps<T>) => {
//   return (
//     <>
//       <div>
//         <h2>List Of Items</h2>
//         {items.map((item, index) => {
//           return (
//             <div key={item.id} onClick={() => onClick(item)}>
//               <h1>
//                 {item.first} {item.last}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
