ServerEvents.recipes(event => {
    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_1')
    .circuit(1)
    .itemInputs('10x #botania:petals')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',1000))
    .duration(120)
    .EUt(30)//液态魔能生成

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_2')
    .circuit(1)
    .itemInputs('10x twilightforest:naga_scale')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',10000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅱ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_3')
    .circuit(1)
    .itemInputs('twilightforest:lich_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',30000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅲ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_4')
    .circuit(1)
    .itemInputs('twilightforest:minoshroom_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',38000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅳ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_5')
    .circuit(1)
    .itemInputs('4x #twilightforest:fiery_vial')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',50000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅴ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_6')
    .circuit(1)
    .itemInputs('twilightforest:hydra_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',60000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅵ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_7')
    .circuit(1)
    .itemInputs('twilightforest:alpha_yeti_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',49000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅶ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_8')
    .circuit(1)
    .itemInputs('4x twilightforest:alpha_yeti_fur')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',36000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅷ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_9')
    .circuit(1)
    .itemInputs('twilightforest:snow_queen_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',80000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅸ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_10')
    .circuit(1)
    .itemInputs('twilightforest:knight_phantom_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',60000))
    .duration(120)
    .EUt(30)//液态魔能生成Ⅹ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_11')
    .circuit(1)
    .itemInputs('twilightforest:ur_ghast_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',80000))
    .duration(120)
    .EUt(30)//液态魔能生成11

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_12')
    .circuit(1)
    .itemInputs('4x twilightforest:carminite')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',40000))
    .duration(120)
    .EUt(30)//液态魔能生成12

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_13')
    .circuit(2)
    .notConsumable('twilightforest:lich_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',15000))
    .duration(120)
    .EUt(30)//液态魔能生成13

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_14')
    .circuit(2)
    .notConsumable('twilightforest:minoshroom_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',19000))
    .duration(120)
    .EUt(30)//液态魔能生成14

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_15')
    .circuit(2)
    .notConsumable('twilightforest:hydra_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',24000))
    .duration(120)
    .EUt(30)//液态魔能生成15

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_16')
    .circuit(2)
    .notConsumable('twilightforest:alpha_yeti_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',31000))
    .duration(120)
    .EUt(30)//液态魔能生成16

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_17')
    .circuit(2)
    .notConsumable('twilightforest:snow_queen_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',42000))
    .duration(120)
    .EUt(30)//液态魔能生成17

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_18')
    .circuit(2)
    .notConsumable('twilightforest:knight_phantom_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',26000))
    .duration(120)
    .EUt(30)//液态魔能生成18

    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_19')
    .circuit(2)
    .notConsumable('twilightforest:ur_ghast_trophy')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',41000))
    .duration(120)
    .EUt(30)//液态魔能生成19

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_1')
    .circuit(1)
    .itemInputs('4x slashblade:proudsoul_tiny','prts:type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',1000))
    .duration(120)
    .EUt(30)//液态魔魂生成

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_2')
    .circuit(1)
    .itemInputs('slashblade:proudsoul','prts:type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',2000))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅱ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_3')
    .circuit(1)
    .itemInputs('slashblade:proudsoul_ingot','prts:type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',4000))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅲ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_4')
    .circuit(1)
    .itemInputs('4x slashblade:proudsoul_tiny','prts:purified_type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',1500))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅳ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_5')
    .circuit(1)
    .itemInputs('slashblade:proudsoul','prts:purified_type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',3000))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅴ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_6')
    .circuit(1)
    .itemInputs('slashblade:proudsoul_ingot','prts:purified_type_one_wanzi')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',5500))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅵ

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_7')
    .circuit(2)
    .chancedInput('twilightforest:lich_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',7500))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅶ
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_8')
    .circuit(2)
    .chancedInput('twilightforest:minoshroom_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',9500))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅷ
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_9')
    .circuit(2)
    .chancedInput('twilightforest:hydra_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',12000))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅸ
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_10')
    .circuit(2)
    .chancedInput('twilightforest:alpha_yeti_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',15000))
    .duration(120)
    .EUt(30)//液态魔魂生成Ⅹ
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_11')
    .circuit(2)
    .chancedInput('twilightforest:snow_queen_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',21000))
    .duration(120)
    .EUt(30)//液态魔魂生成11
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_12')
    .circuit(2)
    .chancedInput('twilightforest:knight_phantom_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',13000))
    .duration(120)
    .EUt(30)//液态魔魂生成12
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_13')
    .circuit(2)
    .chancedInput('twilightforest:ur_ghast_trophy',5000,1000)
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',20500))
    .duration(120)
    .EUt(30)//液态魔魂生成13

    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_14')
    .circuit(1)
    .itemInputs('2x apotheosis:common_material')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',500))
    .duration(120)
    .EUt(30)//液态魔魂生成14
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_15')
    .circuit(1)
    .itemInputs('2x apotheosis:uncommon_material')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',1000))
    .duration(120)
    .EUt(30)//液态魔魂生成15
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_16')
    .circuit(1)
    .itemInputs('2x apotheosis:rare_material')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',1500))
    .duration(120)
    .EUt(30)//液态魔魂生成16
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_17')
    .circuit(1)
    .itemInputs('2x apotheosis:epic_material')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',2500))
    .duration(120)
    .EUt(30)//液态魔魂生成17
    event.recipes.gtceu.liquid_magic_generator('prts:magic_ghost_18')
    .circuit(1)
    .itemInputs('2x apotheosis:mythic_material')
    .inputFluids(Fluid.of('prts:magic_water',1000))
    .outputFluids(Fluid.of('prts:magic_ghost_fluid',5000))
    .duration(120)
    .EUt(30)//液态魔魂生成18

    event.shaped('gtceu:liquid_magic_generator_1',[
        ['botania:polished_livingrock','botania:polished_livingrock','botania:polished_livingrock'],
        ['botania:terrasteel_block','prts:medium_voltage_wanzi_circuit','botania:terrasteel_block'],
        ['botania:polished_livingrock','#gtceu:circuits/hv','botania:polished_livingrock']
    ])//控制器做法
})