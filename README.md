# NoSQL-Social-NetWORK-API

<h4 align="center"> My First Social Network!</h4>

<p align="center">
  <a href="#About">About</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#Bugs">Bugs</a> •
  <a href="#license">License</a>
</p>

![User Routes](./docs/user.gif)

## About

This application is a backend social network framework that stores data by a NoSQL database. It uses MongoDB as the database. You will need to have [Node.js](https://nodejs.org/en/download/) and [Mongoose](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) installed on your computer. 

To use run this application, it should be cloned and invoked in the command line of your terminal. When the server is started and the Mongoose models are synced to the MongoDB database, you can view user data in [MongoDB Compass](https://www.mongodb.com/products/compass).
Users can open API GET routes in Insomnia for users and thoughts and data for each of these routes is displayed in a formatted JSON. Users are able to successfully create, update, and delete users and thoughts in the database. Users are able to create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. you will also need [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) From your command line:

```bash
# Clone this repository
$ git clone git@github.com:bralvis2/NoSQL-Social-NetWORK-API.git

# Go into the repository
$ cd NoSQL-Social-NetWORK-API

# Install dependencies
$ npm install

# Install express
$ npm i express

# Install mongoose
$ npm i mongoose

# Run the app
$ npm start
```
> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

Once you've started the application, open insomnia and test the routes.

Check out this [DEMO](https://drive.google.com/file/d/1ld-ErKtjPVYoUUUkEnjwZ9uVrz1DfomS/view)



## Credits

This is a backend application. I used materials from class as a resource.

This software uses the following open source packages:


- [Node.js](https://nodejs.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Insomnia](https://insomnia.rest/)
- Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)




## Bugs 🐛

I had a difficult time seeding my data and I was able to see the seeds in mongoose compass but I was not able to see the seeds in insomnia. 

## License

MIT

---

> GitHub [@bralvis2](https://github.com/bralvis2) &nbsp;&middot;&nbsp;



