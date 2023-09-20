const Store = {
  observers: {},

  subscribe(event, observer) {
    // Initialize the array for this event if it doesn't exist yet
    if (!Store.observers[event]) {
      Store.observers[event] = [];
    }

    Store.observers[event].push(observer);
  },

  dispatch(event, data) {
    const eventObservers = Store.observers[event];

    if (eventObservers) {
      // Notify all observers for the specified event
      eventObservers.forEach((observer) => {
        observer(event, data);
      });
    }
  },
};

module.exports = Store;
