// This is just a wrapper of https://github.com/sindresorhus/is-online
// import * as onlinep from "is-online";
import onlinep, { Options } from "is-online";

/**
 * Return true if we are online, false otherwise.
 * @param options options
 */
export async function isOnline(options?: Options) {
  return options ? await onlinep() : await onlinep();
}
