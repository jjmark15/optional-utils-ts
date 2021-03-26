import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.91.0/testing/asserts.ts";
import OptionalUtils from "./mod.ts";

Deno.test("okOr returns passed value", () => {
  assertEquals(
    OptionalUtils.okOr("value", new Error("error message")),
    "value",
  );
});

Deno.test("okOr throws error if passed undefined", () => {
  assertThrows(
    () => OptionalUtils.okOr<string>(undefined, new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("okOr throws error if passed null", () => {
  assertThrows(
    () => OptionalUtils.okOr<string>(null, new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("okOrElse returns passed value", () => {
  assertEquals(
    OptionalUtils.okOrElse("value", () => new Error("error message")),
    "value",
  );
});

Deno.test("okOrElse throws supplied error if passed undefined", () => {
  assertThrows(
    () =>
      OptionalUtils.okOrElse<string>(
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
    () =>
      OptionalUtils.okOrElse<string>(null, () => new Error("error message")),
    Error,
    undefined,
    "error message",
  );
});

Deno.test("or returns passed value", () => {
  assertEquals(
    OptionalUtils.or("value", "defaultValue"),
    "value",
  );
});

Deno.test("or returns default value if passed undefined", () => {
  assertEquals(
    OptionalUtils.or<string>(
      undefined,
      "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("or returns default value if passed null", () => {
  assertEquals(
    OptionalUtils.or<string>(null, "defaultValue"),
    "defaultValue",
  );
});

Deno.test("or default returned value can be undefined", () => {
  assertEquals(
    OptionalUtils.or<string>(null, undefined),
    undefined,
  );
});

Deno.test("orElse returns passed value", () => {
  assertEquals(
    OptionalUtils.orElse("value", () => "defaultValue"),
    "value",
  );
});

Deno.test("orElse returns supplied default value if passed undefined", () => {
  assertEquals(
    OptionalUtils.orElse<string>(
      undefined,
      () => "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("orElse returns supplied default value if passed null", () => {
  assertEquals(
    OptionalUtils.orElse<string>(null, () => "defaultValue"),
    "defaultValue",
  );
});

Deno.test("orElse supplied default returned value can be undefined", () => {
  assertEquals(
    OptionalUtils.orElse<string>(null, () => undefined),
    undefined,
  );
});

Deno.test("unwrapOr returns passed value", () => {
  assertEquals(
    OptionalUtils.unwrapOr("value", "defaultValue"),
    "value",
  );
});

Deno.test("unwrapOr returns default value if passed undefined", () => {
  assertEquals(
    OptionalUtils.unwrapOr<string>(
      undefined,
      "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("unwrapOr returns default value if passed null", () => {
  assertEquals(
    OptionalUtils.unwrapOr<string>(null, "defaultValue"),
    "defaultValue",
  );
});

Deno.test("unwrapOrElse returns passed value", () => {
  assertEquals(
    OptionalUtils.unwrapOrElse("value", () => "defaultValue"),
    "value",
  );
});

Deno.test("unwrapOrElse returns supplied default value if passed undefined", () => {
  assertEquals(
    OptionalUtils.unwrapOrElse<string>(
      undefined,
      () => "defaultValue",
    ),
    "defaultValue",
  );
});

Deno.test("unwrapOrElse returns supplied default value if passed null", () => {
  assertEquals(
    OptionalUtils.unwrapOrElse<string>(null, () => "defaultValue"),
    "defaultValue",
  );
});

Deno.test("isSome returns true if the value is defined and not null", () => {
  assert(
    OptionalUtils.isSome<string>("value"),
  );
});

Deno.test("isSome returns false if the value is undefined", () => {
  assert(
    !OptionalUtils.isSome<string>(undefined),
  );
});

Deno.test("isSome returns false if the value is null", () => {
  assert(
    !OptionalUtils.isSome<string>(null),
  );
});

Deno.test("isNone returns false if the value is defined and not null", () => {
  assert(
    !OptionalUtils.isNone<string>("value"),
  );
});

Deno.test("isNone returns true if the value is undefined", () => {
  assert(
    OptionalUtils.isNone<string>(undefined),
  );
});

Deno.test("isNone returns true if the value is null", () => {
  assert(
    OptionalUtils.isNone<string>(null),
  );
});
