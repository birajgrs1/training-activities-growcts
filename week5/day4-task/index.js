import express from 'express';
import clientRoutes from './src/routes/clientRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', clientRoutes);

app.get('/', (req, res) => {
  res.send('Client API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


/*
All Status codes:

1XX: Informational
2XX: Success
3XX: Redirection
4XX: Client Error
5XX: Server Error

1XX:
They contain information about the client's request
Status codes:
100: Continue
101: Switching Protocols
140: Non-Authoritative Information
150: Multiple Choices
160: Moved Permanently
170: Use Proxy
180: Switching Protocols
190: Temporary Redirect

2XX:
They arise when the server has successfully fulfilled the client's request
200: OK
201: Created
202: Accepted
203: Non-Authoritative Information
204: No Content
205: Reset Content
206: Partial Content
207: Multi-Status
208: Already Reported
230: Multi-Status
240: IM Used  - It means that the server has fulfilled the request and the response is a representation of the result of one or more instance-manipulations applied to the current instance
250: Multi-Status

3XX:
They contain information about redirection
Status codes:
300: Multiple Choices
301: Moved Permanently
302: Found
303: See Other
304: Not Modified
305: Use Proxy
307: Temporary Redirect
308: Permanent Redirect

4XX:
They contain information about client errors
Status codes:
400: Bad Request
401: Unauthorized
402: Payment Required
403: Forbidden
404: Not Found
405: Method Not Allowed
406: Not Acceptable
407: Proxy Authentication Required
408: Request Timeout
409: Conflict
410: Gone
411: Length Required
412: Precondition Failed
413: Payload Too Large
414: Request-URI Too Long
415: Unsupported Media Type
416: Requested Range Not Satisfiable
417: Expectation Failed
418: I'm a teapot

5XX:
They contain information about server errors
Status codes:
500: Internal Server Error
501: Not Implemented
502: Bad Gateway
503: Service Unavailable
504: Gateway Timeout
505: HTTP Version Not Supported
*/

/*
– Centralized error handling middleware
It is a middleware function that is used to handle errors in a web application. It helps to centralize
error handling logic and makes it easy to manage errors in a consistent way.

in expressjs: 
   Example:

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


– Status codes (200, 400, 404, 500):
Status codes are those numbers that are used to indicate the success or failure of a request.
Some important status codes are:

200: OK
400: Bad Request
404: Not Found
500: Internal Server Error

– Logging with morgan and custom logger:

Morgan is a popular middleware for Express.js that helps to log information about incoming requests and
errors.
It is a very popular middleware for Express.js that helps to log information about incoming requests
and errors.

Example:
const logger = morgan('combined', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) });
app.use(logger);

//failure logging
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//not accessed logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



– Handling async errors:
It means that you can handle errors that occur in asynchronous operations without using try-catch 
blocks. It creates a new error object and passes it to the error handler middleware.

Example:
const handleAsyncError = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
  };
  
  app.get('/user', handleAsyncError(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  }));


*/

