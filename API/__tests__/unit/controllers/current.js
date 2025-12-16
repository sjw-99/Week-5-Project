const currentController = require("../../../server/controllers/current");
const Current = require("../../../server/models/Current");

// Mock response methods
const mockSend = jest.fn();
const mockJson = jest.fn();
const mockEnd = jest.fn();

// Mock status for response
const mockStatus = jest.fn(() => ({
  send: mockSend,
  json: mockJson,
  end: mockEnd,
}));

// Mock Response
const mockRes = { status: mockStatus };

// Test suite for current controller
describe("Current Controller", () => {
  // Clear mocks before each test
  beforeEach(() => jest.clearAllMocks());
  // Reset mocks at end of suite
  afterAll(() => jest.resetAllMocks());
});
