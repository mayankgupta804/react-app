import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  return (
    <AiFillHeart
      color={state ? "red" : "white"}
      size={50}
      onClick={() => {
        onClick();
        setState(!state);
      }}
    />
  );
};

export default Like;
