# myLocal

> A local listing service with want ads and reputation management

## Team

  - __Product Owner__: Yasser Mahmud
  - __Scrum Master__: Aman  Thapar
  - __Development Team Members__: Jonathan Hawley-Peters

## Table of Contents

1. [Team](#team)
1. [Table of Contents](#table-of-contents)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
      1. [Task Descriptions](#task-descriptions)
    1. [File Structure](#file-structure)
      1. [/src](#src)
      1. [/test](#test)
    1. [Roadmap](#roadmap)
    1. [Built With](#built-with)
    1. [APIs](#apis)
1. [Contributing](#contributing)

## Requirements

- Node 6.5.x
- MongoDB 3.2+

## Development
This is a React/Redux app with a Node/Express server and a MongoDB database. The project has been set up to run tests with Mocha, Chai-JQuery, and React Test Utilities so we can live our TDD dreams. 

### Installing Dependencies
npm install

### Tasks
From within the root directory:
- The **webpack --watch** command will constantly rebuild only the changed parts of the project
- The **grunt local** command will run your dev server on localhost:3000
- The **npm run test:watch** command will run your test every time it detects a change in the filesystem. You may want to turn off webpack watch.

Note that to start the server, you need a .env file in the root directory with PORT, DBPATH and SECRET variables like so:

PORT = 3000

DBPATH = 'mongodb://username:password@somehostedmongodbinstance'

SECRET = YOUR_SECRET_STRING_HERE

### File Structure
There are two files that matter for development in root: /src and /test. An exhaustive listing of the entire file structure can be found in Dir_Struct.md

#### /src
- client
- public
- server
- index.js

/client has source files for the front end React/Redux app. Inside /client, the /actions, /constants, and /reducers folders contain the code that manages Redux state. /components has regular react components, while /containers has React/Redux components.

Finally, at the top level of /client index.js is the entry point for the React App, and routes.js controls the front end routing for the single page application.

#### /test
- actions
- components
- server
- test_helper.js

The test_helper.js contains a bunch of fun tools that allow us to mock a DOM using jsdom while running tests in the command line, add testing feartures to react components with Reach Test Utilities, and simulate events on the DOM using Chai-JQuery. The folders in /test contain  tests for code in the /client directory, but the file structure is shallower for ease of navigation.

### Roadmap

View the project roadmap https://waffle.io/hrr18-trifecta/mylocal on waffle.io

### Built With
- Node
- MongoDB
- React
- Redux
- Mocha
- ChaiJQuery

### APIs
- Google Maps
- Eventbrite
- Yelp

## Contributing
See CONTRIBUTING.md for contribution guidelines, or if you're feeling bold:

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request
