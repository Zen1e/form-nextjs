"use client";

import FirstPage from "@/components/FirstPage";
import SecondPage from "@/components/SecondPage";
import ThirdPage from "@/components/ThirdPage";
import LastPage from "@/components/LastPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  if(step === 1){
    return (<FirstPage step = {step} setStep = {setStep}/>);
  }
  else if(step === 2){
    return (<SecondPage step = {step} setStep = {setStep}/>);
  }
  else if(step === 3){
    return (<ThirdPage step = {step} setStep = {setStep}/>);
  }
  else{
    return (<LastPage />)
  }
}
