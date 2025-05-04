import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { name, email, message } = result.data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
          max-width: 600px;
          margin: 0 auto;
        }
        .email-container {
          border: 1px solid #e1e1e1;
          border-radius: 5px;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .header {
          background-color: #4A4A4A;
          color: white;
          padding: 15px;
          border-radius: 4px 4px 0 0;
          margin-bottom: 20px;
        }
        .content {
          padding: 0 15px;
        }
        .message-box {
          background-color: white;
          border: 1px solid #e1e1e1;
          border-radius: 4px;
          padding: 15px;
          margin-top: 15px;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #777;
          text-align: center;
          border-top: 1px solid #e1e1e1;
          padding-top: 10px;
        }
        .field {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
        </div>
        <div class="content">
          <p>You have received a new message from your website contact form.</p>
          
          <div class="field">
            <span class="label">Name:</span> ${name}
          </div>
          
          <div class="field">
            <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="message-box">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
