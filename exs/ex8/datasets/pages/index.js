import styled, {keyframes} from 'styled-components'
import Card from '../comps/Card';
import { fadeIn, fadeOut } from '../data/animation';
import shows from '../data/disney_shows.json';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

const HomeCont = styled.div`
background:#AAD;
// animation: ${fadeIn} 5s;
`
const HomeH1 = styled.h1`
// animation:${fadeOut} 10s;
`
const ShowCont = styled.div`
background:${props=>props.bg || "#DAA"};
animation:${props=>props.fade} 5s;
animation-delay:${props=>props.delay};
animation-fill-mode:both;
position:relative;
padding:10px;
`


export default function Home() {

  const [words, setWords] = useState("Welcome to my app!");
  const [f, setF] = useState(fadeIn);

  const [sel, setSel] = useState(0);

  const r = useRouter();
  var {qnum} = r.query;

  if (qnum === undefined){
    qnum = 0;
  } 

  //make a function to preform 3 tasks
  const NextShow = () => {
    //fade out
    setF(fadeOut);

    //change qnum to router
    setTimeout(()=>{
      r.push({
        pathname:"/",
        query:{
          qnum:Number(qnum) + 5
        }
    })
    
  }, 3000)
  }

  //whenever the page detects a change in the variable qnum, perform a function
  useEffect(()=>{
    setF(fadeIn);
  }, [qnum])

  qnum = Number(qnum);
  return (
    <HomeCont>
      {/* show some cards here */}
      <HomeH1>{words}</HomeH1>
      <button onClick={
        ()=>setWords("Hi, this is change")
      }>Change Words</button>

      <ShowCont
      bg={(sel === qnum) ? "#ADA" : "#DAA"}
      onClick={
        ()=>setSel(qnum)
      }
      fade={f}>
        {shows[qnum].title} -
        {shows[qnum].duration}
      </ShowCont>
      
      <ShowCont
      bg={(sel === qnum+1) ? "#ADA" : "#DAA"}
      delay="1s"
      onClick={
        ()=>setSel(qnum+1)
      }
      fade={f}>
        {shows[qnum+1].title} -
        {shows[qnum+1].duration}
      </ShowCont>
      
      <ShowCont
      bg={(sel === qnum+2) ? "#ADA" : "#DAA"}
      delay="2s"
      onClick={
        ()=>setSel(qnum+2)
      }
      fade={f}>
        {shows[qnum+2].title} -
        {shows[qnum+2].duration}
      </ShowCont>
      
      <ShowCont 
      bg={(sel === qnum+3) ? "#ADA" : "#DAA"}
      delay="3s"
      onClick={
        ()=>setSel(qnum+3)
      }
      fade={f}>
        {shows[qnum+3].title} -
        {shows[qnum+3].duration}
      </ShowCont>
      
      <ShowCont 
      bg={(sel === qnum+4) ? "#ADA" : "#DAA"}
      delay="4s"
      onClick={
        ()=>setSel(qnum+4)
      }
      fade={f}>
        {shows[qnum+4].title} -
        {shows[qnum+4].duration}
      </ShowCont>

      <p>
        <button onClick={
          ()=>NextShow()
        }>
          Next Show
        </button>

        <button onClick={
          ()=>setF(fadeOut)
        }>Fades Out</button>
      </p>
    </HomeCont>
  )
}
