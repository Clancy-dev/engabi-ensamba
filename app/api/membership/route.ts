import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      alternatePhone,
      dateOfBirth,
      gender,
      nationalId,
      ssiga,
      mutuba,
      lunyilili,
      residence,
      occupation,
      employer,
      monthlyIncome,
      preferredGroup,
      numberOfShares,
      referredBy,
      motivation,
    } = body

    // Calculate share value
    const shareValue = parseInt(numberOfShares) * 10000

    // Send notification email to SACCO
    await resend.emails.send({
      from: "Engabi SACCO <onboarding@resend.dev>",
      to: ["engabiensambaclansacco@gmail.com"],
      subject: `New Membership Application: ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Membership Application</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #c62828 0%, #8e0000 100%); padding: 30px; text-align: center;">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tIfg9kT5uYiaWyuJEj16Mq2Co0TEhG.jpeg" alt="Engabi Ensamba Clan SACCO Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">New Membership Application</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Engabi Ensamba Clan SACCO</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <div style="background-color: #f0f9f0; border-left: 4px solid #388e3c; padding: 16px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; color: #2e7d32; font-weight: 600;">A new member has applied to join the SACCO!</p>
                      </div>

                      <!-- Applicant Info -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Personal Information</h2>
                      <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="color: #666; width: 40%;">Full Name:</td>
                          <td style="color: #333; font-weight: 600;">${firstName} ${lastName}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Email:</td>
                          <td style="color: #333;">${email}</td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Phone:</td>
                          <td style="color: #333;">${phone}${alternatePhone ? ` / ${alternatePhone}` : ""}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Date of Birth:</td>
                          <td style="color: #333;">${dateOfBirth}</td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Gender:</td>
                          <td style="color: #333;">${gender}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">National ID:</td>
                          <td style="color: #333;">${nationalId}</td>
                        </tr>
                      </table>

                      <!-- Clan Info -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Clan Information</h2>
                      <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="color: #666; width: 40%;">Ssiga:</td>
                          <td style="color: #333; font-weight: 600;">${ssiga}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Mutuba:</td>
                          <td style="color: #333;">${mutuba || "Not specified"}</td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Lunyilili:</td>
                          <td style="color: #333;">${lunyilili || "Not specified"}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Residence:</td>
                          <td style="color: #333;">${residence}</td>
                        </tr>
                      </table>

                      <!-- Employment Info -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Employment Information</h2>
                      <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="color: #666; width: 40%;">Occupation:</td>
                          <td style="color: #333;">${occupation}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Employer:</td>
                          <td style="color: #333;">${employer || "Not specified"}</td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Monthly Income:</td>
                          <td style="color: #333;">${monthlyIncome || "Not specified"}</td>
                        </tr>
                      </table>

                      <!-- Membership Details -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Membership Details</h2>
                      <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="color: #666; width: 40%;">Preferred Group:</td>
                          <td style="color: #333;">${preferredGroup}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                          <td style="color: #666;">Shares to Purchase:</td>
                          <td style="color: #333; font-weight: 600;">${numberOfShares} shares (UGX ${shareValue.toLocaleString()})</td>
                        </tr>
                        <tr>
                          <td style="color: #666;">Referred By:</td>
                          <td style="color: #333;">${referredBy || "Not specified"}</td>
                        </tr>
                      </table>

                      <!-- Motivation -->
                      <h2 style="color: #c62828; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f5f0;">Motivation</h2>
                      <div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333; line-height: 1.6;">${motivation}</p>
                      </div>

                      <!-- Action Button -->
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}" style="display: inline-block; background-color: #c62828; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">Contact Applicant</a>
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

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "Engabi SACCO <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Engabi Ensamba Clan SACCO - Application Received",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Application Received</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f0; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #c62828 0%, #8e0000 100%); padding: 30px; text-align: center;">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tIfg9kT5uYiaWyuJEj16Mq2Co0TEhG.jpeg" alt="Engabi Ensamba Clan SACCO Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome, ${firstName}!</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your application has been received</p>
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

                      <h2 style="color: #333; font-size: 22px; text-align: center; margin: 0 0 20px 0;">Thank You for Applying!</h2>
                      
                      <p style="color: #666; line-height: 1.8; text-align: center; margin-bottom: 30px;">
                        We have received your membership application to join Engabi Ensamba Clan SACCO. Our team will review your application and contact you shortly.
                      </p>

                      <!-- Application Summary -->
                      <div style="background-color: #f9f9f9; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                        <h3 style="color: #c62828; margin: 0 0 16px 0; font-size: 16px;">Application Summary</h3>
                        <table width="100%" cellpadding="6" cellspacing="0">
                          <tr>
                            <td style="color: #666;">Name:</td>
                            <td style="color: #333; font-weight: 600; text-align: right;">${firstName} ${lastName}</td>
                          </tr>
                          <tr>
                            <td style="color: #666;">Ssiga:</td>
                            <td style="color: #333; text-align: right;">${ssiga}</td>
                          </tr>
                          <tr>
                            <td style="color: #666;">Preferred Group:</td>
                            <td style="color: #333; text-align: right;">${preferredGroup}</td>
                          </tr>
                          <tr>
                            <td style="color: #666;">Shares:</td>
                            <td style="color: #333; font-weight: 600; text-align: right;">${numberOfShares} (UGX ${shareValue.toLocaleString()})</td>
                          </tr>
                        </table>
                      </div>

                      <!-- Next Steps -->
                      <h3 style="color: #333; font-size: 18px; margin: 0 0 16px 0;">What Happens Next?</h3>
                      <ol style="color: #666; line-height: 2; padding-left: 20px; margin-bottom: 30px;">
                        <li>Our team will review your application</li>
                        <li>We will contact you to verify your information</li>
                        <li>You will be guided on membership fee and share payment</li>
                        <li>Welcome to the SACCO family!</li>
                      </ol>

                      <!-- Contact Info -->
                      <div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 30px;">
                        <p style="margin: 0; color: #333; font-weight: 600;">Questions?</p>
                        <p style="margin: 8px 0 0 0; color: #666;">
                          Call us: <a href="tel:+256782358125" style="color: #c62828; text-decoration: none;">+256 782 358 125</a> or <a href="tel:+256701100988" style="color: #c62828; text-decoration: none;">+256 701 100 988</a>
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
      { message: "Application submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Membership submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    )
  }
}
