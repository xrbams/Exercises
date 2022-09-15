
import Country from './components/country';
import "./components/GenreList.css"

// ✅ initialize to empty Array if Undefined

const details = [
  {
    Name: "Country",
    Capital: "Capital",
  },
  {
    Name: "Finland",
    Capital: "Helsinki",
  },
  {
    Name: "Tanzania",
    Capital: "Dodoma",
  },
  {
    Name: "Angola",
    Capital: "Luanda",
  },
  {
    Name: "Kenya",
    Capital: "Nairobi",
  },
  {
    Name: "Nigeria",
    Capital: "Lagos",
  },
  {
    Name: "Egypt",
    Capital: "Cairo",
  }
];


function App() {
  return (
    <div className='genrelist'>
      <h1>Countries with Their Capitals</h1>

      <Country area={details[0]}/>
      <Country area={details[1]}/>
      <Country area={details[2]}/>
      <Country area={details[3]}/>
      <Country area={details[4]}/>
      <Country area={details[5]}/>

    </div>
  );
}

export default App;
