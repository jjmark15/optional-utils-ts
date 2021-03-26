import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.91.0/testing/asserts.ts";
import {
  isNone,
  isSome,
  okOr,
  okOrElse,
  or,
  orElse,
  unwrapOr,
  unwrapOrElse,
} from "./mod.ts";

Deno.test("okOr returns passed value", () => {
  assertEquals(
    okOr("value", new Error("error message")),
    "value",
  );
});

Deno.test("okOr throws error if passed undefined", () => {
  assertThrows(
    () => okOr<string>(undefined, new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("okOr throws error if passed null", () => {
  assertThrows(
    () => okOr<string>(null, new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("okOrElse returns passed value", () => {
  assertEquals(
    okOrElse("value", () => new Error("error message")),
    "value",
  );
});

Deno.test("okOrElse throws supplied error if passed undefined", () => {
  assertThrows(
    () =>
      okOrElse<string>(
        undefined,
        () => new Error("error message"),
      ),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("okOrElse throws supplied error if passed null", () => {
  assertThrows(
    () => okOrElse<string>(null, () => new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("or returns passed value", () => {
  assertEquals(
    or("value", "defaultValue"),
    "value",
  );
});

Deno.test("or returns default value if passed undefined", () => {
  assertEquals(
    or<string>(
      undefined,
      "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("or returns default value if passed null", () => {
  assertEquals(
    or<string>(null, "defaultValue"),
    "defaultValue",
  );
});

Deno.test("or default returned value can be undefined", () => {
  assertEquals(
    or<string>(null, undefined),
    undefined,
  );
});

Deno.test("orElse returns passed value", () => {
  assertEquals(
    orElse("value", () => "defaultValue"),
    "value",
  );
});

Deno.test("orElse returns supplied default value if passed undefined", () => {
  assertEquals(
    orElse<string>(
      undefined,
      () => "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("orElse returns supplied default value if passed null", () => {
  assertEquals(
    orElse<string>(null, () => "defaultValue"),
    "defaultValue",
  );
});

Deno.test("orElse supplied default returned value can be undefined", () => {
  assertEquals(
    orElse<string>(null, () => undefined),
    undefined,
  );
});

Deno.test("unwrapOr returns passed value", () => {
  assertEquals(
    unwrapOr("value", "defaultValue"),
    "value",
  );
});

Deno.test("unwrapOr returns default value if passed undefined", () => {
  assertEquals(
    unwrapOr<string>(
      undefined,
      "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("unwrapOr returns default value if passed null", () => {
  assertEquals(
    unwrapOr<string>(null, "defaultValue"),
    "defaultValue",
  );
});

Deno.test("unwrapOrElse returns passed value", () => {
  assertEquals(
    unwrapOrElse("value", () => "defaultValue"),
    "value",
  );
});

Deno.test("unwrapOrElse returns supplied default value if passed undefined", () => {
  assertEquals(
    unwrapOrElse<string>(
      undefined,
      () => "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("unwrapOrElse returns supplied default value if passed null", () => {
  assertEquals(
    unwrapOrElse<string>(null, () => "defaultValue"),
    "defaultValue",
  );
});

Deno.test("isSome returns true if the value is defined and not null", () => {
  assert(
    isSome<string>("value"),
  );
});

Deno.test("isSome returns false if the value is undefined", () => {
  assert(
    !isSome<string>(undefined),
  );
});

Deno.test("isSome returns false if the value is null", () => {
  assert(
    !isSome<string>(null),
  );
});

Deno.test("isNone returns false if the value is defined and not null", () => {
  assert(
    !isNone<string>("value"),
  );
});

Deno.test("isNone returns true if the value is undefined", () => {
  assert(
    isNone<string>(undefined),
  );
});

Deno.test("isNone returns true if the value is null", () => {
  assert(
    isNone<string>(null),
  );
});
