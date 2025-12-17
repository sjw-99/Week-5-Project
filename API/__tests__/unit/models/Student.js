const Student = require("../../../server/models/Student");
const db = require("../../../server/db/connect");

// Test suite for student  model
describe("Student Model", () => {
  // Clear all mocks before each test
  beforeEach(() => jest.clearAllMocks());

  // Reset all mocks after all tests
  afterAll(() => jest.resetAllMocks());
});
