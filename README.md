# Note app

It is the basic node app .This project is ment to introduce myself to node applicatoin.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Need to install node from [NODEJS](https://nodejs.org/en/) and it will also include [NPM](https://www.npmjs.com/) .
You should be able to run the following from the terminal and see the version installed 

```
$ node --version
v9.1.0

$ npm --version
5.5.1

```

### Installing

After downloading the appliction from the terminal run the following 

```
npm install
```

the above command will install the depandancies.


### Interacting with the app
To see all the command to interact with the app run the following 

```
node app.js --help
```
you should see something like this

<img width="868" alt="screen shot 2017-11-15 at 17 10 36" src="https://user-images.githubusercontent.com/1522565/32850608-4d77c89c-ca3b-11e7-8b9a-501033ee8274.png">

### To Add note


```
node app.js add -t="your title" -b="your note "
```


### To Read note


```
node app.js read -t="title of a note to be read"
```

### To List note

this will list all notes 

```
node app.js list
```

### To Remove note

this will remove the note with the title mentioned  

```
node app.js remove -t="title to be removed"
```




