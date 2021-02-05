import React from "react"
import { render, screen } from "@testing-library/react"
import Input from "./Input"
import userEvent from "@testing-library/user-event"

describe("Input", () => {
    it("should change value when user type", async () => {

        const onSubmit = jest.fn()
        render(<Input placeholder="Input ur activity" label="Add" onSubmit={onSubmit} />)
        const input = screen.getByPlaceholderText("Input ur activity")
        const value = "coding"

        await userEvent.type(input, value)
        expect(input).toHaveValue(value)

        userEvent.click(screen.getByRole("button"))

        expect(onSubmit).toBeCalledTimes(1)
        expect(onSubmit).toBeCalledWith(value)        
    })
})
