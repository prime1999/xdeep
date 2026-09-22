"use client";

import React, { useState, useCallback, useId } from "react";
import { useRouter } from "next/navigation";
import { Check, User, Target, LoaderCircle, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  CommitmentLevel,
  Option,
  PrimaryChallenge,
  SalesStage,
  XDeepApplicationForm,
} from "@/lib/types";
import {
  COMMITMENT_OPTIONS,
  INITIAL_FORM,
  PRIMARY_CHALLENGE_OPTIONS,
  SALES_STAGE_OPTIONS,
} from "@/lib/constants";
// import { createProfile } from "@/lib/supabase/action";
// import { useToast } from "@/components/ui/toast";

/* ===========================================================
   ENUMS — mirrors the provided TypeScript enums as plain
   string-value objects (values are identical to the schema).
=========================================================== */
/* ===========================================================
   Initial form state — matches ProfileFormData shape
=========================================================== */
/* ===========================================================
   Small building blocks, styled after the reference filter
   panel: soft label above a bordered rounded field.
=========================================================== */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-medium text-white/90 mb-1.5 px-0.5">
      {children}
    </label>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-2.5 mb-4 mt-8 bg-white/90 rounded-[18px] p-2 first:mt-0">
      <div className="w-7 h-7 rounded-full bg-secondary-blue flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={14} className="text-white" />
      </div>
      <div>
        <h2 className="text-sm font-bold text-secondary-blue leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[12px] text-black/90 mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function TextField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mb-4 text-sm px-3.5 py-2.5 rounded-[14px] bg-secondary-blue placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-blue/10 focus:border-primary-blue transition"
      />
    </div>
  );
}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm px-3.5 py-2.5 rounded-[14px] bg-secondary-blue placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-blue/10 focus:border-primary-blue transition resize-none"
      />
    </div>
  );
}

/** Single-choice option list displayed with checkboxes. */
function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
}) {
  const fieldId = useId();

  return (
    <fieldset className="mb-4">
      <FieldLabel>{label}</FieldLabel>
      <div className="space-y-2">
        {options.map((opt) => {
          const optionId = `${fieldId}-${opt.value}`;
          const checked = value === opt.value;

          return (
            <label
              key={opt.value}
              htmlFor={optionId}
              className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 text-xs transition cursor-pointer ${
                checked
                  ? "border-primary-blue bg-primary-blue/20 text-white"
                  : "border-neutral-200 bg-white/20 text-white/80 hover:border-neutral-300"
              }`}
            >
              <input
                id={optionId}
                type="checkbox"
                checked={checked}
                onChange={() => onChange(checked ? "" : opt.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                  checked
                    ? "border-primary-blue bg-primary-blue"
                    : "border-white/50 bg-transparent"
                }`}
              >
                {checked && <Check size={12} className="text-white" />}
              </span>
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ===========================================================
   Main form
=========================================================== */
export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loadingStage, setLoadingStage] = useState<
    "idle" | "preparing" | "saving" | "complete"
  >("idle");
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();
  //const { toast } = useToast();

  const setField = useCallback(
    <Key extends keyof XDeepApplicationForm>(
      key: Key,
      val: XDeepApplicationForm[Key],
    ) => {
      setForm((f) => ({ ...f, [key]: val }));
    },
    [],
  );

  const handleClear = () => setForm(INITIAL_FORM);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.firstName.trim() ||
      !form.surname.trim() ||
      !form.email.trim() ||
      !form.whatsappNumber.trim() ||
      !form.businessDescription.trim() ||
      !form.salesStage ||
      !form.primaryChallenge ||
      !form.challengeDetails.trim() ||
      !form.taifaqQuestion.trim() ||
      !form.commitmentLevel
    ) {
      setSubmitError("Please complete all required fields before registering.");
      return;
    }

    setSubmitError("");
    setLoadingStage("preparing");

    try {
      // Small delay so the user sees the preparing state
      await new Promise((resolve) => setTimeout(resolve, 350));

      setLoadingStage("saving");

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "We could not save your registration.",
        );
      }

      console.log("Profile created:", result.data);

      const whatsappMessage = encodeURIComponent(
        `Hii Taifaq, 

I'd like to register for September X-Deep where I'll learn how to take my business from N0 - N1, 000, 000 as fast as possible. 


My name is ${form.firstName} ${form.surname}.`,
      );

      router.push(`https://wa.me/2347025120945?text=${whatsappMessage}`);

      setLoadingStage("complete");

      await new Promise((resolve) => setTimeout(resolve, 500));

      // Open WhatsApp
      window.open(
        `https://wa.me/2347025120945?text=${whatsappMessage}`,
        "_blank",
        "noopener,noreferrer",
      );
    } catch (error) {
      console.error("Unable to save profile:", error);

      setLoadingStage("idle");

      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not save your profile. Please try again.",
      );
    }
  };

  const isSubmitting = loadingStage !== "idle";
  const loadingLabel = {
    idle: "",
    preparing: "Preparing profile...",
    saving: "Saving profile...",
    complete: "Profile saved",
  }[loadingStage];

  return (
    <div className="h-full w-full bg-transparent flex items-start justify-center pb-10 px-4">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <SectionHeading
            icon={User}
            title="Part 1: Your Details"
            subtitle="Let's get to know you."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <TextField
              label="Your beautiful first name?"
              placeholder="First name"
              value={form.firstName}
              onChange={(v) => setField("firstName", v)}
            />

            <TextField
              label="And your surname? *"
              placeholder="Surname"
              value={form.surname}
              onChange={(v) => setField("surname", v)}
            />
          </div>

          <div>
            <TextField
              label="Where is the best place to send you our letters? (Your email)"
              placeholder="example@email.com"
              value={form.email}
              onChange={(v) => setField("email", v)}
            />

            <TextField
              label="What is your active WhatsApp number so we can keep in touch?"
              placeholder="+234..."
              value={form.whatsappNumber}
              onChange={(v) => setField("whatsappNumber", v)}
            />
          </div>
          {/* Demographics */}
          <SectionHeading
            icon={Briefcase}
            title="Part 2: Your Business and the ₦1,000,000 Journey"
            subtitle="Help us understand where you are right now."
          />

          <TextAreaField
            label="What business, product, or skill do you currently sell?"
            placeholder="Graphic design, web design, affiliate marketing..."
            value={form.businessDescription}
            onChange={(v) => setField("businessDescription", v)}
          />

          <SelectField
            label="Which of these statements describes your sales right now?"
            options={SALES_STAGE_OPTIONS}
            value={form.salesStage}
            onChange={(v) => setField("salesStage", v as SalesStage)}
          />

          {form.salesStage === "other" && (
            <TextField
              label="Tell us about your situation"
              placeholder="Describe your situation"
              value={form.salesStageOther}
              onChange={(v) => setField("salesStageOther", v)}
            />
          )}

          <SelectField
            label="What is the number one problem stopping you from making more money right now?"
            options={PRIMARY_CHALLENGE_OPTIONS}
            value={form.primaryChallenge}
            onChange={(v) =>
              setField("primaryChallenge", v as PrimaryChallenge)
            }
          />

          {form.primaryChallenge === "other" && (
            <TextField
              label="Tell us more"
              placeholder="Describe your challenge"
              value={form.primaryChallengeOther}
              onChange={(v) => setField("primaryChallengeOther", v)}
            />
          )}

          <TextAreaField
            label="What feels like the biggest wall between you and hitting ₦1,000,000?"
            placeholder="Lack of buyers, fear of putting yourself out there, no clear plan..."
            rows={4}
            value={form.challengeDetails}
            onChange={(v) => setField("challengeDetails", v)}
          />

          <TextAreaField
            label="If you could ask Taifaq ONE question, what would it be?"
            placeholder="Your question..."
            rows={4}
            value={form.taifaqQuestion}
            onChange={(v) => setField("taifaqQuestion", v)}
          />

          {/* Current Stage */}
          <SectionHeading
            icon={Target}
            title="Part 3: The Commitment"
            subtitle="Success comes from action."
          />

          <SelectField
            label="Are you ready to show up, take notes and apply what you learn?"
            options={COMMITMENT_OPTIONS}
            value={form.commitmentLevel}
            onChange={(v) => setField("commitmentLevel", v as CommitmentLevel)}
          />

          <TextField
            label={`Did anyone tell you about this X-Deep? If yes, Input their code below.👇🏾
(Eg 001, 002)

Type "None" if nobody told you about`}
            placeholder="001, 002 or None"
            value={form.referralCode}
            onChange={(v) => setField("referralCode", v)}
          />

          <p className="text-[10px] text-white/80 leading-relaxed">
            Note: This is not a referral contest. At Uprix, we appreciate and
            value those who are passionate about helping others grow by telling
            more people about X-Deep through little rewards.
          </p>

          <div className="mt-6 border-t border-neutral-100 pt-4">
            {submitError && (
              <p role="alert" className="mb-3 text-center text-xs text-red-600">
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full py-2 bg-gradient-to-r from-secondary-blue to-primary-blue text-white cursor-pointer duration-700 transition hover:from-primary-blue hover:to-secondary-blue"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  {loadingStage !== "complete" && (
                    <LoaderCircle size={15} className="animate-spin" />
                  )}
                  {loadingLabel}
                </span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
