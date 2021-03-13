import { FC } from "react";
import s from "./Divider.module.css";

interface DividerProps {}

const Divider: FC<DividerProps> = () => {
  return (
    <div className={s.root}>
      <div className={s.relative}>
        <div className={s.divider}></div>
      </div>
    </div>
  );
};

export default Divider;
