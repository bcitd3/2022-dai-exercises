import styled from 'styled-components';
import {useRouter} from 'next/router';

const DispCont = styled.div`
display:flex;
`;

const ImgCont = styled.div`
width:100px;
height:100px;
border: #DDD solid 5px;
border-radius: 10px;
margin:10px;
`;

const DispImg = styled.img`
object-fit:cover;
width:100%;
height:100%;
`;

export default function Display({
  arr=[]
}){

  const r = useRouter();
  return <DispCont>
    {
      arr.map((o,i)=><ImgCont onClick={
        ()=>r.replace({
          pathname:"/categories/results",
          query:{
            item:o.route
          }
        })
      }>
      <DispImg src={o.img } />
      </ImgCont>)
    }
  </DispCont>
}