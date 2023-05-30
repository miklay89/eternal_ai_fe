export const validateCardNumber = (number: string): string | boolean => {
  const trimmedNumber = number.replace(/\s/g, "");
  if (trimmedNumber.length !== 16) return false;
  return trimmedNumber;
};

export const validateYear = (date: string): number | boolean => {
  console.log(date);
  const separateDate = date.split("/");
  const expYear = `20${separateDate[1]}`.replace(/\s/g, "");
  console.log(expYear);
  if (expYear.length !== 4) return false;
  return Number(expYear);
};

export const validateMonth = (date: string): number | boolean => {
  const separateDate = date.split("/");
  const expMonth = `${separateDate[0]}`.replace(/\s/g, "");
  if (expMonth.length !== 2) return false;
  return Number(expMonth);
};

export const validateCVC = (cvc: string): string | boolean => {
  if (cvc.length !== 3) return false;
  return cvc;
};
