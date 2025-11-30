const ListNomeFamilia = () =>{
  
  const listName = ['Osvaldo','Conceição','Domingos']

  return (
    <div>
      <ul>
        {listName.map((nome) => <li>{nome}</li>)}
      </ul>
      <li></li>
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  // console.log('Hello from componente')
  const now = new Date()
  const a = 19
  const b = 21
  console.log(now, a + b)

  return (
  <div>
    <p>Hello world, it´s {now.toString()}</p>
    <p>{a} + {b} is {a + b}</p>
    <h1>Osvaldo Canhama</h1>
    <p>Greetings</p>
    <Hello name='Canhama'/>
    <ListNomeFamilia/>
  </div>
)
}

export default App
