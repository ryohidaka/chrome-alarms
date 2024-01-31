import { Alarm } from "../src/Alarm";

jest.mock("chrome", () => ({
  alarms: {
    create: jest.fn(),
    clear: jest.fn(),
    clearAll: jest.fn(),
    get: jest.fn().mockImplementation(() => Promise.resolve()),
    getAll: jest.fn().mockImplementation(() => Promise.resolve()),
    onAlarm: {
      addListener: jest.fn(),
    },
  },
}));

describe("Alarm", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should create an alarm", async () => {
    const name = "test";
    const periodInMinutes = 1;
    const callback = () => {};

    await Alarm.create(name, periodInMinutes, callback);

    expect(chrome.alarms.create).toHaveBeenCalledWith(
      name,
      {
        periodInMinutes,
      },
      callback,
    );
  });

  it("should clear an alarm", async () => {
    const name = "test";
    const callback = (_wasCleared: boolean) => {};

    await Alarm.clear(name, callback);

    expect(chrome.alarms.clear).toHaveBeenCalledWith(name, callback);
  });

  it("should clear all alarms", async () => {
    const callback = (_wasCleared: boolean) => {};

    await Alarm.clearAll(callback);

    expect(chrome.alarms.clearAll).toHaveBeenCalled();
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

  it("should add an alarm listener", () => {
    const callback = jest.fn();

    Alarm.onAlarm(callback);

    expect(chrome.alarms.onAlarm.addListener).toHaveBeenCalledWith(callback);
  });
});
