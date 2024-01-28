global.chrome = {
  alarms: {
    create: jest.fn(),
    clear: jest.fn(),
    clearAll: jest.fn(),
    get: jest.fn().mockImplementation(() => Promise.resolve()),
    getAll: jest.fn().mockImplementation(() => Promise.resolve()),
  },
};
