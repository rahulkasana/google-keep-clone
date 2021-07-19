import "./App.css";

function App() {
  return (
    <div className="flex h-full w-full bg-gray-100">
      <div className="flex w-full h-40 justify-center items-center p-4">
        <div className="flex h-full w-1/2 rounded-lg hover:border-transparent hover:shadow flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm font-medium">
          New Note
        </div>
      </div>
    </div>
  );
}

export default App;
