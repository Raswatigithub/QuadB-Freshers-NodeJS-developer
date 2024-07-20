// document.addEventListener('DOMContentLoaded',async()=>{
//     const response=await fetch("http://localhost:3000/tickers")
//     const tickers=await response.json();
//     const tableBody=document.getElementById('tickerData');
//     tickers.forEach(element => {
//         const row=document.createElement('tr');
//         row.innerHTML=`
//         <td>${element.name}</td>
//         <td>${element.last}</td>
//         <td>${element.buy}</td>
//         <td>${element.sell}</td>
//         <td>${element.volume}</td>
//         <td>${element.baseunit}</td>
//         `;
//         tableBody.appendChild(row)
//     });
// })
setTimeout(() => {
    const loading = document.querySelector('.loading');
    loading.remove();

  
    const data = {
      btcPrice: 20000,
      ethPrice: 1500,
      btcVolume: 1000000,
      ethVolume: 500000,
    };

   
    const content = document.querySelector('.content');
    content.innerHTML = `
      <h2>Bitcoin</h2>
      <p>Price: ${data.btcPrice}</p>
      <p>Volume: ${data.btcVolume}</p>

      <h2>Ethereum</h2>
      <p>Price: ${data.ethPrice}</p>
      <p>Volume: ${data.ethVolume}</p>
    `;
  }, 3000);