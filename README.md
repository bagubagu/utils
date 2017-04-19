# Bagubagu Utilities

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

In a browser environment

```html
<script src="bagubagu-utils.min.js"></script>
```

## API

### generatePushId

Generate a firebase like push Id

```typescript
import { generatePushId } from '@bagubagu/utils';

const pushId = generatePushId();
console.log(pushId);
```

### encodeFirebaseKey

Firebase does not allow database key to contain following characters: '.', '#', '$', '/', '[', ']'.
Consequently we are unable to use email address as key. Use encodeFirebaseKey to
encode email address then use it as key.

```typescript
import {encodeFirebaseKey} from '@bagubagu/utils';

const email = 'louis.larry@gmail.com';
const key = encodeFirebaseKey(email);
```
