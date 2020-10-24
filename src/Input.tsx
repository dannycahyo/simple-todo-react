import React from "react"


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
    const HandleButtonClick = () => {
        props.onSubmit(value)
    }
    return (
        <div>
            <input
                placeholder={props.placeholder}
                type="text"
                onChange={HandleInputChange}
                value={value} />
            <button onClick={HandleButtonClick}>{props.label}</button>
        </div>
    )
}

export default Input