import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddTodo/>
    </div>
    </Provider>
  );
}

export default App;
