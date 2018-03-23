# WellMo

WellMo is a single page web application that checks in with your mood and returns a helpful response.

## Technologies

- Frontend: ReactJS

- Unit Testing: Jest with Enzyme

- Feature Testing: Nightwatch.js

## Team WellMo

- Daniel Keen

- Heather Stock

- Josh Holloway

- Marcus Gardiner

- Terry Allitt (BigTez)

## How to use

To use straight away, go [here](https://wellmo.herokuapp.com/).

`git clone git@github.com:DKeen0123/WellMo.git`

`npm install`

`npm start`

## How to run tests

For unit tests:

`npm run test`

For feature tests:

`npm run nightwatch`

(You may be prompted to install [Java](https://java.com/en/download/) to install nightwatch.js)

## Goals for the week

* As a team, our core focus was to learn react.js in a fully unit and feature test driven way, in one week. We had never used react before.

* As a result, we rebuilt our app 3 times: the first was a spike with only functionality, the second was rebuilt using BDD to test drive development, the third was a full code refactor, extracting components and aiming to applying react in as close to a best practice way as possible using our learnings through the week.

## Meta-Learning

* Always check versions when installing 3rd party packages e.g. Nightwatch (a.k.a nightmare), Javascript and ES5 versus ES6 syntax issues can cause lots of unseen issues.

* Struggling with code is essential to embed learning. For example, by rebuilding the application to refactor our code into more granular components, we learned how REACT's modular style has many advantages in building up conditionally rendered views (rather than relying on inserting HTML to change a page).

* Be courageous in challenging your own code quality. We made sure to build something that worked and made our own efforts to refactor, before we looked for help from experienced React Devs. Importantly, even though our code was working and fully test driven, we still asked for a code review from experienced React Devs, so that we could challenge our code quality and structure. This led to a set of vital learnings about conditional rendering, the granularity of react components and how props and states should work more effectively.

* Stick to and refine your central coding best-practice processes. By sticking to full TDD/BDD, we learned far more about our code than simply spiking React without fully testing it. To test the code, we had to truly understand how react was working.

* Be able to explain every line of code. If you cannot write a descriptive note and explain what is happening, you don't truly understand it. When you have something working, check yourself to ensure you know and can explain why.

* XP Values are valuable. Each day, we held a retro and applied one of the XP principles. We learned how some of our best breakthroughs and learnings were directly related to these principles. For example, having the courage to communicate how we could work better in pairs and take the pressure off ourselves to create more output. We learned to be patient with ourselves and refocus on our core goal: learning.

*  Be patient with yourself when learning a new technology. You cannot create code at the same rate in a new technology. Give yourself time to learn, follow curiosities and get things working in the right way: with high code quality and as close to 100% test coverage as possible.

* Detailed planning was vital in setting up where we wanted our app to go. Keeping the MVP as simple as possible meant we could tightly steer our work towards a clear goal. Once you have an MVP, you can then decide on next best steps to develop. It is clear why this is Agile best practice and we have appreciated the agility is has given us to explore so much learning.

* Assign pairs fundamentally different tasks. Task allocation and separation is vital to leverage the power of groups and multiple pairs. Both pairs can then knowledge exchange what they have learned to each other, covering far more than only 1 pair could, or 2 pairs covering the same topic. 

## Our approach in detail

* **Monday**: Spiked MVP to understand the basic syntax and flow of react before deleting the spikes and starting the TDD process from scratch.

* **Tuesday**: Deep-dive into Jest and Enzyme to start unit testing our components. Started off with simple shallow rendering before focussing on testing functionality.

* **Wednesday AM**: One pair tested the passing of props from parent to children components. We successfully mocked the passing of props in the children components and tested the functionality of the passed methods within the parent.

* Meanwhile, the other pair continued testing displaying the state in the form once the button had been clicked. This was troublesome as it mixed together unit and feature testing, resulting in a discussion with a coach to check the structure of our code base.

* **Wednesday PM**: Credit to Sophie for white-boarding a demonstration of how to conditionally render components and views, depending on user interaction. This also prompted us to re-think our testing and look into feature tests via nightwatch.js.

* **Thursday**: We drew up the views and outlined all necessary components needed to finish our application, and started the TDD process again. One pair researched Nightwatch in order to get our feature tests off the ground. This took most of the day due to issues with downloading Nightwatch / dependencies rather than writing the tests.

* **Friday**: One pair completed the core functionality, further extraction and conditional rendering. The other introduced CSS styling using the styled-components package and responses were spiked on a separate branch for testing at a later date. Heather deployed app to Heroku.

* We spent time going over our approach to the app and future improvements to both the app and how we worked as a team.
