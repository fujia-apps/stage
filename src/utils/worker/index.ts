import workerpool from 'workerpool';
import type { WorkerPool } from 'workerpool';
import type TDependents from './worker-dependents';

const MAX_WORKER = 8;
let pool: WorkerPool;

function patchWorker() {
  if (globalThis.Worker && !(globalThis.Worker as any).patched) {
    class PatchedWorker extends Worker {
      static patched = true;

      constructor(scriptURL: string | URL, options?: WorkerOptions) {
        super(
          scriptURL,
          Object.assign({}, options, {
            type: 'module',
          })
        );
      }
    }

    globalThis.Worker = PatchedWorker;
  }
}

export async function workerDraw<T extends any[], R>(
  fn: (depts: typeof TDependents, ...args: T) => Promise<R> | R,
  ...args: T
) {
  if (!pool) {
    patchWorker();

    if (import.meta.env && import.meta.env.DEV) {
      // development
      pool = workerpool.pool(
        new URL(`../../workers/index.ts?worker_file`, import.meta.url).href,
        {
          maxWorkers: MAX_WORKER,
        }
      );
    } else {
      // production
      pool = workerpool.pool('./worker.bundle.js', {
        maxWorkers: MAX_WORKER,
      });
    }
  }

  return pool.exec('runWithDependents', [String(fn)].concat(args));
}
