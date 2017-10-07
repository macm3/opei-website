# opei-website

The PET-Informatica OPEI is the first olympiad of informatics of the state of Pernambuco, in Brazil.

This website is hosted at: https://pet-informatica.github.io/opei

## Running

In order to run this project you must install node.js avaiable here: https://nodejs.org/en/

**1. Clone the repository**
```
$ git clone https://github.com/pet-informatica/opei-website.git
```

**2. Travel to it's folder from terminal command line**

**3. Make sure you have gulp installed**
```
$ npm install -g gulp
```

**4. Install the dependencies**
```
$ npm install
```

**5. Running in dev mode**
```
$ npm run dev
```

All the necessary dependencies will be downloaded automatically, and any changes in scc, js or html will be watched by gulp.

## Deploying
The resulting files will be minified and packed at bin/ folder. 
If you want to update the website content, just make sure that bin/ is updated running `npm run dev` and checking index.html, and then copy everything inside it to https://github.com/pet-informatica/pet-informatica.github.io/tree/master/opei

## Collaborating
Please report issues on:
https://github.com/pet-informatica/opei-website/issues

Gitflow is not entirely applied, run your branch out of the master and creates your PR.

We heavly encourage good description of commit messages, check out this reference:
https://udacity.github.io/git-styleguide/
