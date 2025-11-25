import React from "react";

export default function Home(){
  return (
    <div className="card">
      <h2 style={{marginTop:0}}>Road Transparency Problem</h2>
      <p className="small">This portal allows public users to report road problems (potholes, damage, construction hazards). Use the sidebar to login, submit complaints, give feedback or view public dashboard.</p>
      <hr style={{margin:"14px 0",border:"none",height:1,background:"rgba(0,0,0,0.06)"}} />
      <h4>How to use</h4>
      <ol className="small">
        <li>Create an account via Signup (Name, Address, Email/Phone, Aadhaar).</li>
        <li>Login using Email/Phone and Password.</li>
        <li>Go to Complaint Form and submit road photo + details.</li>
        <li>View submitted complaints in Public Dashboard.</li>
      </ol>
      
    </div>
  );
}
