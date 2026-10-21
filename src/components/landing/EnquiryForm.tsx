"use client";

import { useId, useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";

import { ENQUIRY_ADDRESS } from "@/components/landing/data/contact";

const SUBJECTS = [
  "General enquiry",
  "Research collaboration",
  "Technical question about the platform",
  "Access to documents or slides",
  "Other",
] as const;

/**
 * Web3Forms access key. The site is static and has no server of its own, so a
 * form relay delivers the message to ENQUIRY_ADDRESS. Inlined at build time;
 * leave it unset and the form falls back to composing a `mailto:` link.
 */
const FORM_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

type SendState = "idle" | "sending" | "sent" | "error";

/**
 * General e-mail template.
 *
 * The guidelines ask the Contact page to carry one. With a Web3Forms key
 * configured the message is sent from the page itself; without one it is
 * composed as a `mailto:` for the visitor's own mail client. The mail-app link
 * stays available either way, so a relay outage never leaves the page without
 * a way to make contact.
 */
export function EnquiryForm() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [state, setState] = useState<SendState>("idle");

  const fullSubject = `[Construction AI] ${subject}`;

  const body = [
    `Name: ${name || "—"}`,
    `Reply to: ${email || "—"}`,
    "",
    message || "—",
    "",
    "— Sent from the Construction AI project website",
  ].join("\n");

  const mailto = `mailto:${ENQUIRY_ADDRESS}?subject=${encodeURIComponent(
    fullSubject
  )}&body=${encodeURIComponent(body)}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!FORM_KEY || state === "sending") return;

    // Honeypot: bots fill every field, people never see this one.
    const trap = new FormData(event.currentTarget).get("botcheck");
    if (trap) return;

    setState("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: fullSubject,
          from_name: "Construction AI website",
          name,
          email,
          replyto: email,
          message,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Rejected");

      setState("sent");
      setName("");
      setEmail("");
      setSubject(SUBJECTS[0]);
      setMessage("");
    } catch {
      setState("error");
    }
  }

  const fieldClass =
    "lp-focus mt-2 block min-h-touch w-full border border-slate-300 bg-white px-4 py-3 text-body text-ink placeholder:text-slate-500 ring-offset-white";

  const labelClass =
    "lp-label text-slate-500";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="space-y-5">
        <div>
          <label htmlFor={nameId} className={labelClass}>
            Your name
          </label>
          <input
            id={nameId}
            type="text"
            autoComplete="name"
            required={Boolean(FORM_KEY)}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jane Perera"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={emailId} className={labelClass}>
            Your e-mail
          </label>
          <input
            id={emailId}
            type="email"
            autoComplete="email"
            required={Boolean(FORM_KEY)}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={subjectId} className={labelClass}>
            Subject
          </label>
          <select
            id={subjectId}
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className={`${fieldClass} appearance-none bg-[length:0.7rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8' fill='none' stroke='%230F172A' stroke-width='1.6'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5'/%3E%3C/svg%3E\")",
            }}
          >
            {SUBJECTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={messageId} className={labelClass}>
            Message
          </label>
          <textarea
            id={messageId}
            rows={6}
            required={Boolean(FORM_KEY)}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="How can we help?"
            className={`${fieldClass} resize-y leading-relaxed`}
          />
        </div>

        {/* Honeypot, hidden from people and assistive technology. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />
      </div>

      {FORM_KEY ? (
        <>
          <button
            type="submit"
            disabled={state === "sending"}
            className="lp-focus mt-7 inline-flex min-h-touch items-center justify-center gap-2 bg-gold px-6 text-body font-bold text-ink transition-colors hover:bg-gold-light disabled:cursor-wait disabled:opacity-70 ring-offset-white"
          >
            <Send aria-hidden className="h-4 w-4" />
            {state === "sending" ? "Sending…" : "Send message"}
          </button>

          <p
            role="status"
            aria-live="polite"
            className="mt-4 min-h-[1.25rem] text-body-sm"
          >
            {state === "sent" ? (
              <span className="text-emerald-700">
                Thank you. Your message has been sent and we will reply to the
                address you gave.
              </span>
            ) : state === "error" ? (
              <span className="text-red-700">
                The message could not be sent. Please try again, or{" "}
                <a href={mailto} className="underline underline-offset-4">
                  open it in your mail app
                </a>{" "}
                instead.
              </span>
            ) : null}
          </p>

          <p className="mt-2 text-micro leading-relaxed text-slate-500">
            Your message is delivered to{" "}
            <span className="font-mono text-slate-600">{ENQUIRY_ADDRESS}</span>{" "}
            through the Web3Forms relay. This website stores nothing. Prefer
            your own mail app?{" "}
            <a
              href={mailto}
              className="lp-focus underline decoration-slate-300 underline-offset-4 hover:decoration-gold ring-offset-white"
            >
              Open it there
            </a>
            .
          </p>
        </>
      ) : (
        <>
          <a
            href={mailto}
            className="lp-focus mt-7 inline-flex min-h-touch items-center justify-center gap-2 bg-gold px-6 text-body font-bold text-ink transition-colors hover:bg-gold-light ring-offset-white"
          >
            <Mail aria-hidden className="h-4 w-4" />
            Open in your mail app
          </a>

          <p className="mt-4 text-micro leading-relaxed text-slate-500">
            This opens your own e-mail application with the message below ready
            to send to{" "}
            <span className="font-mono text-slate-600">{ENQUIRY_ADDRESS}</span>.
            Nothing is submitted to or stored by this website.
          </p>

          {/* Preview of exactly what will be handed to the mail client. */}
          <details className="mt-6 border-t border-slate-200 pt-4">
            <summary className="lp-focus inline-flex min-h-6 cursor-pointer items-center lp-label text-slate-500 ring-offset-white">
              Preview the message
            </summary>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words bg-slate-50 p-4 font-mono text-micro leading-relaxed text-slate-600">
              {`To: ${ENQUIRY_ADDRESS}\nSubject: ${fullSubject}\n\n${body}`}
            </pre>
          </details>
        </>
      )}
    </form>
  );
}
