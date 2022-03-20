import Body from "./body/Body";
import Header from "./header/Header";


function App() {
  return (
    <div className='text-3xl bg-[#353935] text-center flex flex-col h-fit
    justify-items-center text-blue-300 md:mx-auto'>
      <Header/>
      <Body/>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
