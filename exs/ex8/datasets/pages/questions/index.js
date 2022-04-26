import { GetName, qs } from "../../data/que_content"
import Options from "../../comps/Question/Options";
import { useRouter } from "next/router";

export default function Questions(){
  
  const nm = GetName();
  const r = useRouter();
  
  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <div>
    <h3>Hi {nm}</h3>
    <hr />
    Answer some questions
    
    <Options
    q={qs[qnum].title}
    arr={qs[qnum].ops}
    />

    {
      Number(qnum) >= qs.length-1 &&
      <button onClick={
        ()=>r.push("/questions/results")
      }>Finish!</button>
    }

    {
    Number(qnum) < qs.length-1 &&
    <button onClick={
      ()=>r.push({
        pathname:"/questions",
        query:{
          qnum:Number(qnum)+1 > qs.length-1 ? qs.length-1 : Number(qnum)+1
        }
      })
    }>Next</button>
  }
  </div>
}