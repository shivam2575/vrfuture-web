"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Section } from "../homepage/Section";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BOARDS, CLASSES } from "@/app/constants";
import { formSchema } from "@/lib/exquirySchema";

export function EnquiryForm() {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      class: "",
      board: "",
      message: "",
      company: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.company?.trim()) {
      toast.error("Your request looks suspicious. Please try again.", {
        position: "bottom-right",
      });
      return;
    }

    //send a POST request to /api/enquiry
    try {
      const body = JSON.stringify(values);
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      toast.success("Thanks! We'll call you shortly.", {
        position: "bottom-right",
      });
      console.log("Success", data);
      form.reset();
    } catch (err) {
      toast.error("Couldn't send — please WhatsApp us instead.", {
        position: "bottom-right",
      });
    }
  }
  return (
    <div className="">
      {/* //Heading & desc */}
      <Section className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-brand font-heading">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          Enquire about VR-powered coaching for Classes 5–12, JEE & NEET in
          Daman. Get a callback from VRFuture.
        </p>
      </Section>
      {/* map container */}
      <Section className={cn(`flex flex-col md:flex-row gap-6`)}>
        <Card className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.1159802597354!2d72.83073177415248!3d20.41930790843393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0db998798bf1d%3A0xbb39b0acec2edbfe!2sV%20R%20Future%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1784384824904!5m2!1sen!2sin"
            style={{ border: 0 }}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              Please reach out to us for any query related to admission, fee
              structure or syllabus or any other query. Our team will reach out
              to you ASAP..!!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="vr-contact-form" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="vr-contact-form-name">
                        Name
                      </FieldLabel>
                      <Input
                        {...field}
                        id="vr-contact-form-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Shiavm Kumar"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="vr-contact-form-phone">
                        Phone
                      </FieldLabel>
                      <Input
                        {...field}
                        id="vr-contact-form-phone"
                        aria-invalid={fieldState.invalid}
                        placeholder="9876543210"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="class"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldContent>
                        <FieldLabel htmlFor="form-rhf-select-class">
                          Class
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-class"
                          aria-invalid={fieldState.invalid}
                          className="min-w-30"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {CLASSES.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />
                <Controller
                  name="board"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldContent>
                        <FieldLabel htmlFor="form-rhf-select-board">
                          Board
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-board"
                          aria-invalid={fieldState.invalid}
                          className="min-w-30"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {BOARDS.map((board) => (
                            <SelectItem key={board} value={board}>
                              {board}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="vr-contact-form-message">
                        Your Message
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="vr-contact-form-message"
                        aria-invalid={fieldState.invalid}
                        placeholder="Your message"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="company"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        top: 0,
                        width: "1px",
                        height: "1px",
                        opacity: 0,
                        overflow: "hidden",
                        pointerEvents: "none",
                      }}
                    >
                      <Input
                        {...field}
                        id="vr-contact-form-company"
                        aria-hidden="true"
                        aria-invalid={fieldState.invalid}
                        autoComplete="new-password"
                        tabIndex={-1}
                        value={field.value ?? ""}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button
                disabled={isSubmitting}
                type="submit"
                form="vr-contact-form"
              >
                {isSubmitting ? "Sending" : "Submit"}
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </Section>
    </div>
  );
}
