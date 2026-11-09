import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const tiro = await readFile(join(process.cwd(), "assets/fonts/TiroDevanagariHindi-Regular.ttf"));

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1A17",
          borderRadius: 14,
          color: "#F5F1E8",
          fontFamily: "Tiro",
          fontSize: 46,
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        अ
      </div>
    ),
    { ...size, fonts: [{ name: "Tiro", data: tiro, style: "normal", weight: 400 }] },
  );
}
