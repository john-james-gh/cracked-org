export function formatDate(date: Date | string) {
  if (isNaN(new Date(date).getTime())) {
    throw new Error("Invalid date");
  }

  let dateObj: Date;

  if (typeof date === "string") {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }

  return dateObj.toLocaleString("en-US");
}
