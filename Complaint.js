import React, { useState } from "react";

export default function Complaint({ user }) {
  const [photoData, setPhotoData] = useState(null);
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState(user?.address || "");
  const [name, setName] = useState(user?.name || "");
  const [mobile, setMobile] = useState(user?.email || "");

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoData(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!photoData) return alert("Please upload a photo.");
    if (!desc.trim() || !address.trim() || !name.trim() || !mobile.trim()) return alert("Please fill all fields.");
    let complaints = JSON.parse(localStorage.getItem("rt_complaints") || "[]");
    const payload = { photo: photoData, desc, address, name, mobile, createdAt: new Date().toISOString() };
    complaints.unshift(payload);
    localStorage.setItem("rt_complaints", JSON.stringify(complaints));
    alert("Complaint submitted. Thank you!");
    // clear
    setPhotoData(null); setDesc(""); setAddress(""); setName(""); setMobile("");
  };

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>File a Road Complaint</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="small">Upload road photo</label>
        <input className="input" type="file" accept="image/*" onChange={handlePhoto} />
        {photoData && <img src={photoData} alt="preview" className="photoPreview" />}
        <input className="input" placeholder="Road / Address" value={address} onChange={e=>setAddress(e.target.value)} required />
        <textarea className="textarea" placeholder="Describe the issue" value={desc} onChange={e=>setDesc(e.target.value)} required />
        <div className="row">
          <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
          <input className="input" placeholder="Mobile number" value={mobile} onChange={e=>setMobile(e.target.value)} required />
        </div>
        <div style={{display:"flex",gap:8,marginTop:8}}>
          <button className="btn" type="submit">Submit Complaint</button>
          <button type="button" className="btn secondary" onClick={()=>{ setPhotoData(null); setDesc(""); setAddress(""); setName(""); setMobile(""); }}>Reset</button>
        </div>
      </form>
    </div>
  );
}
