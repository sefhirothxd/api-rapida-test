// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const port = process.env.PORT || 3001;
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.status(200).json([{
    "name":"Camila Isadora Valenzuela Fierro",
    "profession":"FullStack Developer",
    "email":"cami.valenzuela@uc.cl",
    "city":"Santiago",
    "country":"Chile",
    "linkedin":"https://www.linkedin.com/in/camila-isadora-valenzuela-fierro/",
    "github":"https://github.com/isavalenzuela",
    "portafolio":"https://react-final-pi.vercel.app/",
    "photo":"https://avatars.githubusercontent.com/u/73500613?v=4",
    "description":"Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    "skills":[
       "HTML",
       "CSS",
       "JavaScript",
       "React",
       "Node.js",
       "Express",
       "MongoDB",
       "SQL",
       "PostgreSQL",
       "Git",
       "GitHub"
    ]
  },{
    "name":"César Rivera",
    "profession":"FullStack Developer",
    "email":"riveramirandac@gmail.com",
    "city":"Muisne",
    "country":"Ecuador",
    "linkedin":"https://www.linkedin.com/in/c%C3%A9sar-rivera316/",
    "github":"",
    "portafolio":"https://react-final-pi.vercel.app/",
    "photo":"https://avatars.githubusercontent.com/u/77915616?v=4",
    "description":"Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    "skills":[
       "HTML",
       "CSS",
       "JavaScript",
       "React",
       "Node.js",
       "Express",
       "MongoDB",
       "SQL",
       "PostgreSQL",
       "Git",
       "GitHub"
    ]
  }]);
});

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});