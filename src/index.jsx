import { createRoot} from "react-dom/client";
// import Main-component
import { MainView } from "./components/main-view/main-view"; //"./components/main-view/main-view" -> correct; test-"./components/tests/test.main-view"  
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
// importing Container
import Container from "react-bootstrap/Container"
// Importing statement to indicating bundle is needed 
import "./index.scss";
// Main component rendered
const MoviesCouchApplication = () => {
    return (
    <Container style={{border: "1px solid red"}}>
        <MainView className="movies-couch"/>
    </Container>
    );
};
// Find the root of your app
const container  = document.querySelector("#root");
const root = createRoot(container);
// Tells React to render your app in the root DOM element
root.render(<MoviesCouchApplication/>);