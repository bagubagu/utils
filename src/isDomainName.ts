/**
 * Return true if it is a valid domain name, false otherwise
 * @param name Domain name
 */
export function isDomainName(name: string) {
  // regex stolen from https://github.com/LinusU/domain-name-regex
  return name.match(
    /^(?=.{0,253}$)(([a-z0-9][a-z0-9-]{0,61}[a-z0-9]|[a-z0-9])\.)+((?=.*[^0-9])([a-z0-9][a-z0-9-]{0,61}[a-z0-9]|[a-z0-9]))$/i
  );
}
