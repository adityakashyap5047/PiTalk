
export async function POST(request) {
    try {
        const { name, email, passcode} = await request.json();
    
        //verify the form data
        if(!email || !passcode){
            return Response.json({ error: 'All fields are required.' }, {status: 400}); 
        }
        
        const originalCode = passCode();
    
        if (passcode === originalCode) {
            return Response.json({message: "get successfully"}, {status: 200})
        } else {
            return Response.json({message: "User not verified. Incorrect PassCode"}, {status: 403})
        }
    } catch (error) {
        console.log("error while verifying PassCode", error);
        return Response.json({message: 'An unexpected error occurred. Please try again later.'}, {status: 500});
    }    
}