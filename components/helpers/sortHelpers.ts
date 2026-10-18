const sortByDate = (arr: [], dir= "asc") => {
  
  if(dir === "asc"){
    return  arr.sort(
    (a: any, b: any) => new Date(b.dateDue).getTime() - new Date(a.dateDue).getTime(),
  );
  }
  else   return arr.sort(
    (a: any, b: any) => new Date(a.dateDue).getTime() - new Date(b.dateDue).getTime(),
  );
};

export { sortByDate };
