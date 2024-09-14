


//git hub  api 

const github=" https://api.github.com/users/DAC-Ankush0721"

const fetchData =  async() =>{
          

    const res = await fetch(github);
    const jsonData =  await res.json();

    console.log( jsonData);
    
}

fetchData();
