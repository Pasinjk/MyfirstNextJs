"use client";
import axios from "axios";
import { useState } from "react";

type Item = {
  id: number;
  email: string;
};
function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const GetShow = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "http://127.0.0.1:8000/users/",
        params: {
          skip: 0,
          limit: 100,
        },
      });
      setItems(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    }
  };

  return (
    <main>
      <div>Page</div>
      <button onClick={GetShow}>show</button>
      {error && <div>{error}</div>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
