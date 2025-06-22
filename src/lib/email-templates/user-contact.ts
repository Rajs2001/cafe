type ContactUserData = {
  name: string;
};

export function generateUserEmailTemplate(data: ContactUserData): string {
  const { name } = data;
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Cafe Cruiser!</title>
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
        .logo {
          max-width: 150px;
          margin: 0 auto 15px;
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
        .highlight {
          color: #ff7300;
          font-weight: bold;
        }
        .button {
          display: inline-block;
          background-color: #ff7300;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 50px;
          margin: 20px 0;
          font-weight: bold;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #ff7300;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://cafecruisers.in/logo.png" alt="Cafe Cruiser Logo" class="logo">
          <h1>Thank You for Reaching Out!</h1>
        </div>
        
        <div class="content">
          <p>Hello <span class="highlight">${name}</span>,</p>
          
          <p>Thank you for contacting Cafe Cruiser! We've received your message and will get back to you shortly.</p>
          
          <p>Here's what happens next:</p>
          <ol>
            <li>Our team is reviewing your inquiry</li>
            <li>We'll reach out to you within 24-48 hours</li>
            <li>We'll work together to provide you with the information you need</li>
          </ol>
          
          <p>In the meantime, feel free to explore more about our adventures and offerings:</p>
          
          <center>
            <a href="https://cafecruisers.in/ventures" class="button">Explore Our Ventures</a>
          </center>
          
          <p>If you have any urgent questions, please feel free to call us at <span class="highlight">+91 XXXX XXXX XX</span>.</p>
          
          <div class="social-links">
            <a href="https://instagram.com/cafecruisers">Instagram</a> | 
            <a href="https://facebook.com/cafecruisers">Facebook</a> | 
            <a href="https://twitter.com/cafecruisers">Twitter</a>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>© ${new Date().getFullYear()} Cafe Cruiser. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
