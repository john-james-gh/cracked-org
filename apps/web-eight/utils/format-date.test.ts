import { describe, it, expect } from "@jest/globals";
import { formatDate } from "./format-date";

describe("format-date.ts", () => {
  it("should format a Date object correctly", () => {
    const testDate = new Date("2023-12-25");
    const result = formatDate(testDate);
    expect(result).toBe("12/25/2023, 12:00:00 AM");
  });

  it("should throw an error if the date is invalid", () => {
    const testDate = new Date("invalid");
    expect(() => formatDate(testDate)).toThrow("Invalid date");
  });
});
