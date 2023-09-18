class Timeline {
  constructor() {
    this.events = [];
  }

  // Add an event to the timeline
  addEvent(event) {
    this.events.push(event);
  }

  // Get all events in the timeline
  getEvents() {
    return this.events;
  }

  // Clear all events from the timeline
  clear() {
    this.events = [];
  }
}

module.exports = Timeline;