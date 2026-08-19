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

const RECORDS: Certificate[] = [
  {
    certificateId: "CINT-7456",
    internName: "Ansh Jain",
    rollNumber: "5802726",
    internshipRole: "120 Hour Training",
    duration: "12/08/2026 - 2/09/2026",
    organization: "Codeashion Technologies",
    authorizedBy: "Harsh Sangani",
    position: "Junior Frontend Developer",
    status: "verified",
  },
];

const normalize = (id: string) => id.replace(/[\s-]/g, "").toUpperCase();

export function findCertificate(id: string): Certificate | null {
  const key = normalize(id);
  return RECORDS.find((r) => normalize(r.certificateId) === key) ?? null;
}
