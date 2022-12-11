import { createRoot} from 'react-dom/client';
// Import statement to indicating bundle is needed 
import "./index.scss";
// Main component (will eventually use all others)
const MoviescouchApplication = () => {
    return (
        <div className="movies-couch">
            <div> Good Morning</div>
        </div>
    );
};
// Find the root of your app
const container  = document.querySelector("#root");
const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(<MoviescouchApplication/>);