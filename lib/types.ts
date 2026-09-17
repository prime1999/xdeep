export type SalesStage =
  | "not_made_100k"
  | "unpredictable_sales"
  | "stuck_before_1m"
  | "not_started_yet"
  | "other"
  | "";

export type PrimaryChallenge =
  | "low_reach"
  | "low_conversion"
  | "pricing"
  | "inconsistency"
  | "other"
  | "";

export type CommitmentLevel =
  | "ready_to_do_the_work"
  | "nervous_but_committed"
  | "";

export interface XDeepApplicationForm {
  firstName: string;
  surname: string;

  email: string;
  whatsappNumber: string;

  businessDescription: string;

  salesStage: SalesStage;
  salesStageOther?: string;

  primaryChallenge: PrimaryChallenge;
  primaryChallengeOther?: string;

  challengeDetails: string;

  taifaqQuestion: string;

  commitmentLevel: CommitmentLevel;

  referralCode?: string;
}

export interface XDeepApplication {
  id: string;

  first_name: string;
  surname: string;

  email: string;
  whatsapp_number: string;

  business_description: string;

  sales_stage: SalesStage;
  sales_stage_other: string | null;

  primary_challenge: PrimaryChallenge;
  primary_challenge_other: string | null;

  challenge_details: string;

  taifaq_question: string;

  commitment_level: CommitmentLevel;

  referral_code: string | null;

  created_at: string;
}

export type Option = {
  value: string;
  label: string;
};
