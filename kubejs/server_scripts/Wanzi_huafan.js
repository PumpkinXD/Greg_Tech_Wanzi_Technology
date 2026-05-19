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
    .inputFluids(Fluid.of('gtceu:sulfuric_refinery_gas',10000))
    .outputFluids(Fluid.of('gtceu:refinery_gas',10000))
    .itemOutputs('10x gtceu:sulfur_dust')
    .duration(200)
    .EUt(120)//燃油气脱硫

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_2')
    .circuit(2)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_refinery_gas',1000))
    .outputFluids(Fluid.of('gtceu:refinery_gas',1000))
    .itemOutputs('1x gtceu:sulfur_dust')
    .duration(100)
    .EUt(120)//燃油气脱硫Ⅱ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_3')
    .circuit(3)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_refinery_gas',100))
    .outputFluids(Fluid.of('gtceu:refinery_gas',100))
    .duration(50)
    .EUt(120)//燃油气脱硫Ⅲ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_4')
    .circuit(4)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_refinery_gas',10))
    .outputFluids(Fluid.of('gtceu:refinery_gas',10))
    .duration(25)
    .EUt(60)//燃油气脱硫Ⅳ

    event.recipes.gtceu.zhidingxinghuaxuefanying('gtceu:refinery_gas_5')
    .circuit(5)
    .notConsumable('prts:type_c_directed_chemical_reaction_device')
    .inputFluids(Fluid.of('gtceu:sulfuric_refinery_gas',1))
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