import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const emailRef = useRef(null);
  const navigate = useNavigate();

  function checkEmail(email) {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
      alert("Please provide a valid email address");
      return false;
    }

    return true;
  }
  function startQuiz(event) {
    event.preventDefault();
    const user_email = emailRef.current.value;

    if (checkEmail(user_email)) {
      localStorage.setItem("user_email", user_email);
      navigate("/quiz");
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <center>
        <h1>
          <b>Skills speak louder than words</b>
        </h1>
        <div style={{ width: "40%" }}>
          <p style={{ marginTop: "20px" }}>
            Unlock your potential and test your knowledge today! Take the quiz
            now and discover just how much you know. Challenge yourself, learn
            something new, and let your curiosity soar. Don't wait any longer –
            it's time to take the quiz and see where your expertise lies!
          </p>
          <hr />
          <form style={{ marginTop: "5px" }}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                ref={emailRef} // Assign the ref to the email input
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={startQuiz}
            >
              Submit
            </button>
          </form>
        </div>
      </center>
    </div>
  );
}

export default HomeComponent;
