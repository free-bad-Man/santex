import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  objectType: z.enum(["apartment", "house", "commercial"]),
  service: z.string().min(2),
  area: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
  source: z.string().min(2),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Проверьте поля формы",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const lead = {
    ...parsed.data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "mock-received",
  };

  console.info("[mock lead]", lead);

  return NextResponse.json({
    ok: true,
    leadId: lead.id,
    message: "Заявка принята в mock-обработчик",
  });
}
