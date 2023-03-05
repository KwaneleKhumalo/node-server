export let tableData = `

 <h1 
  style=text-align:center;margin:5rem;text-decoration:underline;text-decoration-color:#17a2b8;text-underline-offset:10px;>
  Display Table Data Using Node JS
 </h1>
  <table border='2' style=margin:auto;>
  <tr style=text-align:center;padding: 20px;> 
      <th style=padding:20px;text-transform:uppercase;>name</th> 
      <th style=padding:20px;text-transform:uppercase;>height</th> 
      <th style=padding:20px;text-transform:uppercase;>birth_year</th> 
      <th style=padding:20px;text-transform:uppercase;>gender</th> 
      <th style=padding:20px;text-transform:uppercase;>url</th> 
  </tr>
  
`;

export const getData = (data) => {
  data.map((list) => {
    tableData += `
   <tr style=text-align:center;> 
    <td style=text-align:center;padding:20px;> ${list.name} </td> 
    <td style=text-align:center;padding:20px;> ${list.height} </td> 
    <td style=text-align:center;padding:20px;> ${list.birth_year} </td> 
    <td style=text-align:center;padding:20px;> ${list.gender} </td> 
    <td style=text-align:center;padding:20px;> <a style=color:white;text-decoration:none;background-color:#007bff;border-radius:10px;padding:5px 20px; href=${list.url}>View More</a> </td> 
   </tr>

  `;
  });
};

console.log(tableData);
