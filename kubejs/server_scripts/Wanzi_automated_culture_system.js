ServerEvents.recipes((event) => {
    event.recipes.gtceu.wanzi_automated_culture_system('prts:xigua')
    .notConsumable('minecraft:melon_seeds')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('4x minecraft:melon')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//西瓜培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:nangua')
    .notConsumable('minecraft:pumpkin_seeds')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('4x minecraft:pumpkin')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//南瓜培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:xiaomai')
    .notConsumable('minecraft:wheat_seeds')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:wheat')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//小麦培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:tiancai')
    .notConsumable('minecraft:beetroot_seeds')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:beetroot')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//甜菜培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:daomi')
    .notConsumable('farmersdelight:rice')
    .inputFluids(Fluid.of('minecraft:water',1280))
    .itemOutputs('16x farmersdelight:rice_panicle')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',100),2000,2000)
    .duration(400)
    .EUt(15)//稻米培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:yangcong')
    .notConsumable('farmersdelight:onion')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x farmersdelight:onion')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//洋葱培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:fanqie')
    .notConsumable('farmersdelight:tomato_seeds')
    .inputFluids(Fluid.of('minecraft:water',1280))
    .itemOutputs('16x farmersdelight:tomato')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',100),2000,2000)
    .duration(400)
    .EUt(15)//番茄培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:juanxincai')
    .notConsumable('farmersdelight:cabbage_seeds')
    .inputFluids(Fluid.of('minecraft:water',1280))
    .itemOutputs('16x farmersdelight:cabbage')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',100),2000,2000)
    .duration(400)
    .EUt(15)//卷心菜培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:ganzhe')
    .notConsumable('minecraft:sugar_cane')
    .inputFluids(Fluid.of('minecraft:water',640))
    .itemOutputs('8x minecraft:sugar_cane')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',50),2000,2000)
    .duration(400)
    .EUt(15)//甘蔗培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:xiajieyou')
    .notConsumable('minecraft:nether_wart')
    .inputFluids(Fluid.of('minecraft:water',1280))
    .itemOutputs('16x minecraft:nether_wart')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',100),2000,2000)
    .duration(400)
    .EUt(15)//下界疣培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:haidai')
    .notConsumable('minecraft:kelp')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:kelp')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//海带培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:huluobo')
    .notConsumable('minecraft:carrot')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:carrot')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//胡萝卜培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:malingshu')
    .notConsumable('minecraft:potato')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:potato')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//马铃薯培养

    event.recipes.gtceu.wanzi_automated_culture_system('prts:xigua_2')
    .notConsumable('minecraft:melon_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('8x minecraft:melon')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//西瓜培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:nangua_2')
    .notConsumable('minecraft:pumpkin_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('8x minecraft:pumpkin')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//南瓜培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:xiaomai_2')
    .notConsumable('minecraft:wheat_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:wheat')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//小麦培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:tiancai_2')
    .notConsumable('minecraft:beetroot_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:beetroot')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//甜菜培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:daomi_2')
    .notConsumable('farmersdelight:rice')
    .inputFluids(Fluid.of('prts:yisanwanzi',640))
    .itemOutputs('32x farmersdelight:rice_panicle')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),4000,3000)
    .duration(400)
    .EUt(15)//稻米培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:yangcong_2')
    .notConsumable('farmersdelight:onion')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x farmersdelight:onion')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//洋葱培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:fanqie_2')
    .notConsumable('farmersdelight:tomato_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',640))
    .itemOutputs('32x farmersdelight:tomato')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),4000,3000)
    .duration(400)
    .EUt(15)//番茄培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:juanxincai_2')
    .notConsumable('farmersdelight:cabbage_seeds')
    .inputFluids(Fluid.of('prts:yisanwanzi',640))
    .itemOutputs('32x farmersdelight:cabbage')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),4000,3000)
    .duration(400)
    .EUt(15)//卷心菜培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:ganzhe_2')
    .notConsumable('minecraft:sugar_cane')
    .inputFluids(Fluid.of('prts:yisanwanzi',320))
    .itemOutputs('16x minecraft:sugar_cane')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',100),4000,3000)
    .duration(400)
    .EUt(15)//甘蔗培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:xiajieyou_2')
    .notConsumable('minecraft:nether_wart')
    .inputFluids(Fluid.of('prts:yisanwanzi',640))
    .itemOutputs('32x minecraft:nether_wart')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),4000,3000)
    .duration(400)
    .EUt(15)//下界疣培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:haidai_2')
    .notConsumable('minecraft:kelp')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:kelp')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//海带培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:huluobo_2')
    .notConsumable('minecraft:carrot')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:carrot')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//胡萝卜培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:malingshu_2')
    .notConsumable('minecraft:potato')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:potato')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//马铃薯培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:brown_mushroom_1')
    .notConsumable('minecraft:brown_mushroom')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:brown_mushroom')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//蘑菇培养Ⅰ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:brown_mushroom_2')
    .notConsumable('minecraft:brown_mushroom')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:brown_mushroom')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//蘑菇培养Ⅱ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:red_mushroom_1')
    .notConsumable('minecraft:red_mushroom')
    .inputFluids(Fluid.of('minecraft:water',2560))
    .itemOutputs('32x minecraft:red_mushroom')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',200),2000,2000)
    .duration(400)
    .EUt(15)//红蘑菇培养Ⅰ

    event.recipes.gtceu.wanzi_automated_culture_system('prts:red_mushroom_2')
    .notConsumable('minecraft:red_mushroom')
    .inputFluids(Fluid.of('prts:yisanwanzi',1280))
    .itemOutputs('64x minecraft:red_mushroom')
    .chancedFluidOutput(Fluid.of('gtceu:biomass',400),4000,3000)
    .duration(400)
    .EUt(15)//红蘑菇培养Ⅱ
})
ServerEvents.recipes((event) => {
    event.shaped('gtceu:lv_wanzi_automated_culture_system',[
        "ADA",
        "BSB",
        "CBC"
    ],{
        A:'gtceu:steel_plate',
        B:'farmersdelight:organic_compost',
        C:'gtceu:lv_electric_pump',
        D:'prts:type_d_packaging_unit',
        S:'gtceu:lv_machine_hull'
    })//LV万子培养机制作配方
    event.shaped('gtceu:mv_wanzi_automated_culture_system',[
        "ADA",
        "BSB",
        "CBC"
    ],{
        A:'gtceu:aluminium_plate',
        B:'farmersdelight:organic_compost',
        C:'gtceu:mv_electric_pump',
        D:'prts:type_c_packaging_unit',
        S:'gtceu:mv_machine_hull'
    })//MV万子培养机制作配方
    event.shaped('gtceu:hv_wanzi_automated_culture_system',[
        "ADA",
        "BSB",
        "CBC"
    ],{
        A:'gtceu:stainless_steel_plate',
        B:'farmersdelight:organic_compost',
        C:'gtceu:hv_electric_pump',
        D:'prts:type_c_packaging_unit',
        S:'gtceu:hv_machine_hull'
    })//HV万子培养机制作配方
})