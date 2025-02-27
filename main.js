
document.addEventListener('DOMContentLoaded', function(){
  const countriesCont= document.getElementById('countries');
  fetch('https://restcountries.com/v3.1/all').then(reponse=>reponse.json()).then(countries=>{
    const countriesList=countries.slice(0,20);

    let call='';
    countriesList.forEach(country => {call+=`<div class="country"> <h3>${country.name.common}</h3>
      <img src="${country.flags.png}" alt="drapeau"> 
      <p><strong> Capital:  </strong>${country.capital ? country.capital[0]: ''}</p> 
       <h3><strong>Devise:</strong>${country.currencies ? Object.values(country.currencies).map(currency=>currency.name).join(','): 'N/A'} </h3> </div>`;  
    });
    countriesCont.innerHTML=call;
    
  })
  .catch(error=> {
    console.error('erreur:', error);
   });
  });
 
