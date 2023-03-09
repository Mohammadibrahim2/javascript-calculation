var x=12;
var y=10;
var z=x+y;
console.log(z)

const AllNews=(category_id)=>{

	const url=`./skills.json`
    fetch(url)
    .then(res=>res.json())
    .then(data=>
        {
            console.log(data)
            showData(data)
        })


	const showData=(data)=>{

let newArray=[]
        data.forEach(element => {
         console.log(element.name)
     let table=document.getElementById('tableData')
    let row=document.createElement("tr")
    
    row.innerHTML=`
    <td >${element.name}</td>
    <td>${element.score19}%</td>
    <td>${element.score24}%</td>
  `
    table.appendChild(row)

let division=element.score24 - element.score19
console.log(division)
newArray.push({difference:division,
    name:element.name,
    score1:element.score19,
    score2:element.score24})

 

        });
        
        console.log(newArray)
        const max=newArray.sort(function(a, b){return b.difference-a.difference}).slice(0,3);
        console.log(max)
        const min=newArray.sort(function(a, b){return a.difference-b.difference}).slice(0,3);
        console.log(min)
  
        max.forEach(m=>{
            let top=document.getElementById('top');
            let r=document.createElement('tr');
            r.innerHTML=`
            <td >${m.name}</td>
            <td>${m.score1}%</td>
            <td>${m.score2}%</td>
          `
            top.appendChild(r)


        });


        min.forEach(mi=>{
            let bottom=document.getElementById('bottom')
            let r=document.createElement('tr')
            r.innerHTML=`
            <td >${mi.name}</td>
            <td>${mi.score1}%</td>
            <td>${mi.score2}%</td>
          `
            bottom.appendChild(r)


        })
    }


    

// 	fetch(url).then((response) => {
//   if (response.ok) {
//     return response.json();
//   } 
//   else {
//     throw new Error('Something went ');
//   }
// })
// .then((responseJson) => {
//   showNews(responseJson.data)
// })
// .catch((error) => {
	
//   console.log(error)
// })
}
AllNews()
