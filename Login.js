import React, { useState } from "react";

export default function Login({ onLogin, switchToSignup }) {
  const [id, setId] = useState(""); // email or phone
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("rt_users") || "[]");
    const found = users.find(u => (u.email === id || u.phone === id) && u.password === password);
    if (found) {
      onLogin({ name: found.name, email: found.email || found.phone });
    } else {
      alert("Invalid credentials. If new, please signup.");
    }
  };

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Login</h3>
      <form className="form" onSubmit={handleLogin}>
        <input className="input" placeholder="Email or Mobile number" value={id} onChange={e=>setId(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <div style={{display:"flex",gap:8}}>
          <button className="btn" type="submit">Login</button>
          <button type="button" className="btn secondary" onClick={switchToSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
}
