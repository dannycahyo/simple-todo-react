import React from 'react'
import ListItem from './ListItem'
import { List as AntdList } from 'antd';

type ListProps = {
    items: string[]
    onDeleteItemPunyaList: (index: number) => void
    onEditTodoPunyaList: (newTodo: string, targetIndex: number) => void
}

const List = ({ items, onDeleteItemPunyaList, onEditTodoPunyaList }: ListProps) => {

    return (
        <div>
            <AntdList
                dataSource={items}
                renderItem={(item, index) => {
                    return <ListItem
                        onDeleteItemPunyaListItem={onDeleteItemPunyaList}
                        onEditTodoPunyaListItem={onEditTodoPunyaList}
                        index={index}
                        item={item}
                        buttonDeleteLabel="Delete" />
                }} />
        </div>
    )
}

export default List

//function handleAdd () {

//}

//const handleAdd2 = function () {

//}

//const handleAdd3 = () => {}