import { createRoot} from "react-dom/client";
// import Main-component
import {MainView} from "../src/components/main-view/main-view" ;  //"../src/components/main-view/main-view";  or './tests/test.main-view'
// Import statement to indicating bundle is needed 
import "./index.scss";
// Main component rendered
const MoviesCouchApplication = () => {
    return <MainView />;
};
// Find the root of your app
const container  = document.querySelector("#root");
const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(<MoviesCouchApplication/>);