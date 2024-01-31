# chrome-alarms

[![npm version](https://badge.fury.io/js/chrome-alarms.svg)](https://badge.fury.io/js/chrome-alarms)
![build](https://github.com/ryohidaka/chrome-alarms/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

Helper for `chrome.alarms` API.

## Notes

To use the `chrome.alarms` API, declare the `"alarms"` permission in the [manifest](https://developer.chrome.com/docs/extensions/reference/manifest):

```json
{
  "name": "My extension",

  "permissions": ["alarms"]
}
```

## Installation

You can install this library using npm:

```shell
npm install chrome-alarms
```

## Properties

| Key               | Type   | Optional | Description                                                                                   |
| ----------------- | ------ | -------- | --------------------------------------------------------------------------------------------- |
| `name`            | string |          | Name of this alarm.                                                                           |
| `periodInMinutes` | number | ◯        | If not null, the alarm is a repeating alarm and will fire again in `periodInMinutes` minutes. |

## Methods

### `create`

Creates an alarm. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.

```typescript
import { Alarm } from "chrome-alarms";

const name = "test";
const periodInMinutes = 1;

await Alarm.create(name, periodInMinutes);
```

### `clear`

Clears the alarm with the given name.

```typescript
import { Alarm } from "chrome-alarms";

const name = "test";

await Alarm.clear(name);
```

### `clearAll`

Clears all alarms.

```typescript
import { Alarm } from "chrome-alarms";

await Alarm.clearAll();
```

### `get`

Retrieves details about the specified alarm.

```typescript
import { Alarm } from "chrome-alarms";

const name = "test";

const alarm = await Alarm.get(name);
console.log(alarm);

// Output: Object{ name: "test", periodInMinutes: 1, scheduledTime: 1706435598914.826 }
```

### `getAll`

Gets an array of all the alarms.

```typescript
import { Alarm } from "chrome-alarms";

const alarms = await Alarm.getAll();
console.log(alarms);

// Output: Array[{ name: "test", periodInMinutes: 1, scheduledTime: 1706435598914.826 }]
```

### `onAlarm`

Fired when an alarm has elapsed. Useful for event pages.

```typescript
import { Alarm } from "chrome-alarms";

Alarm.onAlarm((alarm) => {
  console.log(alarm);
});

// Output: Object{ name: "test", periodInMinutes: 1, scheduledTime: 1706435598914.826 }
```

## Link

- [chrome.alarms](https://developer.chrome.com/docs/extensions/reference/api/alarms)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
