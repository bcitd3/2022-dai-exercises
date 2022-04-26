import {useRouter} from 'next/router';

import { allresults } from '../../data/res_content';
export default function Results(){


    const r = useRouter();
    const {item} = r.query;

    if(item === undefined){
        return <div>
            Can't find your selection
        </div>
    }

    return <div>
        <h1>
            {allresults[item].header}
        </h1>

        <img src={allresults[item].img} />
    </div>
}