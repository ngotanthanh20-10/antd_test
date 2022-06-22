export const convertDate = (data) => {
  var timestamp = Date.parse(data);
  var date = new Date(timestamp * 1000);
  return date;
};

export const dateMonthYear = (data, space) => {
  // date space month space year
  // space /,-
  var date = convertDate(data);
  return (
    date.getDate() + space + (date.getMonth() + 1) + space + date.getFullYear()
  );
};

export const yearMonthDate = (data, space) => {
  // year space month space date
  // space /,-
  var date = convertDate(data);
  return (
    date.getFullYear() + space + (date.getMonth() + 1) + space + date.getDate()
  );
};
