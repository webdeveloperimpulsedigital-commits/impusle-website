import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const GroupWrapperSubsection = (): JSX.Element => {
  const formFields = [
    {
      id: "company",
      label: "Company Name",
      placeholder: "Company Name",
      type: "input",
    },
    { id: "name", label: "Your Name", placeholder: "Your Name", type: "input" },
    {
      id: "email",
      label: "Email Address",
      placeholder: "Email Address",
      type: "input",
    },
    {
      id: "mobile",
      label: "Mobile Number",
      placeholder: "Mobile Number",
      type: "input",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Message",
      type: "textarea",
    },
  ];

  const contactInfo = [
    {
      icon: "/call.png",
      text: "+91-9769285224",
    },
    {
      icon: "/sms.png",
      text: "collabs@theimpulsedigital.com",
    },
    {
      icon: "/location.png",
      text: "304 - 305,Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate, \nThane, Mumbai 400604",
    },
  ];

  return (
    <section className="w-full h-auto relative">
      <div className="flex w-full items-start gap-[158px] p-0">
        <div className="flex flex-col w-[533px] items-start gap-[50px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-transparent text-[34px] tracking-[0] leading-[34px]">
            <span className="text-[#ffffffb2] font-medium leading-[60px]">
              Let&#39;s put
              <br />
            </span>

            <span className="font-bold text-white text-[52px] leading-[60px]">
              Your Auto-fill to Use!
            </span>
          </div>

          <div className="flex flex-col items-start gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-[#ffffff1a] rounded-[114px]">
                  <img
                    className="relative w-6 h-6"
                    alt="Contact icon"
                    src={contact.icon}
                  />
                </div>

                <div className="relative self-stretch opacity-90 [font-family:'DM_Sans',Helvetica] font-medium text-white text-[26px] tracking-[0] leading-10">
                  {contact.text.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < contact.text.split("\n").length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="w-[589px] bg-white rounded-[30px] border-0 shadow-none">
          <CardContent className="flex flex-col items-start gap-[30px] p-[30px]">
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <Label
                    htmlFor={field.id}
                    className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm tracking-[0] leading-[22px]"
                  >
                    {field.label}
                  </Label>

                  {field.type === "input" ? (
                    <Input
                      id={field.id}
                      placeholder={field.placeholder}
                      className="flex h-[50px] items-center gap-2.5 px-4 py-5 relative self-stretch w-full bg-[#0300190d] rounded-lg border border-solid border-[#03001908] placeholder:opacity-20 placeholder:[font-family:'DM_Sans',Helvetica] placeholder:font-normal placeholder:text-[#030019] placeholder:text-sm placeholder:tracking-[0] placeholder:leading-[22px]"
                    />
                  ) : (
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="flex h-[139px] items-start gap-2.5 px-4 py-5 relative self-stretch w-full bg-[#0300190d] rounded-lg border border-solid border-[#03001908] placeholder:opacity-20 placeholder:[font-family:'DM_Sans',Helvetica] placeholder:font-normal placeholder:text-[#030019] placeholder:text-sm placeholder:tracking-[0] placeholder:leading-[22px] resize-none"
                    />
                  )}
                </div>
              ))}
            </div>

            <Button className="inline-flex h-[50px] items-center justify-center gap-2.5 p-5 relative bg-[#543d98] rounded-xl hover:bg-[#543d98]/90 h-auto">
              <span className="relative w-fit mt-[-1.50px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Submit
              </span>

              <img
                className="relative w-[18px] h-[18px] mt-[-4.00px] mb-[-4.00px]"
                alt="Vector"
                src="/vector-1-3.svg"
              />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
