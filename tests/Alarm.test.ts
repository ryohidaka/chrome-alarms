import { Alarm } from "../src/Alarm";

jest.mock("chrome", () => ({
  alarms: {
    create: jest.fn(),
    clear: jest.fn(),
    clearAll: jest.fn(),
    get: jest.fn().mockImplementation(() => Promise.resolve()),
    getAll: jest.fn().mockImplementation(() => Promise.resolve()),
  },
}));

describe("Alarm", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should create an alarm", async () => {
    const name = "test";
    const periodInMinutes = 1;

    await Alarm.create(name, periodInMinutes);

    expect(chrome.alarms.create).toHaveBeenCalledWith(name, {
      periodInMinutes,
    });
  });

  it("should clear an alarm", async () => {
    const name = "test";

    await Alarm.clear(name);

    expect(chrome.alarms.clear).toHaveBeenCalledWith(name);
  });

  it("should get alarm by name", async () => {
    const alarm = await Alarm.get("polling");

    expect(chrome.alarms.get).toHaveBeenCalledWith("polling");
    expect(alarm).toEqual(undefined);
  });

  it("should get all alarms", async () => {
    const alarms = await Alarm.getAll();

    expect(chrome.alarms.getAll).toHaveBeenCalled();
    expect(alarms).toEqual(undefined);
  });
});
