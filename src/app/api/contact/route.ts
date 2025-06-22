import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email templates
import { generateAdminEmailTemplate } from '@/lib/email-templates/admin-contact';
import { generateUserEmailTemplate } from '@/lib/email-templates/user-contact';

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    const { name, contact, email, purpose, business, message } = formData;

    // Basic validation
    if (!name || !contact || !email) {
      return NextResponse.json(
        { error: 'Name, contact, and email are required' },
        { status: 400 },
      );
    }

    // Prepare admin email
    const adminEmailContent = generateAdminEmailTemplate({
      name,
      contact,
      email,
      purpose,
      business,
      message,
    });

    // Prepare user confirmation email
    const userEmailContent = generateUserEmailTemplate({
      name,
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${name}`,
      html: adminEmailContent,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Cafe Cruiser!',
      html: userEmailContent,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 },
    );
  }
}
