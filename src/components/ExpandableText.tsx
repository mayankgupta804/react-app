import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  maxChars?: number;
  children: ReactNode;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [showFullText, updateShowFullText] = useState(false);

  return (
    <span style={{ display: "inline" }}>
      {showFullText
        ? children
        : children?.toString().substring(0, maxChars) + "..."}
      <Button
        onClick={() => {
          updateShowFullText(!showFullText);
        }}
      >
        {showFullText ? "Less" : "More"}
      </Button>
    </span>
  );
};

export default ExpandableText;
