import "./styles/style.scss";

function component() {
  const element: HTMLTableElement = document.createElement("table");

  for (let i: number = 0; i <= 100; i += 10) {
   const tr: HTMLTableRowElement = element.appendChild(document.createElement(`tr`));
    for (let j: number = i; j <= i + 9; j++) {
      const td: HTMLTableDataCellElement = tr.appendChild(document.createElement(`td`));
      if(j <= 100) {
        if(j % 3 === 0 && j % 5 === 0) {
          td.innerHTML = `<span>${j.toString()}</span> <strong>FizzBuzz</strong>`;
          td.style.backgroundColor = "teal";
          td.style.color = "white";
        } else if(j % 5 === 0) {
          td.innerHTML = `<span>${j.toString()}</span> Buzz` ;
          td.style.backgroundColor = "gray";
          td.style.color = "white";
        } else if (j % 3 === 0) {
          td.innerHTML = `<span>${j.toString()}</span> Fizz`;
          td.style.backgroundColor = "black";
          td.style.color = "white";
        } else {
          td.innerHTML = j.toString();
          td.style.backgroundColor = "whitesmoke";
          td.style.color = "gray";
        }
      }
    }
  }

  return element;
}

document.body.appendChild(component());

let td: NodeListOf<HTMLTableDataCellElement>  = document.querySelectorAll("td");

td.forEach((eventTD: HTMLSpanElement) => {
  let span: HTMLSpanElement | null = eventTD.querySelector('span');
  eventTD.addEventListener('mouseenter', () => {
      if(span) {
        span.style.display = "flex";
      }
  })
  eventTD.addEventListener('mouseleave', () => {
    if(span) {
      span.style.display = "none";
    }
  })
})