import { validate } from "isemail";

interface Options {
  tldBlacklist?: string[] | {};
  tldWhitelist?: string[] | {};
  minDomainAtoms?: number;
}

/**
 * Return true if it is a valid email, false otherwise
 * @param email Email address
 */
export function isEmail(email: string, options?: Options) {
  return validate(email, options);
}
