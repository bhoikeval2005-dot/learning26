import axios from 'axios';
import React, { useState } from 'react';
import '../input/Table.css'

export const ApiDemo1 = () => {
  const [theme, setTheme] = useState("brown"); 
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://node5.onrender.com/user/user/");
      console.log(response.data);

      setMessage(response.data.message || "");
      setUsers(response.data.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setMessage("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: "20px" }}>
      <h2>ApiDemo1</h2>

      <button onClick={getUsers} style={{ margin: "5px" }}>GET Users</button>
      <h3>Message: {message}</h3>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setTheme("brown")} style={{ margin: "5px" }}>Brown Theme</button>
        <button onClick={() => setTheme("dark")} style={{ margin: "5px" }}>Dark Theme</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-container">
          <table  className={theme === "brown" ? "brown-table" : "dark-table"} align='center'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, limit).map((user) => (
                <tr key={user.id || user.email}> {/* Use unique key */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
