let budget = 0

function getBudget(){
    budget = parseInt(document.querySelector('#budget').value)
    if (!budget || budget < 0) {
      document.getElementById('msgb').classList.remove('hide')
    }else{
      document.getElementById('msgb').classList.add('hide')
      document.querySelector('#amount').textContent = budget

      total += price;
      document.getElementById("out-budget").textContent = total;
      balance = budget - total
      document.getElementById("balance").textContent = balance;
    }
}


let balance = 0;
let total = 0;
let price = 0;


function addToTotal() {
  let price = parseInt(document.getElementById("expenses-price").value);
  let titel = document.getElementById("expenses-titel").value;

  if (!titel || !price || price<1) {
    document.getElementById('msge').classList.remove('hide')
  } else{
    document.getElementById('msge').classList.add('hide')
    total += price;
    document.getElementById("out-budget").textContent = total;

    balance = budget - total
    document.getElementById("balance").textContent = balance;

    let mydiv = document.querySelector(".listing")
    let newcontent = '<div class="list-container"> <h4>'+ titel +'</h4> <p>'+price+'</p><p class="btn" onclick="tt(this)"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16"> <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/> </svg></p></div>';
  
    mydiv.innerHTML += newcontent;
  }
  
  
}

function tt(e){
  let a = e.parentNode.children[1].textContent
  e.parentNode.remove();

  total = total - a
  balance = budget - total
  document.getElementById("out-budget").textContent = total;
  document.getElementById("balance").textContent = balance;
}z






