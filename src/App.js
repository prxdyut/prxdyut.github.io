import React from "react";
import TypeIt from "typeit-react";

function App() {
  return (
    <React.Fragment>
      <img className="h-3/5 fixed top-0 left-0 z-[-1]" src="https://www.sliderrevolution.com/wp-content/uploads/2020/03/geo1.png" alt="" />
      <img className="h-3/5 fixed bottom-0 right-[-35px]  z-[-1]" src="https://www.sliderrevolution.com/wp-content/uploads/2020/03/geo2.png" alt="" />
      <header className="w-screen fixed flex top-0 flex-col tablet:text-base laptop:text-xl ">
        <div className="flex py-5 text-dark flex-row justify-center">
          <div className="gap-4 grid-cols-2 place-content-center justify-items-end w-max hidden tablet:grid laptop:grid">
            <p className="justify-self-center hover:text-blue">work</p>
            <p className="justify-self-center hover:text-blue">socials</p>
          </div>
          <img src="brand.svg" alt="Pradyut Das" className="p-[2.5px] rounded-[12px] w-60 mx-7" style={{background: 'linear-gradient(274.67deg, #F74A6F 0%, rgba(255, 255, 255, 0.464706) 62.5%, rgba(255, 255, 255, 0) 100%), linear-gradient(94.67deg, #23C9E8 0%, rgba(255, 255, 255, 0.5) 66.52%, #FFFFFF 99.99%)'}}></img>
          <div className="gap-4 grid-cols-2 place-content-center justify-items-start w-max hidden tablet:grid laptop:grid">
            <p className="justify-self-center hover:text-pink">contact</p>
            <p className="justify-self-center hover:text-pink">about</p>
          </div>
        </div>
        {/* <div className="w-full bg-neon h-1 mb-9">
          <div className="bg-black h-1" style={{ width: '75%' }}>
            <svg className="relative bottom-2" width="20" height="20" style={{ left: '100%' }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7.5" fill="#37E2D5" stroke="black" stroke-width="5" />
            </svg>
          </div>
        </div> */}
      </header>
      <main className="font-bold h-full flex items-center justify-around">
        <div className="pt-32 text-3xl tablet:text-2xl laptop:text-4xl col-span-5 text-dark w-3/4 leading-10 tracking-[-0.1rem] text-center text-left tablet:text-center laptop:text-center">
        <TypeIt
        options={{
          strings: [" heyyy there!!! its Pradyut Das, <br /> a freelance Web developer and UI/UX developer. <br /> whose been developing skills over the last two years."],
          speed: 100,
          waitUntilVisible: true,
        }}
      />
         </div>
      </main>
    </React.Fragment>

  );
}

export default App;
