import { SharedIniFileCredentials } from "aws-sdk";
import { getHostedZoneByName } from "../getHostedZoneByName";

const credentials = new SharedIniFileCredentials();
const hostedZoneName = "cokodidi.com";
const hostedZoneId = "Z2U8QZRMLEMY1M";

test.skip("getHostedZoneByName", async () => {
  const result = await getHostedZoneByName({ hostedZoneName, credentials });
  // console.log("result:", result);
  expect(result.hostedZoneId).toBe(hostedZoneId);
  return;
});
