import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, phone, subject, message } = body

    // Send notification email to SACCO
    await resend.emails.send({
      from: "Engabi SACCO <onboarding@resend.dev>",
      to: ["engabiensambaclansacco@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #c62828 0%, #8e0000 100%); padding: 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">New Contact Message</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Engabi Ensamba Clan SACCO</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <div style="background-color: #e3f2fd; border-left: 4px solid #1976d2; padding: 16px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; color: #1565c0; font-weight: 600;">Subject: ${subject}</p>
                      </div>

                      <!-- Sender Info -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Sender Information</h2>
                      <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="color: #666; width: 30%;">Name:</td>
                          <td style="color: #333; font-weight: 600;">${name}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Email:</td>
                          <td style="color: #333;"><a href="mailto:${email}" style="color: #c62828; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Phone:</td>
                          <td style="color: #333;"><a href="tel:${phone}" style="color: #c62828; text-decoration: none;">${phone}</a></td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Message</h2>
                      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                      </div>

                      <!-- Action Buttons -->
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #c62828; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-right: 10px;">Reply via Email</a>
                        <a href="tel:${phone}" style="display: inline-block; background-color: #388e3c; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">Call Sender</a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #333; padding: 30px; text-align: center;">
                      <p style="color: #999; margin: 0; font-size: 14px;">Engabi Ensamba Clan SACCO</p>
                      <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">Kibuye, Kampala - Uganda</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    // Send confirmation email to sender
    await resend.emails.send({
      from: "Engabi SACCO <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Message - Engabi Ensamba Clan SACCO",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message Received</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #c62828 0%, #8e0000 100%); padding: 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Thank You, ${name}!</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We received your message</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <div style="text-align: center; margin-bottom: 30px;">
                        <div style="width: 80px; height: 80px; background-color: #e8f5e9; border-radius: 50%; display: inline-block; line-height: 80px;">
                          <span style="font-size: 40px;">✓</span>
                        </div>
                      </div>

                      <p style="color: #666; line-height: 1.8; text-align: center; margin-bottom: 30px; font-size: 16px;">
                        Thank you for contacting Engabi Ensamba Clan SACCO. We have received your message regarding <strong>"${subject}"</strong> and will respond as soon as possible.
                      </p>

                      <!-- Message Summary -->
                      <div style="background-color: #f9f9f9; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                        <h3 style="color: #c62828; margin: 0 0 16px 0; font-size: 16px;">Your Message</h3>
                        <p style="color: #666; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>

                      <!-- Contact Info -->
                      <div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333; font-weight: 600;">Need urgent assistance?</p>
                        <p style="margin: 8px 0 0 0; color: #666;">
                          Call us: <a href="tel:+256753244446" style="color: #c62828; text-decoration: none;">+256 753 244 446</a> or <a href="tel:+256772401428" style="color: #c62828; text-decoration: none;">+256 772 401 428</a>
                        </p>
                      </div>

                      <p style="color: #666; text-align: center; font-style: italic;">
                        "Together we save, together we grow"
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #333; padding: 30px; text-align: center;">
                      <p style="color: #fff; margin: 0; font-size: 16px; font-weight: bold;">Engabi Ensamba Clan SACCO</p>
                      <p style="color: #999; margin: 10px 0 0 0; font-size: 12px;">Kibuye, Kampala - Uganda</p>
                      <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">
                        <a href="mailto:engabiensambaclansacco@gmail.com" style="color: #999; text-decoration: none;">engabiensambaclansacco@gmail.com</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
