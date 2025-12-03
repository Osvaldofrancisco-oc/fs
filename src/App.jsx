const ListNomeFamilia = () =>{
  
  const listName = ['Osvaldo','Conceição','Domingos']

  return (
    <div>
      <ul>
        {listName.map((nome) => <li key={nome.toString()}>{nome}</li>)}
      </ul>
      <li></li>
    </div>
  )
}
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}
const App = () => {
  // console.log('Hello from componente')
  const now = new Date()
  const a = 19
  const b = 21
  console.log(now, a + b)
  // const name = 'Peter'
  // const age = 24
  return (
    
  <div>
    <p>Hello world, it´s {now.toString()}</p>
    <p>{a} + {b} is {a + b}</p>
    <h1>Osvaldo Canhama</h1>
    <p>Greetings</p>
    <Hello name='Donilson Canhama' age={1 + 0}/>
    {/* <Hello name={name} age={age}/> */}
    <ListNomeFamilia/>
  </div>
)
}
export default App
