import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      surname,
      email,
      whatsappNumber,
      businessDescription,
      salesStage,
      salesStageOther,
      primaryChallenge,
      primaryChallengeOther,
      challengeDetails,
      taifaqQuestion,
      commitmentLevel,
      referralCode,
    } = body;

    // Basic server-side validation
    if (
      !firstName?.trim() ||
      !surname?.trim() ||
      !email?.trim() ||
      !whatsappNumber?.trim() ||
      !businessDescription?.trim() ||
      !salesStage ||
      !primaryChallenge ||
      !challengeDetails?.trim() ||
      !taifaqQuestion?.trim() ||
      !commitmentLevel
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // Insert application
    const { data, error } = await supabaseAdmin
      .from("xdeep_applications")
      .insert({
        first_name: firstName.trim(),
        surname: surname.trim(),
        email: email.trim().toLowerCase(),
        whatsapp_number: whatsappNumber.trim(),

        business_description: businessDescription.trim(),

        sales_stage: salesStage,
        sales_stage_other: salesStageOther?.trim() || null,

        primary_challenge: primaryChallenge,
        primary_challenge_other: primaryChallengeOther?.trim() || null,

        challenge_details: challengeDetails.trim(),
        taifaq_question: taifaqQuestion.trim(),

        commitment_level: commitmentLevel,

        referral_code: referralCode?.trim() || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save your registration.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration completed successfully.",
        data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while processing your registration.",
      },
      { status: 500 },
    );
  }
}
