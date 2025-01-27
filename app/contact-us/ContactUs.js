"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Vortex } from "@/components/ui/vortex";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  svg_retry,
  svg_send,
  svg_verified,
  svg_verify,
  svg_verifying,
} from "@/components/svg";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const SignupFormDemo = () => {
  const [Passcode, setPasscode] = useState("");
  const [isSentPasscode, setIsSentPasscode] = useState(false);
  const [isSentError, setIsSentError] = useState(false);
  const [isSendingPasscode, setIsSendingPasscode] = useState(false);
  const [isVerifyingPasscode, setIsVerifyingPasscode] = useState(false);
  const [isVerifiedPasscode, setIsVerifiedPasscode] = useState(false);
  const [isVerifyError, setIsVerifyError] = useState(false);

  const { toast } = useToast();

  //schema for form validation
  const schema = z.object({
    firstName: z.string().nonempty("First Name cannot be empty"),
    lastName: z.string().nonempty("Last Name cannot be empty"),
    email: z.string().email({ message: "Invalid email address" }),
    passcode: z.string().nonempty("Give your verification code"),
    category: z.string().nonempty("Select a Category"),
    title: z.string().nonempty("Please enter a title"),
    description: z.string().nonempty("give the description about your query"),
  });

  //zod implementation
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      passcode: "",
      category: "",
      title: "",
      description: "",
    },
  });

  const handleSendPasscode = async () => {
    try {
      setIsSendingPasscode(true);
      const { firstName, lastName, email } = form.getValues();

      if (!firstName || !lastName || !email) {
        setIsSentError(true);
        setIsSendingPasscode(false);
        return;
      }

      setIsSentError(false);
      const code = () => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
      };

      const generatedPasscode = code();
      setPasscode(generatedPasscode);

      const response = await axios.post("/api/send-code", {
        name: `${firstName} ${lastName}`,
        email,
        Passcode: generatedPasscode,
      });
      console.log(response);
      setIsSendingPasscode(false);
      setIsSentPasscode(true);
    } catch (error) {
      setIsSendingPasscode(false);
      console.log(error);
    }
  };

  const handleVerifyPasscode = async () => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
    try {

      setIsVerifyingPasscode(true);
      const { passcode } = form.getValues();

      if(!passcode){
        setIsVerifyError(true);
        setIsVerifyingPasscode(false);
        return;
      }

      setIsVerifyError(false);
      const response = await axios.post("/api/verify-code", {
        Passcode,
        passcode
      });
      console.log(response)
      setIsVerifyingPasscode(false);
      if (response.status === 200) {
        setIsVerifyError(false);
        setIsVerifiedPasscode(true);
      } else {
        setIsVerifiedPasscode(false);
        setIsVerifyError(true);
      }
    } catch (error) {
      console.error(error);
      setIsVerifyingPasscode(false);
      setIsVerifyError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="mx-auto max-w-screen-md my-2">
      {/* <Vortex
        backgroundColor="black"
        rangeY={700}
        particleCount={1000}
        baseHue={10}
      > */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-1/2">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your First Name"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-1/2">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Last Name"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-full">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Email Address"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  {isSentError && (
                    <p className="text-sm text-red-600">
                      Fill all the above fields to get the passcode.
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isSentPasscode && (
              <Button
                variant="secondary"
                className="mt-4 md:mt-9 h-9 w-1/2 md:w-auto mx-auto"
                type="button"
                disabled={isSendingPasscode}
                onClick={handleSendPasscode}
              >
                {!isSendingPasscode ? (
                  <>Get Passcode {svg_send}</>
                ) : (
                  <>
                    Sending
                    <span className="animate-bounce">{svg_verifying}</span>
                  </>
                )}
              </Button>
            )}
            {isSentPasscode && (
              <div className="flex flex-row space-x-2 w-full">
                <FormField
                  name="passcode"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                        Passcode
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Passcode"
                          disabled={isVerifiedPasscode || isVerifyingPasscode}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      {isVerifyError && (
                        <p className="text-sm text-red-600">
                          Enter Passcode to Verify it.
                        </p>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="secondary"
                  className="mt-9 h-9 w-1/2 md:w-auto mx-auto"
                  type="button"
                  onClick={handleVerifyPasscode}
                  disabled={isVerifiedPasscode || isVerifyingPasscode}
                >
                  {isVerifyingPasscode ? (
    <>
      Verifying...
      <span className="animate-bounce">{svg_verifying}</span>
    </>
  ) : isVerifyError ? (
    <>
      Retry
      <span className="ml-2">{svg_retry}</span>
    </>
  ) : isVerifiedPasscode ? (
    <>
      Verified
      <span className="ml-2">{svg_verified}</span>
    </>
  ) : (
    <>
      Verify Passcode {svg_verify}
    </>
  )}
                </Button>
              </div>
            )}
          </div>
          <div>
            {/* <div className="flex flex-col md:flex-row md:space-x-2">
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
    </Button> 
</div> */}
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <FormField
              name="category"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-1/4">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    Select the Category
                  </FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    >
                      <option value="">Select a Category</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-3/4">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter the Title"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem className="md:w-full">
                <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a description"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={!isSentPasscode || !isVerifiedPasscode}
            onClick={handleSubmit}
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
      </Form>
      {/* </Vortex> */}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
