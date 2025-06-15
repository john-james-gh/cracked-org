export function formatDate(date: Date | string) {
  let dateObj: Date;

  if (typeof date === "string") {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }

  return dateObj.toLocaleString("en-US");
}
