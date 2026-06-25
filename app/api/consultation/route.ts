import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, message, city } = body;

    // Validate request body
    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields (fullName, email, phone, service)" },
        { status: 400 }
      );
    }

    const recipientEmail = "audit@carohitaggarwal.org.in";

    // Read SMTP config from environment variables
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    console.log("----------------------------------------");
    console.log("NEW CONSULTATION REQUEST RECEIVED:");
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`City: ${city || "N/A"}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log("----------------------------------------");

    // If SMTP environment variables are not set, fallback to console log simulation
    if (!host || !user || !pass) {
      console.warn(
        "WARNING: SMTP configuration (SMTP_HOST, SMTP_USER, SMTP_PASS) is not set in environment variables. Email simulation succeeded."
      );
      return NextResponse.json({
        success: true,
        message: "Simulation successful. Configuration missing.",
      });
    }

    // Configure SMTP Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    // Construct Email Content
    const mailOptions = {
      from: `"${fullName} via CA Firm Consultation" <${user}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Consultation Request: ${service} - ${fullName}`,
      text: `
New Consultation Request Received:

Full Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone}
Service Required: ${service}
City: ${city || "N/A"}
Additional Details:
${message || "No additional details provided."}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1F2A44; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Consultation Request</h2>
          <p>A new consultation has been requested via the website. Below are the details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f0f0f0; width: 150px;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><span style="background-color: #f7f5ef; color: #1F2A44; padding: 4px 8px; border-radius: 4px; font-size: 0.9em; font-weight: 500;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">City:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${city || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Details/Message:</td>
              <td style="padding: 10px; white-space: pre-wrap;">${message || "No additional details provided."}</td>
            </tr>
          </table>
          <div style="margin-top: 30px; font-size: 0.8em; color: #888888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
            Submitted from Rohit Aggarwal & Company website.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: any) {
    console.error("Error in post handler of app/api/consultation/route.ts:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message || error },
      { status: 500 }
    );
  }
}
