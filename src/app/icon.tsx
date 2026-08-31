import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

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
          background: "#08070A",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #C9B07A",
            borderRadius: 180,
          }}
        >
          <span
            style={{
              color: "#E6D5B8",
              fontSize: 168,
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            ح
          </span>
        </div>
      </div>
    ),
    size,
  );
}
