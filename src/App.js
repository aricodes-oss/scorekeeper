import { store } from 'store';
import { Provider } from 'react-redux';
import ScoreDisplay from 'ScoreDisplay';

const App = () => (
  <Provider store={store}>
    <ScoreDisplay />
  </Provider>
);

export default App;
