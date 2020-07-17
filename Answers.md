1. What problem does the context API help solve?

It simplifies state management.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: packets of information that contain an action type and associated data. They are an object with at least one (could be two) properties. The required property is the type, and the optional property is the payload. 
The role of actions in Redux is to pass into the reducer function as an argument, which will update the state according to the type (and payload) of the action. Actions describe what happened.They send data from your app to your store.
 
Reducers: the reducer is a pure function that takes the previous state and an action, and returns a new state.  We use reducers to manage state changes in a predictable manner. The reducer functions take 2 arguments: the current state and an action. They return a new, updated state object based on both arguments.
The role of reducers in Redux is to specify how the app's state changes in response to specify how the application's state changes in response to actions sent to the store. 

Store: The store is a single JavaScript object that represents everything that changes within your app. It contains our state for our app.
The role of store in Redux is to hold the app’s state, allow access to state via getState(), allow state to be updated via dispatch(action), but mostly it holds the app’s state.
 
The store is known as a single source of truth in a Redux app because it is an immutable state tree where all state changes are explicitly handled by dispatching actions that are processed by a reducer. There is only one store per app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the current state of the app at a given point in time, specifically the global state that all components can access if we set it up properly. In Redux, the application state is held in the store. We can allow components to access the state when we given them access to do so. It would be good to use when the app becomes cumbersome and large in scale.

Component state can only be updated within that component, and can be passed down via props to children components. Good to use when you have smaller apps like we typically have been building in class.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware package we can use to give Redux the ability to run async operations. It changes our action-creators by allowing async code to run (like an API call could happen before the actions flow through the reducers). 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system this week is Context API. The process and flow made the most sense to me, and the directions were much easier to follow along. It had less boilerplate code to import and export. It seems powerful to be able to store data on a context object and pass the data to components without having to use props every time.