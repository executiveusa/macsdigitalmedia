export async function GET() {
  return Response.json({
    services: [
      {
        slug: "washington-founding-launch",
        name: "Washington Founding Launch",
        durationDays: 90,
        validationCohortPriceUsd: 7500,
        validationCohortCapacity: 5,
        includes: [
          "Operational and AI-readiness audit",
          "Company Brain",
          "One managed Agent MAXX operator",
          "Inquiry-to-follow-up workflow",
          "Meeting-to-action workflow",
          "Up to four supported connections",
          "AI Front Door or standardized five-page website rescue",
          "Human approval controls",
          "Training, documentation, and ownership handoff"
        ]
      }
    ]
  });
}
