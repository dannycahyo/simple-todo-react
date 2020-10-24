import React from "react"

type ListItemProps = {
    item: string
    buttonDeleteLabel: string
    index: number
    onDeleteItemPunyaListItem: (index: number) => void
    onEditTodoPunyaListItem: (newTodo: string, targetIndex: number) => void
}
const ListItem = (props: ListItemProps) => {

    const [isEditing, setIsEditing] = React.useState<boolean>(false)

    const [value, setValue] = React.useState<string>("")

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const deleteItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onDeleteItemPunyaListItem(props.index)
    }

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            props.onEditTodoPunyaListItem(value, props.index)
            setIsEditing(false)
        }
    }

    const handleTextClick = () => {
        setIsEditing(true)
        setValue(props.item)
    }

    const handleInputBlur = () => {
        setIsEditing(false)
    }


    return (
        <div style={{ display: "flex" }}>
            {isEditing ? <input autoFocus onBlur={handleInputBlur} onChange={handleInputValue} onKeyDown={handleInputKeyDown} type="text" value={value} /> : <h1 onClick={handleTextClick}>{props.item}</h1>}
            <button onClick={deleteItem}>{props.buttonDeleteLabel}</button>
        </div>
    )
}

export default ListItem