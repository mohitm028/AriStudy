fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let tableData = "";
    data.map((value) => {
      tableData += `<tr id="row">
      <td>${value.id}</td>
      <td><img src="${value.image}"></td>
      <td>${value.title}</td>
      <td>$${value.price}</td>
    </tr>`;
    });
    document.getElementById("tablebody").innerHTML = tableData;
  });



 