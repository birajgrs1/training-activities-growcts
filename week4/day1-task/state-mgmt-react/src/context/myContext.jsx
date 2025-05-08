import { createContext } from "react";


export  const MyContext  = createContext(null);



/*
What is Context API?
Context API is used to pass global variables anywhere in the code without the prop drilling. 
It helps when there is a need for sharing state between a lot of nested components. 
It is light in weight and easier to use, to create a context just need to call React.createContext(). 
No need to install other dependencies or third-party libraries like redux for state management.

Why is Context API used?
Context API solves the problem of prop drilling in React. 
Prop Drilling occurs when data is to be passed between multiple layers before finally sending 
it to the required component. 
This makes the application slower. This problem is solved by Context API as it creates global variables
to be used throughout the application without any middle components involved. 
It is also easier to use than React Redux

Working
To work with Context API we need React.createContext. It has two properties Provider and Consumer. 
The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state
 that has been passed.


Benefits of Context API over React Redux
In Redux we have to manipulate or update multiple files to add even a single feature but in Context 
it can be done in much lesser lines of code
One way data binding in React is maintained using Context whereas Redux violates it.
Multiple stores/contexts can be created using Context whereas Redux creates just a single store

*/
