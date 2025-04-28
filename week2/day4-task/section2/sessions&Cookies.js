console.log("Hello, World!");

// localStorage

// localStorage.setItem(key: string, value: string);
localStorage.setItem('name', 'Biraj');
localStorage.setItem('age', '22');
localStorage.setItem('profession', 'Web Developer');
localStorage.setItem('maritalStatus', 'Single');

// localStorage.getItem();
console.log(localStorage.getItem('name'));

// remove item 
console.log(localStorage.getItem('maritalStatus'));
localStorage.removeItem('maritalStatus');
console.log(localStorage.getItem('maritalStatus'));

// sessionStorage

sessionStorage.setItem('name', 'Shandya');
sessionStorage.setItem('age', '22');
sessionStorage.setItem('profession', 'Doctor');
sessionStorage.setItem('maritalStatus', 'Single');

// cookie
document.cookie = 'age=21; expires=' + new Date(2025, 5, 1).toUTCString() + '; path=/';
document.cookie = 'name=Anita; path=/';

// localStorage.getItem();
console.log(sessionStorage.getItem('name'));

// remove item 
console.log(sessionStorage.getItem('maritalStatus'));
sessionStorage.removeItem('maritalStatus');
console.log(sessionStorage.getItem('maritalStatus'));
