export let tableData = `


 <h1 
  style=text-align:center; margin:5rem;>
  Display Table Data Using Node JS
 </h1>
 
<table border='2'>
 <tr style=text-align:center; padding: 20px;> 
    <th>name</th> 
    <th>height</th> 
    <th>mass</th> 
    <th>hair_color</th> 
    <th>skin_color</th> 
    <th>eye_color</th> 
    <th>birth_year</th> 
    <th>gender</th> 
    <th>homeworld</th> 
    <th>films</th> 
    <th>species</th> 
    <th>vehicles</th> 
    <th>starships</th> 
    <th>created</th> 
    <th>edited</th> 
    <th>url</th> 
</tr>  
`;

export const getData = (data) => {
  data.map((list) => {
    tableData += `
   <tr style=border:2px solid black; text-align:center;> 
    <td style=text-align:center; padding:20px;> ${list.name} </td> 
    <td style=text-align:center; padding:20px;> ${list.height} </td> 
    <td style=text-align:center; padding:20px;> ${list.mass} </td> 
    <td style=text-align:center; padding:20px;> ${list.hair_color} </td> 
    <td style=text-align:center; padding:20px;> ${list.skin_color} </td> 
    <td style=text-align:center; padding:20px;> ${list.eye_color} </td> 
    <td style=text-align:center; padding:20px;> ${list.birth_year} </td> 
    <td style=text-align:center; padding:20px;> ${list.gender} </td> 
    <td style=text-align:center; padding:20px;> ${list.homeworld} </td> 
    <td style=text-align:center; padding:20px;> ${list.films} </td> 
    <td style=text-align:center; padding:20px;> ${list.species} </td> 
    <td style=text-align:center; padding:20px;> ${list.vehicles} </td> 
    <td style=text-align:center; padding:20px;> ${list.starships} </td> 
    <td style=text-align:center; padding:20px;> ${list.created} </td> 
    <td style=text-align:center; padding:20px;> ${list.edited} </td> 
    <td style=text-align:center; padding:20px;> ${list.url} </td> 
   </tr>
  `;
  });
};

console.log(tableData);
