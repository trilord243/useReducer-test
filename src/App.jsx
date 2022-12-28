import "./App.css";
import { ExpenseContextProvider } from "./Global";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <ExpenseContextProvider>
      <Container className="text-center">
        <Header />
        <Form />
        <List />
      </Container>
    </ExpenseContextProvider>
  );
}

export default App;
