const paracount = document.getElementById('count');
const type = document.getElementById('demo');
let c = 0;
function incr() 
{
    if (c < 20) 
      {
        c++;
        if(c%2==0)
          {
          type.innerHTML='Even';
          paracount.textContent=c;
         }
      else
      {
          type.innerHTML='Odd';
          paracount.textContent=c;
      }
      
    } 
    else 

    {
        alert('Maximum value is 20');
    }
  
  }
function decr() 
{
    if (c > 0)
       {
        c--;
        
        if(c%2==0)
          {
            type.innerHTML='Even';
            paracount.textContent=c;
      }
      else{
        type.innerHTML='Odd';
        paracount.textContent=c;
      }
      
        
    } 
    else 
    {
        alert('Minimum value is 0');
    }
}

function reset()
 {
    c = 0;
    paracount.textContent = c;
    type.innerHTML='0';
}



