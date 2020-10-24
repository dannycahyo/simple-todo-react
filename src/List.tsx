import React from 'react'
import ListItem from './ListItem'

type ListProps = {
    items: string[]
    onDeleteItemPunyaList: (index: number) => void
    onEditTodoPunyaList: (newTodo: string, targetIndex: number) => void
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.items.map((item, index) => {
                return <ListItem
                    onDeleteItemPunyaListItem={props.onDeleteItemPunyaList}
                    onEditTodoPunyaListItem={props.onEditTodoPunyaList}
                    index={index}
                    item={item}
                    buttonDeleteLabel="Delete" />
            })}
        </div>
    )
}

export default List

//function handleAdd () {

//}

//const handleAdd2 = function () {

//}

//const handleAdd3 = () => {}