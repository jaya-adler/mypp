import Body from "./body/Body";
import Header from "./header/Header";


function App() {
  return (
    <div className='text-3xl bg-[#353935] text-center flex flex-col 
    justify-items-center min-h-screen text-blue-300 md:mx-auto'>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
