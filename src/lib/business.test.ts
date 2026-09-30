import { describe, expect, it } from "vitest";
import { formatTime, getOpenStatus } from "./business";

// Toronto is UTC-4 in September (EDT). 2026-09-30 is a Wednesday; 2026-09-27 is a Sunday.
describe("getOpenStatus", () => {
  it("is open during weekday hours", () => {
    const status = getOpenStatus(new Date("2026-09-30T14:00:00-04:00"));
    expect(status).toMatchObject({ isOpen: true, todayIndex: 3, label: "Open now until 9 p.m." });
  });

  it("is closed before opening", () => {
    const status = getOpenStatus(new Date("2026-09-30T08:30:00-04:00"));
    expect(status).toMatchObject({ isOpen: false, label: "Closed, opens at 9 a.m." });
  });

  it("is closed at closing time and points to tomorrow", () => {
    const status = getOpenStatus(new Date("2026-09-30T21:00:00-04:00"));
    expect(status).toMatchObject({ isOpen: false, label: "Closed, opens tomorrow at 9 a.m." });
  });

  it("uses Sunday hours", () => {
    expect(getOpenStatus(new Date("2026-09-27T20:30:00-04:00")).label).toBe(
      "Closed, opens tomorrow at 9 a.m.",
    );
    expect(getOpenStatus(new Date("2026-09-27T09:30:00-04:00")).label).toBe("Closed, opens at 10 a.m.");
  });

  it("evaluates in Toronto time regardless of the input offset", () => {
    // 01:00 UTC Thursday is 21:00 Wednesday in Toronto: just closed.
    const status = getOpenStatus(new Date("2026-10-01T01:00:00Z"));
    expect(status).toMatchObject({ isOpen: false, todayIndex: 3 });
  });
});

describe("formatTime", () => {
  it("formats minutes as 12-hour time", () => {
    expect(formatTime(0)).toBe("12 a.m.");
    expect(formatTime(9 * 60)).toBe("9 a.m.");
    expect(formatTime(12 * 60 + 30)).toBe("12:30 p.m.");
    expect(formatTime(21 * 60)).toBe("9 p.m.");
  });
});
