window.onload =function(){
  const f = ["Chocolate", "Vanilla", "Strawberry", "Rocky Road"]
  const ul = document.querySelector("h1");
  f.forEach(function(flav){
    const li = document.createElement("li");
    li.append(flav);
    ul.append(li);
  });
};
