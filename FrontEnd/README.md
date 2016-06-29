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
1) `cd BackEnd/`
2) `npm i`
3) `npm start`

On the second terminal:
1) `cd FrontEnd/`
2) `npm i`
3) `grunt deploy`
4) `http://localhost:3000`


How to debug Front End
Unit tests:
1) `Open a terminal on FrontEnd/`
2) `grunt test`

- or

1) `Open a terminal on tests/UnitTests/`
2) `karma start`

Integration tests:
1) `Open a terminal`
2) `npm install -g protractor`
3) `webdriver-manager update`
4) `webdriver-manager start`
5) `Open a terminal on tests/IntergrationTests/`
6) `protractor conf.js`

Development
`grunt watch`

To run unit test in Back end:
1) `open a terminal on BackEnd folder`
2) `npm test`



