import { Form } from "./components/Form";
import { List } from "./components/List";

const cities = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Санкт-Петербург' },
  { id: 3, name: 'Казань' },
  { id: 4, name: 'Ростов-на-Дону' }
]

function App() {
  return (<>
    <h1>lesson_2</h1>
    <Form></Form>
    <List cities={cities}></List>
  </>
  );
}

export default App;
