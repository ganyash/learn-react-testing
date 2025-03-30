import { render,screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', ()=>{  // describe for grouping
    test('Greet render corectrly', ()=>{ // test or it same only
    render(<Greet/>)
    const testElement = screen.getByText(/Hello/i)
    expect(testElement).toBeInTheDocument();
});

describe.skip('nested',()=>{
    xit('Greet render  with a  name', ()=>{ // xit-> test.skip, fit->test.only 
    render(<Greet name = "yash"/>)
    const textEle = screen.getByText('Hello yash')
    expect(textEle).toBeInTheDocument();
})
})
})


