import List from './List'

function App() {
  const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2,name: "orange", calories: 45},
                    {id: 3,name: "banana", calories: 105},
                    {id: 4,name: "pineapple", calories: 159}];

  const vegetables = [{id: 5, name: "Potatoes", calories: 110},
                    {id: 6,name: "Celery", calories: 15},
                    {id: 7,name: "Carrots", calories: 25},
                    {id: 8,name: "corn", calories: 63}];
  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/>:null}
    </>
  );
}

export default App
