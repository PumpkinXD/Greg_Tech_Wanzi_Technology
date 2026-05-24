ServerEvents.recipes(event =>{//常规化学反应（被特殊催化）
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:polyethylene_1')
    .circuit(1)
    .itemInputs('2x gtceu:carbon_dust')
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:hydrogen',576))
    .outputFluids(Fluid.of('gtceu:polyethylene',576))
    .duration(100)
    .EUt(64)//格雷科技聚乙烯定向制作Ⅰ
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:polyethylene_2')
    .circuit(2)
    .itemInputs('2x gtceu:carbon_dust')
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:hydrogen',576))
    .itemOutputs('4x gtceu:polyethylene_plate')
    .duration(100)
    .EUt(64)//格雷科技聚乙烯定向制作Ⅱ
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:sulfuric_acid_1')
    .circuit(1)
    .itemInputs('2x #forge:dusts/sulfur')
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:hydrogen',576))
    .inputFluids(Fluid.of('gtceu:oxygen',1152))
    .outputFluids(Fluid.of('gtceu:sulfuric_acid',1152))
    .duration(100)
    .EUt(64)//格雷科技硫酸定向制作Ⅰ
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:sulfuric_acid_2')
    .circuit(2)
    .itemInputs('2x #forge:dusts/sulfur')
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('minecraft:water',1152))
    .outputFluids(Fluid.of('gtceu:sulfuric_acid',1152))
    .duration(100)
    .EUt(64)//格雷科技硫酸定向制作Ⅱ
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:nitric_acid_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:hydrogen',288))
    .inputFluids(Fluid.of('gtceu:nitrogen',288))
    .inputFluids(Fluid.of('gtceu:oxygen',864))
    .outputFluids(Fluid.of('gtceu:nitric_acid',1728))
    .duration(100)
    .EUt(64)//格雷科技硝酸定向制作Ⅰ
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:nitric_acid_2')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:hydrogen',288))
    .inputFluids(Fluid.of('gtceu:nitrogen',288))
    .inputFluids(Fluid.of('mekanism:oxygen',864))
    .outputFluids(Fluid.of('gtceu:nitric_acid',1728))
    .duration(100)
    .EUt(64)//格雷科技硝酸定向制作Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('prts:magic_kc')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .itemInputs('gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:aqua_regia',2000))
    .inputFluids(Fluid.of('prts:magic_water',2000))
    .outputFluids(Fluid.of('gtceu:carbon_dioxide',100))
    .outputFluids(Fluid.of('gtceu:acidic_osmium_solution',100))
    .outputFluids(Fluid.of('gtceu:hydrogen',100))
    .outputFluids(Fluid.of('gtceu:ammonia',100))
    .outputFluids(Fluid.of('gtceu:chlorine',100))
    .itemOutputs('gtceu:ruthenium_dust','gtceu:silicon_dioxide_dust','gtceu:gold_dust','gtceu:iridium_dust','gtceu:platinum_dust','gtceu:palladium_dust')
    .duration(100)
    .EUt(240)//超级铂系矿泥处理

    event.recipes.gtceu.zhidingxinghuaxuefanying('prts:magic_kc_2')
    .circuit(1)
    .notConsumable('2x prts:type_c_directed_chemical_reaction_device')
    .itemInputs('gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:aqua_regia',2000))
    .inputFluids(Fluid.of('prts:magic_ghost_fluid',2000))
    .outputFluids(Fluid.of('gtceu:carbon_dioxide',200))
    .outputFluids(Fluid.of('gtceu:acidic_osmium_solution',200))
    .outputFluids(Fluid.of('gtceu:hydrogen',200))
    .outputFluids(Fluid.of('gtceu:ammonia',200))
    .outputFluids(Fluid.of('gtceu:chlorine',200))
    .itemOutputs('2x gtceu:ruthenium_dust','2x gtceu:silicon_dioxide_dust','2x gtceu:gold_dust','2x gtceu:iridium_dust','2x gtceu:platinum_dust','2x gtceu:palladium_dust')
    .duration(100)
    .EUt(240)//超级铂系矿泥处理Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('prts:magic_kc_bigger')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .itemInputs('32x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:aqua_regia',64000))
    .inputFluids(Fluid.of('prts:magic_water',64000))
    .outputFluids(Fluid.of('gtceu:carbon_dioxide',3200))
    .outputFluids(Fluid.of('gtceu:acidic_osmium_solution',3200))
    .outputFluids(Fluid.of('gtceu:hydrogen',3200))
    .outputFluids(Fluid.of('gtceu:ammonia',3200))
    .outputFluids(Fluid.of('gtceu:chlorine',3200))
    .itemOutputs('32x gtceu:ruthenium_dust','32x gtceu:silicon_dioxide_dust','32x gtceu:gold_dust','32x gtceu:iridium_dust','32x gtceu:platinum_dust','32x gtceu:palladium_dust')
    .duration(100)
    .EUt(240)//超级大批量铂系矿泥处理

    event.recipes.gtceu.zhidingxinghuaxuefanying('prts:magic_kc_bigger_2')
    .circuit(2)
    .notConsumable('2x prts:type_c_directed_chemical_reaction_device')
    .itemInputs('32x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:aqua_regia',64000))
    .inputFluids(Fluid.of('prts:magic_ghost_fluid',64000))
    .outputFluids(Fluid.of('gtceu:carbon_dioxide',6400))
    .outputFluids(Fluid.of('gtceu:acidic_osmium_solution',6400))
    .outputFluids(Fluid.of('gtceu:hydrogen',6400))
    .outputFluids(Fluid.of('gtceu:ammonia',6400))
    .outputFluids(Fluid.of('gtceu:chlorine',6400))
    .itemOutputs('64x gtceu:ruthenium_dust','64x gtceu:silicon_dioxide_dust','64x gtceu:gold_dust','64x gtceu:iridium_dust','64x gtceu:platinum_dust','64x gtceu:palladium_dust')
    .duration(100)
    .EUt(240)//超级大批量铂系矿泥处理Ⅱ
})

ServerEvents.recipes(event =>{//特殊制作（如TNT等
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:tnt_max_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:toluene',1000))
    .inputFluids(Fluid.of('gtceu:wax',100))
    .itemInputs('9x minecraft:sugar','gtceu:polyethylene_dust')
    .itemOutputs('10x gtceu:industrial_tnt')
    .duration(200)
    .EUt(120)//工业炸药制作

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:tnt_1')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:toluene',1000))
    .inputFluids(Fluid.of('gtceu:wax',100))
    .itemInputs('9x minecraft:sugar','gtceu:polyethylene_dust')
    .itemOutputs('40x minecraft:tnt')
    .duration(200)
    .EUt(120)//TNT制作
})

ServerEvents.recipes(event =>{//脱硫配方、硫聚合（未来预计）配方
    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:heavy_fuel_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel',10000))
    .outputFluids(Fluid.of('gtceu:heavy_fuel',10000))
    .itemOutputs('10x gtceu:sulfur_dust')
    .duration(200)
    .EUt(120)//重燃油脱硫

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:heavy_fuel_2')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel',1000))
    .outputFluids(Fluid.of('gtceu:heavy_fuel',1000))
    .itemOutputs('1x gtceu:sulfur_dust')
    .duration(100)
    .EUt(120)//重燃油脱硫Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:heavy_fuel_3')
    .circuit(3)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel',100))
    .outputFluids(Fluid.of('gtceu:heavy_fuel',100))
    .duration(50)
    .EUt(120)//重燃油脱硫Ⅲ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:heavy_fuel_4')
    .circuit(4)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel',10))
    .outputFluids(Fluid.of('gtceu:heavy_fuel',10))
    .duration(25)
    .EUt(60)//重燃油脱硫Ⅳ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:heavy_fuel_5')
    .circuit(5)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel',1))
    .outputFluids(Fluid.of('gtceu:heavy_fuel',1))
    .duration(12)
    .EUt(12)//重燃油脱硫Ⅴ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:light_fuel_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel',10000))
    .outputFluids(Fluid.of('gtceu:light_fuel',10000))
    .itemOutputs('10x gtceu:sulfur_dust')
    .duration(200)
    .EUt(120)//轻燃油脱硫

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:light_fuel_2')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel',1000))
    .outputFluids(Fluid.of('gtceu:light_fuel',1000))
    .itemOutputs('1x gtceu:sulfur_dust')
    .duration(100)
    .EUt(120)//轻燃油脱硫Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:light_fuel_3')
    .circuit(3)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel',100))
    .outputFluids(Fluid.of('gtceu:light_fuel',100))
    .duration(50)
    .EUt(120)//轻燃油脱硫Ⅲ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:light_fuel_4')
    .circuit(4)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel',10))
    .outputFluids(Fluid.of('gtceu:light_fuel',10))
    .duration(25)
    .EUt(60)//轻燃油脱硫Ⅳ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:light_fuel_5')
    .circuit(5)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_light_fuel',1))
    .outputFluids(Fluid.of('gtceu:light_fuel',1))
    .duration(12)
    .EUt(12)//轻燃油脱硫Ⅴ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:naphtha_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_naphtha',10000))
    .outputFluids(Fluid.of('gtceu:naphtha',10000))
    .itemOutputs('10x gtceu:sulfur_dust')
    .duration(200)
    .EUt(120)//石脑油脱硫

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:naphtha_2')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_naphtha',1000))
    .outputFluids(Fluid.of('gtceu:naphtha',1000))
    .itemOutputs('1x gtceu:sulfur_dust')
    .duration(100)
    .EUt(120)//石脑油脱硫Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:naphtha_3')
    .circuit(3)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_naphtha',100))
    .outputFluids(Fluid.of('gtceu:naphtha',100))
    .duration(50)
    .EUt(120)//石脑油脱硫Ⅲ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:naphtha_4')
    .circuit(4)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_naphtha',10))
    .outputFluids(Fluid.of('gtceu:naphtha',10))
    .duration(25)
    .EUt(60)//石脑油脱硫Ⅳ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:naphtha_5')
    .circuit(5)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_naphtha',1))
    .outputFluids(Fluid.of('gtceu:naphtha',1))
    .duration(12)
    .EUt(12)//石脑油脱硫Ⅴ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_1')
    .circuit(1)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_gas',10000))
    .outputFluids(Fluid.of('gtceu:refinery_gas',10000))
    .itemOutputs('10x gtceu:sulfur_dust')
    .duration(200)
    .EUt(120)//燃油气脱硫

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_2')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_gas',1000))
    .outputFluids(Fluid.of('gtceu:refinery_gas',1000))
    .itemOutputs('1x gtceu:sulfur_dust')
    .duration(100)
    .EUt(120)//燃油气脱硫Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_3')
    .circuit(3)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_gas',100))
    .outputFluids(Fluid.of('gtceu:refinery_gas',100))
    .duration(50)
    .EUt(120)//燃油气脱硫Ⅲ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_4')
    .circuit(4)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_gas',10))
    .outputFluids(Fluid.of('gtceu:refinery_gas',10))
    .duration(25)
    .EUt(60)//燃油气脱硫Ⅳ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_5')
    .circuit(5)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_gas',1))
    .outputFluids(Fluid.of('gtceu:refinery_gas',1))
    .duration(12)
    .EUt(12)//燃油气脱硫Ⅴ
})

ServerEvents.recipes(event =>{//控制器配方
    event.shaped('gtceu:wanzihuaxueyichangcuihuachang',[
        "ABA",
        "CSC",
        "ABA"
    ],{
        A:'prts:production_type_wanzi_impact_resistant_plate',
        B:'gtceu:inert_machine_casing',
        C:'prts:production_type_wanzi_emitter',
        S:'prts:medium_voltage_wanzi_circuit'
    })
})