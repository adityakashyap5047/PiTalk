// 'use client';

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
// import { useToast } from "@/hooks/use-toast";
// import { useForm } from 'react-hook-form';

// const ContactPage = () => {
//   const [status, setStatus] = useState("");
//   const toast = useToast();

//   const form = useForm({
//     defaultValues: {
//       name: '',
//       email: '',
//       contactNumber: '',
//       message: '',
//       queryType: '', 
//     },
//   });

//   const handleSubmit = async (data) => {
//     setStatus("Submitting...");
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...data,
//           submittedAt: new Date().toISOString(),
//         }),
//       });

//       if (response.ok) {
//         toast.success("Message sent successfully!");
//         form.reset();
//       } else {
//         toast.error("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again later.");
//     } finally {
//       setStatus("");
//     }
//   };

//   return (
//     <div className="min-h-[645] bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient flex justify-center items-center">
//       <div className="w-full max-w-2xl text-white rounded-lg p-6">
//         <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>

//         <Form {...form}>
//           <form
//             className="space-y-4"
//             onSubmit={form.handleSubmit(handleSubmit)} // Integrate react-hook-form handleSubmit
//           >
//             {/* Name Field */}
//             <div>
//             <FormField
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>First Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your First Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Last Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your Last Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             </div>

//             {/* Email Field */}
//             <FormField
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Enter your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Contact Number Field */}
//             <FormField
//               name="contactNumber"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input type="tel" placeholder="Enter your contact number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               name="title"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Title</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your title" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

            

//             {/* Query Type Field */}
//             <FormField
//               name="queryType"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query Type</FormLabel>
//                   <FormControl>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a query type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Support Request">Support Request</SelectItem>
//                         <SelectItem value="Feedback">Feedback</SelectItem>
//                         <SelectItem value="General Inquiry">General Inquiry</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Message Field */}
//             <FormField
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea placeholder="Write your message here..." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={status === "Submitting..."}
//               className="w-full bg-purple-600 hover:bg-purple-700"
//             >
//               {status === "Submitting..." ? "Submitting..." : "Submit"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SignupFormDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to PiTalk
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        If you have any query then you can reach out to us
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Enter your First Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Enter your Last Name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your emial id here" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Email Verification code</Label>
          <Input id="password" placeholder="Enter your password here" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Contact Number</Label>
          <Input id="email" placeholder="Enter your emial id here" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Verify your contact number</Label>
          <Input id="password" placeholder="Enter your password here" type="password" />
        </LabelInputContainer>
      
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};

export default SignupFormDemo;