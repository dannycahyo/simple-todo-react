import React from "react"
import  { render, screen } from "@testing-library/react"
import ListItem from "./ListItem"
import userEvent from "@testing-library/user-event"
import { kMaxLength } from "buffer"

describe("click listItem to edit and click button for delete", () => {
    it("should delete listItem", () => {
        render(<ListItem buttonDeleteLabel="Delete" index={1} item="Minum" onDeleteItemPunyaListItem={(index:number) => void 1} onEditTodoPunyaListItem={(newTodo:string, targetIndex:number) => void "Makan" }  />)

        userEvent.click(screen.getAllByRole("button", { name:"delete Delete" })[0]);
        
        userEvent.click(screen.getByRole("heading", { name:"Minum" }))
        
        userEvent.type(screen.getByRole("textbox", { name:"Minum" }),"Minum")
    
    })
})