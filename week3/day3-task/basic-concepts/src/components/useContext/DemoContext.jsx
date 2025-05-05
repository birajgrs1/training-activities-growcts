import { createContext } from "react";

const DemoContext = createContext();

export default DemoContext;

/*
Context Hooks
The useContext hook in React is a powerful and convenient way to consume values from the React Context
API in functional components. It allows functional components to access context values directly, without
the need to manually pass props down through the component tree.
const contextValue = useContext(DemoContext);

const contextValue = useContext(DemoContext);
The useContext hook takes a context object (DemoContext) as an argument and returns the current value of that context.
The contextValue will hold the value provided by the nearest 
<DemoContext.Provider> in the component tree.

Note:
Context provides a way to pass data through the component tree without having to pass props 
down manually at entry level.

How does it work?
The useContext hook allows to consume values from a React Context, enabling easy access to shared
state across multiple components without prop drilling. Here’s how it works:

useContext hook consumes values from a React Context, making them accessible to functional components.
First, create a Context object using React.createContext(), which holds the shared state.
Use useContext to access the context value in any component that needs it, avoiding prop drilling.
When the value of the Context updates, all components consuming that context automatically re-render 
with the new value.
*/
