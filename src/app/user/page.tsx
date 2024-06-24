"use client";
import { useState } from "react";
import instance from "@/lib/axios";
import Item from "antd/es/list/Item";

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
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Page;
