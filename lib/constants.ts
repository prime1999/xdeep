import { XDeepApplicationForm } from "./types";

export const INITIAL_FORM: XDeepApplicationForm = {
  firstName: "",
  surname: "",

  email: "",
  whatsappNumber: "",

  businessDescription: "",

  salesStage: "",
  salesStageOther: "",

  primaryChallenge: "",
  primaryChallengeOther: "",

  challengeDetails: "",

  taifaqQuestion: "",

  commitmentLevel: "",

  referralCode: "",
};

export const SALES_STAGE_OPTIONS = [
  {
    label:
      "I have not made my first ₦100,000 yet; I need a clear starting point.",
    value: "not_made_100k",
  },
  {
    label: "I make sales once in a while but it's too unpredictable.",
    value: "unpredictable_sales",
  },
  {
    label:
      "I make decent money, but I am stuck and cannot seem to hit ₦1,000,000.",
    value: "stuck_before_1m",
  },
  {
    label:
      "I have not started selling yet, but I want to learn the right system before I do.",
    value: "not_started_yet",
  },
  {
    label: "My situation is a bit different",
    value: "other",
  },
];

export const PRIMARY_CHALLENGE_OPTIONS = [
  {
    label: "Getting people to know about what I sell",
    value: "low_reach",
  },
  {
    label: "People view my offers/DMs, but they do not buy",
    value: "low_conversion",
  },
  {
    label: "Pricing — I don't know how to charge what I'm worth",
    value: "pricing",
  },
  {
    label: "Inconsistency — I struggle to show up every day",
    value: "inconsistency",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const COMMITMENT_OPTIONS = [
  {
    label: "Yes, I am completely ready to do the work.",
    value: "ready_to_do_the_work",
  },
  {
    label: "I feel nervous about my business, but I will show up anyway.",
    value: "nervous_but_committed",
  },
];
