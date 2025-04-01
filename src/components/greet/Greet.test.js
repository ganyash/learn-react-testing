import { render,screen } from "@testing-library/react"
import user from '@testing-library/user-event';
import { Greet } from "./Greet"

describe('Greet', ()=>{  // describe for grouping
    test('Greet render corectrly', ()=>{ // test or it same only
    render(<Greet/>)
    const testElement = screen.getByText(/Hello/i)
    expect(testElement).toBeInTheDocument();
    
    const labelCheck = screen.getByLabelText('sagar')
    expect(labelCheck).toBeInTheDocument();
});

describe('testing user event',  ()=>{
    // user.setup();
    render(<Greet/>)
    test('render a count of 0' ,()=>{
        screen.getByTestId('increment-counter')
    })
})

// describe.skip('nested',()=>{
//     xit('Greet render  with a  name', ()=>{ // xit-> test.skip, fit->test.only 
//     render(<Greet name = "yash"/>)
//     const textEle = screen.getByText('Hello yash')
//     expect(textEle).toBeInTheDocument();
// })
// })
})


