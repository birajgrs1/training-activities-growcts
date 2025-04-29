// localStorage

// localStorage.setItem(key: string, value: string);
// localStorage.setItem('name', 'Biraj');
// localStorage.setItem('age', '22');
// localStorage.setItem('profession', 'Web Developer');
// localStorage.setItem('maritalStatus', 'Single');

// // localStorage.getItem();
// console.log(localStorage.getItem('name'));

// // remove item
// console.log(localStorage.getItem('maritalStatus'));
// localStorage.removeItem('maritalStatus');
// console.log(localStorage.getItem('maritalStatus'));

let person = [
    {
      name: "Biraj Ghorasaine",
    },
    {
      age: 22,
    },
    {
      maritalStatus: "single",
    },
    {
      profession: "Web Developer",
    },
  ];
  
  localStorage.setItem("personData", JSON.stringify(person));
  
  const storedData = localStorage.getItem("personData");
  console.log(JSON.parse(storedData));
  


  
// sessionStorage
let person2 = [
    {
      name: "Aabi Sharma",
    },
    {
      age: 28,
    },
    {
      maritalStatus: "Married",
    },
    {
      profession: "Software Developer",
    },
  ];
  
  sessionStorage.setItem("personData1", JSON.stringify(person2));
  
  const storedData2 = sessionStorage.getItem("personData1");
  console.log(JSON.parse(storedData2));
  