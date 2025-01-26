import nodemailer from 'nodemailer';

export async function POST(request) {

    try {
        const { name, email, passcode} = await request.json();
    
        //verify the form data
        if(!email || !passcode || !passcode){
            return Response.json({ message: 'All fields are required.' }, {status: 400}); 
        }

        //authentication the credentials of user
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
            to: email,
            subject: `Verify Your Email for PiTalk`,
            text: `Hello ${name},\n\nYour PiTalk verification passcode is: ${passcode}\n\nPlease enter this passcode to verify your email address.\n\nIf you did not request this, please ignore this email.\n\nBest Regards,\nThe PiTalk Team`,
            html: `
                <p>Hello <strong>${name}</strong>,</p>
                <p>Your <strong>PiTalk</strong> verification passcode is:</p>
                <h2 style="color: #4CAF50;">${passcode}</h2>
                <p>Please enter this passcode to verify your email address.</p>
                <p>If you did not request this, please ignore this email.</p>
                <br/>
                <p>Best Regards,</p>
                <p><strong>The PiTalk Team</strong></p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
    
        return Response.json({message: "Passcode sent successfully!!!"}, {status: 200})
    } catch (error) {
        console.log("error while sending the PassCode", error);
        return Response.json({message: 'An unexpected error occurred. Please try again later.'}, {status: 500});
    }    
}