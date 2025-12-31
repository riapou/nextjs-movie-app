export function formatName(
  name: string | undefined | null,
  len: number
): string {
  if (!name) return ''

  if (name.length > len) {
    return name.slice(0, len - 3) + '...'
  }

  return name
}
