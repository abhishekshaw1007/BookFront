import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

// added git again...

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route
            exact
            path="https://abhishekshaw1007.github.io/BookFront/"
            component={HomeScreen}
          />
          <Route
            path="https://abhishekshaw1007.github.io/BookFront/product/:id"
            component={ProductScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
