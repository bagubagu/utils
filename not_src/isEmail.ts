import * as joi from "joi";

/**
 * Return true if it is a valid email, false otherwise
 * @param email Email address
 */
export function isEmail(email: string) {
  const schema = joi.object().keys({
    email: joi.string().email()
  });

  return joi.validate({ email }, schema, (err, value) => {
    return err ? false : true;
  });
}
