# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### `code coverage` 
A metric that can help you understand how much of your software code is tested.

 - statement coverage: how many of the sts in the software code hae been executed
 - Branches coverage: how many of the branches of the control structures (if stts for the instance) have been executed.
 - Function coverage: how many of the function defined have been called and finally.
 - line coverage: how many of lines of source code have been  tested.

 ### `RTL QUERIES`
 Every test we write genrally involves the following basic steps
 - Render the component 
 - Find an element rendered by the component
 - Assert against the element found in step2 which will pass or fails the test.

 To render the component we use the render method from the RTL

 Fort assertionn, we use the expect passing a value and combine it with a matcher function from jest to jest-dom.

 `Queries` (Testing-library.com/docs/queries/byRole)
  Queries are the methods that testing library provides to find elements on the page.
  To find a single element on the page, we have
  - getBy..
  - queryBy..
  - findBy..

  To find multiple elements on the page, we have
  - getAllBy..
  - queryAllBy..
  - findAllBy..

  The two dots represents the suffix that can be one of role, LabelText, PlaceHoldertext, Text, DisplayValue, Alttext, Title and finally TestId

    `getBy..`
    getBy.. class of queries return the   matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

     - `getByRole` 
        queries for elements with the given role
        Role refers to the ARIA (Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people suing assistive technologies are able to sue them.
    
        By default, many semantic elements in HTML have a role.
        Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radioo role and so on

        If you are working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role.

        To use an anchor element as a button in the navbar, you can add role="button"

    - `getByLabelText`
        will search for the label that matches the given text, then find the element associated with that label.
    - `getByPlacholderText`
        will search for all elements with a placeholder attribute and find one that matches the given text
    - `getByText`
        wil search for all elements that have a text node with textContent matching the given text.
        typicaly you'd use this to find paragraph, div, span elements.
    -  `getByDisplayVaue`
        returns the input, textArea, or select element that has the matching display value.
    - `getByAltText`
        will return the element that has the given alt text.
        This method only supports elements which accept an alt atttribute like <img>, <input>, <area> or custom HTML elements.
    - `getByTitle`
        returns the element that has the matching title attribute
    - `getByTestId`
        returns the element thst has tha matching data-testid attribute
### `Priority order of Queries`
 your test should resemble how users interact with ur code (component, page etc) as much as possible.
    1. getByRole
    2. getByLabelText
    3. getByPlaceHolderText
    4. getByText
    5. getByDisplayValue

these 5 are enough to find element if not.
    6. getByAltText
    7. getByTitle
    8. getByTestId



### `getAll..` queries
Find multiple elements in the DOM
getAllBy return an array of all matching node for a query, and throws an error of no elements match
foreg = expect(getAllByRole("listitem")).toHaveLength(skills.length)
// const skills = ["html", "css","js"] 

### `argument passed in getAll() fn`
    arg can be passed as 
    1. string
    2. regex
    3. function

    <div>Hello World</div>
    1. string
    getByText('Hello World') // full string match
    getByText('llo Worl', {exact: false}) // substring match
    getByText('hello world', {exact: false}) // ignore case

    2. regex

    getByText(/World/) 

    3. function
     (content?: string, element?: Element|nulll) => boolean
     getByText(content=>content.startsWith('Hello'))

### `quearBy`
- returns the matching node for a query and return null if no elements match
- useful for asserting an elements that is not preset unlkike getAll if element not found getAll throws error. 
- throws an error if more than one node is found.

### `queryAllBy`
- returns the array of all matching nods for a query and return an empty arrray if no elements match

### `findBy and findAllBy`
- Apperance/Disappearnce
what if dom elements are not present in the dom to begin but make their way into the DOM after some time
 for eg data that is fetched from a server will be rendered only after a few ms.

 defination(findBy)
- returns a promise which resolves when an element is found which matches the given query
- the promise is rejected if no element is found or if more than one element is found after a defaul;t timout of 1000ms.

defination (findAllBy)
- returns a promise which resolves to an array of elements when any elements are found which matches the given query.
- the promise is rejected if no elements are found  after a defaul;t timout of 1000ms.

foreg findByRole("button",{name: ""start learning},{timeout: 2000ms // this is when u want to override the default timeout which is 1000ms. so here the findBy wait for 2s to resolve the promose.})

### `user interactions`
- library `user-event`
A companion library for testing library that simulates user interactions by dispatching the events that would happen if the interaction took place in the browser.

- alternative to `user-event` is `fireEvent`
it is a method from RTL which is used to dispatch DOM events.
  - pointer interactions: click(), dblClick(), tripleClick(), hover(), unhover()
  - convenational api: tab()  only this api
  - Keyboard interactions: 
    - utility api: clear(), selctOptions(),deselectOptions(), upload()
    - clipboard apis = copy(), cut(), paste()

### `Providers`
- render(<Componwnt/>,{
    wrapper: AppProviderTheme
})

### `custom hooks`
- const {result} = renderHook(myCustomHook);
    result.current=> contain all values return by hook.
    expect(result.current.count).toBe(0)

### `act`
 - whenver we update state, wrap ur update state function inside act so that RTL will make sure the state updates in the dom before making asserion.
 so
  act(()=>result.current.incrememtCount())
expect(result.current.count).toBe(1)


### `mocking functions`
- without worrying about the funtion implemtnation we can mock the fn using jest.fn();
const incremetnHandler = jest.fn()
render(<Counter count={0}  handlerIncrement={incremetnHandler} />)

### `mock service worker`
mock by intercepting requests on the network.
