'use client';
import { useState } from 'react';

export default function AiSection() {
  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState<{user: string, ai: string}[]>([]);

  const handleSend = () => {
    // In a real app, hit your AI API route here
    setChat([...chat, { user: msg, ai: "Tactical analysis complete. How can I assist further?" }]);
    setMsg('');
  };

  return (
    <div className="glass-effect" style={{ padding: '40px', width: '100%' }}>
      <div style={{ height: '300px', overflowY: 'auto', marginBottom: '20px' }}>
        {chat.map((item, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <p><strong>You:</strong> {item.user}</p>
            <p style={{ color: '#2563eb' }}><strong>AI:</strong> {item.ai}</p>
          </div>
        ))}
      </div>
      <input 
        value={msg} onChange={(e) => setMsg(e.target.value)}
        placeholder="Enter command query..."
        style={{ width: '80%', padding: '10px', background: 'transparent', border: '1px solid #334', color: '#fff' }}
      />
      <button onClick={handleSend} style={{ marginLeft: '10px', padding: '10px 20px' }}>SEND</button>
    </div>
  );
}