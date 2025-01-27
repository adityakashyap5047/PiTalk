"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
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
  const [category, setCategory] = useState("");
  const [selectError, setSelectError] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  //schema for form validation
  const schema = z.object({
    firstName: z.string().nonempty("First Name cannot be empty"),
    lastName: z.string().nonempty("Last Name cannot be empty"),
    email: z.string().email({ message: "Invalid email address" }),
    passcode: z.string().nonempty("Give your verification code"),
    otherCategory: z.string().nonempty("Enter your query"),
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
      title: "",
      description: "",
      otherCategory: "",
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
      if (response.status === 200) {
        setIsSentPasscode(true);
        toast({
          title: "Passcode Sent Successfully",
          description:
            "Your verification passcode has been sent to your email. Please check your inbox to proceed.",
        });
      }
    } catch (error) {
      setIsSendingPasscode(false);
      console.log(error);
    }
  };

  const handleVerifyPasscode = async () => {
    try {
      setIsVerifyingPasscode(true);
      const { passcode } = form.getValues();

      if (!passcode) {
        setIsVerifyError(true);
        setIsVerifyingPasscode(false);
        return;
      }

      setIsVerifyError(false);
      const response = await axios.post("/api/verify-code", {
        Passcode,
        passcode,
      });
      setIsVerifyingPasscode(false);
      if (response.status === 200) {
        setIsVerifyError(false);
        setIsVerifiedPasscode(true);  
        toast({
          title: "Passcode Verified",
          description: "Your passcode has been successfully verified. You can now proceed.",
        });        
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
    try {
      e.preventDefault();
      const { firstName, lastName, email, otherCategory, title, description } =
        form.getValues();
      if (category === "") {
        setSelectError(true);
        return;
      }
      setSelectError(false);

      if (
        !firstName ||
        !lastName ||
        !email ||
        (category === "others" && !otherCategory) ||
        !title ||
        !description
      ) {
        setIsSubmitError(true);
        return;
      }
      setIsSubmitError(false);

      const response = await axios.post("/api/contact", {
        name: `${firstName} ${lastName}`,
        email,
        category,
        otherCategory,
        title,
        description,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
                      disabled={isSendingPasscode || isSentPasscode}
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
                      disabled={isSendingPasscode || isSentPasscode}
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
                      disabled={isSendingPasscode || isSentPasscode}
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
                    <>Verify Passcode {svg_verify}</>
                  )}
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <FormField
              name="category"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:w-1/4">
                  <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                    Query Category
                  </FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select a Category</option>
                      <option value="account">Account Issues</option>
                      <option value="technical">Technical Support</option>
                      <option value="features">Feature Requests</option>
                      <option value="guidelines">Community Guidelines</option>
                      <option value="feedback">General Feedback</option>
                      <option value="partnership">
                        Partnership/Collaboration
                      </option>
                      <option value="others">Others</option>
                    </Select>
                  </FormControl>
                  {selectError && (
                    <p className="text-sm text-red-600">Select a category.</p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Show input box when "Other" is selected */}
            {category === "others" && (
              <FormField
                name="otherCategory"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="md:w-1/2">
                    <FormLabel className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
                      Please specify:
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your query"
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
            )}
            {/* input box for title of */}
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
            className="mt-4 md:mt-9 w-1/2 mx-auto bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={!isSentPasscode || !isVerifiedPasscode}
            onClick={handleSubmit}
          >
            Submit &rarr;
            <BottomGradient />
          </button>
          {isSubmitError && (
            <p className="text-sm text-red-600">
              Please fill all the above field.
            </p>
          )}
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
