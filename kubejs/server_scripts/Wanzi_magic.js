ServerEvents.recipes(event => {
    event.recipes.gtceu.liquid_magic_generator('prts:magic_water_1')
    .circuit(1)
    .itemInputs('10x #botania:petals')
    .inputFluids(Fluid.of('minecraft:water',1000))
    .outputFluids(Fluid.of('prts:magic_water',1000))
    .duration(120)
    .EUt(30)//液态魔能生成

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
})