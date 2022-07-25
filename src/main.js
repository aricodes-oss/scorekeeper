import { createRoot } from 'react-dom/client';
import App from 'App';

import 'normalize.css';
import 'styles/main.scss';

const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App />);
