import React from "react"
import { Input as AntdInput } from 'antd';
import { Button } from 'antd';

type InputProps = {
    placeholder: string
    label: string
    onSubmit: (value: string) => void
}
const Input = (props: InputProps) => {

    const [value, setValue] = React.useState("")

    const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const HandleButtonClick = (even: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onSubmit(value)
    }
    return (
        <div style={{ display: "flex" }}>
            <AntdInput
                placeholder={props.placeholder}
                type="text"
                onChange={HandleInputChange}
                value={value} />
            <Button onClick={HandleButtonClick} type="primary">{props.label}</Button>
        </div>
    )
}



export default Input