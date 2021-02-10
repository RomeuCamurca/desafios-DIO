let jewels = [];

while(true) {
    
    let input = gets();
    
    if(!input) {
        
        break;
    
    }
  
    let find = jewels.find(el => el == input);
  
    if(!find) {
        
        jewels.push(input);
  
    }
}

console.log(jewels.length);