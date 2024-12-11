import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    onClick();
    setState(!state);
  };

  return (
    <AiFillHeart color={state ? "red" : "blue"} size={50} onClick={toggle} />
  );
};

export default Like;
