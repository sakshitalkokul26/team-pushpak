import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Create the professional HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #333333; border-radius: 8px; overflow: hidden; }
          .header { background: linear-gradient(90deg, #FACC15 0%, #EAB308 100%); padding: 20px; text-align: center; }
          .header h1 { margin: 0; color: #000000; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 12px; color: #888888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
          .value { font-size: 16px; color: #ffffff; background-color: #1a1a1a; padding: 12px; border-radius: 4px; border: 1px solid #333; }
          .message-box { font-size: 14px; line-height: 1.6; color: #e0e0e0; background-color: #1a1a1a; padding: 15px; border-radius: 4px; border: 1px solid #333; white-space: pre-wrap; }
          .footer { background-color: #0a0a0a; padding: 15px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #333; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New ${interest} Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #60A5FA; text-decoration: none;">${email}</a></div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${phone}</div>
            </div>` : ''}
            ${organization ? `
            <div class="field">
              <div class="label">College/Organization</div>
              <div class="value">${organization}</div>
            </div>` : ''}
            <div class="field">
              <div class="label">Interest Type</div>
              <div class="value" style="color: #FACC15; font-weight: bold;">${interest}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Team Pushpak Internal Notification System<br>
            Please reply directly to the applicant's email address.
          </div>
        </div>
      </body>
      </html>
    `;

    // Setup email data
    const mailOptions = {
      from: `"Team Pushpak Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `New ${interest} Inquiry: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}\nInterest: ${interest}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
