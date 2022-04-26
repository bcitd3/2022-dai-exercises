/* eslint-disable react/no-unescaped-entities */
//import {useRouter}
import {useRouter} from 'next/router';
import Display from '../../comps/Display';
import { header, cat1, cat2, cat3, cat1Imgs, cat2Imgs, cat3Imgs } from '../../data/cate_content';


export default function Categories(){
  const r = useRouter();
  const {page, type} = r.query;

  if(page === '3'){
    return <div>
      <h1>You are on page 3</h1>
      <button onClick={
      ()=>r.replace({
        pathname:"/categories",
        query:{
          page:1
        }
      })
    }>Restart</button>
    </div>
  }

  return <div>

    {
    page === undefined ? <h1>Select "Try Router"</h1> : <h1>You are on page #</h1>
    }
    
    {/* <h1>Categories #{page}-{type}</h1> */}
    {/* test - test */}

    <button onClick={
      ()=> console.log(r)
    }>Console log the router</button>

    <button onClick={
      ()=>r.replace({
        pathname:"/categories",
        query:{
          //variable set to the url
          //if page is undefined then page:1, else page:Number(page)+1
          page:page === undefined ? 1 :Number(page)+1, //increase this by 1 every click
          type:"sports"
        }
      })
    }>Try routing</button>

    <hr />
    <div>
      <h3>{header} - {type}</h3>
      <div>

        <div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query: {
              type:cat1.route
            }
          })
        }>
        {cat1.title}
        </div>

        <div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query: {
              type:cat2.route
            }
          })
        }
        >
          {cat2.title}
        </div>

        <div onClick={
          ()=>r.replace({
            pathname:"/categories",
            query: {
              type:cat3.route
            }
          })
        }
        >
          {cat3.title}
        </div>

        {
          type === 'fo' && <div>
          SHOW THE FOOD IMAGES
            {
              //cat1Imgs.map((o,i)=><img src={o} height={100}/>)
            }
            <Display arr={cat1Imgs} />
          </div>
        }

        {
          type === 'an' && <div>
          SHOW THE Animal IMAGES
            {
              //cat2Imgs.map((o,i)=><img src={o} height={100}/>)
            }
            <Display arr={cat2Imgs} />
          </div>
        }

        {
          type === 'wa' && <div>
          SHOW THE Water IMAGES
            {
              //cat3Imgs.map((o,i)=><img src={o} height={100}/>)
            }
            <Display arr={cat3Imgs} />
          </div>
        }
      </div>

    </div>

  </div>
}

/*
Condition shortcuts
1. ?:
2. &&
3. ||

if the boolean conidtion is true, use value1, else use value2
value can be both a data type (like int, string, array etc) and a UI Element (<div>)
1.boolean condition ? value1 : value2

if the boolean condition is true, then use value
2.boolean condition && value

if value1 can be used, then use it, otherwise use value2
3. value1 | value 2

*/