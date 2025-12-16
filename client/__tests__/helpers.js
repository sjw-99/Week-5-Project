// Import the path module to be able to work with directories and filepaths.
const path = require("path");
const jsdom = require("jsdom");

// Store the JSDOM constructor from the jsdom module.
const { JSDOM } = jsdom;

const renderDOM = async (filename) => {
  const filePath = path.join(process.cwd(), filename);

  // Constructs a jsdom using the selected file.
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });

  // Wait for the DOM content to be loaded as a resolution to the promise.
  return new Promise((resolve, _) => {
    dom.window.document.addEventListener("DOMContentLoaded", () => {
      resolve(dom);
    });
  });
};

module.exports = { renderDom };
