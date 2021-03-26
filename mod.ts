export default class OptionalUtils {
  public static okOr<T>(value: T | undefined | null, err: Error): T {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      throw err;
    }
  }

  public static okOrElse<T>(
    value: T | undefined | null,
    err: ISupplier<Error>,
  ): T {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      throw err();
    }
  }

  public static or<T>(
    value: T | undefined | null,
    defaultValue: T | undefined,
  ): T | undefined {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      return defaultValue;
    }
  }

  public static orElse<T>(
    value: T | undefined | null,
    f: ISupplier<T | undefined>,
  ): T | undefined {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      return f();
    }
  }

  public static unwrapOr<T>(value: T | undefined | null, defaultValue: T): T {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      return defaultValue;
    }
  }

  public static unwrapOrElse<T>(
    value: T | undefined | null,
    f: ISupplier<T>,
  ): T {
    if (value !== undefined && value !== null) {
      return value;
    } else {
      return f();
    }
  }
}

interface ISupplier<T> {
  (): T;
}
