// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Plus, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";

const WorkExperienceSchema = z
  .object({
    organisation: z.string().min(1, "Organisation is required"),
    startDate: z
      .date({
        required_error: "Start date is required",
        invalid_type_error: "Start date must be a valid date",
      })
      .nullable(),
    endDate: z
      .date({
        required_error: "End date is required",
        invalid_type_error: "End date must be a valid date",
      })
      .nullable(),
    skills: z.array(z.string()).min(1, "At least one skill is required"),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        return data.startDate <= data.endDate;
      }
      return true;
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

const OnboardingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  education: z.string().min(1, "Education is required"),
  workExperience: z
    .array(WorkExperienceSchema)
    .min(1, "At least one work experience is required"),
});

type WorkExperience = z.infer<typeof WorkExperienceSchema>;
type OnboardingData = z.infer<typeof OnboardingSchema>;

interface OnboardingProps {
  data?: OnboardingData;
  onSubmit?: (data: OnboardingData) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ data, onSubmit }) => {
  const [open, setOpen] = useState(!data);
  const [name, setName] = useState(data?.name || "");
  const [education, setEducation] = useState(data?.education || "");
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>(
    data?.workExperience || [
      { organisation: "", startDate: null, endDate: null, skills: [] },
    ]
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setOpen(!data);
  }, [data]);

  const handleAddWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { organisation: "", startDate: null, endDate: null, skills: [] },
    ]);
  };

  const handleRemoveWorkExperience = (index: number) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience.splice(index, 1);
    setWorkExperience(updatedWorkExperience);
  };

  const handleWorkExperienceChange = (
    index: number,
    field: keyof WorkExperience,
    value: string | Date | null | string[]
  ) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [field]: value,
    };
    setWorkExperience(updatedWorkExperience);
  };

  const handleAddSkill = (index: number, skill: string) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index].skills.push(skill);
    setWorkExperience(updatedWorkExperience);
  };

  const handleRemoveSkill = (expIndex: number, skillIndex: number) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[expIndex].skills.splice(skillIndex, 1);
    setWorkExperience(updatedWorkExperience);
  };

  const validateForm = () => {
    const formData: OnboardingData = { name, education, workExperience };
    try {
      OnboardingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path.join(".")] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const formData: OnboardingData = { name, education, workExperience };
      if (onSubmit) {
        onSubmit(formData);
      }
      console.log(formData);
      setOpen(false);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-10"
        onInteractOutside={(e) => e.preventDefault()}
        hideCloseButton
      >
        <DialogHeader>
          <DialogTitle>Onboarding Form</DialogTitle>
        </DialogHeader>
        {showAlert && (
          <Alert variant="destructive">
            <AlertDescription>
              Please fill in all required fields, including dates and skills.
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Education fields remain the same */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={cn(errors["name"] && "border-red-500")}
            />
            {errors["name"] && (
              <p className="text-red-500 text-sm">{errors["name"]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education details"
              className={cn(errors["education"] && "border-red-500")}
            />
            {errors["education"] && (
              <p className="text-red-500 text-sm">{errors["education"]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Work Experience</Label>
            {workExperience.map((exp, index) => (
              <div key={index} className="space-y-2 border p-2 rounded">
                <Input
                  value={exp.organisation}
                  onChange={(e) =>
                    handleWorkExperienceChange(
                      index,
                      "organisation",
                      e.target.value
                    )
                  }
                  placeholder="Organisation name"
                  className={cn(
                    errors[`workExperience.${index}.organisation`] &&
                      "border-red-500"
                  )}
                />
                {errors[`workExperience.${index}.organisation`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`workExperience.${index}.organisation`]}
                  </p>
                )}
                <div className="flex space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !exp.startDate && "text-muted-foreground",
                          errors[`workExperience.${index}.startDate`] &&
                            "border-red-500"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {exp.startDate ? (
                          format(exp.startDate, "PPP")
                        ) : (
                          <span>Start date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={exp.startDate}
                        onSelect={(date) =>
                          handleWorkExperienceChange(index, "startDate", date)
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !exp.endDate && "text-muted-foreground",
                          errors[`workExperience.${index}.endDate`] &&
                            "border-red-500"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {exp.endDate ? (
                          format(exp.endDate, "PPP")
                        ) : (
                          <span>End date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={exp.endDate}
                        onSelect={(date) =>
                          handleWorkExperienceChange(index, "endDate", date)
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {errors[`workExperience.${index}.startDate`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`workExperience.${index}.startDate`]}
                  </p>
                )}
                {errors[`workExperience.${index}.endDate`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`workExperience.${index}.endDate`]}
                  </p>
                )}
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-100 px-2 py-1 rounded-full flex items-center"
                      >
                        <span>{skill}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="ml-1 p-0 h-4 w-4"
                          onClick={() => handleRemoveSkill(index, skillIndex)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Input
                    placeholder="Add a skill and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const target = e.target as HTMLInputElement;
                        if (target.value.trim()) {
                          handleAddSkill(index, target.value.trim());
                          target.value = "";
                        }
                      }
                    }}
                  />
                </div>
                {workExperience.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveWorkExperience(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={handleAddWorkExperience}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Work Experience
            </Button>
          </div>
          <Button type="submit">Done</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Onboarding;
