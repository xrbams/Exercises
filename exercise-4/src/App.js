
import Movies from './components/movies'
import Genre from './components/genre'

const thrillers = [
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: "1960",
  },
  {
    title: "Silence of the Lambs",
    director: "Jonathan Demme",
    year: "1991",
  },
  {
    title: "Eyes Wide Shut",
    director: "Stanley Kubrick",
    year: "1999",
  },
];

const scifi = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];

const Anime = [
  {
    title: "One Piece",
    director: "Eichiro Oda",
    year: "1998",
  },
  {
    title: "Naruto Shippuden",
    director: "Kishimoto",
    year: "2011",
  },
  {
    title: "Dragon Ball Super",
    director: "Akira Toriyama",
    year: "2012",
  },
  {
    title: "Bleach",
    director: "Tite Kubo",
    year:"1998",
  }


];



function App( ) {
  return (
    <div>

      <Genre title="Thriller" Movies={thrillers}/>
      <Genre title="Sci-fi" Movies={scifi}/>
      <Genre title="Anime" Movies={Anime}/>

    </div>
  );
}

export default App;
