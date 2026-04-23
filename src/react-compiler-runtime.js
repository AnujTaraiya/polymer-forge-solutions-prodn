// Shim for react/compiler-runtime required by Sanity's @portabletext plugins.
// These plugins are compiled with the React Compiler which requires React 19.
// This shim satisfies the import without React 19 being installed.
export function c(n) {
  return n;
}
