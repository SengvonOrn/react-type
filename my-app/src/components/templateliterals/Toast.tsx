type HizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "bottom ";
type ToastProps = {
  position:
    | Exclude<`${HizontalPosition}-${VerticalPosition},`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h1>Toast - {position}</h1>
    </div>
  );
};
