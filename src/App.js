import React from "react";

function App() {
  return (
    <React.Fragment>
      <header className="my-7">
        <div className="grid gap-4 grid-cols-3">
          <div className="grid gap-4 grid-cols-2 place-content-center">
            <p className="justify-self-center">work</p>
            <p className="justify-self-center">socials</p>
          </div>
          <img src="brand.svg" alt="Pradyut Das"></img>
          <div className="grid gap-4 grid-cols-2 place-content-center">
            <p className="justify-self-center">contact</p>
            <p className="justify-self-center">about</p>
          </div>
        </div>
      </header>
      <div className="w-full bg-neon h-1 mb-6">
        <div className="bg-black h-1" style={{ width: '75%' }}>
          <svg className="relative bottom-2" width="20" height="20" style={{ left: '100%' }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7.5" fill="#37E2D5" stroke="black" stroke-width="5" />
          </svg>
        </div>
      </div>
      <main className="px-7">
        <div class="grid grid-cols-10 text-2xl font-bold">
          <div className="col-span-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, .</div>
          <div className="col-span-3">
            {/* <div className="blurBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </div> */}
          </div>
          <div className="col-span-2 text-right">
            <ul className="list-none">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>SQL</li> 

            <li>ReactJS</li>
            <li>NeXTJS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JQuery</li>
            <li>Material</li>
            </ul>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
