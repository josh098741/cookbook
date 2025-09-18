import Student from './Student'

function App() {
  return(
    <>
      <Student name="Spongebob Squarepants" age={30} isStudent={true}/>
      <Student name="Patrick Starfish" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy Cheeks" age={24} isStudent={true}/>
      <Student name="Larry"/>
    </>
  );
}

export default App
