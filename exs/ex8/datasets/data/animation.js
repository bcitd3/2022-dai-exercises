import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
from {
  opacity:0;
  right:-100vw;
}
to {
  opacity:1;
  right:0vw;
}
`

export const fadeOut = keyframes`
from{
    opacity:1;
    left:0vw;
}
to {
    opacity:0;
    left:-100vw;
}
`