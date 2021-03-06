# Bagubagu Utilities [![Build Status](https://travis-ci.org/bagubagu/utils.svg?branch=master)](https://travis-ci.org/bagubagu/utils)

Common Typescript/Javascript utilities that we use at Bagubagu Studio.

## Install

```bash
npm install @bagubagu/utils --save
```

## Usage

with Typescript

```ts
import { generatePushId, encodeFirebaseKey } from "@bagubagu/utils";
```

With Node

```js
const { generatePushId, encodeFirebaseKey } = require("@bagubagu/utils");
```

## API

### isEmail

Return true if parameter is a valid email, false otherwise

```typescript
import { isEmail } from "@bagubagu/utils";

console.log(isEmail("thor@avenger.com")); // true
console.log(isEmail("captain marvel")); // false
```

### isPhone

Return true if parameter is a valid phone number, false otherwise

```typescript
import { isPhone } from "@bagubagu/utils";

console.log(isPhone("75245")); // false
console.log(isEmail("hello world")); // false
console.log(isEmail("+62811888888999")); // true
```

### toE164

Convert to E164 formatted phone number. Return original string if parameter
is not a valid phone number.

```typescript
import { toE164 } from "@bagubagu/utils";

console.log(toE164("08188889999")); // +62811888889999
console.log(toE164("+6281188889999")); // +6281188889999
console.log(toE164("hello world")); // hello world
console.log(toE164("01234")); // 01234
```

### getHostedZoneByName

Return Hosted Zone Id by providing its hosted zone name

```ts
import { config, SharedIniFileCredentials } from "aws-sdk";
import { getHostedZoneByName } from "@bagubagu/utils";

const credentials = new SharedIniFileCredentials();
const hostedZoneName = "cokodidi.com";

const result = await getHostedZoneByName({ hostedZoneName, credentials });
console.log(result); // { hostedZoneId: 'Z2U8QZRMLEMY1M' }
```

### generatePushId

Generate a firebase like push Id.

```ts
import { generatePushId } from "@bagubagu/utils";

const pushId = generatePushId();
console.log(pushId); // -KiA4eelV_DYbflp0YcW
```

### generateReadableId

Generate human readable unique Id.

```ts
import { generateReadableId } from "@bagubagu/utils";

console.log(generateReadableId()); // black-velvet-48
console.log(generateReadableId({ language: "id" })); // kursi-cantik-39
```

### encodeFirebaseKey

Firebase does not allow database key to contain following characters: '.', '#', '\$', '/', '[', ']'.
Consequently we are unable to use email address as key. Use encodeFirebaseKey to
encode email address then use it as key.

```ts
import { encodeFirebaseKey } from "@bagubagu/utils";

const email = "monyet@kambing.com";
const key = encodeFirebaseKey(email); // monyet%40kambing%2Ecom
```

### decodeFirebaseKey

Decode an encoded firebase key.

```ts
import { decodeFirebaseKey } from "@bagubagu/utils";

const encodedKey = "monyet%40kambing%2Ecom";
console.log(decodeFirebaseKey(encodeKey)); // monyet@kambing.com
```

### objectEntries

Make object keys and values available through for of loop.
Requires tsconfig.json to set
`compilerOptions.target: "es2015"` and `compilerOptions.lib: [ "es2015" ]`

```ts
import { objectEntries } from "@bagubagu/utils";

const weapons = {
  thor: "mjolnir",
  spiderman: "web",
  wonderwoman: "rope",
  hulk: "rage"
};

for (const [key, value] of objectEntries(weapons)) {
  if (key === "hulk") {
    console.log(key + ": " + value); // hulk: rage
  }
}
```

### getRandom

Get Random number between floor and ceiling

```ts
import { getRandom } from "@bagubagu/utils";

console.log(getRandom(1, 10)); // output a number between 1 and 10
```

### date2String

Change date value to string value with semantic format

```ts
import { date2String } from "@bagubagu/utils";

const dateValue = new Date();
console.log(date2String(dateValue)); // output a string with 'yyyy-mm-dd' format
```

### removeEmptyValues

Remove empty values of an object

```typescript
import { removeEmptyValues } from "@bagubagu/utils";

const weapons = {
  thor: "mjolnir",
  spiderman: "",
  wonderwoman: null,
  hulk: undefined
};
console.log(removeEmptyValues(weapons)); // output { thor: 'mjolnir' }
```

### groupBy

Group array of object by key name

```typescript
import { groupBy } from "@bagubagu/utils";

const heroes = [
  { name: "Spiderman", age: 15 },
  { name: "Thor", age: 35 },
  { name: "Loki", age: 35 }
];
console.log(groupBy(heroes, "age")); // output { "35": [...], "15": [...] }
```
