import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import superstoreimg from "./superstore.png";
import Categories from "./Categories";

export const App = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:4000/categories/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar petición POST con los campos "name" y "description"
    fetch("http://localhost:4000/categories/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setName("");
    setDescription("");

    fetchCategories();
  };

  return (
    <div className="App">
      <img src={superstoreimg} alt="Super Store" className="imagen" />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
        <Button
          className="mt-3 mb-3"
          onClick={() => setShowCategories(!showCategories)}
          variant="outline-primary"
        >
          {showCategories ? "Hide Categories" : "Show Categories"}
        </Button>
      </Form>
      {showCategories && <Categories categories={categories} />}
    </div>
  );
};
