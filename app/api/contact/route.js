import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, category, otherCategory, title, description } =
      await request.json();

    // Validate the form data
    if (
      !name ||
      !email ||
      !category ||
      (category === "others" && !otherCategory) ||
      !title ||
      !description
    ) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    //authentication the credentials of user
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Inquiry/Feedback: ${title}`,
      text: `
        Dear Support Team,
    
        I hope this message finds you well. My name is ${name}, and I am reaching out to you regarding the following:
    
        Category:- ${ category } (${category === "others" && otherCategory})
    
        Title of Inquiry/Feedback:
        ${title}
    
        Details:
        ${description}
    
        Please feel free to reach out to me if further information is required. I look forward to your response at your earliest convenience.
    
        Best regards,
        ${name}
        ${email}
      `,
      html: `
        <p>Dear Support Team,</p>
    
        <p>I hope this message finds you well. My name is <strong>${name}</strong>, and I am reaching out to you regarding the following:</p>
    
        <p><strong>Category:</strong> ${category } (${category === "others" && otherCategory})</p>
    
        <p><strong>Title of Inquiry/Feedback:</strong> ${title}</p>
    
        <p><strong>Details:</strong> ${description}</p>
    
        <p>Please feel free to reach out to me if further information is required. I look forward to your response at your earliest convenience.</p>
    
        <br/>
    
        <p>Best regards,</p>
        <p><strong>${name}</strong></p>
        <p>${email}</p>
      `,
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({message: "Passcode sent successfully!!!"}, {status: 200})
  } catch (error) {
    console.log("error while sending the Feedback", error);
    return Response.json({message: 'An unexpected error occurred. Please try again later.'}, {status: 500});
  }
}
