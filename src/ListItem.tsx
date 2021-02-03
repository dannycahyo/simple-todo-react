import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input as AntdInput } from "antd";

type ListItemProps = {
  item: string;
  buttonDeleteLabel: string;
  index: number;
  onDeleteItemPunyaListItem: (index: number) => void;
  onEditTodoPunyaListItem: (newTodo: string, targetIndex: number) => void;
};
const ListItem = ({
  item,
  buttonDeleteLabel,
  index,
  onDeleteItemPunyaListItem,
  onEditTodoPunyaListItem,
}: ListItemProps) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<string>("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const deleteItem = () => {
    onDeleteItemPunyaListItem(index);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      onEditTodoPunyaListItem(value, index);
      setIsEditing(false);
    }
  };

  const handleTextClick = () => {
    setIsEditing(true);
    setValue(item);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex" }}>
      {isEditing ? (
        <AntdInput
          autoFocus
          onBlur={handleInputBlur}
          onChange={handleInputValue}
          onKeyDown={handleInputKeyDown}
          type="text"
          value={value}
        />
      ) : (
        <h1 onClick={handleTextClick}>{item}</h1>
      )}
      <Button onClick={deleteItem} type="primary" danger>
        {" "}
        <DeleteOutlined /> {buttonDeleteLabel}
      </Button>
      <p> Saya sedang {item}</p>
    </div>
  );
};

export default ListItem;
