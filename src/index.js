import './static/styles/global.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import { store } from './redux-toolkit/store';
import { Provider } from 'react-redux';

const root = document.getElementById("root");
const container = createRoot(root);
container.render(
<Provider store={store}>
    <App />
</Provider>
);