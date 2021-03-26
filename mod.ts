export function okOr<T>(value: T | undefined | null, err: Error): T {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    throw err;
  }
}

export function okOrElse<T>(
  value: T | undefined | null,
  err: ISupplier<Error>,
): T {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    throw err();
  }
}

export function or<T>(
  value: T | undefined | null,
  defaultValue: T | undefined,
): T | undefined {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    return defaultValue;
  }
}

export function orElse<T>(
  value: T | undefined | null,
  f: ISupplier<T | undefined>,
): T | undefined {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    return f();
  }
}

export function unwrapOr<T>(value: T | undefined | null, defaultValue: T): T {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    return defaultValue;
  }
}

export function unwrapOrElse<T>(
  value: T | undefined | null,
  f: ISupplier<T>,
): T {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    return f();
  }
}

export function isSome<T>(value: T | unknown | null): boolean {
  return value !== undefined && value !== null;
}

export function isNone<T>(value: T | unknown | null): boolean {
  return !isSome(value);
}

interface ISupplier<T> {
  (): T;
}
