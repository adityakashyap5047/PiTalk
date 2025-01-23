import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, message, contactNumber } = await request.json();

    
    // Validate the form data
    if (!name || !email || !message || !contactNumber) {
      return Response.json({ error: 'All fields are required.' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Receiver's email address (set in .env.local)
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nContact Number: ${contactNumber}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return Response.json({ message: 'Email sent successfully!' }, {status: 200});
    } catch (error) {
      console.error('Error sending email:', error);
      return Response.json({ error: 'Failed to send email.' }, {status: 500});
    }
}