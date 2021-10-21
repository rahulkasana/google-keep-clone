import "./App.css";

function App() {
      console.log("---- abbbbb ----");

  console.log("---- abbbbb ----");
  return (
    <div className="flex h-full w-full bg-gray-100">
      <div className="flex w-full h-full justify-center items-start p-4">
        <div className="input-container">
          <input className="text-area h-12 mb-1" placeholder="Title" />
          <textarea
            className="text-area h-full mt-1"
            placeholder="Your text here ..."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
