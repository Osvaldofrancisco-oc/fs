const Hello = ({name, age}) => {
  
  console.log({name, age})
  const bornYear = () =>{
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>Hello {name}, you are {age} years old!</p>
      <p>So you  were probably born in {bornYear()}</p>
    </div>
  )

}

const App = () =>{

  const name = 'Osvaldo'
  const age = '24'

  return(
    <>
    <p>Greetings</p>
    <Hello name = "Canhama" age = {12 + 11}/>
    <Hello name = {name} age = {age}/>
    </>
  )
}
export default App
