export const Alarm = {
  /**
   * Creates an alarm with a specified interval.
   * @param {string} name - The unique identifier for the alarm.
   * @param {number} periodInMinutes - The frequency of the alarm in minutes.
   */
  create: async (name: string, periodInMinutes: number) => {
    await chrome.alarms.create(name, {
      periodInMinutes,
    });
  },

  /**
   * Removes the alarm with the given name.
   * @param {string} name - The unique identifier for the alarm to be removed.
   */
  clear: async (name: string) => {
    await chrome.alarms.clear(name);
  },

  /**
   * Removes all alarms.
   */
  clearAll: async () => {
    await chrome.alarms.clearAll();
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
