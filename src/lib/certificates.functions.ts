import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { findCertificate } from "./certificates.server";

export type CertificateStatus = "verified" | "expired";

export type Certificate = {
  certificateId: string;
  internName: string;
  rollNumber: string;
  internshipRole: string;
  duration: string;
  organization: string;
  authorizedBy: string;
  position: string;
  status: CertificateStatus;
};

export type VerifyResult =
  | { found: true; certificate: Certificate }
  | { found: false; reason: "not_found" };

export const verifyCertificate = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ id: z.string().min(1).max(64) }).parse(data))
  .handler(async ({ data }): Promise<VerifyResult> => {
    const certificate = findCertificate(data.id);
    if (!certificate) return { found: false, reason: "not_found" };
    return { found: true, certificate };
  });
