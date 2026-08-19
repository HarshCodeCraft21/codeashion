import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, BadgeCheck, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { findCertificate, type Certificate } from "@/lib/certificates";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-md border border-border/70 bg-card/40 p-4">
      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 break-words text-sm font-medium text-foreground">{value || "—"}</dd>
    </div>
  );
}

export default function VerifyPage() {
  const [searchParams] = useSearchParams();
  const certificateId = searchParams.get("certificateId")?.trim();
  
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!certificateId) {
      setCertificate(null);
      setSearched(false);
      return;
    }

    setLoading(true);
    // Simulate slight network delay for effect to match previous behavior
    const timer = setTimeout(() => {
      const result = findCertificate(certificateId);
      setCertificate(result);
      setSearched(true);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [certificateId]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-4 pt-12 pb-48 sm:px-6 sm:pt-16 sm:pb-56">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-base-200">
            Certificate registry
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Verify Certificate
          </h1>
          <p className="mt-3 text-base leading-6 text-muted-foreground">
            Verify the authenticity of a certificate issued by Codeashion Technologies.
          </p>
        </div>

        <section aria-live="polite" aria-busy={loading} className="mt-10">
          {!certificateId ? (
            <div className="rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
              <h2 className="text-lg font-semibold">No certificate ID provided</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Open a verification link such as{" "}
                <code className="break-all font-mono text-accent">
                  /verify?certificateId=CINT7456
                </code>{" "}
                to verify a certificate.
              </p>
            </div>
          ) : loading ? (
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <span className="sr-only">Verifying certificate, please wait…</span>
              <div className="flex items-center gap-3">
                <Loader2 aria-hidden="true" className="size-6 animate-spin text-accent" />
                <div className="h-4 w-48 animate-pulse rounded bg-muted" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="rounded-md border border-border/70 p-4">
                    <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                    <div className="mt-3 h-4 w-36 animate-pulse rounded bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          ) : certificate ? (
            <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-start gap-3">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 size-8 shrink-0 text-green-600" />
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold tracking-tight">
                      <span aria-hidden="true"></span>Certificate Verified
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      This certificate is authentic and was issued by Codeashion Technologies.
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  Verified
                </span>
              </div>

              <div className="border-b border-border bg-strong/5 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Certificate ID
                </p>
                <p className="mt-2 break-all font-mono text-2xl font-light text-gray-300 sm:text-3xl">
                  {certificate.certificateId}
                </p>
              </div>

              <dl className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                <Field label="Intern Name" value={certificate.internName} />
                <Field label="Roll Number" value={certificate.rollNumber} />
                <Field label="Internship Role" value={certificate.internshipRole} />
                <Field label="Duration" value={certificate.duration} />
                <Field label="Issuing Organization" value={certificate.organization} />
                <Field label="Certificate Status" value={certificate.status === "expired" ? "Expired" : "Active"}/>
                <Field label="Job Location" value="Remote" />
                <Field label="Authorized By" value={certificate.authorizedBy} />
                <Field label="Position" value={certificate.position} />
              </dl>
            </article>
          ) : searched ? (
            <div role="alert" className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <AlertTriangle aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-destructive" />
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">Certificate Not Found</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    No certificate matches the ID{" "}
                    <span className="break-all font-mono text-foreground">{certificateId}</span>.
                    Check the ID on your certificate and try again.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
