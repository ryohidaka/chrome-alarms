export const Alarm = {
  /**
   * Creates an alarm with a specified interval.
   * @param {string} name - The unique identifier for the alarm.
   * @param {number} periodInMinutes - The frequency of the alarm in minutes.
   * @param {function} callback - The function to be executed when the alarm is triggered.
   */
  create: async (
    name: string,
    periodInMinutes?: number,
    callback: () => void = () => {},
  ) => {
    await chrome.alarms.create(
      name,
      {
        periodInMinutes,
      },
      callback,
    );
  },

  /**
   * Removes the alarm with the given name.
   * @param {string} name - The unique identifier for the alarm to be removed.
   * @param {function} callback - The function to be executed when the alarm is removed. It receives a boolean indicating whether the alarm was cleared.
   */
  clear: async (
    name: string,
    callback: (wasCleared: boolean) => void = (_wasCleared) => {},
  ) => {
    await chrome.alarms.clear(name, callback);
  },

  /**
   * Removes all alarms.
   * @param {function} callback - The function to be executed when all alarms are removed. It receives a boolean indicating whether the alarms were cleared.
   */
  clearAll: async (
    callback: (wasCleared: boolean) => void = (_wasCleared) => {},
  ) => {
    await chrome.alarms.clearAll(callback);
  },

  /**
   * Retrieves the alarm with the given name.
   * @param {string} name - The unique identifier for the alarm to be retrieved.
   */
  get: async (name: string): Promise<chrome.alarms.Alarm> => {
    return await chrome.alarms.get(name);
  },

  /**
   * Retrieves all alarms.
   */
  getAll: async (): Promise<chrome.alarms.Alarm[]> => {
    return await chrome.alarms.getAll();
  },
};
