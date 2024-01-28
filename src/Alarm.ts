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
};
