const form = document.querySelector('form')
// form jb by default submit hota na toh uske inpts server ke paas chale jaate par yahan toh ham uske results server ke paas
// nhi bhejna chhate na toh hamme vo step rokna padhega
// agr yhi ile lete na h aur w ki value toh initial empty value hi store ho jati
form.addEventListener('submit', function(e){
    e.preventDefault();

  const h = parseInt(document.querySelector('#height').value)
  const w = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  // parse int is used for type conversion kyunki by default jo value upload hoii naaa vo string ki format mai hoti hai

  // NAN- > not a number
    if(h === '' || h < 0 || isNaN(h)){
        results.innerText = "please enter valid height"
    }
    else if(w === '' || w < 0 || isNaN(w)){
        results.innerHTML = "please enter valid weight"
    }
    else{
      const bmi =   (w/((h*h)/10000)).toFixed(2)
      // to display results
      //results.innerText = `<span>${bmi}</span>`

      if(bmi < 18.6){
        results.innerText =`${bmi} \n  Under Weight`
      }
      else if(bmi > 18.6 && bmi < 24.9){
        results.innerText = `${bmi} \n  Normal Weight`
      }
      else{
        results.innerText = `${bmi} \n  Over Weight`
      }
    }




})