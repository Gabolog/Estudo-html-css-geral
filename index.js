

  const gL = document.getElementById('gameList');
  


  const lista = document.querySelectorAll('.gameItem');
  

  lista.forEach(function (item) {
    const dataName = item.dataset.name
    const dataText = item.dataset.text
    const dataTag = item.dataset.tag
    const div = document.
    createElement("div")
    div.classList.add("gameBoxInformation")
    div.innerHTML = `
      <span>${dataTag}</span>
      <h3>${dataName}</h3>
      <p>${dataText}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbpbPtvNfyvB4hEO3gIsAxRoIojA4nVg9ONrljY-0T9qfZ3OhywlzBCp_mZGgNWNClbo&usqp=CAU" alt="ramune">
      <span>Desenvolvedor:</span>
      <span>Data de Lançamento:</span>
      <span>Ultimo Update:</span>
    `
    
    

    // const span0 = document.createElement("span")

    // const span1 = document.createElement("span")
    
    // const span2 = document.createElement("span")

    // const span3 = document.createElement("span")

    // const h3 = document.createElement("h3")
    // h3.innerText = "Titulo"

    // const img = document.createElement("img")

    
    // const p = document.createElement("p")

    // div.appendChild(span0)

    // div.appendChild(h3)

    // div.appendChild(p)

    // div.appendChild(img)

    // div.appendChild(span1)
    // div.appendChild(span2)
    // div.appendChild(span3)

    item.appendChild(div)
  })


