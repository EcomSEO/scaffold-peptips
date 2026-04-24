import OpenGraphImage, {
  alt as ogAlt,
  size as ogSize,
  contentType as ogContentType,
} from "./opengraph-image";

// Route segment config — mirrored from opengraph-image.
// Next's static analyzer requires `runtime` to be a string literal in this file.
export const runtime = "edge";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return OpenGraphImage();
}
