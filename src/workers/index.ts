import workerpool from 'workerpool';
import workerDependents from 'utils/worker/worker-dependents';

function runWithDependents(fn: any, ...args: any) {
  try {
    var f = new Function('return (' + fn + ').apply(null, arguments);');

    return f.apply(f, [workerDependents].concat(args));
  } catch (e) {
    console.error(e);

    throw e;
  }
}

workerpool.worker({
  runWithDependents,
});
