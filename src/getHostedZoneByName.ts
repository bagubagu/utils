import { Route53 } from "aws-sdk";

interface getHostedZoneByNameInput {
  hostedZoneName: string;
  credentials: AWS.Credentials;
}

interface getHostedZoneByNameOutput {
  hostedZoneId: string;
}

/**
 * Get Hosted Zone Id by providing its name
 * @param hostedZoneName Hosted zone name
 */
export async function getHostedZoneByName({
  hostedZoneName,
  credentials
}: getHostedZoneByNameInput): Promise<getHostedZoneByNameOutput> {
  const r53 = new Route53({ credentials });

  let hostedZones: Route53.ListHostedZonesResponse;
  let hostedZoneId = "";

  try {
    hostedZones = await r53.listHostedZones().promise();
  } catch (err) {
    throw err;
  }

  const filteredZones = hostedZones.HostedZones.filter(
    (hostedZone: any) => hostedZone.Name === `${hostedZoneName}.`
  );

  if (filteredZones.length > 0) {
    const id = filteredZones[0].Id;
    hostedZoneId = id.replace(/\/hostedzone\//g, "");
  }

  return { hostedZoneId };
}
