import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
  {id:1, charge:"rent",amount:1600}
]

function App() {
  return <>
  <Alert></Alert>
  <ExpenseForm></ExpenseForm>
  <ExpenseList></ExpenseList>
  </>
}

export default App;
