'use client';

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/test`, {
      withCredentials: true
    })
    .then(res => setMessage(res.data.message))
    .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Next.js + Laravel 12</h1>
      <p>{message}</p>
    </div>
  );
}
