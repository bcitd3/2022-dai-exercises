import { GetName, GetAnswers, res } from "../../data/que_content"

export default function QResults(){

    const nm = GetName();
    const an = GetAnswers();
    return <div>
        HERE ARE YOUR RESULTS!
        <hr />
        Hey {nm}, I see that you are doing {an[0]}, and feeling 
        {an[1]}. That's why you are going to {an[2]}. Is this 
        correct.

        <h3>{res[an[0]].text}</h3>
        <img src={res[an[0]].img} />
    </div>
}