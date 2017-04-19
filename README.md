# Bagubagu Utilities

Common Typescript/Javascript utilities that we use at Bagubagu Studio.

## Install

```bash
npm install @bagubagu/utils --save
```

## API

### generatePushId

Generate a firebase like push Id

```typescript
import { generatePushId } from '@bagubagu/utils';

const pushId = generatePushId();
console.log(pushId);
```
