let items = [{id:1,name:"book",qty:"10"},{id:2,name:"book",qty:5}];

function addItem(items ,name,qty){
  const item = { id: items.length+1, name: name, qty: Number(qty) || 1 };
  items.push(item);
  return items; 
}

function delItem(items ,id){
  for (let i=0 ;i < items.length ;i++){ 
    if (items[i].id === id){
      items.splice(i,1);
      return items;
    }else {
      console.log("There is no such id.");
      return items
    }
  }
}


function findItemName(items ,name){
  const finditems=items.filter((item)=>{
    if (String(item.name).toLowerCase().indexOf(String(name).toLowerCase())>=0){
      return true
    }})
    return finditems; 
  }


