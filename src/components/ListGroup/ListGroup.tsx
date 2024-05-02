import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: blue;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && "No items found"}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
