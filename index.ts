function setTimeout<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
  ...args: TArgs
) {
  console.log(ms)
  callback(...args)
}

function foo<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
  ...args: TArgs
) {
  console.log(ms)
  callback(...args)
}

function callback(bar: string) {
  console.log(bar);
}

foo(callback, 0);
setTimeout(callback, 0);
