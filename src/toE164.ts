import * as libphonenumber from "google-libphonenumber";

/**
 * Returns E164 phone format
 * If parameter is not a valid phone number then return original string
 * @param phone Phone number
 */
export function toE164(phone: string) {
  const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

  let myNumber: libphonenumber.PhoneNumber;
  try {
    myNumber = phoneUtil.parse(phone, "ID");

    return phoneUtil.format(myNumber, libphonenumber.PhoneNumberFormat.E164);
  } catch (err) {
    return phone;
  }
}
