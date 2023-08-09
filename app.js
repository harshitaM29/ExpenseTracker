function test(event)
{
    event.preventDefault();
    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;

    let myObj = {description,amount,category};
    
    
    // let myObj_serialized = JSON.stringify(myObj)
    // console.log(myObj.des)

    // localStorage.setItem(myObj.des,myObj_serialized)
    axios.post('http://localhost:4000/expenses', myObj)
    .then(response => {
        
        showOnScreen(response.data);
    })
    .catch(err => console.log(err))
   
    // showOnScreen(myObj);
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:4000/expenses')
    .then(response => {
        for(let i=0;i<response.data.length;i++)
        {
            showOnScreen(response.data[i]);
    }
    })
    .catch(err => console.log(err));
    
    
    
})
function showOnScreen(myObj)
{
    
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.textContent = "Amount = " + myObj.amount + " Description = " + myObj.description + " Category = " + myObj.category;
    li.style.fontWeight = 'bold'
    ul.append(li);
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'DELETE'
    btn.addEventListener("click", function(e){
        if(confirm('are you sure'))
                {
                    axios.delete(`http://localhost:4000/expenses/${myObj.id}`)
                    var li = e.target.parentElement;
                    //console.log(li)
                    var item = document.getElementById('list'); 
                    item.removeChild(li);
                }
    });
    li.append(" ",btn)
    //edit button
    var btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-success btn=sm edit'
    btnEdit.textContent = 'EDIT'
    btnEdit.style.borderRadius = '5 px'
    btnEdit.style.border = 'black'
    btnEdit.addEventListener("click", function(e){
        
                
                    localStorage.removeItem(myObj.des);
                    var li = e.target.parentElement;
                    var item = document.getElementById('list');
                    item.removeChild(li);
                   document.getElementById('amount').value = myObj.amt;
                   document.getElementById('description').value = myObj.des;
                   document.getElementById('category').value = myObj.cat;

                    
                
    });
    li.append(" ",btnEdit)

}

