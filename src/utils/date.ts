export const formatDateTime = (date: string): string => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(dateObj);
};
