import AddPeople from "./components/addPeople";
import FormList from "./components/FormList";

function App() {
  const AddCelebs = async (ppl)=> {
    //add people to firebase
    console.log(ppl);
    const response = await fetch(
      "https://kanjatips-3cd9b-default-rtdb.firebaseio.com/people.json",
      {
        method: "POST",
        body: JSON.stringify(ppl),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }


  return (
    <>
      <AddPeople addingPeople={AddCelebs} />
      <FormList />
    </>
  );
}

export default App;
