fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const list = data.map((shop) => `${shop.title}`);
    console.log(list)
  });
