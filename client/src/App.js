import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Events } from './pages';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Events /> 
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
