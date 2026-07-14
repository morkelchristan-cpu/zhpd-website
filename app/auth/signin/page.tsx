'use client';
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function SignIn() {
  return (
    <main style={{ 
      height: '100vh', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', background: '#020617', color: '#fff' 
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
        style={{ textAlign: 'center', padding: '60px', maxWidth: '400px' }}
      >
        <img src="/logo.png" alt="LSPD Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>ACCESS GRANTED</h1>
        <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Authenticate via Discord to access the LSPD Portal.</p>
        
        <button 
          onClick={() => signIn('discord', { callbackUrl: '/' })}
          style={{ 
            width: '100%', padding: '16px', background: '#5865F2', 
            border: 'none', borderRadius: '8px', cursor: 'pointer', 
            fontSize: '1rem', fontWeight: 'bold' 
          }}
        >
          LOGIN WITH DISCORD
        </button>
      </motion.div>
    </main>
  );
}