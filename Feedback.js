import React, { useState } from "react";

export default function Feedback(){
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!msg.trim()) return alert("Write feedback");
    let all = JSON.parse(localStorage.getItem("rt_feedback") || "[]");
    all.unshift({ msg, createdAt: new Date().toISOString() });
    localStorage.setItem("rt_feedback", JSON.stringify(all));
    setSent(true); setMsg("");
  };

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Feedback</h3>
      {!sent ? (
        <form className="form" onSubmit={submit}>
          <textarea className="textarea" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Share your feedback..." />
          <div style={{display:"flex",gap:8}}>
            <button className="btn" type="submit">Send Feedback</button>
            <button type="button" className="btn secondary" onClick={()=>setMsg("")}>Clear</button>
          </div>
        </form>
      ) : (
        <div className="small">Thanks! Your feedback saved.</div>
      )}
    </div>
  );
}
