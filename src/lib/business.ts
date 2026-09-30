export const PHONE_DISPLAY = "(416) 286-9334";
export const PHONE_HREF = "tel:+14162869334";
export const EMAIL = "info@heroscatering.com";
export const ADDRESS_LINE_1 = "5215 Finch Ave E";
export const ADDRESS_LINE_2 = "Scarborough, ON M1S 0C2";
export const ADDRESS_NOTE = "GTA Mall, 2nd floor";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=5215+Finch+Ave+E+Scarborough+ON+M1S+0C2";
export const TIME_ZONE = "America/Toronto";

/** Opening hours in 24h minutes-from-midnight, indexed Sunday (0) to Saturday (6). */
export const HOURS: { day: string; open: number; close: number }[] = [
  { day: "Sunday", open: 10 * 60, close: 20 * 60 },
  { day: "Monday", open: 9 * 60, close: 21 * 60 },
  { day: "Tuesday", open: 9 * 60, close: 21 * 60 },
  { day: "Wednesday", open: 9 * 60, close: 21 * 60 },
  { day: "Thursday", open: 9 * 60, close: 21 * 60 },
  { day: "Friday", open: 9 * 60, close: 21 * 60 },
  { day: "Saturday", open: 9 * 60, close: 21 * 60 },
];

export const formatTime = (minutes: number) => {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const suffix = h24 < 12 ? "a.m." : "p.m.";
  return m === 0 ? `${h12} ${suffix}` : `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Day index (0 = Sunday) and minutes past midnight in the restaurant's time zone. */
export const getLocalTime = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    dayIndex: WEEKDAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
};

export type OpenStatus = {
  isOpen: boolean;
  todayIndex: number;
  /** "Open now" or "Closed" */
  state: string;
  /** e.g. "until 9 p.m." or "opens tomorrow at 9 a.m." */
  detail: string;
  /** Full sentence, e.g. "Open now until 9 p.m." */
  label: string;
};

export const getOpenStatus = (date: Date): OpenStatus => {
  const { dayIndex, minutes } = getLocalTime(date);
  const today = HOURS[dayIndex];
  const isOpen = minutes >= today.open && minutes < today.close;

  let detail: string;
  if (isOpen) {
    detail = `until ${formatTime(today.close)}`;
  } else if (minutes < today.open) {
    detail = `opens at ${formatTime(today.open)}`;
  } else {
    detail = `opens tomorrow at ${formatTime(HOURS[(dayIndex + 1) % 7].open)}`;
  }

  const state = isOpen ? "Open now" : "Closed";
  return {
    isOpen,
    todayIndex: dayIndex,
    state,
    detail,
    label: isOpen ? `${state} ${detail}` : `${state}, ${detail}`,
  };
};
