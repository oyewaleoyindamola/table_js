const employees = [
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:1
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:2
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:3
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:4
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:5
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:6
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:7
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:8
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:9
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:10
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:11
  },
  {
    emailAddress: "me@me.me",
    role: "teacher",
    createdBy: "me@me.me",
    createdDate: "22/3/3030",
    modifiedBy: "you@you.you",
    modifiedDate: "43/56/4545",
    serialNumber:12
  },
];


const table = document.createElement("table");
//table.innerHTML = "hello"

let headerRow = document.createElement("tr");

let headerCell1 = document.createElement("th");

headerCell1.innerHTML = "S/N";
headerRow.appendChild(headerCell1);

let headerCell2 = document.createElement("th");
headerCell2.innerHTML = "Email Address";
headerRow.appendChild(headerCell2);

let headerCell3 = document.createElement("th");
headerCell3.innerHTML = "Role";
headerRow.appendChild(headerCell3);

let headerCell4 = document.createElement("th");
headerCell4.innerHTML = "Created By";
headerRow.appendChild(headerCell4);

let headerCell5 = document.createElement("th");
headerCell5.innerHTML = "Created Date";
headerRow.appendChild(headerCell5);

let headerCell6 = document.createElement("th");
headerCell6.innerHTML = "Modified By";
headerRow.appendChild(headerCell6);

let headerCell7 = document.createElement("th");
headerCell7.innerHTML = "Modified Date";
headerRow.appendChild(headerCell7);

table.appendChild(headerRow);


employees.map(function(details){

    let dataRow = document.createElement("tr");
    
    let dataCell1 = document.createElement("td");
    dataCell1.innerHTML = details.serialNumber;
    dataRow.appendChild(dataCell1);
    
    let dataCell2 = document.createElement("td");
    dataCell2.innerHTML = details.emailAddress;
    dataRow.appendChild(dataCell2);
    
    let dataCell3 = document.createElement("td");
    dataCell3.innerHTML = details.role;
    dataRow.appendChild(dataCell3);
    
    let dataCell4 = document.createElement("td");
    dataCell4.innerHTML = details.createdBy;
    dataRow.appendChild(dataCell4);
    
    let dataCell5 = document.createElement("td");
    dataCell5.innerHTML = details.createdDate;
    dataRow.appendChild(dataCell5);
    
    let dataCell6 = document.createElement("td");
    dataCell6.innerHTML = details.modifiedBy;
    dataRow.appendChild(dataCell6);
    
    let dataCell7 = document.createElement("td");
    dataCell7.innerHTML = details.modifiedDate;
    dataRow.appendChild(dataCell7);
    
    table.appendChild(dataRow);

    document.body.appendChild(table);
})

const arr = [ 1,2,3,4,5,6]

arr.map((a)=>{
console.log(a*2 +2);
})
