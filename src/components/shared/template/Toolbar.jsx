import styled from 'styled-components'

export default styled.div`
     grid-area: toolbar;
     background-color: #ffff;


   img {
        width: 3vh;
        height: 3vh;
   }  

   display: flex;
   align-items: center;
   justify-content: center;


   .conteudo{
     display: flex;
     align-items: center;
     justify-content: space-around;
     width: 50vh;
   }

   img:hover {
        background-color: #dcdcdc;
        border-radius: 5px;
        box-shadow: 2px 2px #888888;
       
   }
`