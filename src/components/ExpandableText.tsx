import { useState } from "react";
import Button from "./Button";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [showFullText, updateShowFullText] = useState(false);

  if (children.length < 100) {
    return <p>{children}</p>;
  }
  return (
    <>
      {showFullText ? children : children.substring(0, maxChars) + "..."}
      <Button
        onClick={() => {
          updateShowFullText(!showFullText);
        }}
      >
        {showFullText ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
