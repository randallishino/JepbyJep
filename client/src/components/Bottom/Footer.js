import React from "react";
import Wrapper from "../Wrapper";
import Footer from "react-materialize";

const Bottom = () => {
  return(

    <Wrapper>
<Footer copyrights="&copy 2018 JEPbyJEP"
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
</Wrapper>
  )
};

export default Bottom;