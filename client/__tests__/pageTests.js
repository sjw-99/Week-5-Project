// Import JSDOM functionality
const { renderDOM } = require("./helpers");

// Initialise the dom and document
let dom;
let document;

// Test suite for index.html
describe("index.html", () => {
  // Create a dom and document from index.html
  beforeEach(async () => {
    dom = await renderDOM("./index.html");
    document = await dom.window.document;
  });
});

// Test suite for login.html
describe("login.html", () => {
  // Create a dom and document from login.html
  beforeEach(async () => {
    dom = await renderDOM("./login.html");
    document = await dom.window.document;
  });
});

// Test suite for dashboard.html
describe("dashboard.html", () => {
  // Create a dom and document from dashboard.html
  beforeEach(async () => {
    dom = await renderDOM("./dashboard.html");
    document = await dom.window.document;
  });
});

// Test suite for missions.html
describe("missions.html", () => {
  // Create a dom and document from missions.html
  beforeEach(async () => {
    dom = await renderDOM("./missions.html");
    document = await dom.window.document;
  });
});

// Test suite for quiz.html
describe("quiz.html", () => {
  // Create a dom and document from quiz.html
  beforeEach(async () => {
    dom = await renderDOM("./quiz.html");
    document = await dom.window.document;
  });
});

// Test suite for summary.html
describe("summary.html", () => {
  // Create a dom and document from summary.html
  beforeEach(async () => {
    dom = await renderDOM("./summary.html");
    document = await dom.window.document;
  });
});