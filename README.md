# Mondly
Mondly is in the top 3 mobile language learning platforms worldwide and helps over 75 million people from 190 countries learn 41+ languages.

# Project Outline
Build a web app to manage the contents of a website.

## Node.js Backend
- Uses Express for routing
- MySQL as database, define Model schemas
- file gets parsed via Node server
- JavaScript Methods for SQL queries with Database interactions are happening inside server.js

## React.js with Next.js Frontend
- Uses Google Material design with Next.js
- Data management by React-Redux/Hooks
- Functionality: Content posts/view, multi-language by localization. 



## Development
Set your .db.config.js variables in app/config.
```
module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'andreea_content',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

```

Node server playground can be reached at localhost:8080. The app will run at localhost:3000


Run the following command in the root folder. This will start up both the node backend AND the React frontend which is located in /client
```
npm run dev
```

## A friendly reminder
Use caution with npm and the folders. 
**There are two package.json files.** One for backend (root folder) and one for React frontend (client folder).

To manage and add React.js dependencies you need to move to the client folder and run npm there.

