import { getSupabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEEKDAY_CAPACITY = 1;
const WEEKEND_CAPACITY = 1;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month"); // YYYY-MM

  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return NextResponse.json({ error: "Invalid month" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const [year, monthNum] = month.split("-").map(Number);
  const daysInMonth = new Date(year, monthNum, 0).getDate();
  const startDate = `${month}-01`;
  const endDate = `${month}-${String(daysInMonth).padStart(2, "0")}`;

  const [{ data: bookings }, { data: blocked }] = await Promise.all([
    supabase
      .from("bookings")
      .select("date")
      .gte("date", startDate)
      .lte("date", endDate)
      .eq("status", "confirmed"),
    supabase
      .from("blocked_dates")
      .select("date")
      .gte("date", startDate)
      .lte("date", endDate),
  ]);

  const bookingCounts: Record<string, number> = {};
  for (const b of bookings ?? []) {
    bookingCounts[b.date] = (bookingCounts[b.date] ?? 0) + 1;
  }

  const blockedSet = new Set((blocked ?? []).map((b: { date: string }) => b.date));

  const availability: Record<string, string> = {};

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${month}-${String(d).padStart(2, "0")}`;
    const dayOfWeek = new Date(year, monthNum - 1, d).getDay(); // 0=Sun

    if (dayOfWeek === 0 || blockedSet.has(dateStr)) {
      availability[dateStr] = "closed";
      continue;
    }

    const capacity = dayOfWeek === 6 ? WEEKEND_CAPACITY : WEEKDAY_CAPACITY;
    const count = bookingCounts[dateStr] ?? 0;
    if (count >= capacity) {
      availability[dateStr] = "full";
    } else if (count === capacity - 1 && capacity > 1) {
      availability[dateStr] = "limited";
    } else {
      availability[dateStr] = "available";
    }
  }

  return NextResponse.json(availability);
}
