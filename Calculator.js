import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (result !== null) {
       
        setInput(value);
        setResult(null);  
      } else {
        setInput(input + value);
      }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div style={styles.calculator}>
      <h1>Calculator</h1>
      <div style={styles.display}>
        <div>{input || "0"}</div>
        <div>{result !== null ? `= ${result}` : ""}</div>
      </div>
      <div style={styles.buttons}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((symbol) => (
          <button
            key={symbol}
            onClick={() => (symbol === "=" ? handleCalculate() : handleButtonClick(symbol))}
            style={styles.button}
          >
            {symbol}
          </button>
        ))}
        <button onClick={handleClear}
        
        onMouseEnter={(e) => e.target.style.background = "blue"} 
        onMouseLeave={(e) => e.target.style.background = "black"} 
        
      
        
        
        style={styles.clearButton}>
          Clear
        </button>
      </div>
    </div>
  );
};

const styles = {
  calculator: { width: 200, margin: "0 auto", textAlign: "center" 



    ,marginTop: "50px",
    border: "2px solid #000",  
    borderRadius: "10px",      
    padding: "15px",           
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
  },
  display: { fontSize: "20px", minHeight: "40px", marginBottom: "10px" ,border: "2px solid #ccc",borderRadius: "5px"},
  buttons: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" },
  button: { fontSize: "20px", padding: "10px" },
  clearButton: { gridColumn: "span 4", fontSize: "20px", padding: "10px", background:"black",color: "white" },
};


export default Calculator;
