/* eslint-disable-next-line no-unused-vars */
import logo from "./logo.svg";
import { gql, useQuery } from "@apollo/client";
import "./App.css";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;

  console.log(data);
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>ToDo ID</th>
            <th>ToDo Title</th>
            <th>ToDo Username</th>
            {/* <th>ToDo Status</th> */}
          </tr>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
              {/* <td>{todo.completed}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div className="App">{JSON.stringify(data)}</div>
  );
}

export default App;
