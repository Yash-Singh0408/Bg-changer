import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 p-3 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="w-24 h-24 rounded-full bg-red-500 "
          >red</button>
          <button
            onClick={() => setColor("blue")}
            className="w-24 h-24 rounded-full bg-blue-500"
          >blue</button>
          <button
            onClick={() => setColor("green")}
            className="w-24 h-24 rounded-full bg-green-500"
          >green</button>
          <button
            onClick={() => setColor("yellow")}
            className="w-24 h-24 rounded-full bg-yellow-500"
          >yellow</button>
          <button
            onClick={() => setColor("purple")}
            className="w-24 h-24 rounded-full bg-purple-500"
          >purple</button>
          <button
            onClick={() => setColor("pink")}
            className="w-24 h-24 rounded-full bg-pink-500"
          >pink</button>
          <button
            onClick={() => setColor("orange")}
            className="w-24 h-24 rounded-full bg-orange-500"
          >orange</button>
          <button
            onClick={() => setColor("black")}
            className="w-24 h-24 rounded-full bg-black text-white"
          >black</button>
          <button
            onClick={() => setColor("white")}
            className="w-24 h-24 rounded-full bg-white"
          >white</button>
          <button
            onClick={() => setColor("gray")}
            className="w-24 h-24 rounded-full bg-gray-500"
          >gray</button>
          <button
            onClick={() => setColor("brown")}
            className="w-24 h-24 rounded-full bg-red-900"
          >brown</button>
          <button
            onClick={() => setColor("indigo")}
            className="w-24 h-24 rounded-full bg-indigo-500"
          >indigo</button>
          <button
            onClick={() => setColor("cyan")}
            className="w-24 h-24 rounded-full bg-cyan-500"
          >cyan</button>
          <button
            onClick={() => setColor("lime")}
            className="w-24 h-24 rounded-full bg-lime-500"
          >lime</button>
          <button
            onClick={() => setColor("teal")}
            className="w-24 h-24 rounded-full bg-teal-500"
          >teal</button>
        </div>

      </div>
    </>
  );
}

export default App;
