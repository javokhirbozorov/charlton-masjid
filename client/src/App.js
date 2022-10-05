import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Events, Login, Registration } from './pages';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Events />  */}
        <Login />
        {/* <Registration /> */}
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
