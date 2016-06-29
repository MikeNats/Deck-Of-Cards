This is an Full Stack Responsive JavaScript application that emulates simple operations with a deck of card game

- Technologies:
-- Front End: HTML5, CSS, SASS, Foundation 5, Angular(1.5).
-- Front End Test Suite: Karma, Jasmine, Protractor.

-- Back End: Node, Express, MogoDB.
-- Back End Test Suite: Mocha.

Requirements

- NodeJs (+v4.4)
- Ruby
- Sass
- Grunt

How to use:
Open 2 terminals on the root folder

On the first terminal:
- `cd BackEnd/`
- `npm i`
- `npm start`

On the second terminal:
- `cd FrontEnd/`
- `npm i`
- `grunt deploy`
- `http://localhost:3000`


How to debug Front End
Unit tests:
- `Open a terminal on FrontEnd/`
- `grunt test`

- or

- `Open a terminal on tests/UnitTests/`
- `karma start`

Integration tests:

- `Open a terminal`
- `npm install -g protractor`
- `webdriver-manager update`
- `webdriver-manager start`
- `Open a terminal on tests/IntergrationTests/`
- `protractor conf.js`

Development
`grunt watch`

To run unit test in Back end:
- `open a terminal on BackEnd folder`
- `npm test`



