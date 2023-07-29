export function formatDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const meridiem = hours >= 12 ? "PM" : "AM"
  const formattedTime = `${hours % 12 || 12}:${minutes} ${meridiem}`

  return `${month}/${day}/${year} ${formattedTime}`
}
