import nodemailer from 'nodemailer';

export default async function POST(request) {
    const { name, email, message, contactNumber } = req.body;

    // Validate the form data
    if (!name || !email || !message || !contactNumber) {
      return Response.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Change this based on your email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address (set in .env.local)
          pass: process.env.EMAIL_PASS, // Your email password (set in .env.local)
        },
      });

      // Email content
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER, // Receiver's email address (set in .env.local)
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nContact Number: ${contactNumber}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      Response.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      Response.status(500).json({ error: 'Failed to send email.' });
    }
}
