import { NextResponse } from 'next/server';
import axios from 'axios';
import nodemailer from 'nodemailer';

// Helper to configure and retrieve SMTP transporter lazily
const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: parseInt(port || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user,
      pass,
    },
  });
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Map internal fields to target API fields if necessary
    const params = new URLSearchParams({
      name: data.name || '',
      email: data.email || '',
      mobileno: data.phone || data.mobileno || '',
      course: data.course || "Digital Marketing Master Course",
      enquirysource: data.enquirysource || "Website",
      interestlevel: data.interestlevel || "High",
      country: data.country || "India",
      state: data.location || data.state || '',
      city: data.city || '',
      remark:"lead come from "+ data.location,
      address: data.address || '',
      counsellor: data.counsellor || ''
    });

    const apiUrl = `http://admin.didm.in/api/lead/custom/0001?${params.toString()}`;
    
    // Forward the request to the external API from the server
    // This bypasses CORS and Mixed Content issues
    const response = await axios.get(apiUrl);

    // Try to send email notifications
    try {
      const transporter = getTransporter();
      if (transporter) {
        const fromEmail = process.env.EMAIL_FROM || `"DIDM Website" <${process.env.SMTP_USER}>`;
        
        // 1. Email notification to Administrator
        const adminMailOptions = {
          from: fromEmail,
          to: process.env.EMAIL_TO,
          subject: `New Lead: ${data.name || 'Anonymous'} - ${data.location || 'Unknown Location'}`,
          text: `New lead submitted on DIDM Website.\n\nDetails:\nName: ${data.name || 'N/A'}\nEmail: ${data.email || 'N/A'}\nPhone: ${data.phone || data.mobileno || 'N/A'}\nLocation: ${data.location || 'N/A'}\nCourse: ${data.course || "Digital Marketing Master Course"}\nSource: ${data.enquirysource || "Website"}\nSubmitted At: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #b52727; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #b52727; padding-bottom: 10px;">New Lead Submitted</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0; width: 35%;">Name</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${data.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${data.phone || data.mobileno}">${data.phone || data.mobileno || 'N/A'}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Location</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${data.location || 'N/A'}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Course</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${data.course || "Digital Marketing Master Course"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Source</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${data.enquirysource || "Website"}</td>
                </tr>
              </table>
              <p style="margin-top: 20px; font-size: 12px; color: #64748b; text-align: center;">
                This lead was captured automatically on the DIDM Course Landing Page.
              </p>
            </div>
          `,
        };
        await transporter.sendMail(adminMailOptions);
        console.log(`Email successfully sent to admin: ${adminMailOptions.to} for lead ${data.name}`);

        // 2. Thank-you/Confirmation Email to the Lead
        if (data.email) {
          const leadMailOptions = {
            from: fromEmail,
            to: data.email,
            subject: 'Thank you for your interest in DIDM!',
            text: `Dear ${data.name || 'Student'},\n\nThank you for your interest in the Digital Marketing training programs at DIDM (Delhi Institute of Digital Marketing).\n\nWe have received your enquiry for the course at our ${data.location || 'nearest'} center. One of our career advisors will contact you shortly on your registered phone number (${data.phone || data.mobileno || 'provided number'}) to guide you further.\n\nBest Regards,\nDIDM Admissions Team\nhttp://www.didm.in`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <div style="text-align: center; margin-bottom: 20px;">
                  <h2 style="color: #b52727; margin: 0;">Delhi Institute of Digital Marketing</h2>
                  <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">India's Leading Digital Marketing Institute</p>
                </div>
                <div style="line-height: 1.6; color: #334155;">
                  <p>Dear <strong>${data.name || 'Student'}</strong>,</p>
                  <p>Thank you for reaching out to DIDM! We have received your query for our <strong>${data.course || 'Digital Marketing Master Course'}</strong> at our <strong>${data.location || 'nearest'}</strong> center.</p>
                  <p>One of our experienced career counselors will contact you shortly at <strong>${data.phone || data.mobileno || 'your phone number'}</strong> to discuss your goals and share the complete curriculum, batch timings, and fee structures.</p>
                  <p style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 14px; color: #64748b;">
                    Best Regards,<br>
                    <strong>DIDM Admissions Team</strong><br>
                    <a href="https://www.didm.in" style="color: #b52727; text-decoration: none;">www.didm.in</a>
                  </p>
                </div>
              </div>
            `,
          };
          await transporter.sendMail(leadMailOptions);
          console.log(`Thank-you email successfully sent to lead: ${data.email}`);
        }
      } else {
        console.warn('SMTP settings are missing or incomplete in environment variables. Email notification skipped.');
      }
    } catch (emailError: any) {
      console.error('Failed to send email notification:', emailError.message || emailError);
    }
    
    return NextResponse.json({ 
      success: true, 
      data: response.data 
    });
  } catch (error: any) {
    console.error('API Proxy Error:', error.message);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
