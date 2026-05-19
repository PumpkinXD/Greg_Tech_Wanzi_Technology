ServerEvents.recipes(event=>{
    event.shaped(Item.of('mekanism:digital_miner'),[
        ['gtceu:stainless_steel_ingot','#gtceu:circuits/mv','gtceu:stainless_steel_ingot'],
        ['mekanism:logistical_sorter','mekanism:robit','mekanism:logistical_sorter'],
        ['mekanism:teleportation_core','mekanism:steel_casing','mekanism:teleportation_core']
    ])
    //数字型采矿机配方困难化

    event.shaped(Item.of('mekanismgenerators:gas_burning_generator'),[
        ['gtceu:stainless_steel_ingot','mekanism:alloy_reinforced','gtceu:stainless_steel_ingot'],
        ['mekanism:steel_casing','mekanism:electrolytic_core','mekanism:steel_casing'],
        ['gtceu:stainless_steel_ingot','mekanism:alloy_reinforced','gtceu:stainless_steel_ingot']
    ])
    //燃气发电机配方困难化

    event.shaped(Item.of('mekanism:chemical_dissolution_chamber'),[
        ['mekanism:ingot_refined_obsidian','mekanism:basic_chemical_tank','mekanism:ingot_refined_obsidian'],
        ['mekanism:elite_control_circuit','mekanism:steel_casing','mekanism:elite_control_circuit'],
        ['mekanism:ingot_refined_obsidian','mekanism:basic_chemical_tank','mekanism:ingot_refined_obsidian']
    ])
    //化学溶解室配方简易化

    event.shaped(Item.of('mekanism:isotopic_centrifuge'),[
        ['#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead'],
        ['mekanism:elite_control_circuit','mekanism:basic_chemical_tank','mekanism:elite_control_circuit'],
        ['#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead']
    ])
    //同位素离心机配方简易化

    event.shaped(Item.of('mekanism:elite_control_circuit'),[
        ['','',''],
        ['mekanism:alloy_reinforced','mekanism:advanced_control_circuit','mekanism:alloy_reinforced'],
        ['','#gtceu:circuits/mv','']
    ])//精英电路配方困难化

    event.shaped(Item.of('mekanism:ultimate_control_circuit'),[
        ['','',''],
        ['mekanism:alloy_atomic','mekanism:elite_control_circuit','mekanism:alloy_atomic'],
        ['','#gtceu:circuits/hv','']
    ])//终极电路配方困难化

    event.remove({id:'mekanism:digital_miner'})
    event.remove({id:'mekanismgenerators:generator/gas_burning'})
    event.remove({id:'mekanism:control_circuit/elite'})
    event.remove({id:'mekanism:control_circuit/ultimate'})
    event.remove({id:'mekanism:chemical_dissolution_chamber'})
    event.remove({id:'mekanism:isotopic_centrifuge'})
    //原版配方移除
})