import React from "react";
import {Footer} from "react-materialize";
import {Parallax} from "react-materialize";
import img from "../../images/img2.JPG";
import Wrapper from "../../components/Wrapper/Wrapper"
// import "./Home.css";
import Login from '../../components/login/login'

const Home = () => 
<Wrapper>
< Login />
<div>
  <Parallax  imageSrc={img}/>
  <div className="section white">
    <div className="row container">
      <h2 className="header">JEPbyJEP</h2>
    </div>
  </div>
<Footer copyrights="&copy; 2018 JEPbyJEP"
links={
  <ul>
    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
    <li><a className="grey-text text-lighten-3" href="#!">Clothes</a></li>
    <li><a className="grey-text text-lighten-3" href="#!">Films</a></li>
    <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
  </ul>
}
className='example'
>
  <h5 className="white-text">Developed by</h5>
  
  <p className="grey-text text-lighten-4">Nick Weber, Randall Ishino, David Kim, Mckenna.</p>
</Footer>;
</div>
</ Wrapper>
export default Home;