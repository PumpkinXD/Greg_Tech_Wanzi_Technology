StartupEvents.modifyCreativeTab("expatternprovider:tab_main", e => {
  
  const Inf_Fluid = [
    "minecraft:lava"
  ];

  Inf_Fluid.forEach((f) => {

  e.add(Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:f",id:"${f}"}}`))

    });
   
})
