const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      // inventory.items.push(itemName); // Work
      this.items.push(itemName); // doesn't work
      
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      // inventory.items = inventory.items.filter((item) => item !== itemName); // work
      this.items = this.items.filter((item) => item !== itemName); // doesn't work
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    if(action === inventory.add){
      inventory.add(itemName);
    }else if (action === inventory.remove){
      inventory.remove(itemName);
    }
    
  };
  
  invokeInventoryAction("Medkit", inventory.add);
  // Invoking action on Medkit
  // Adding Medkit to inventory
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction("Gas mask", inventory.remove);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']