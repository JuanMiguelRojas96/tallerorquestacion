import { Table } from "react-bootstrap";


const Categories = ({ categories }) => {
  
  
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="text-center">No categories available</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default Categories

