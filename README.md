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
When we run `yarn test` we actually execute "react-scripts test" in watch mode.

### JEST Watch mode
- Watch mode is an option that we can pass to JEST asking to watch files that have
changed since the last commit and execute tests related only to those changed
files.

- An optimization designed to make your tests run fast regardless of how many
tests you have.

If we make slight changes to the code, these changes are going to be visible 
by Git. The benefit of the Watch mode is that it will only trigger the tests that
are related to the changed files. Even though we have a test in `app.test.tsx` 
JEST will not pick that up; this is actually a helpful feature once your code
base grows in size and you have hundreds of tests. You would be interested in 
the files you are currently working on and watch mode will help with that.

If we commit the changes, and re-run `yarn test` we will see:
`No tests found related to files changed since last commit.`

If we make a change to `./src/components/greeet/Greet.test.tsx` and run `yarn test`
JEST is going to detect the changes present in the file and run the tests

# Filtering Tests
Every time you run `yarn test` JEST, it is going to display the menu:
```
❯ yarn test
...
Watch Usage
 › Press `a` to run all tests.
 › Press `f` to run only failed tests.
 › Press `q` to quit watch mode.
 › Press `p` to filter by a filename regex pattern. 
 › Press `t` to filter by a test name regex pattern.
 › Press `Enter` to trigger a test run.
```

We can press `a` to execute all tests including the `./src/App.test.tsx`, after 
pressing that, we find something like:
```
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Press `o` to have the most basic filtering. Which run tests based on the current
uncommitted changes.

Press `p` to filter by a filename regex pattern. Something like `App`, it is 
going to find `./src/App.test.tsx` to run.

Press `t` to filter by a test name regex pattern. Something like `name`, it is 
going to find `./src/components/greeet/Greet.test.tsx` which its name include 
the word `name` to run:
```
 PASS  src/components/greeet/Greet.test.tsx

Test Suites: 1 skipped, 1 passed, 1 of 2 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        1.177 s
Ran all test suites with tests matching "^Greet renders a name$".

Watch Usage: Press w to show more.
```

By applying this filter we have 2 tests skipped.

Also we can use the `.only()` method to specify the tests we want to run:
```
 PASS  src/components/greeet/Greet.test.tsx
  ✓ Greet renders a name (20 ms)
  ○ skipped Greet renders correctly

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 1 passed, 2 total
Snapshots:   0 total
Time:        0.462 s, estimated 1 s
Ran all test suites matching /src\/components\/greeet\/Greet\.test\.tsx/i.

Watch Usage: Press w to show more.
```

Use the `.skip()` method to specify the tests we want to skip:
```
 PASS  src/components/greeet/Greet.test.tsx
  ✓ Greet renders correctly (19 ms)
  ○ skipped Greet renders a name

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 1 passed, 2 total
Snapshots:   0 total
Time:        0.359 s, estimated 1 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

# Grouping Tests
If you prefer your test to be organized into groups, you can
use the global `describe` method, that JEST provides.

### `.describe`
```
describe(<name>, <function>)
```

- The first argument is the group name.
- The second argument is a function that contains the expectations to test.

```
 PASS  src/components/greeet/Greet.test.tsx
  Greet Component
    ✓ Greet renders correctly (20 ms)
    ✓ Greet renders a name (3 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.733 s, estimated 1 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```
It is possible to use the methods `.only` and `.skip` in the tests wrapped
by the `.describe.only(` method.

It is possible to nest the describe blocks.

We can have multiple describe blocks into `*.test.tsx` file.

# Filename Conventions
- Files with `.test.js` or `.test.tsx` suffix.
- Files with `.spec.js` or `.spec.tsx` suffix.
- File with `.js` or `.tsx` suffix in `__tests__` folders.

Recommendation is to always put your tests next to the code they are testing so
that relative imports are shorter.

```
 PASS  src/components/greeet/Greet.test.tsx
 PASS  src/components/greeet/Greet.spec.tsx
 PASS  src/__tests__/Greet.tsx

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.409 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

```

Use `fit()` to run a single test. (`test.only`)
Use `xit()` to skip a test. (`test.skip`)

# Code Coverage
A metric that can help you understand how much of your software code 
is tested:

- Statement coverage: how many of the statements in the software code have
been executed.

- Branches coverage: how many of the branches of the control structures (if
statements for instance) have been executed.

- Function coverage: how many of the functions defined have been called and
finally.

- Line coverage: how many of lines of source code have been tested.

```
 PASS  src/App.test.tsx
 PASS  src/components/greeet/Greet.test.tsx
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |   21.42 |        0 |      50 |   21.42 |
 src                   |    8.33 |        0 |   33.33 |    8.33 |
  App.tsx              |     100 |      100 |     100 |     100 |
  index.tsx            |       0 |      100 |     100 |       0 | 7-19
  reportWebVitals.ts   |       0 |        0 |       0 |       0 | 3-10
 src/components/greeet |     100 |      100 |     100 |     100 |
  Greet.tsx            |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.922 s, estimated 2 s
Ran all test suites.

Watch Usage: Press w to show more.
```

The columns:
- `File` The file name.
- `% Stmts` Statement coverage percentage.
- `% Branch` Branch coverage percentage.
- `% Funcs` Functions coverage percentage.
- `% Lines` Lines coverage percentage.
- `Uncovered Line #s` The range of lines numbers that are not covered.

Generally you want to address the red numbers in the report by writing
tests that will turn them into green.

We know for the fact that there is not need to include the files `reportWebVitals.ts`
and `index.tsx` in the coverage report. So we can ignore them by using:
```
yarn test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'
```
Also we ignore the files for declare types and stories.

#### Coverage Thresholds
With JEST it is possible to specify a minimum threshold enforcement
for coverage reports. If threshold are not met, JEST will fail. For
example we can add the following JEST key configuration into `package.json` :
```
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  }
}
```

As we defined if we run the tests, this are going to warn:
`Jest: "global" coverage threshold for branches (80%) not met: 50%`

Also we can notice a new folder `coverage` in the root of the project,
this folder is already ignored, because `CRA`. We may open the file
`/coverage/lcov-report/index.html` in the browser.

Note: Do not focus to much on getting 100% coverage. Full code coverage
does not guarantee that you have written good tests covering critical
parts of your application. An 80% coverage is well accepted goal to aim.

# Assertions
When writing test, we often need to check that values meet certain conditions.
Assertions decide if a test passes or fails.
### expect method
```
.expect(<value>)
```
The argument should be the value that your code produces.

Typically, you will use expect along with a "matcher" function to assert something
about a value

A matcher can optionally accept an argument which is the correct expected value.

If you visit <a href="https://jestjs.io/docs/using-matchers" target="_blank">Using Matchers</a> 
you may find the most common used matchers.

If you visit <a href="https://github.com/testing-library/jest-dom#custom-matchers" target="_blank">Github repo</a> 
you may find the most common used matchers, as well.

**NOTE**: JEST-dom is installed by CRA defaults. We can verify it in the `package.json` 
dependency list:
```
"@testing-librarwyy/jest-dom": "^5.14.1"
```
And we head onto `./src/setupTests.ts`  the whole package in being imported, this
file in `CRA` and it will automatically executed before JEST runs a test.

# Section Summary
- Jest watch mode.
- Filtering tests.
- Grouping tests.
- Filename conventions.
- Code coverage
- Assertions

# What to test?
There is not a rule, but there are some guidelines for what is worth
testing, when writing a react component:
- Test component renders.
- Test component renders with props.
- Test component renders in different states.
- Test component reacts to events.

<h3 style="color:red"> What not to test</h3>

<ul style="color:red;">
  <li>Implementation details.</li>
  <li>Implementation details.</li>
  <li>Code that is not important from a user point of view.</li>
</ul>

# React Testing Library(RTL) Queries
Every test we generally involves the following basic steps:
<ol>
  <li>Render the component</li>
  <li>Find an element rendered by the component</li>
  <li>Assert against the element found in step 2 which will pass or fail the test</li>
</ol>

For assertion, we expect passing in a value and combine it with a matcher
function from jest or jest-DOM.

Queries are the methods that Testing Library provides to find elements on the page

To find a single element on the page, we have:
- `getBY..`
- `queryBy..`
- `findBy..`

To find multiple elements on the page, we have:
- `getAllBy..`
- `queryAllBy..`
- `findAllBy..`

<span style="color:yellow;">Notice:</span> The dots `..` are used to indicate the method need
a suffix to form the actual query. 

The suffix can be one of:
<ul>
  <li>Role</li>
  <li>LabelText</li>
  <li>PlaceHolderText</li>
  <li>Text</li>
  <li>DisplayValue</li>
  <li>AltText</li>
  <li>Title</li>
  <li>TestId</li>
</ul>

In this section we are going to focus on the `getBy..` queries:

- `getBy..` class of queries return the matching node for a query, and throw a
descriptive error if no elements match or if more than one match is found.

# getByRole
`getByRole` queries for elements with the given role.

Role refers to the ARIA (Accessible Rich Internet Applications) role which provides
semantic meaning to content to ensure people using assistive technologies are
able to use them.

By default, many semantic elements in HTML have a role:
- `<button>` element has a button role.
- `<anchor>` element has a link role.
- `<h1>` to `<h6>` element has a heading role.
- `<input type="checkbox">` have a checkbox role
- `<input type="radio">` have a checkbox role

and so on ...

If you're working with elements that do not have a default role or if you want to
specify a different role, the role attribute can be used to add the desired role.

To use an anchor element as a button in the `navbar`, you can add `role='button'`

To research the role of each element visit:
<a href="https://testing-library.com/docs/queries/byrole" target="_blank">`ByRole` section</a>

And for more information visit:
<a href="https://w3.org/TR/html-aria/#docconformance" target="_blank">
  table of HTML elements with their default and desired roles
</a>

<span style="color:cyan;">Summary:</span> The `getByRole` queries for elements with the given role. 
The role can be any default role present on an element or the role added using the role attribute.
To get a glimpse of all the HTML elements and their corresponding role visit: 
<a href="https://w3.org/TR/html-aria/#docconformance" target="_blank">
  table of HTML elements with their default and desired roles
</a>

# getByRole Options
The `getByRole` method accepts a few options that can be used to tweak
the querying logic.

##### name
The accessible name is for simple cases equal to:
<ol>
  <li>the label of a form element</li>
  <li>the text content of a button </li>
  <li>the value of the aria-label attribute</li>
</ol>

The tags `<h1>` to `<h6>` have the role of heading.

Another way to test the role heading is by using the level option,
which number matches w/ the tag `<h level>` number.

### getByRole Options
<ul>
  <li>name</li>
  <li>level</li>
  <li>hidden</li>
  <li>selected</li>
  <li>checked</li>
  <li>pressed</li>
</ul>

<span style="color:cyan;">Suggestion:</span> The `getByRole` method should be your top
preference for just about everything.

# getByLabelText
`getByLabelText` will search for the label that matches the given text, then find the
element associated with that label.

# getByPlaceholderText
`getByPlaceholderText` will search for all elements with a placeholder attribute and 
find one that matches the given text.

# getByText
`getByText` will search for all elements that have a text node with textContent
matching the given text.
Typically, you'd use this to find paragraph, div or span elements.

# getByDisplayValue
`getByDisplayValue` will return the `<input>` `<textarea>` or `<select>` element that
has the matching display value.

# getByAltText
`getByAltText` will return the element that has the given alt text
This method only supports elements which accept an `alt` attribute like `<img>`,
`<input>`, `<area>` or custom HTML elements.

# getByTitle
`getByTitle` returns the element that has the matching title attribute.

# getByTestId
`getByTestId` returns the element that has the matching `data-testid` attribute.

# Priority Order for Queries
> "Your test should resemble how users interact with your code (component, page, etc.)
as mush as possible"

The recommended order priority is:
<ol>
  <li>getByRole</li>
  <li>getByLabelText</li>
  <li>getByPlaceholderText</li>
  <li>getByText</li>
  <li>getByDisplayValue</li>
  <li>getByAltText</li>
  <li>getByTitle</li>
  <li>getByTestId</li>
</ol>

# Section Summary
RTL queries
8 different query methods:
<ol>
  <li>getByRole</li>
  <li>getByLabelText</li>
  <li>getByPlaceholderText</li>
  <li>getByText</li>
  <li>getByDisplayValue</li>
  <li>getByAltText</li>
  <li>getByTitle</li>
  <li>getByTestId</li>
</ol>

Order of priority for using queries.

# Query Multiple Elements
### RTL `getAllBy..` Queries
- Find multiple elements in the DOM.
- `getAllBy` returns an array of all matching nodes for a query, and throws an error if
no elements match.

Every `getBy..` query has its corresponding `getAllBy..` query

| `getBy..`  | `getAllBy..`  |
|-------------- | ------- |
| `getByRole` | `getAllByRole`    |
| `getByLabelText` | `getAllByLabelText`    |
| `getByPlaceholderText` | `getAllByPlaceholderText`    |
| `getByText` | `getAllByText`    |
| `getByDisplayValue` | `getAllByDisplayValue`    |
| `getByAltText` | `getAllByAltText`    |
| `getByTitle` | `getAllByTitle`    |
| `getByTestId` | `getAllByTestId`    |

## `getAllByRole` Query



# TextMatch
##### RTL queries used so far
```
const pageHeading = screen.getByRole("heading");
const nameElement2 = screen.getByLabelText("Name");
const nameElement3 = screen.getByPlaceholderText("Fullname");
const paragraphElement = screen.getByText("All fields are mandatory");
const nameElement4 = screen.getByDisplayValue("Vishwas");
const imageElement = screen.getByAltText("a person with a laptop")
const closeElement = screen.getByTitle("close");
const customElement = screen.getByTestId("custom-element");
const listItemElement = screen.getByAllRole("listItem");
```

The type of the first argument received by a `getBy..` query is string. In the
case of `getAllBy..` queries, the first argument type is what is called `TextMatch`.

`TextMatach` represents a type which can be either a:
- string
- regex
- function

### TextMatch - string

From the DOM:
```
<div>Hello World</div>
```
The queries bellow could match the DOM element above:
```
screen.getByText('Hello world'); //full String match
```

```
screen.getByText('llo world', {exact:false}); // sub-String match
```

```
screen.getByText('Hello world', {exact:false}); //ignore case
```

### TextMatch - regex
```
<div>Hello World</div>
```

```
screen.getByText(/World/); //sub-string match
```
```
screen.getByText(/world/i); // sub-String match, ignore case
```

```
screen.getByText(/^hello world$/i); //full string match, ignore case
```

### TextMatch - custom function
```
(content?: string, element?: Element | null)=> boolean
```

```
<div>Hello World</div>
```

```
screen.getByText((content)=>content.startsWith('Hello'));
```

# queryBy
### queryBy and queryAllBy

#### queryBy
- Returns the matching node for a query, and return null if no elements match.
- Useful for asserting an element that is not present.
- Throws an error if more than one match is found.

#### queryAllBy
- Returns an array of all matching nodes for a query, and return an **empty array ([])** 
if no elements match.

| `getBy..`  | `getAllBy..`  |
|-------------- | ------- |
| `getByRole` | `getAllByRole`    |
| `getByLabelText` | `getAllByLabelText`    |
| `getByPlaceholderText` | `getAllByPlaceholderText`    |
| `getByText` | `getAllByText`    |
| `getByDisplayValue` | `getAllByDisplayValue`    |
| `getByAltText` | `getAllByAltText`    |
| `getByTitle` | `getAllByTitle`    |
| `getByTestId` | `getAllByTestId`    |

# Queries so far
- `getBy..` and `getAllBy..` class of queries to assert if elements are present in the DOM.
- `queryBy` and `queryAllBy` class of queries to assert if elements are not present in 
the DOM.

# findBy
Although that based on what we know about Queries so far, looks like we have covered
most of the cases. We do have a third case:
### Appearance/ Disappearance
What if elements are not present in the DOM to begin but make their way into the
DOM after some time?

For example, data that is fetched from a server will be rendered only after a few 
milliseconds.

For this case, we have a button that is initially displaying "Login" and after
click this button it displays "Start Learning". There is no query that waits for
an element to appear on the screen.
Initially the is logged in is `false` and the "Start Learning" button is hidden.

For solve this problem:
## `findBy` and `findAllBy`
### `findBy`
- Returns a Promise which resolves when an element is found which matches the
given query.
- The promise is rejected if no element is found or if more than one element is found
after a default timeout of `1000ms`.

### `findAllBy`
- Returns a promise which resolves to an array of elements when any elements are 
found which match the given query.
- The promise is rejected if no elements are found after a default timeout of `1000ms`.
- The test will fail if the component takes more than `1000ms` to render.

# Manual Queries
### RTL Queries
- `getBy` & `getAllBy`
- `queryBy` & `queryAllBy`
- `findBy` & `findAllBy`

Manual queries - you can use the regular `querySelector` DOM API to find elements
```
const {container} = render(<MyComponent />);
const foo = container.querySelector('[data-foo="bar"]');
```

# Debugging
You can use `screen.debug` to visualize a formatted state of the DOM tree at 
any point during the test and you can use `logRoles` from `@testing-library/dom`
to print out a list of all the implicit aria - rules within the DOM tree:
```
 PASS  src/components/greeet/Greet.test.tsx
 PASS  src/components/skills/Skills.test.tsx
  ● Console

    console.log
      list:

      Name "":
      <ul />

      --------------------------------------------------
      listitem:

      Name "":
      <li />

      Name "":
      <li />

      Name "":
      <li />

      --------------------------------------------------
      button:

      Name "Login":
      <button />

      --------------------------------------------------

      at logRoles (node_modules/@testing-library/dom/dist/role-helpers.js:207:20)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 2 skipped, 2 passed, 2 of 4 total
Tests:       2 skipped, 6 passed, 8 total
Snapshots:   0 total
Time:        4.13 s
Ran all test suites.

Watch Usage: Press w to show more.
```

# Testing Playground
This a chrome extension to find the best queries to select elements when working with 
testing library. It allows us to inspect the hierarchies in the developer tools and
provides you with suggestions on how to select them, while encouraging good testing
practices.

# Section Summary
- Query multiple elements.
- `queryBy` and `queryAllBy`.
- `findBy` and `findByAllBy`.
- Manual queries.
- Debug tests.
- Testing playground extension.

# User Interactions
- A click using a mouse or a keypress using a keyboard.
- Software has to respond to such interactions.
- Tests should ensure the interactions are handled as expected.

To test user interactions we use `user-event`:
### user-event
A companion library for Testing Library that simulates user interactions by
dispatching the events that would happen if the interaction took place in a browser.

It is the recommended way to test user interactions with RTL.

### fireEvent vs user-event
- `fireEvent` is a method from RTL which is used to dispatch DOM events.
- `user-event` simulates full interactions, which may fire multiple events and do additional checks
along the way.

For example, we can dispatch the change event on an input field using `fireEvent`.

When a user types into a text box, the element has to be focused, and then keyboard and input
events are fired and the selection and value on the element are manipulated as they type.

`user-event` allows you to describe a user interaction instead of a concrete event. It adds visibility
and intractability checks along the way and manipulates the DOM just like a user interaction in
the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or
type in a disabled text box

```
yarn upgrade @testing-library/user-event@latest
```

# Pointer Interactions
### Convenience APIs
- `click()` 
- `dblClick()`
- `tripleClick()`
- `hover()`
- `unhover()`

### Pointer APIs
```
pointer({keys: '[MouseLeft]'})
pointer({keys: '[MouseLeft][Mouseright]'})
pointer('[MouseLeft][Mouseright]')
pointer('[MouseLeft>]')
pointer('[/MouseLeft]')
```

# Keyboard Interactions
#### Utility API
- `type()`
- `clear()`
- `selectOptions()`
- `deselectOptions()`
- `upload()`

#### Clipboard APIs
- `copy()`
- `cut()`
- `paste()`

#### Convenience API
`tab()`

#### Keyboard API
- `keyboard('foo') //translates to: f, o, o`
- `keyboard('{Shift>}A{/Shift}') //translates to: Shift(down), A, Shift(up)`

# Section Summary
- user-event library.
- CRA installs user-event but needs upgrading.
- Mouse and keyboard interactions with Counter component.
- Mouse click events.
- Keyboard type and tab events.
- Convenience APIs, utility APIs, clipboard APIs.
- Pointer and keyboard APIs.

# Providers
The context provider simulates a wrappers around an element.
This save us from having to specify the wrapper option in every test.
Install material-ui 
```
yarn add @mui/material @emotion/react @emotion/styled @mui/material/types
```

But the context provider wraps only a few components however for something
like a theme provider or `redux store` provider.
# Custom Render Functions
Now the way to achieve a single wrapper across all tests is by writing a 
custom render function.

Visit: [React Testing Library setup](https://testing-library.com/docs/react-testing-library/setup)

Create `./src/test-utils.tsx`

# Custom React Hooks
When testing react hooks, you only rely on the `renderHook`, due to 
in React we can not use hooks from another component that is not 
a react component.

# Act Utility
When writing UI tests, tasks like rendering, user events, or data fetching
can be considered as "units" of interaction with a user interface. `react-dom/test-utils`
provides a helper called `act()` that makes sure all updates related to these "units"
have been processed and applied to the DOM before you make any assertions:
```
act(()=>{
  //render components
});
// make assertions
```

This helps make your tests run closer to what real users would experience when using your
application. The rest of these examples use `act()` to make these guarantees.

You might find using `act()` directly a bit too verbose. To avoid some of the boilerplate, you
could use a library like `React Testing Library`, whose helpers are wrapped with `act()`.

> "`Act` is a function that ensures updates are processed before assertions are made."

# Section Summary
- Wrapper option for providers
- Custom render function
- Test custom react hooks
- Act utility

# Mocking Functions
Mock functions allow you to test your code without having to worry about the
actual implementation of a function.

# Mocking HTTP Request
For mocking when writing tests with React Testing Library(RTL), you can use
the `Mock Service Worker (MSW)` to mock HTTP requests.

# MSW Setup
You can find the MSW setup instruction [here](https://mswjs.io/docs/getting-started/integrate/node).
```
❯ yarn add msw --dev
```

# MSW Handlers

# Testing with MSW

# MSW Error Handling

# Static Analysis Testing

# Eslint

# Prettier

# Husky

# lint-staged

# Wrapping                                          t
