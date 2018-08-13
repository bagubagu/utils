import { getHostedZoneByName } from "../getHostedZoneByName";

import { config, SharedIniFileCredentials } from "aws-sdk";

const credentials = new SharedIniFileCredentials();
const hostedZoneName = "cokodidi.com";
const hostedZoneId = "Z2U8QZRMLEMY1M";

test.skip("getHostedZoneByName", async () => {
  const result = await getHostedZoneByName({ hostedZoneName, credentials });
  // console.log("result:", result);
  expect(result.hostedZoneId).toBe(hostedZoneId);
  return;
});
