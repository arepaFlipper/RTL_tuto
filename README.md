# React Testing Tutorial

# Introduction
## Testing
- As a developer, our primary goal is to build software that works.
- To ensure our software works, we test the application.
- We check if our software works as expected.

### Manual Testing
- An individual will open the website, interact with the website and ensure
everything works as intended.

- If a new feature is released, you repeat the same steps.

- you have to test not only the new feature but also the existing features.

- Drawbacks: 
  - time-consuming.
  - Complex repetitive tasks has a risk of human error.
  - You may not get a chance to test all the features you should

### Automated testing
- Automated tests are programs that automate the task of testing your software.
- Write code to test the software code.
- Additional effort required when you develop a feature.

- Advantages:
  - Not time consuming.
  - Reliable, consistent and not error prone.
  - Easy to identify and fix features that break tests.
  - Gives confidence when shipping software.

## Course structure 

- Jest and React Testing Library
- Fundamentals of writing a test
- Test components with use interactions 
- Test components wrapped in a provider
- Test components with mocking
- Static analysis testing

## Prerequisites
- React fundamentals
- TypeScript fundamentals

# Jest vs React Testing Library (RTL)
## JEST
- Jest is a javascript testing framework.
- Jest is a test runner that finds tests, runs the tests, determines whether the
tests passed or failed and reports it back in a human readable manner.

## React Testing Library (RTL)
- Javascript testing utility that provides virtual DOM for testing React components.

- React Testing Library provides a virtual DOM which we can use to interact with
and verify the behaviour of a react component.

- Testing Library in in fact a family of packages which helps test UI components.

- The core library is called DOM Testing library an RTL is simply a wrapper around 
this core library to test React applications in an easier way.

# Types of Tests
- Unit tests
- Integration tests
- End to end (e2e) tests

### Unit tests 
- Focus is on testing the individual building blocks of an application such as a class
or a function or a component.

- Each unit or building block is tested in isolation, independent of other units.

- Dependencies are mocked.

- Run in a short amount of time and make it very easy to pinpoint failures.

- Relatively easier to write and maintain.

### Integration tests
- Focus is on testing a combination of units and ensuring they work together.
- Take longer than unit tests.

### E2E tests
- Focus is on testing the entire application flow and ensuring it works as designed
from start to finish.
- Involves in a real UI, a real backed database, real services, etc.

- Take the longest as they cover the most amount of code.

- Have a cost implication as you interact with real API's that may charge based on
the number of requests.

## Testing pyramid

<img src="img/Pyramid.png" width="500" style="display: block; margin: 0 auto;" alt="Testing Pyramid">

As you move up the pyramid your testing becomes more complex. And the amount 
get smaller. This depends on the nature of the project.

Unit tests are the easiest to write and maintain, but the e2e tests give you the most confidence, as 
they closely resemble a user testing your app.

## RTL Philosophy
> "The more your tests resemble the way your software is used, the more confidence they can give you."

Test we are going to apply in this repo strike a balance between unit tests in
the sense, they are at a component level and easy to write and maintain and E2E tests in
the sense they resemble the way a user would 8interact with the component.

With React Testing Library, we are not concerned about the implementation details of a 
component.

Instead we are testing how the component behaves when a user interacts with it.

React Testing Library will not care if you add 4+4 or 5+3 to display the number 8.

Refactoring will not affect your test as long as the end result is the same.

## Conclusion
- There are three types of tests: unit, integration and end to end.
- React Testing Library strikes a balance between unit and E2E tests which is what we will be learning 
in the rest of the series.

# What is a Test?

# Project Setup

1. make sure you have node.js installed
```
❯ node --version
v18.18.0
```
2. make sure you have git installed, this is important to understand an aspect of JEST which we
will learn in a few videos.
```
❯ git --version
git version 2.42.0
```
3. open you IDE inside the project folder
4. Use CRA:
```
❯ yarn create react-app . --template typescript
```

In this template the JEST seems to be not included in the package.json dependency list. But 
if we look at `./node_modules/react-scripts/package.json` we can see that JEST is included.
Which means it is a sub dependency in react-scripts. But also there is a folder in the path 
`./node_modules/jest/`

# Running Tests
By default CRA includes a testing section:

- There is a file `./src/App.test.tsx`.
- To run the test:
```
❯ yarn test

 PASS  src/App.test.tsx
  ✓ renders learn react link (31 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.098 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```

This starts the tests in what is called a watch mode.
Press `a` to run all tests:

```
 PASS  src/App.test.tsx
  ✓ renders learn react link (26 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.398 s, estimated 1 s
Ran all test suites.

Watch Usage: Press w to show more.
```

It is able to run the App.test.tsx, which is testing that the 
component is able to render the `learn react` link.

# Anatomy of a Test
In the file `./src/App.test.tsx` we call a function `test`, let's see the Function
signature:

```
test(<name>, <fn>, <timeout>)
```

1. The first argument <name> is the test name used to identify the test.
2. The second argument <fn> is a function that contains the expectations to test.
3. The third argument <timeout> is an optional argument for specifying how
long to wait before aborting the test. The default timeout value is 5 seconds.

For the example:
```
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```
`<name>`:`renders learn react link`

The second argument <fn> is a function that contains the expectations to test. This
is where RTL comes into picture, we begin by creating a virtual DOM of the app
component using `render` method from react testing library.

The `screen` object is a utility from react testing library that allows us to query
the virtual DOM. In this case we are querying the text `learn react` using regex.

NOTE: The `test` and `expect` are both function from jest, the CRA globally provides them in 
any test, there is no need to import them.

#  Your first Test
JEST automatically finds new files with `*.test.tsx` and runs them:
```
❯ yarn test
 PASS  src/components/greeet/Greet.test.tsx
  ✓ Greet renders correctly (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.219 s, estimated 2 s
Ran all test suites related to changed files.
```

We see the test name which is Greet renders correctly and the status is passed.
Keep in mind tests that never fail are also useless, the goal of having tests is 
for them to fail when the application misbehaves.

Use regex to ignore the Capital letters `/hello/i`.

# Test Driven Development (TDD)
Test driven development is a software development process where you write tests
before writing the software code.

Once the tests have been written, you then write the code to ensure the tests pass:

1. Create tests that verify the functionality of a specific feature.
2. Write  software code that will run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass.

Also called red-green testing as all tests go from a red failed state to a green 
passed state.

# Section Summary
- What is an automated test
- Types of automated tests
- JEST vs React Testing Library (RTL)
- React project setup using (CRA)
- Anatomy of a test
- Write our first test
- TDD

# JEST Watch mode

# Filtering Tests

# Grouping Tests

# Filename Conventions

# Code Coverage

# Assertions

# What to test?

# React Testing Library(RTL) Queries

# getByRole

# getByRole Options

# getByLabelText

# getByPlaceholderText

# getByText

# getByDisplayValue

# getByAltText

# getByTitle

# getByTestId

# Priority Order for Queries

# Query Multiple Elements

# TextMatch

# queryBy

# findBy

# Manual Queries

# Debugging

# Testing Playground

# User Interactions

# Pointer Interactions

# Keyboard Interactions

# Providers

# Custom Render Functions

# Custom React Hooks

# Act Utility

# Mocking Functions

# Mocking HTTP Request

# MSW Setup

# MSW Handlers

# Testing with MSW

# MSW Error Handling

# Static Analysis Testing

# Eslint

# Prettier

# Husky

# lint-staged

# Wrapping
