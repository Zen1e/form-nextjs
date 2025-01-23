"use client";

import { useEffect, useState } from "react";

const FirstPage = (props) => {
  const { step, setStep } = props;

  const [firstName, setFirstName] = useState(["", false]);
  const [lastName, setLastName] = useState(["", false]);
  const [username, setUsername] = useState(["", false]);


  const data = localStorage.getItem('data');

  useEffect(()=>{
  if(data !== null){
    const dataObject = JSON.parse(data);
    setFirstName([dataObject.first, false]);
    setLastName([dataObject.last, false]);
    setUsername([dataObject.user, false]);
  }},[]);

  const firstChange = (e) => {
    if (!e.target.value) {
      setFirstName(["", true]);
    } else {
      setFirstName([e.target.value, false]);
    }
  };

  const lastChange = (e) => {
    if (!e.target.value) {
      setLastName(["", true]);
    } else {
      setLastName([e.target.value, false]);
    }
  };

  const userChange = (e) => {
    if (!e.target.value) {
      setUsername(["", true]);
    } else {
      setUsername([e.target.value, false]);
    }
  };

  const enterKey = (e) => {
    
    if(e.nativeEvent.key === 'Enter'){
      checkValue();
    }
  }

  const checkValue = () => {
    let count = 0;
    if (firstName[0]) {
      count++;
    } else {
      setFirstName(["", true]);
    }
    if (lastName[0]) {
      count++;
    } else {
      setLastName(["", true]);
    }
    if (username[0]) {
      count++;
    } else {
      setUsername(["", true]);
    }
    if (count === 3) {
      const data = {first: firstName[0], last: lastName[0], user: username[0]};
      const dataString = JSON.stringify(data);
      localStorage.setItem('data',dataString);
      setStep(2);
    }
  };

  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[480px] h-[655px] bg-white rounded-2xl  animate-wag">
        <div className="m-[32px] h-[591px] flex flex-col justify-between">
          <div className="w-[416px] h-[385px]">
            <img src="./logo.svg" />
            <div className="text-[26px] font-bold my-[8px]">Join us!😎</div>
            <div className="text-[18px] font-semibold text-gray-400 mb-[28px]">
              Please provide all current information accurately.
            </div>
            <div className="text-[14px] font-semibold mb-[8px]">
              First name <span className="text-red-600">*</span>
            </div>
            <input
              className={
                !firstName[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="First name"
              value={firstName[0]}
              onChange={firstChange}
              onKeyDown={enterKey}
            />
            {firstName[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                First name cannot be empty
              </div>
            )}
            <div className="text-[14px] font-semibold mb-[8px]">
              Last name <span className="text-red-600">*</span>
            </div>
            <input
              className={
                !lastName[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Last name"
              value={lastName[0]}
              onChange={lastChange}
              onKeyDown={enterKey}
            />
            {lastName[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                Last name cannot be empty
              </div>
            )}
            <div className="text-[14px] font-semibold mb-[8px]">
              Username <span className="text-red-600">*</span>
            </div>
            <input
              className={
                !username[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Username"
              value={username[0]}
              onChange={userChange}
              onKeyDown={enterKey}
            />
            {username[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                Username cannot be empty
              </div>
            )}
          </div>
          <button
            onClick={checkValue}
            className="bg-black text-white text-[16px] p-[12px] rounded-[5px]"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
