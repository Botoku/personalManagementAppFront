const sortByDate = (
  arr: [],
  dateOrDateDue: "date" | "dateDue",
  dir: "asc" | "dsc",
) => {
  let sortValue = "";
  if(arr.length < 2) return
  if (dateOrDateDue === "date") sortValue = "date";
  else if (dateOrDateDue === "dateDue") sortValue = "dateDue";
  if (dir === "dsc") {
    return [...arr].sort(
      (a: any, b: any) =>
        new Date(b[sortValue]).getTime() - new Date(a[sortValue]).getTime(),
    );
  } else
    return [...arr].sort(
      (a: any, b: any) =>
        new Date(a[sortValue]).getTime() - new Date(b[sortValue]).getTime(),
    );
};

export { sortByDate };
