import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    onClick();
    // Lesson: State updates in React happen asynchronously, and
    // also in a batch, so the update to the state variable will
    // happen after the rendering is completed. This because
    // every time we call a "setX" function, React re-render
    // the component, and this would hamper the overall performance.
    // That is why, for performance reasons, React updates the state
    // in a batch, asynchronously.
    console.log(state);
    setState(!state);
    console.log(state);
  };

  return (
    <AiFillHeart color={state ? "red" : "blue"} size={50} onClick={toggle} />
  );
};

export default Like;
