import React from 'react';
import './homestyle/styles.css'
function Home() {
return (

    <center>
          <div class="container box app-container border bg-dark p-4">
           <br /> <br /><h2 className="onetwo">LOG IN</h2>
          <p className="onetwo">Fill data below to log in</p><br/>
          <form className="testy" id="testForm" onsubmit="alertUserInput(document)">
          <center><label className="onetwo" for="emaill">Email:</label><br />
            <input class="fun" type="text" id="email" name="email_txt" value="" /><br /><br />
            <label className="onetwo" for="passwordd">Password:</label><br />
            <input class="fun" type="text" id="password" name="password_txt" value="" /> <br /><br />
            <p className="onetwo">Validation: 2 + 2 % 2 =
              <select class="aiaiai" id="answer" name="answer">
                <option value="answ1"> </option>
                <option value="answ2">3</option>
                <option value="answ3">2</option>
                <option value="answ4">1</option>
              </select> <br />
            </p>
            <input className="fun1" type="checkbox" checked="checked" id="rem" name="rem" value="Yes" />
            <label className="onetwo" for="rem"> Remember me</label><br />
            <div className="funny" id="container">
              <button class="example onetwo  moveup">Log in</button>
            </div>
            <a href="#" className="one23" class="fa fa-facebook"></a>
            <a href="#" className="one23" class="fa fa-twitter"></a>
            <a href="#"  className="one23" class="fa fa-linkedin"></a>
            <a href="#" className="one23" class="fa fa-instagram"></a></center>
            </form></div></center>
    
);
}

export default Home;