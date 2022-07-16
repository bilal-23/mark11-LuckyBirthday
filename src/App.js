import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const dateRef = useRef();
  const luckyNumberRef = useRef();
  const [isLuckyNumber, setIsLuckyNumber] = useState();
  const [error, setError] = useState();

  function formSubmitHandler(e) {
    e.preventDefault();
    let date = dateRef.current.value.trim();
    const luckyNumber = +luckyNumberRef.current.value.trim();
    if (date === "" || luckyNumber === "") {
      return;
    }
    date = date.replaceAll("-", "");
    const dateArray = date.split("");
    const dateSum = dateArray.reduce((previousValue, currentValue) => {
      let prev = +previousValue;
      let cur = +currentValue;
      return prev + cur;
    });
    console.log(dateSum % luckyNumber);
    if (dateSum % luckyNumber === 0) {
      setIsLuckyNumber(true);
      setError(false);
    } else {
      setIsLuckyNumber(false);
      setError(true);
    }
  }
  return (
    <>
      <div className="App">
        <h1 className="heading">
          Is Your Birthday Lucky ?{" "}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </h1>
        <form onSubmit={formSubmitHandler} className="container">
          <div className="input-group">
            <label htmlFor="date">Enter your DOB :</label>
            <input type="date" id="date" ref={dateRef} />
          </div>
          <div className="input-group">
            <label htmlFor="number">Your Lucky Number :</label>
            <input
              type="number"
              id="number"
              placeholder="7"
              ref={luckyNumberRef}
            />
          </div>
          <div className="btn-container">
            <button className="button">Check</button>
          </div>
        </form>
        <div className="output">
          {!error && isLuckyNumber && (
            <p className="normal-text success">
              Your Birthday Is Lucky
              <span role="img" aria-label="celebrate">
                🥳
              </span>
            </p>
          )}
          {error && !isLuckyNumber && (
            <p className="normal-text error">
              Your Birthday Is Not Lucky
              <span role="img" aria-label="celebrate">
                😢
              </span>
            </p>
          )}
        </div>
      </div>
      <footer>Developed by Bilal</footer>
    </>
  );
}
