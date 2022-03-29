export function translateDate(date: string): string {
  var dateObject = new Date(date);

  return dateObject.toLocaleDateString('fa-IR', {
    dateStyle: 'long',
  });
}
