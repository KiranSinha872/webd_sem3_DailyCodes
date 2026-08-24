async function getData(){
       try {
          const response=await fetch("http://localhost:3000/getdata");
          const data=await response.json();
          console.log(data);
       } catch (error) {
        
       }
}

getData();