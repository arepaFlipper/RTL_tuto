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


