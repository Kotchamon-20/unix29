/** Ensures trailing slash for API routes (required when trailingSlash is enabled). */
export function apiUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}
