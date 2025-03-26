type ContannerProps = {
  style: React.CSSProperties;
};

export const Contener = (props: ContannerProps) => {
  return (
    <>
      <div style={props.style}>Text Container</div>
    </>
  );
};

// import React from "react";
// interface Props {
//   style: React.CSSProperties;
// }

// export const Greeting: React.FC<Props> = (props) => {
//   return <span style={props.style}>Hello</span>;
// };
