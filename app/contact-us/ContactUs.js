"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Vortex } from "@/components/ui/vortex";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { svg_retry, svg_verified, svg_verify, svg_verifying } from "@/components/svg";
import { Loader2, Mail } from "lucide-react";
import { Select } from "@/components/ui/select";

const SignupFormDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    (
    <div
      className="mx-auto max-w-screen-md my-2">
      {/* <Vortex
        backgroundColor="black"
        rangeY={700}
        particleCount={1000}
        baseHue={10}
      > */}
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">First name</Label>
            <Input id="firstname" placeholder="Enter your First Name" type="text" required/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">Last name</Label>
            <Input id="lastname" placeholder="Enter your Last Name" type="text" required/>
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2">
  <LabelInputContainer className="mb-4 md:w-1/2">
    <Label htmlFor="email" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
      Email Address
    </Label>
    <Input id="email" placeholder="Enter your email id here" type="email" required/>
  </LabelInputContainer>
  <LabelInputContainer className="mb-4 md:w-1/4">
    <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
      Email Verification Code
    </Label>
    <Input id="password" placeholder="Enter your password here" type="password" />
  </LabelInputContainer>
  <LabelInputContainer className="mb-4 md:w-1/4">
    <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
      Email Verification Code
    </Label>
    <Input id="password" placeholder="Enter your password here" type="password" />
  </LabelInputContainer>
</div>
        <div className="flex flex-col md:flex-row md:space-x-2">
  <LabelInputContainer className="mb-4 md:w-1/2">
    <Label htmlFor="email" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
      Contact Number
    </Label>
    <Input id="email" placeholder="Enter your contact number" type="email" />
  </LabelInputContainer>
  <LabelInputContainer className="mb-4 md:w-1/4">
    <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
      Email Verification Code
    </Label>
    <Input id="password" placeholder="Enter your password here" type="password" />
  </LabelInputContainer>
  <Button variant="secondary" type="button">Verify your Email {svg_verify}</Button>
  {/* <Button disabled>
      Verifying ...
      <span className="animate-bounce">{svg_verifying}</span>
    </Button>
    <Button>
      Verified
      {svg_verified}
    </Button>
    <Button>
      Retry
      {svg_retry}
    </Button> */}
</div>
<div className="flex flex-col md:flex-row md:space-x-2">
        <LabelInputContainer className="mb-4 md:w-1/2">
          <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">Select the query</Label>
          <Select>
          <option value="">Select a query</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">Title</Label>
          <Input id="password" placeholder="Enter your title" required/>
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">Description</Label>
          <Textarea id="password" placeholder="Write a description" required/>
        </LabelInputContainer>
      
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
      {/* </Vortex> */}
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