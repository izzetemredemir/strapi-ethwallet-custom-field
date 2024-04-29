import React, { useState } from "react";
import pluginId from "../../pluginId";
import axios from "axios";

const HomePage = () => {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckWallet = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.etherscan.io/api?module=account&action=balance&address=${wallet}&tag=latest&apikey=YOUR_API_KEY`
      );
      setBalance(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: 20,
        backgroundColor: "#f4f4f4",
        borderRadius: 10,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#333" }}>{pluginId}'s HomePage</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Cüzdanınızı Kontrol Edin
      </p>
      <input
        type="text"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        placeholder="Enter Ethereum Wallet Address"
        style={{
          padding: 10,
          margin: "10px 0",
          width: "300px",
          borderRadius: 5,
          border: "1px solid #ddd",
        }}
      />
      <button
        onClick={handleCheckWallet}
        disabled={loading}
        style={{
          padding: "10px 15px",
          backgroundColor: "#06c",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        {loading ? "Checking..." : "Check Wallet"}
      </button>
      {balance && (
        <p style={{ marginTop: 20, color: "#06c" }}>
          Wallet Balance: {balance}
        </p>
      )}
    </div>
  );
};

export default HomePage;
