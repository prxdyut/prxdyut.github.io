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
          <img src="brand.svg"></img>
          <div className="grid gap-4 grid-cols-2 place-content-center">
            <p className="justify-self-center">contact</p>
            <p className="justify-self-center">about</p>
          </div>
        </div>
      </header>
      <div className="bg-neon h-1 w-100"></div>
      <div className="bg-black h-1 w-2/5"></div>
    </React.Fragment>
  );
}

export default App;
