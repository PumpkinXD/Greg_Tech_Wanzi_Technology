ServerEvents.recipes(event => {
    event.shaped('ae2:controller',[
        ['ae2:smooth_sky_stone_block','ae2:logic_processor','ae2:smooth_sky_stone_block'],
        ['ae2:calculation_processor','ae2:fluix_crystal','ae2:printed_silicon'],
        ['ae2:smooth_sky_stone_block','ae2:engineering_processor','ae2:smooth_sky_stone_block']
    ])
    //ME控制器唯一工作台制作方式↑

    event.shaped('ae2:pattern_provider',[
        ['minecraft:iron_ingot','minecraft:crafting_table','minecraft:iron_ingot'],
        ['ae2:annihilation_core','#gtceu:circuits/lv','ae2:formation_core'],
        ['minecraft:iron_ingot','minecraft:crafting_table','minecraft:iron_ingot']
    ])
    //ME样板控制器唯一配方↑
    
    event.shaped('ae2:quantum_ring',[
        ['minecraft:iron_ingot','#gtceu:circuits/lv','minecraft:iron_ingot'],
        ['#gtceu:circuits/mv','ae2:energy_cell','ae2:fluix_smart_dense_cable'],
        ['minecraft:iron_ingot','#gtceu:circuits/lv','minecraft:iron_ingot']
    ])
    //ME量子环唯一配方↑


    event.shaped('ae2:condenser',[
        ['#forge:ingots/steel','gtceu:tempered_glass','#forge:ingots/steel'],
        ['gtceu:tempered_glass','gtceu:lv_autoclave','gtceu:tempered_glass'],
        ['#forge:ingots/steel','gtceu:tempered_glass','#forge:ingots/steel']
    ])
    //物质聚合器唯一配方↑

    event.shaped('ae2wtlib:quantum_bridge_card',[
        ['','',''],
        ['gtceu:quantum_eye','','gtceu:quantum_eye'],
        ['','ae2:wireless_receiver','']
    ])
    //量子桥卡唯一配方

    event.recipes.gtceu.assembler('wuxianrongyan')
    .itemInputs('4x ae2:cell_component_256k','bigger_ae2:advanced_fluid_cell_housing')
    .inputFluids(Fluid.of('minecraft:lava',1000))
    .itemOutputs(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:lava"}}'))
    .duration(300)
    .EUt(32)
    //ME无限熔岩单元
    
    event.remove({id:'ae2wtlib:quantum_bridge_card'})
    event.remove({id:'ae2:network/blocks/io_condenser'})
    event.remove({id:'ae2:network/blocks/quantum_ring'})
    event.remove({id:'ae2:network/blocks/pattern_providers_interface'})
    event.remove({id:'ae2:network/blocks/controller'})
    //禁用AE2配方↑

});
