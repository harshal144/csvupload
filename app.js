window.onload = function(e){
  fetch(`http://localhost:3000`)
  .then(res => res.json())
  .then(data =>{
    const { users } = data;
    console.log("users : ",users)
    appandInTable(users);
  }).catch((e)=>console.log(e))
}

const appandInTable = (users) =>{
  var tbody=document.getElementById('tbody');
  for(let i=0;i<users.length;i++){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var txt1=document.createTextNode(users[i]['Name']);
    td1.appendChild(txt1);

    var td2=document.createElement("td");
    var txt2=document.createTextNode(users[i]['Description']);
    td2.appendChild(txt2);

    var td3=document.createElement("td");
    var txt3=document.createTextNode(users[i]['Sale_price']);
    td3.appendChild(txt3);

    var td4=document.createElement("td");
    var txt4=document.createTextNode(users[i]['Regular_price']);
    td4.appendChild(txt4);
    

    var td5=document.createElement("td");
    var txt5=document.createTextNode(users[i]['Category']);
    td5.appendChild(txt5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    
    tbody.appendChild(tr);
  }
}

const addCSV=(e)=>{
  e.preventDefault()
  const input = document.getElementById('fileinput');
  console.log(input.files[0]);
  var formData = new FormData()
  formData.append('file', input.files[0])
  fetch('http://localhost:3000', {
    method: 'POST',
    body: formData
  }).then(res => res.json())
  .then(data => {
    const { message, users} = data;
    appandInTable(users);
    alert(message);
  })
  .catch((e)=>console.log(e))
}

document.getElementById('upload_form').addEventListener('submit',addCSV)