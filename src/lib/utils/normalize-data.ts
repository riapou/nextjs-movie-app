export function normalizeData<T extends { media_type?: string }>(
  item: T,
  defaultType: 'movie' | 'tv' | 'person'
) {
  return {
    ...item,
    media_type: item.media_type ?? defaultType,
  };
}

export function normalizeDataList<T extends { media_type?: string }>(
  medias: T[],
  type: 'movie' | 'tv' | 'person'
) {
  return medias.map(media => normalizeData(media, type));
}
