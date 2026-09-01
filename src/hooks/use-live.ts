import { useEffect, useState } from "react";
import { bstParts } from "@/lib/format";
import { buildHourly, snapshot } from "@/lib/live";

/** Shared SSR/hydration seed so the clock cannot mismatch across the first paint. */
const SEED = new Date("2026-09-01T13:00:00.000Z");

export function useLiveGrid() {
  const [now, setNow] = useState(SEED);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(true);
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 4000);
    return () => window.clearInterval(id);
  }, []);

  const grid = snapshot(now, live);
  const hourly = buildHourly(now);
  const bst = bstParts(now);
  return { now, live, grid, hourly, bst };
}
