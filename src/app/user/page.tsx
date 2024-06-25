'use client'
import React, { useState, useEffect } from "react";
import instance from "@/lib/axios";

type userEmail = {
  id: number;
  email: string;
  is_active: boolean;
};

function Page() {
  const [user, setUser] = useState<userEmail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await instance.get<userEmail[]>("/users");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const hideData = () => {
    setUser([]);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await instance.post("/users", { email, password });
      setEmail("");
      setPassword("");
      fetchData();
    } catch (error) {
      console.error("Error posting data:", error);
      setError("Error posting data");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await instance.delete(`/users/del/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("Error deleting data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div>Page</div>
      <button onClick={fetchData}>Show</button>
      <button onClick={hideData}>Hide</button>
      {loading && <p>Loading...</p>}
      {error && <div>{error}</div>}
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            <span>Email : {item.email}</span>
            <span>Active : {item.is_active ? "Yes" : "No"}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <label>Select User Email:</label>
        <select
          value={selectedUserId ?? ""}
          onChange={(e) => setSelectedUserId(Number(e.target.value))}
        >
          <option value="" disabled>Select a user email</option>
          {user.map((item) => (
            <option key={item.id} value={item.id}>
              {item.email}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => {
          if (selectedUserId !== null) {
            deleteUser(selectedUserId);
          }
        }}
      >
        Delete
      </button>
    </main>
  );
}

export default Page;
