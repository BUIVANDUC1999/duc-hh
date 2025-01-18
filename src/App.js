import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo"> <i class="fa fa-shield" aria-hidden="true"></i>FPT Aptech</div>
        
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Booking</a>
          <a href="#">Locations</a>
        </div>
        <div className="auth-buttons">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>

      <div className="banner">
        <h1>Frontend Web Development with React - Exam Paper</h1>
        <p>Duration: 60 minutes | Marks: 15</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtXEFLx_n6l9uQGgizRV4uaKQS716gx6x1g&s"/>
      </div>

      <div className="section-title">
        <h2>Who Should Learn Programming in FPT Aptech?</h2>
      </div>
      <div className="categories">
        <div className="category">
          <img src="https://cdnblog.e2.com.vn/wp-content/uploads/2021/05/news_pisa_1.jpg" alt="High School Student" />
          <h3>High School Student</h3>
          <p>
            You want to pursue information technology, want to study in a
            professional programming training environment...
          </p>
        </div>
        <div className="category">
          <img src="https://www.oxfordlearning.com/wp-content/uploads/2018/07/how-to-prepare-for-high-school-min.jpeg" alt="Student" />
          <h3>Student</h3>
          <p>
            You want to study in a professional programming training
            environment, with a systematic program and guaranteed output.
          </p>
        </div>
        <div className="category">
          <img src="https://scalefactory.com/blog/2023/06/28/defining-ways-of-working-how-important-is-it/img/a8a626ffdc14.jpeg" alt="Working" />
          <h3>Working</h3>
          <p>
            You want to pursue information technology to enhance your career in
            a professional environment.
          </p>
        </div>
      </div>

      <div className="course-section">
        <h2>What is the Course Program?</h2>
        <div className="technologies">
          <img src="https://th.bing.com/th/id/R.f78f394e2f8cd4a6f34fd2b865284c74?rik=V4S4qX3QA%2f5fJA&pid=ImgRaw&r=0" alt="React JS" />
          <img src="https://pngimg.com/uploads/php/php_PNG8.png" alt="PHP" />
          <img src="https://th.bing.com/th/id/R.f50dbe2e097584fb791abe49fc20e61c?rik=TnXee4MqpUZ6DA&pid=ImgRaw&r=0" alt=".NET Core" />
        </div>
        <p>
          With a program design that includes 4 semesters with many important
          technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot,
          students are prepared to step into the programming world confidently.
        </p>
      </div>
    </div>
  );
};

export default App;
