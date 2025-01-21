"use client";

import { useState } from "react";
import { useEffect } from "react";

const SecondPage = (props) => {
    const [email, setEmail] = useState(['',false,false]);
    const [number, setNumber] = useState(['',false,false]);
    const [password, setPassword] = useState(['',false,false]);
    const [confirm, setConfirm] = useState(['',false,false]);
  
    const {step, setStep} = props;

    const emailChange = (e) => {
        setEmail([e.target.value,true,false]);
      }
      
      useEffect(()=>{
        if(!email[0] && email[1]){
          setEmail([email,true,true]);
        }
      }
        ,[email]
      )

      const numberChange = (e) => {
        setNumber([e.target.value,true,false]);
      }
      
      useEffect(()=>{
        if(!number[0] && number[1]){
          setNumber([number,true,true]);
        }
      }
        ,[number]
      )

      const passwordChange = (e) => {
        setPassword([e.target.value,true,false]);
      }
      
      useEffect(()=>{
        if(!password[0] && password[1]){
          setPassword([password,true,true]);
        }
      }
        ,[password]
      )

      const confirmChange = (e) => {
        setConfirm([e.target.value,true,false]);
      }
      
      useEffect(()=>{
        if(!confirm[0] && confirm[1]){
          setConfirm([confirm,true,true]);
        }
      }
        ,[confirm]
      )

      const backButton = () => {
        setStep(1);
      }

      const nextButton = () => {
        setStep(3);
      }

    return (
        <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="w-[480px] min-h-[655px] bg-white rounded-2xl">
            <div className="m-[32px] min-h-[591px] flex flex-col justify-between">
              <div className="w-[416px] h-[385px]">
                <img src="./logo.svg"/>
                <div className="text-[26px] font-bold my-[8px]">Join us!😎</div>
                <div className="text-[18px] font-semibold text-gray-400 mb-[28px]">Please provide all current information accurately.</div>

                <div className="text-[14px] font-semibold mb-[8px]">Email <span className="text-red-600">*</span></div>
                <input className={!email[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Email" onChange={emailChange}/>
                {email[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Email cannot be empty</div>}

                <div className="text-[14px] font-semibold mb-[8px]">Phone number <span className="text-red-600">*</span></div>
                <input className={!number[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Phone number" onChange={numberChange}/>
                {number[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Phone number cannot be empty</div>}
                
                <div className="text-[14px] font-semibold mb-[8px]">Password <span className="text-red-600">*</span></div>
                <input type="password" className={!password[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Password" onChange={passwordChange}/>
                {password[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Password cannot be empty</div>}
                
                <div className="text-[14px] font-semibold mb-[8px]">Confirm password <span className="text-red-600">*</span></div>
                <input type="password" className={!confirm[2] ? ("w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"): ("w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none")} placeholder="Type again" onChange={confirmChange}/>
                {confirm[2] && <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">Password cannot be empty</div>}
              </div>

              <div className="h-[48px] flex justify-between">
                <button className="h-full w-[100px] rounded-[5px] border" onClick={backButton}></button>
                <button className="h-full w-[300px] rounded-[5px] bg-black" onClick={nextButton}></button>
              </div>
              {/* <button className="bg-black text-white text-[16px] p-[12px] rounded-[5px]">Continue 2/3<span className="font-bold ml-[10px]">{">"}</span></button> */}
            </div>
          </div>
        </div>
    )
}

export default SecondPage;