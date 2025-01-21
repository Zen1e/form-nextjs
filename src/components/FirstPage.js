"use client";

import { useState } from "react";
import { useEffect } from "react";

const FirstPage = (props) => {
  
    const {step, setStep, firstName, setFirstName, lastName, setLastName, username, setUsername} = props;
    
    const firstChange = (e) => {
      setFirstName([e.target.value,true,false]);
    }
    
    useEffect(()=>{
      if(!firstName[0] && firstName[1]){
        setFirstName([firstName,true,true]);
      }
    }
      ,[firstName]
    )
  
    const lastChange = (e) => {
      setLastName([e.target.value,true,false]);
    }
    
    useEffect(()=>{
      if(!lastName[0] && lastName[1]){
        setLastName([lastName,true,true]);
      }
    }
      ,[lastName]
    )
  
    const userChange = (e) => {
      setUsername([e.target.value,true,false]);
    }
    
    useEffect(()=>{
      if(!username[0] && username[1]){
        setUsername([username,true,true]);
      }
    }
      ,[username]
    )
  
    const checkValue = () => {
        let count=0;
      if(firstName[1] && !firstName[2]){
        count++;
      }else{
        setFirstName(["",true,true])
      }
      if(lastName[1] && !lastName[2]){
        count++;
      }else{
        setLastName(["",true,true])
      }
      if(username[1] && !username[2]){
        count++;
      }else{
        setUsername(["",true,true])
      }
      if(count === 3){
        setStep(2);
      }
  }
  
    return (
        <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="w-[480px] h-[655px] bg-white rounded-2xl">
            <div className="m-[32px] h-[591px] flex flex-col justify-between">
              <div className="w-[416px] h-[385px]">
                <img src="./logo.svg"/>
                <div className="text-[26px] font-bold my-[8px]">Join us!😎</div>
                <div className="text-[18px] font-semibold text-gray-400 mb-[28px]">Please provide all current information accurately.</div>
                <div className="text-[14px] font-semibold mb-[8px]">First name <span className="text-red-600">*</span></div>
                <input className={!firstName[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="First name" onChange={firstChange}/>
                {firstName[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">First name cannot be empty</div>}
                <div className="text-[14px] font-semibold mb-[8px]">Last name <span className="text-red-600">*</span></div>
                <input className={!lastName[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Last name" onChange={lastChange}/>
                {lastName[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Last name cannot be empty</div>}
                <div className="text-[14px] font-semibold mb-[8px]">Username <span className="text-red-600">*</span></div>
                <input className={!username[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Username" onChange={userChange}/>
                {username[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Username cannot be empty</div>}
              </div>
              <button onClick={checkValue} className="bg-black text-white text-[16px] p-[12px] rounded-[5px]">Continue 1/3<span className="font-bold ml-[10px]">{">"}</span></button>
            </div>
          </div>
        </div>
    )
}

export default FirstPage;