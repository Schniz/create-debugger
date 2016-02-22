import createDebugger from 'debug';

function chainedDebugger(type, tag) {
  let debug = createDebugger(`${tag}:${type}`);
  return (...data) => {
    let printedData = data.map(e => {
      if (typeof e === 'string') return e;
      return JSON.stringify(e, null, ' ');
    });
    debug(...printedData);
    return data[1] ? data : data[0];
  };
}

const create = tag => {
  const fn = newTag => create(tag + ':' + newTag);
  fn.debug = chainedDebugger('debug', tag);
  fn.error = chainedDebugger('error', tag);
  fn.info = chainedDebugger('info', tag);
  fn.warn = chainedDebugger('warn', tag);
  return fn;
};

export default create;
