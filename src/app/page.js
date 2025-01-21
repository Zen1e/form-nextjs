"use client";

import FirstPage from "@/components/FirstPage";
import SecondPage from "@/components/SecondPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState(['',false,false]);
  const [lastName, setLastName] = useState(['',false,false]);
  const [username, setUsername] = useState(['',false,false]);

  if(step === 1){
    return (<FirstPage step = {step} setStep = {setStep} firstName = {firstName} setFirstName = {setFirstName} lastName = {lastName} setLastName = {setLastName} username = {username} setUsername = {setUsername}/>);
  }
  else if(step === 2){
    return (<SecondPage step = {step} setStep = {setStep}/>);
  }
  else if(step === 3){
    // return (<ThirdPage />);
  }
}
