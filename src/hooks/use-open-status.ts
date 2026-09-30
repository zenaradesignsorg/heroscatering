import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "@/lib/business";

/** Live open/closed status in Toronto time, refreshed every minute. */
export const useOpenStatus = (): OpenStatus => {
  const [status, setStatus] = useState(() => getOpenStatus(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getOpenStatus(new Date())), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
};
