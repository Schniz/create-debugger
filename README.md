# Simple [`debug`](https://www.npmjs.com/package/debug) factory

Providing a simple, composable, chainable debug utilities based on the tj's wonderful `debug` module

## Installation

`npm install --save create-debugger`

## Usage

```javascript
import createDebugger from 'create-debugger';
const logger = createDebugger('myapp');
logger.warn('hey'); // Debug with key `myapp:warn` - 'hey'
```

### Chaining keys
```javascript
import createDebugger from 'create-debugger';

const logger = createDebugger('myapp');
const subLogger = logger('sublogger');

logger.warn('hey'); // Debug with key `myapp:warn` - 'hey'
subLogger.warn('ho'); // Debug with key `myapp:sublogger:warn` - 'ho'
```

### Composing
```javascript
import createDebugger from 'create-debugger';
const logger = createDebugger('myapp');

// then somewhere in your code..

const myVar = logger.debug('some text'); // Debugs 'some text' and returns 'some text'.

// if you use ramda/lodash compose:

const something = compose(logger.debug, someMethod); // and the log is a part of your function.
```

## Subdebuggers
- `info`
- `debug`
- `warn`
- `error`
