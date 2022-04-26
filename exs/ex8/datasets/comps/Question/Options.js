import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../data/que_content';

const OpsCont = styled.div``;

const OpsTitle = styled.h3``;

const OpsButton = styled.button``;

export default function Options({
  q="What's your fav fruit?",
  arr=[]
}){

  const r = useRouter();
  
  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <OpsCont>
    <OpsTitle>{q}</OpsTitle>
    {/* <OpsButton>Banana</OpsButton>
    <OpsButton>Orange</OpsButton> */}
    {
      arr.map((o,i)=><OpsButton onClick={
        ()=>ChangeAnswers(o, qnum)
      }>{o}</OpsButton>)
    }
  </OpsCont>
}