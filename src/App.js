import { useRef, useState } from "react";
import Footer from "./components/Footer";
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
    if (!date) {
      setError("Date and lucky number are required to calculate, please try again");
      return;
    }
    if (!luckyNumber) {
      setError("Invalid Lucky Number");
      return;
    }
    if (date === "" || luckyNumber === "") {
      setError("Invalid input")
      return;
    }
    date = date.replaceAll("-", "");
    const dateArray = date.split("");
    const dateSum = dateArray.reduce((previousValue, currentValue) => {
      let prev = +previousValue;
      let cur = +currentValue;
      return prev + cur;
    });
    if (dateSum % luckyNumber === 0) {
      setIsLuckyNumber(true);
      setError(false);
    } else {
      setIsLuckyNumber(false);
      setError(`Your birthday is not lucky  😢`);
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
              placeholder="Enter your lucky number"
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
              {error}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
