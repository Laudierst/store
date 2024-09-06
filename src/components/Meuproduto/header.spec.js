import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Header } from "./index"

describe("Header", () => {
    it("shoud render correctly", () => {
        render(<Header/>)

        expect(screen.getByText("Categorias")).toBeInTheDocument()
        //expect(screen.getByText("Rastreio")).toBeInTheDocument()
    })
})