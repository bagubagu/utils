import * as libphonenumber from "google-libphonenumber";

/**
 * Return true if it is a valid phone number, false otherwise
 * @param phone Phone number
 */
export function isPhone(phone: string) {
  const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

  let myNumber: libphonenumber.PhoneNumber;

  try {
    myNumber = phoneUtil.parse(phone, "ID");

    return phoneUtil.isValidNumber(myNumber);
  } catch (err) {
    return false;
  }
}
