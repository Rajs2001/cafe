type ContactFormData = {
  name: string;
  contact: string;
  email: string;
  purpose?: string;
  business?: string;
  message?: string;
};

export function generateAdminEmailTemplate(data: ContactFormData): string {
  const { name, contact, email, purpose, business, message } = data;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #000;
          color: #ff7300;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #777;
          border-radius: 0 0 5px 5px;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-name {
          font-weight: bold;
          margin-bottom: 5px;
          color: #ff7300;
        }
        .field-value {
          background-color: #f5f5f5;
          padding: 10px;
          border-radius: 4px;
          border-left: 3px solid #ff7300;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="content">
          <p>A new contact form has been submitted on the Cafe Cruiser website. Here are the details:</p>
          
          <div class="field">
            <div class="field-name">Name:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-name">Phone Number:</div>
            <div class="field-value">${contact}</div>
          </div>
          
          <div class="field">
            <div class="field-name">Email Address:</div>
            <div class="field-value">${email}</div>
          </div>
          
          ${purpose
            ? `
          <div class="field">
            <div class="field-name">Purpose / Query:</div>
            <div class="field-value">${purpose}</div>
          </div>
          `
            : ''}
          
          ${business
            ? `
          <div class="field">
            <div class="field-name">Business Name:</div>
            <div class="field-value">${business}</div>
          </div>
          `
            : ''}
          
          ${message
            ? `
          <div class="field">
            <div class="field-name">Message:</div>
            <div class="field-value">${message}</div>
          </div>
          `
            : ''}
        </div>
        
        <div class="footer">
          <p>This is an automated message from the Cafe Cruiser website.</p>
          <p>© ${new Date().getFullYear()} Cafe Cruiser. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
