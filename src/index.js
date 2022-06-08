import './static/styles/global.css';
import {createRoot} from 'react-dom/client';
import App from './App';

const root = document.getElementById("root");
const container = createRoot(root);
container.render(<App />);