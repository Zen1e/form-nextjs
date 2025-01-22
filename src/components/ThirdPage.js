"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";


const ThirdPage = (props) => {

    const todayDate = format(new Date(), 'yyyy-MM-dd')
    const date = todayDate.split('-');

    const {step, setStep} = props;
    const [path, setPath] = useState('./select.png');
    const [ageError, setAgeError] = useState(null);
    const [picError, setPicError] = useState(false);
    const [birthData, setBirthData] = useState(null);

    const data = localStorage.getItem('thirdData');

    useEffect(()=>{
    if(data!==null){
        const dataObject = JSON.parse(data);
        setPath(dataObject.path);
        setPicError(dataObject.picError);
        setBirthData(dataObject.birth);
        setAgeError(dataObject.ageError);
    }},[])

    const dateChange = (e) => {
        const birthDate = e.target.value.split('-');
        let age = date[0] - birthDate[0];
        if(birthDate[1] > date[1]){
            age--;
        }
        else if(birthDate[1] === date[1]){
            if(birthDate[2] > birthDate[2]){
                age--;
            }
        }
        if(age>=18 && age <= 130){
            setAgeError(false);
        }
        else{
            setAgeError(true);
        }
        const birthMonth = birthDate[1]<10 ? ('0'+birthDate[1]).slice(-2) : birthDate[1];
        const birthDay = birthDate[2]<10 ? ('0'+birthDate[2]).slice(-2) : birthDate[2];
        const birthData = birthDate[0] + '-' + birthMonth + '-' + birthDay;
        setBirthData(birthData);
    }
    
    const picture = (e) => {

        setPicError(false);
        
        const file = e.target.files[0];
        
        if (file) {
            const fileURL = URL.createObjectURL(file); // Create a URL for the file
            setPath(fileURL);
        }
    }

    const backButton = () => {
        const data = {path: path, picError: picError, birth: birthData, ageError: ageError}
        const dataString = JSON.stringify(data);
        localStorage.setItem('thirdData',dataString);
        setStep(2);
    }
    const nextButton = () => {
        let count = 0;
        if(ageError === null || ageError){
            setAgeError(true);
        }else{count++;}
        if(path === './select.png'){
            setPicError(true);
        }else{count++;}
        if(count===2)
        setStep(4);
    }
    

    return (
        <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="w-[480px] h-[655px] bg-white rounded-2xl">
            <div className="m-[32px] h-[591px] flex flex-col justify-between">
              <div className="w-[416px] h-[385px]">
                <img src="./logo.svg"/>
                <div className="text-[26px] font-bold my-[8px]">Join us!😎</div>
                <div className="text-[18px] font-semibold text-gray-400 mb-[28px]">Please provide all current information accurately.</div>
                <div className="text-[14px] font-semibold mb-[8px]">Date of birth <span className="text-red-600">*</span></div>
                <input type='date' className="w-[416px] h-[45px] rounded-xl px-[12px] outline-none border mb-[0px]" onChange={dateChange} defaultValue={birthData}/>
                {ageError ? (<div className="mb-[20px] text-red-500 text-[13px]">Invalid birth date</div>) : (<div className="m-[20px]"></div>)}
                <div className="text-[14px] font-semibold mb-[8px]">Profile picture <span className="text-red-600">*</span></div>
                <div>
                    <input type="file" accept="image/*" onChange={picture} className="absolute w-[416px] h-[200px] opacity-0"/>
                    <div className="w-[416px] h-[200px] overflow-hidden rounded-xl border flex justify-center">
                        <img src={path} onError={()=>setPath("./select.png")}/>
                    </div>
                </div>
                {picError ? (<div className="mb-[20px] text-red-500 text-[13px]">Please select profile picture</div>):(<div></div>)}
              </div>

              <div className="h-[48px] flex justify-between">
                <button className="h-full w-[100px] rounded-[5px] border" onClick={backButton}>Back</button>
                <button className="h-full w-[300px] rounded-[5px] bg-black text-white" onClick={nextButton}>Continue 3/3</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ThirdPage;