## Design choices

### Instructions
Before you start, please install all dependencies 
```
yarn install
```

Run project
```
yarn start
```

Run tests
```
yarn test
```

### Used tools
- react-app-rewired and customize-cra - extending create-react-app without ejecting
- @emotion - CSS in JS, styled components, scoped selectors
- typescript - static types for better DX, maintainability and enforcing proper use of components and functions
- @testing-library/react - library for simpler unit tests enforcing best practices out of the box
- tailwindcss - CSS utility library for common classes
- @ant-design/color - Tool for generating colour palette
- react-icons - SVG icons
- @reach/router - Lightweight react router

### Nice to have
- Better unit test coverage
- End-to-end tests using Cypress
- CI for linting, type checking, unit testing
- Proper storybook showcase and documentation

### Caveats
- To bypass CORS restrictions I'm using upstream proxy cors-anywhere to route all API requests. The same could be achieved with the inbuild CRA proxy however it wouldn't allow me to easily deploy a working example.
- Error handling should be improved