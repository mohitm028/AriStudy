// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach((news) => {
//     console.log(news.start)

// })


// const adult = ages.filter(function(age)
// {
//        if(age>=18)
//        return true;
// })

// const child = ages.filter(age => 
//     age<18
// );

// console.log(adult);
// console.log(child);

// const retailCategories = companies.filter(company => company.category === 'Retail');

// console.log(retailCategories);


// const mapTest = companies.map(comp => `${comp.name}: [${comp.start}- ${comp.end}]`)
// console.log(mapTest);

// const sortTest = companies.sort((a,b) => (a.start > b.start) ? 1 : -1);

// console.log(sortTest);

// const totalages = ages.reduce((sum,age) => sum + age, 0);

// console.log(totalages);

fetch("https://reqres.in/api/users")
  .then(res => res.json())
  .then(data => console.log(data))


  const checkRequired = (inputarr) =>{
    inputarr.forEach( (input) =>
    {
        if(input.value.trim() === "")
        {
            showError(input, `${input.id} is required`);
        }
        else{
            console.log('checkReq')
            showSuccess(input);
            checkLength(username,3,20);
            checkLength(password,5,15);
            validEmail(email);
            checkPasswordMatch(pw,cpw);
            
        }
       
    })
}