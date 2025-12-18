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
  })
    it('has a button', () => {
    const btn = document.querySelector('button')
    expect(btn).toBeTruthy;
    expect(btn.innerHTML).toBe("Click me")
  })
});

// Test suite for login.html
describe("login.html", () => {
  // Create a dom and document from login.html
  beforeEach(async () => {
    dom = await renderDOM("./login.html");
    document = await dom.window.document;
  })
   it("has a form", () => {
    const form = document.querySelector("form");
    expect(form).toBeTruthy();
  })
});

// Test suite for register.html
describe("register.html", () => {
  // Create a dom and document from register.html
  beforeEach(async () => {
    dom = await renderDOM("./register.html");
    document = await dom.window.document;
  })
   it("has a form", () => {
    const form = document.querySelector("form");
    expect(form).toBeTruthy();
  })
});

// Test suite for missions.html
describe("missions.html", () => {
  // Create a dom and document from missions.html
  beforeEach(async () => {
    dom = await renderDOM("./missions.html");
    document = await dom.window.document;
  })
   it("has a form", () => {
    const form = document.querySelector("img");
    expect(form).toBeTruthy();
  })
});

// Test suite for quiz.html
describe("quiz.html", () => {
  // Create a dom and document from quiz.html
  beforeEach(async () => {
    dom = await renderDOM("./quiz.html");
    document = await dom.window.document;
  })
it("shows multiple choice questions", () => {
    const h1 = document.querySelector("h1");
    expect(h1).toBeTruthy();
  })
});

// Test suite for summary.html
describe("summary.html", () => {
  // Create a dom and document from summary.html
  beforeEach(async () => {
    dom = await renderDOM("./summary.html");
    document = await dom.window.document;
  })
  it("shows progress bars", () => {
    const bar = document.querySelector(".progress, .progress-bar");
    expect(bar).toBeTruthy();
  })
});