"use client";

import { useEffect, useState } from "react";

const SecondPage = (props) => {
  const { step, setStep } = props;

  const [email, setEmail] = useState(["", false]);
  const [number, setNumber] = useState(["", false]);
  const [password, setPassword] = useState(["", false]);
  const [confirm, setConfirm] = useState(["", false]);

  if(data !== null && typeof window !== 'undefined'){
    const data = localStorage.getItem("secondData");}

  useEffect(() => {
    if (data !== null && typeof window !== 'undefined') {
      const dataObject = JSON.parse(data);
      setEmail(dataObject.email);
      setNumber(dataObject.number);
      setPassword(dataObject.password);
      setConfirm(dataObject.confirm);
    }
  }, []);

  const emailChange = (e) => {
    if (!e.target.value) {
      setEmail(["", true]);
    } else {
      setEmail([e.target.value, false]);
    }
  };

  const numberChange = (e) => {
    if (!e.target.value) {
      setNumber(["", true]);
    } else {
      setNumber([e.target.value, false]);
    }
  };

  const passwordChange = (e) => {
    if (!e.target.value) {
      setPassword(["", true]);
    } else {
      setPassword([e.target.value, false]);
    }
  };

  const confirmChange = (e) => {
    if (!e.target.value) {
      setConfirm(["", true]);
    } else {
      setConfirm([e.target.value, false]);
    }
  };

  const enterKey = (e) => {
    if (e.nativeEvent.key === "Enter") {
      nextButton();
    }
  };

  const backButton = () => {
    const data = {
      email: email,
      number: number,
      password: password,
      confirm: confirm,
    };
    const dataString = JSON.stringify(data);
    localStorage.setItem("secondData", dataString);
    setStep(1);
  };

  const nextButton = () => {
    let count = 0;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email[0])) {
      count++;
    } else {
      setEmail([email[0], true]);
    }
    if (/^([+](976)[\s]?)?[0-9]{8}$/.test(number[0])) {
      count++;
    } else {
      setNumber([number[0], true]);
    }
    if (/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password[0])) {
      count++;
    } else {
      setPassword([password[0], true]);
    }
    if (password[0] === confirm[0] && confirm[0]) {
      count++;
    } else {
      setConfirm([confirm[0], true]);
    }
    if (count === 4) {
      const data = {
        email: email,
        number: number,
        password: password,
        confirm: confirm,
      };
      const dataString = JSON.stringify(data);
      localStorage.setItem("secondData", dataString);
      setStep(3);
    }
  };

  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[480px] min-h-[655px] bg-white rounded-2xl animate-wag">
        <div className="m-[32px] h-fit flex flex-col gap-[50px]">
          <div className="w-[416px] h-fit">
            <img src="./logo.svg" />
            <div className="text-[26px] font-bold my-[8px]">Join us!😎</div>
            <div className="text-[18px] font-semibold text-gray-400 mb-[28px]">
              Please provide all current information accurately.
            </div>

            <div className="text-[14px] font-semibold mb-[8px]">
              Email <span className="text-red-600">*</span>
            </div>
            <input
              value={email[0]}
              className={
                !email[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Email"
              onChange={emailChange}
              onKeyDown={enterKey}
            />
            {email[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                Invalid email
              </div>
            )}

            <div className="text-[14px] font-semibold mb-[8px]">
              Phone number <span className="text-red-600">*</span>
            </div>
            <input
              value={number[0]}
              className={
                !number[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Phone number"
              onChange={numberChange}
              onKeyDown={enterKey}
            />
            {number[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                Invalid phone number
              </div>
            )}

            <div className="text-[14px] font-semibold mb-[8px]">
              Password <span className="text-red-600">*</span>
            </div>
            <input
              value={password[0]}
              type="password"
              className={
                !password[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Password"
              onChange={passwordChange}
              onKeyDown={enterKey}
            />
            {password[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                At least 8 character. Use letter and number.
              </div>
            )}

            <div className="text-[14px] font-semibold mb-[8px]">
              Confirm password <span className="text-red-600">*</span>
            </div>
            <input
              value={confirm[0]}
              type="password"
              className={
                !confirm[1]
                  ? "w-[416px] h-[44px] p-[12px] border border-gray-300 rounded-[5px] outline-none mb-[12px] focus:border-blue-300"
                  : "w-[416px] h-[44px] p-[12px] border border-red-500 rounded-[5px] mb-[12px] outline-none"
              }
              placeholder="Type again"
              onChange={confirmChange}
              onKeyDown={enterKey}
            />
            {confirm[1] && (
              <div className="text-[13px] text-red-500 -mt-[10px] mb-[10px]">
                Password doesn't match.
              </div>
            )}
          </div>

          <div className="h-[48px] flex justify-between">
            <button
              className="h-full w-[100px] rounded-[5px] border"
              onClick={backButton}
            >
              Back
            </button>
            <button
              className="h-full w-[300px] rounded-[5px] bg-black text-white"
              onClick={nextButton}
            >
              Continue 2/3
            </button>
          </div>
          {/* <button className="bg-black text-white text-[16px] p-[12px] rounded-[5px]">Continue 2/3<span className="font-bold ml-[10px]">{">"}</span></button> */}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
