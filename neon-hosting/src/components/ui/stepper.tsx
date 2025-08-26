"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";

type Step = {
  id: number;
  Icon: IconType;
  title: string;
  component: React.ReactNode;
};

type StepperProps = {
  steps: Step[];
  step: number; // array de ids
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Stepper = ({ steps, step, setStep }: StepperProps) => {
  return (
    <div className="min-h-[100dvh] min-w-[100dvw] flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center my-10">
        <div className="w-full max-w-3xl flex justify-between mx-4">
          {steps.map((s, i) => {
            const { id, Icon } = s;
            return (
              <div key={id} className="flex-1 flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
              ${
                step === id
                  ? "bg-red-600 text-white"
                  : "bg-gray-600 text-gray-200"
              } cursor-pointer`}
                  onClick={() => {
                    if (id < step) {
                      setStep(id);
                      console.log(id);
                    }
                  }}
                >
                  <Icon/>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > id ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {steps.find((s) => s.id === step)?.component}
    </div>
  );
};

export default Stepper;
