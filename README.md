# Bagubagu Utilities [![Build Status](https://travis-ci.org/bagubagu/utils.svg?branch=master)](https://travis-ci.org/bagubagu/utils)

Common Typescript/Javascript utilities that we use at Bagubagu Studio.

## Install

```bash
npm install @bagubagu/utils --save
```

## Usage

with Typescript

```tyescript
import { generatePushId, encodeFirebaseKey } from '@bagubagu/utils';
```

With Node

```javascript
const { generatePushId, encodeFirebaseKey} = require('@bagubagu/utils');
```

## API

### generatePushId

Generate a firebase like push Id.

```typescript
import { generatePushId } from '@bagubagu/utils';

const pushId = generatePushId();
console.log(pushId);  // -KiA4eelV_DYbflp0YcW
```

### generateReadableId

Generate human readable unique Id.

```typescript
import { generateReadableId } from '@bagubagu/utils';

console.log(generateReadableId()); // black-velvet-48
console.log(generateReadableId({language: 'id'})); // kursi-cantik-39
```

### encodeFirebaseKey

Firebase does not allow database key to contain following characters: '.', '#', '$', '/', '[', ']'.
Consequently we are unable to use email address as key. Use encodeFirebaseKey to
encode email address then use it as key.

```typescript
import {encodeFirebaseKey} from '@bagubagu/utils';

const email = 'monyet@kambing.com';
const key = encodeFirebaseKey(email); // monyet%40kambing%2Ecom 
```

### decodeFirebaseKey

Decode an encoded firebase key.

```typescript
import { decodeFirebaseKey } from '@bagubagu/utils';

const encodedKey = 'monyet%40kambing%2Ecom';
console.log(decodeFirebaseKey(encodeKey));  // monyet@kambing.com
```

### objectEntries

Make object keys and values available through for of loop.
Requires tsconfig.json to set
`compilerOptions.target: "es2015"` and `compilerOptions.lib: [ "es2015" ]`

```typescript
import { objectEntries } from "@bagubagu/utils";

const weapons = {
    thor: "mjolnir", spiderman: "web",
    wonderwoman: "rope", hulk: "rage"
};

for (const [key, value] of objectEntries(weapons)) {
    if (key === "hulk") {
        console.log(key + ': ' + value);    // hulk: rage
    }
}
```

### getRandom

Get Random number between floor and ceiling
```typescript
import { getRandom } from '@bagubagu/utils';

console.log(getRandom(1,10));   // output a number between 1 and 10
```
