import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Same password list as the page - keep in sync
const VALID_PASSWORDS: Record<string, string> = {
  zerogravity2026: "Zero Gravity Management",
  hellosunshine2026: "Hello Sunshine",
  management360: "Management 360",
  mosaicla2026: "Mosaic LA",
  industryent2026: "Industry Entertainment",
  stridemgmt2026: "Stride Management",
  underground2026: "Underground Films",
  alignedent2026: "Aligned Entertainment",
  uta2026: "United Talent Agency",
  writershouse2026: "Writers House",
  bookgroup2026: "The Book Group",
  parkfine2026: "Park & Fine",
  mrcent2026: "MRC Entertainment",
  foliolit2026: "Folio Lit",
  queenchristy2026: "Kettering Productions (Internal)",
};

export async function GET(request: NextRequest) {
  // Get the access code from query params
  const { searchParams } = new URL(request.url);
  const accessCode = searchParams.get("access")?.toLowerCase().trim();

  // Validate access code
  if (!accessCode || !VALID_PASSWORDS[accessCode]) {
    return new NextResponse("Unauthorized - Invalid access code", { status: 401 });
  }

  try {
    // Read the PDF from outside the public folder
    // The PDF should be in /src/scripts/ or similar protected location
    const pdfPath = path.join(process.cwd(), "src", "scripts", "FromChaosToClarity_S1E1_Pilot.pdf");
    const pdfBuffer = await readFile(pdfPath);

    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=FromChaosToClarity_S1E1_Pilot.pdf",
        // Prevent caching to ensure access is always validated
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return new NextResponse("Error loading script", { status: 500 });
  }
}