import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Deep Linking Test Page</h1>
      <p>
        <a href="https://yourapp.vercel.app/home">Open Home Screen in App</a>
      </p>
      <p>
        <a href="https://yourapp.vercel.app/details/1">Open Details Screen with ID 1</a>
      </p>
    </div>
  )
}

export default App
