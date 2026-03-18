export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function absoluteUrl(site: string, path: string) {
  return new URL(path, site).toString();
}
