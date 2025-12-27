export function formatName(name: string, len: number) {
  if (name.length > len) {
    return name.slice(0, len - 3) + '...'
  }
  return name
}
