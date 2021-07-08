# 15 Project 2: Gift List

[![License: MIT](https://img.shields.io/github/license/CailinBellWold/Project-2-Gift-List?style=plastic)](https://opensource.org/licenses/MIT)

## Description

Our application aims to make keeping track of gifts for family and friends much easier by allowing a user to create an account, create a gift by taking into account who the gift receiver is, and what they are getting for them. Our app also provides users with a page to view all of their existing gifts, as well as an option to delete, update a gift, and mark it as being completed. Overall, our project goal is to reduce the stress of keeping track of planned gifts for friends, co-workers, family, or others.

### Motivation

Our motivation behind this project was initially to create an app that would allow the user to keep track of Christmas gifts, but we decided to shift our project to track gifts for any occasion.

## Table of Contents

- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Local Installation & Usage](#Local)
- [Deployed App](#Deployed)
- [Demo](#Demo)
- [License](#MIT)
- [Questions](#Questions)

## Core Objectives Met

1.  When a user views the homepage, they will find a site description and buttons to sign in or create an account.
2.  When a user attempts to sign in or create an account, they can sign in or create a password-protected account.
3.  When a user views the user's landing page in a logged-in state, they see a list of all the gifts they have added.
4.  When a user views the user's landing page in a logged-out state, they are redirected to the sign in page.
5.  When a user clicks the 'add' button to add a new gift, they have the opportunity to enter the gift recipient and description and to save the new gift.
6.  When a user clicks on the 'update' button associated with a specific gift, they are able to edit the recipient and description or to check off the gift as purchased, and to save the gift.
7.  When a user clicks on the 'save' button after having edited or added information about a gift, they are redirected to their user landing page, where the new or updated gift renders with its associated updates.

## Technologies Used

- JavaScript
- MySQL
- Node.js
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM Handlebars.js Package](https://www.npmjs.com/package/handlebars)
- [NPM Sequelize ORM Package](https://www.npmjs.com/package/sequelize)
- [NPM Express-Session Package](https://www.npmjs.com/package/express-session)
- [NPM Cookies Package](https://www.npmjs.com/package/cookies)
- [NPM bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [NPM TestCafe Package](https://www.npmjs.com/package/testcafe)
- [NPM Router Package](https://www.npmjs.com/package/router)
- [NPM dotenv Package](https://www.npmjs.com/package/dotenv)
- [NPM mysql2 Package](https://www.npmjs.com/package/mysql2)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)
- [NPM connect-session-sequelize Package](https://www.npmjs.com/package/connect-session-sequelize?activeTab=versions)

## Local Installation & Usage

1. Clone this gift-list repo to your machine.
2. Open the repo in your terminal.
3. Run `npm i`.
4. Run `npm run watch`.
5. Open [http://localhost:3001](http://localhost:3001) in the modern browser of your choice.

## Deployed App

[This Note Taker app has been deployed on Heroku and is available here](https://project-2-gift-list.herokuapp.com/)

## Demo

![A user clicks through and shows app functionality ](./public/images/appVideo.gif)

## MIT License

&copy;2021 Cailin Bell Wold, Danny Roubin, Donna Crawford and Tyler Hance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors

For inquiries, please contact any of the following contributors:

- [Cailin Bell Wold](https://github.com/CailinBellWold)
- [Danny Roubin](https://github.com/DannyRoubin)
- [Donna Crawford](https://github.com/Donnastjames)
- [Tyler Hance](https://github.com/tylerhance)
