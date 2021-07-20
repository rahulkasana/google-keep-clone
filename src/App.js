import "./App.css";

function App() {
  return (
    <div className="flex h-full w-full bg-gray-100">
      <div className="flex w-full h-60 justify-center items-center p-4">
        <div className="flex flex-col h-full w-1/2 p-2 rounded-lg hover:border-transparent focus:border-transparent hover:shadow rounded-lg border-2 border-dashed border-gray-600 text-sm font-medium">
          <input className="text-area h-12 mb-1" placeholder="Title" />
          <textarea className="text-area h-full mt-1" placeholder="Your text here ..." />
        </div>
      </div>
    </div>
  );
}

export default App;
