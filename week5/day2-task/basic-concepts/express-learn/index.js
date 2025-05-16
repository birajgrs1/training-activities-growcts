const express = require("express");
const path = require("path");
const app = express();

//static file serving
app.use(express.static(path.join(__dirname, "assets", "static", "myImg.png")));
//static ===> json file serving
app.use(express.static(path.join(__dirname, "assets", "static", "data.json")));
//html file serving
app.use(
  express.static(path.join(__dirname, "assets", "templates", "index.html"))
);

//middleware
// const myMiddleware = (req, res, next) => {
//     // console.log(req);
//   console.log("This is my middleware");
//   next();
// };

// app.use(myMiddleware);

//error handling with middleware
// const myMiddleware = (req, res, next) => {
//   // console.log(req);
//   console.log("This is my middleware");
//   next();
// };

// app.use(myMiddleware);
// app.use((req, res, next) => {
//   res.status(404).send("Page not found!");
// });

//using custom middleware  to show date and time now
const showDateTime = (req, res, next) => {
  const date = new Date();
  console.log(date);
  next();
};

app.use(showDateTime);

app.get("/", (req, res) => {
  // console.log(req,res);
  //   res.send("Hello World!");
  // req.headers["user-agent"]
  // res.send(req.headers["user-agent"]);
  res.header("Content-Type", "text/html");
  res.write("<h1>Hello World!</h1>");
  res.end();
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// app.post('/send-req', (req, res) => {
//     res.send('Got the POST request');
// })
// app.delete('/delete-req', (req, res) => {
//     res.send('Got the DELETE request');
// })

app.get("/serving", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "static", "myImg.png"));
});

app.get("/json", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "static", "data.json"));
});

//html file serving
app.get("/card", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "templates", "index.html"));
});

const users = [
  {
    id: 1,
    name: "Biraj",
  },
  {
    id: 2,
    name: "Aayush",
  },
  {
    id: 3,
    name: "Pankaj",
  },
];
//routing with parameters
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  res.send(user);
});
const port = 3000;
const localhost = "localhost";
app.listen(port, () => {
  console.log(`app listening on port http://${localhost}:${port}`);
});

/*
What is NPM?
Npm is the management system for Node. js packages and is the the most widely-used package manager
in the JavaScript ecosystem; it is central to JavaScript tooling and keeps the system functional.

What is Expressjs and why is it used?

Express is a minimal and flexible Node.js web application framework that provides
a robust set of features for building web and mobile applications.

What are the main features of Expressjs?
Uses:

1. Routing
Routing is the process of matching incoming requests with the appropriate route in a web application.
Expressjs provides a simple and flexible way to handle routing in a web application.
Syntax:

app.get('/path', (req, res) => {
    // Handle the GET request
});

app.post('/path', (req, res) => {
    // Handle the POST request
});

app.put('/path', (req, res) => {
    // Handle the PUT request
});

app.delete('/path', (req, res) => {
    // Handle the DELETE request
});

app.patch('/path', (req, res) => {
    // Handle the PATCH request
});

get: This method is used to handle GET requests.
post: This method is used to handle POST requests.
put: This method is used to handle PUT requests.
delete: This method is used to handle DELETE requests.
patch: This method is used to handle PATCH requests.


2. Middleware:
Middleware is a function that is executed between the request and the response in an Express 
application.
It is used to modify the request and response objects, and can be used to perform tasks such as 
authentication,logging, and error handling.
Syntax:

app.use((req, res, next) => {
    // Middleware logic
    next();
});

3. Templating:
Templating is the process of dynamically generating HTML or other markup based on data.
Expressjs provides a simple and flexible way to handle templating in a web application.
Syntax:

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
    res.render('home', { name: 'John Doe' });
});

4. Static file serving:
Static file serving is the process of serving static files such as images, CSS, and JavaScript files in a web application.
Expressjs provides a simple and flexible way to handle static file serving in a web application.
Syntax:

app.use(express.static(path.join(__dirname, 'public')));

5. Error handling:
Error handling is the process of handling errors that occur in a web application.
Expressjs provides a simple and flexible way to handle error handling in a web application.
Syntax:

app.use((err, req, res, next) => {
    // Error handling logic
    res.status(500).send('Internal Server Error');
});

*/
