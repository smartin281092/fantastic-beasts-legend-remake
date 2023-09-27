const Store = {
  observers: {},

  subscribe(event, observer) {
    console.log(event)
    // Initialize the array for this event if it doesn't exist yet
    if (!Store.observers[event]) {
      Store.observers[event] = [];
    }

    Store.observers[event].push(observer);
  },

  dispatch(event, data) {
    const eventObservers = Store.observers[event];
    console.log(Store.observers)

    if (eventObservers) {
      // Notify all observers for the specified event
      eventObservers.forEach((observer) => {
        observer.reducer(event, data);
      });
    } else {
      console.log('No observer for : ', event, eventObservers)
    }
  },
};

module.exports = Store;
