import React, { useState } from "react";

export default function Signup({ switchToLogin }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("rt_users") || "[]");
    if (users.find(u => u.email === emailOrPhone || u.phone === emailOrPhone || u.aadhaar === aadhaar)) {
      alert("User already exists (email/phone/aadhaar). Please login.");
      switchToLogin();
      return;
    }
    const payload = {
      name,
      address,
      password,
      email: /\S+@\S+\.\S+/.test(emailOrPhone) ? emailOrPhone : undefined,
      phone: /^\d{10}$/.test(emailOrPhone) ? emailOrPhone : undefined,
      aadhaar
    };
    users.push(payload);
    localStorage.setItem("rt_users", JSON.stringify(users));
    alert("Account created. Please login.");
    switchToLogin();
  };

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Signup</h3>
      <form className="form" onSubmit={handleSignup}>
        <input className="input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="input" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} required />
        <input className="input" placeholder="Email or Mobile number" value={emailOrPhone} onChange={e=>setEmailOrPhone(e.target.value)} required />
        <input className="input" placeholder="Aadhaar number" value={aadhaar} onChange={e=>setAadhaar(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <div style={{display:"flex",gap:8}}>
          <button className="btn" type="submit">Create Account</button>
          <button type="button" className="btn secondary" onClick={switchToLogin}>Back to Login</button>
        </div>
      </form>
    </div>
  );
}
