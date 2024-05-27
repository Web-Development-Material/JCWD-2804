import { FC } from "react";
import { ReusableProps } from "../utils/component";

const ReusableComponent: FC<ReusableProps> = ({ title, description }) => {
  return (
    <div className="reusable-component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ReusableComponent;
