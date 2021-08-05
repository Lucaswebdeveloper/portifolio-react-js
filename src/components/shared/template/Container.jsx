import styled from 'styled-components'

export default styled.div`
      height: 100vh;

      display: grid;
      
      grid-template-columns: 220px 1fr;
      grid-template-rows: 100px 1fr 40px;
      grid-template-areas: 
            'header toolbar'
            'sidenav content'
            'sidenav footer';
      
            @media(max-width: 800px) {
                grid-template-columns: 1fr;
                grid-template-rows: 100px 50px 50px 1fr 40px;
                grid-template-areas: 
                     'header'
                     'topnav'
                     'toolbar'
                     'content'
                     'footer';
            }
    
    
    .whatsapp {
          width: 5vh;
          height: 5vh;
         background-color: white;
          border-radius: 10px;
          margin-left: 10px;

    }
    
.whatsapp:hover {
   
    border-radius: 5px;
    box-shadow: 2px 2px #2c2c2c;
   
}
.zap{
      display: flex;
     
      position: fixed;
      margin-top: 80vh;
      
      
}
`
