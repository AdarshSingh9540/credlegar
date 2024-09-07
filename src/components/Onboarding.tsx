"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

interface WorkExperience {
  organisation: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

interface OnboardingProps {
  initialName?: string;
  initialEducation?: string;
  initialWorkExperience?: WorkExperience[];
  onSubmit?: (data: {
    name: string;
    education: string;
    workExperience: WorkExperience[];
  }) => void;
  onCancel?: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({
  initialName = "",
  initialEducation = "",
  initialWorkExperience = [
    { organisation: "", startDate: undefined, endDate: undefined },
  ],
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = useState(initialName);
  const [education, setEducation] = useState(initialEducation);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>(
    initialWorkExperience
  );

  const handleAddWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { organisation: "", startDate: undefined, endDate: undefined },
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
    value: string | Date | undefined
  ) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [field]: value,
    };
    setWorkExperience(updatedWorkExperience);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, education, workExperience });
    }
    console.log({ name, education, workExperience });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Onboarding Form</Button>
      </DialogTrigger>
      <DialogContent className="p-10">
        <DialogHeader>
          <DialogTitle>Onboarding Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Input
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education details"
            />
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
                />
                <div className="flex space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !exp.startDate && "text-muted-foreground"
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
                          handleWorkExperienceChange(
                            index,
                            "startDate",
                            date || undefined
                          )
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
                          !exp.endDate && "text-muted-foreground"
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
                          handleWorkExperienceChange(
                            index,
                            "endDate",
                            date || undefined
                          )
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {index > 0 && (
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
