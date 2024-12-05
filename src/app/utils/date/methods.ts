const getFormattedDateFromISO = (date: string) => {
  let formattedDate = new Date(date);
  const newDate = Intl.DateTimeFormat('en-GB').format(formattedDate);
  return newDate;
};

export { getFormattedDateFromISO };
