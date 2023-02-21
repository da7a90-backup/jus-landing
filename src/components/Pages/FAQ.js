import React, { useState } from "react";
import "./faq.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const FAQ = () => {
  const [click, setClick] = useState(false);

  const [click1, setClick1] = useState(false);

  const [click2, setClick2] = useState(false);

  const handleClick = () => {
    if(!click1&&!click2){
       setClick(!click)
      }
      else{
       setClick(!click);
       setClick1(false);
       setClick2(false);
      } 
      ;}

  const handleClick1 = () => {
    if(!click&&!click2){
       setClick1(!click1)
      }
      else{
       setClick1(!click1);
       setClick(false);
       setClick2(false);
      } 
      ;};

  const handleClick2 = () => {
    if(!click1&&!click){
       setClick2(!click2)
      }
      else{
       setClick2(!click2);
       setClick1(false);
       setClick(false);
      } 
      ;};

  return (
    <div className="faq">
    <img className="bgIcon" alt="" src="../bg@2x.png" />
    <img className="bg1Icon" alt="" src="../bg@2x.png" />
  <div className="pg1">
    <div className="titleAndText">
    <div className="eazyPeazySqueezy">
      <p className="fundWith">Frequently Asked questions</p>
      <br/>
</div>

</div>
<div class="container">

<div className={click ? "faq-card active" : "faq-card"}>
  <h2>What is Jus?</h2>
  <div class="toggle-btn" onClick={handleClick}>
    <FontAwesomeIcon className="drop-btn" icon={faCaretDown}></FontAwesomeIcon>
    <FontAwesomeIcon className="cross-btn" icon={faCircleXmark}></FontAwesomeIcon>
  </div>
  <p class="ans">Jus is a Web3 savings app that has multiple fiat onramps like mobile money.</p>
</div>
<div className={click1 ? "faq-card active" : "faq-card"}>
  <h2>How can you promise these returns?</h2>
  <div class="toggle-btn" onClick={handleClick1}>
  <FontAwesomeIcon className="drop-btn" icon={faCaretDown}></FontAwesomeIcon>
    <FontAwesomeIcon className="cross-btn" icon={faCircleXmark}></FontAwesomeIcon>
  </div>
  <p class="ans">It's all verifiable and transparent on the blockchain, we have conservative Stablecoin yield optimization strategies through the Liqwid protocol.</p>
</div>
<div className={click2 ? "faq-card active" : "faq-card"}>
  <h2>How can I be sure my funds aren't going to be lost?</h2>
  <div class="toggle-btn" onClick={handleClick2}>

  <FontAwesomeIcon className="drop-btn" icon={faCaretDown}></FontAwesomeIcon>
    <FontAwesomeIcon className="cross-btn" icon={faCircleXmark}></FontAwesomeIcon>
  </div>
  <p class="ans">We are a CeDefi platform, we bring the best of both worlds. Crypto funds are always safe and verifiable on the blockchain and we have a licensed custodian for your fiat withdrawals.</p>
</div>


</div>
</div>

</div>
  );
};
