# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

* `bpk-component-banner-alert` - to display connection/validation errors;

* `jest` - for testing, including server tests and react components tests;

* `babel-jest`, `babel-preset-env`, `regenerator-runtime` - to use jest with babel;

* `react-test-renderer` - for snapshot testing;

### Q) What is the command to start the server?

(Default) `APIKEY=<key> npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?

About 30 hours.

### Q) If you had more time, what further improvements or new features would you add?

* Display details about validation errors. Now it's just a message, that something went wrong.

* Make a common arrow component instead of two svg icons.

* Replace nock package with included to jest mock feature.

* Build the server API documentation.

### Q) Which parts are you most proud of? And why?

I've finally tried `jest`. Had no time on my current work to do it.
I've met an interesting problem with it.
Jest expects node_modules to be transpiled.
But backpack components are not.
So I need to configure jest to transpile them as well.
You can see it in package.json in jest section.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I think writing css. I do it not very often on my work.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

The test is great.

It's focused much more on frontend part.
For Full-Stack positions would be good to balance the difficulty of server and frontend parts.

One of the easiest way to make it, is to delete the server implementation from zip and implement more frontend components.
