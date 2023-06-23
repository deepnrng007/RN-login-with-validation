export const isFieldEmpty = (text) => {
  if (text && text.length > 0) return false;
  else return true;
};

export const lengthCheck = (text, length) => text.length >= length;

export const isValidEmail = (text) => {
  // eslint-disable-next-line no-useless-escape
  return text.includes("@") ? true : false;
};

export const hasNumber = (text) => /\d/.test(text);
export const hasUpperCase = (text) =>
  text.match(/[A-Z]/g) === null ? false : true;
export const hasLowerCase = (text) =>
  text.match(/[a-z]/g) === null ? false : true;
export const hasSpeialCase = (text) => {
  const specialChars = "@_/%!&";
  for (let i = 0; i < specialChars.length; i++) {
    if (text.indexOf(specialChars[i]) > -1) {
      return true;
    }
  }
  return false;
};

export const hasContainOnlySpaces = (text) => text.replace(/\s/g, "").length;
