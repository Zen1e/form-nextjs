const LastPage = () => {
    return(
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[480px] h-[193px] bg-white rounded-2xl animate-wag">
          <div className="m-[32px] h-[129px] flex flex-col">
            <img src="./logo.svg" className="w-[60px]"/>
            <div className="text-[26px] font-semibold">You're All Set 🔥</div>
            <div className="text-[15px] text-gray-400">We have received your submission. Thank you!</div>
          </div>
        </div>
      </div>
    )
}
export default LastPage;