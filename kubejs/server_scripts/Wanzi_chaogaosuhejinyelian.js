ServerEvents.recipes(event => {
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejin_1')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','4x gtceu:iron_dust','gtceu:red_alloy_ingot')
    .itemOutputs('4x prts:type_one_wanzi_special_alloy')
    .duration(100)
    .EUt(20)//万子特殊合金Ⅰ型

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejin_2')
    .circuit(2)
    .itemInputs('4x prts:basic_wanzi','5x prts:type_one_wanzi_special_alloy','4x #forge:dusts/tin')
    .itemOutputs('4x prts:type_two_wanzi_special_alloy')
    .duration(100)
    .EUt(20)//万子特殊合金Ⅱ型

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejin_3')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','prts:type_one_wanzi_special_alloy','4x prts:type_two_wanzi_special_alloy')
    .itemOutputs('4x prts:type_three_wanzi_special_alloy')
    .duration(100)
    .EUt(20)//万子特殊合金Ⅲ型

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejin_4')
    .circuit(2)
    .itemInputs('4x prts:basic_wanzi','prts:type_two_wanzi_special_alloy','4x prts:type_three_wanzi_special_alloy')
    .itemOutputs('4x prts:type_four_wanzi_special_alloy')
    .duration(100)
    .EUt(20)//万子特殊合金Ⅳ型

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:hongsehejin_1')
    .itemInputs('#forge:dusts/copper','4x minecraft:redstone')
    .itemOutputs('4x gtceu:red_alloy_ingot')
    .duration(100)
    .EUt(20)//红色合金生产1
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:hongsehejin_2')
    .itemInputs('gtceu:annealed_copper_dust','4x minecraft:redstone')
    .itemOutputs('4x gtceu:red_alloy_ingot')
    .duration(100)
    .EUt(20)//红色合金生产2
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:hongsehejin_3')
    .itemInputs('minecraft:copper_ingot','4x minecraft:redstone')
    .itemOutputs('4x gtceu:red_alloy_ingot')
    .duration(100)
    .EUt(20)//红色合金生产3
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:hongsehejin_4')
    .itemInputs('gtceu:annealed_copper_ingot','4x minecraft:redstone')
    .itemOutputs('4x gtceu:red_alloy_ingot')
    .duration(100)
    .EUt(20)//红色合金生产4

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:blue_alloy_ingot_1')
    .circuit(2)
    .itemInputs('64x minecraft:redstone','64x gtceu:electrum_dust','16x gtceu:silver_dust','16x prts:basic_wanzi')
    .itemOutputs('64x gtceu:blue_alloy_ingot')
    .duration(300)
    .EUt(30)//蓝色合金锭制作1
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:blue_alloy_ingot_2')
    .circuit(2)
    .itemInputs('32x gtceu:red_alloy_ingot','16x gtceu:silver_dust','16x gtceu:electrum_dust','16x prts:basic_wanzi')
    .itemOutputs('64x gtceu:blue_alloy_ingot')
    .duration(300)
    .EUt(30)//蓝色合金锭制作2

    event.recipes.gtceu.chaogaosuhejinyelian_1('walapasihejinyelian')
    .circuit(2)
    .itemInputs('8x prts:basic_wanzi','4x prts:type_one_wanzi_special_alloy','4x gtceu:gold_dust')
    .itemOutputs('16x gtceu:waw_ingot')
    .inputFluids(Fluid.of('minecraft:lava',100))
    .duration(300)
    .EUt(128)
    //瓦拉帕斯材料制作1
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejinyelian_1')
    .circuit(2)
    .itemInputs('15x prts:compression_type_wanzi','4x prts:teshuhejinkuai','36x gtceu:gold_dust')
    .itemOutputs('20x gtceu:waw_block')
    .inputFluids(Fluid.of('minecraft:lava',900))
    .duration(1350)
    .EUt(128)
    //瓦拉帕斯材料制作2
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:teshuhejinyelian_2')
    .circuit(2)
    .itemInputs('75x prts:basic_wanzi','4x prts:teshuhejinkuai','36x gtceu:gold_dust')
    .itemOutputs('8x gtceu:waw_block')
    .inputFluids(Fluid.of('minecraft:lava',900))
    .duration(1350)
    .EUt(128)
    //瓦拉帕斯材料制作3

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:soldering_alloy_1')
    .circuit(1)
    .itemInputs('gtceu:antimony_dust','3x #forge:dusts/tin','6x #forge:dusts/lead','5x prts:basic_wanzi')
    .itemOutputs('20x gtceu:soldering_alloy_ingot')
    .duration(300)
    .EUt(30)//焊锡制作1
    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:soldering_alloy_2')
    .circuit(2)
    .itemInputs('5x gtceu:antimony_dust','14x #forge:dusts/tin','27x #forge:dusts/lead','23x prts:basic_wanzi')
    .itemOutputs('10x gtceu:soldering_alloy_block')
    .duration(300)
    .EUt(30)//焊锡制作2

    event.recipes.gtceu.chaogaosuhejinyelian_1('prts:ultimet_ingot_1')
    .circuit(1)
    .itemInputs('25x #forge:dusts/cobalt','10x gtceu:chromium_dust','5x gtceu:nickel_dust','5x gtceu:molybdenum_dust')
    .itemOutputs('90x gtceu:ultimet_ingot')
    .duration(800)
    .EUt(64)//哈氏合金制作1

    event.recipes.gtceu.chaogaosuhejinyelian_1('gtceu:flt')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x prts:type_two_wanzi_special_alloy','8x prts:type_two_wanzi','4x #gtceu:diamond_yuan')
   .itemOutputs('16x gtceu:flt_ingot')
   .duration(30)
   .EUt(256)//菲利特瓦制作

    event.shaped('gtceu:chaogaosuhejinyelian',[
        ['#forge:storage_blocks/steel','prts:low_voltage_wanzi_circuit','#forge:storage_blocks/steel'],
        ['minecraft:iron_block','gtceu:lv_machine_hull','minecraft:iron_block'],
        ['#forge:storage_blocks/steel','prts:low_voltage_wanzi_circuit','#forge:storage_blocks/steel']
    ])//万子超高速合金冶炼机配方
})

ServerEvents.recipes(event =>{
   const { avaritia } = event.recipes;
   const bas = event.recipes.gtceu.bigger_wanzi_alloy_smelter

   bas('gtceu:molten_ruthenium_trinium_americium_neutronate')
   .circuit(1)
   .notConsumable('16x prts:type_c_phase_change_device')
   .itemInputs('gtceu:ruthenium_dust','2x gtceu:trinium_dust','gtceu:americium_dust','2x gtceu:neutronium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',8000))
   .outputFluids(Fluid.of('gtceu:molten_ruthenium_trinium_americium_neutronate',16128))
   .duration(400)
   .EUt(65536)//熔融钌凯金镅中子素氧化物制作
   bas('gtceu:molten_ruthenium_trinium_americium_neutronate_1')
   .circuit(1)
   .notConsumable('16x prts:type_c_phase_change_device')
   .itemInputs('gtceu:ruthenium_dust','2x gtceu:trinium_dust','gtceu:americium_dust','2x gtceu:neutronium_dust','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',8000))
   .outputFluids(Fluid.of('gtceu:molten_ruthenium_trinium_americium_neutronate',32256))
   .duration(400)
   .EUt(65536)//熔融钌凯金镅中子素氧化物制作

   bas('gtceu:molten_maraging_steel_300')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('16x #forge:dusts/iron','gtceu:titanium_dust','gtceu:aluminium_dust','4x gtceu:nickel_dust','2x #forge:dusts/cobalt','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_maraging_steel_300',27648))
   .duration(30)
   .EUt(2048)//马氏体时效钢-300制作
   bas('gtceu:molten_maraging_steel_300_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('16x #forge:dusts/iron','gtceu:titanium_dust','gtceu:aluminium_dust','4x gtceu:nickel_dust','2x #forge:dusts/cobalt','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_maraging_steel_300',55296))
   .duration(30)
   .EUt(2048)//马氏体时效钢-300制作

   bas('gtceu:molten_kanthal')
   .circuit(3)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/iron','gtceu:aluminium_dust','gtceu:chromium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_kanthal',3456))
   .duration(30)
   .EUt(64)//坎塔尔合金制作
   bas('gtceu:molten_kanthal_1')
   .circuit(3)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/iron','gtceu:aluminium_dust','gtceu:chromium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_kanthal',6912))
   .duration(30)
   .EUt(64)//坎塔尔合金制作

   bas('gtceu:molten_nichrome')
   .circuit(3)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:nickel_dust','gtceu:chromium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_nichrome',5760))
   .duration(30)
   .EUt(2048)//镍铬合金制作
   bas('gtceu:molten_nichrome_1')
   .circuit(3)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:nickel_dust','gtceu:chromium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_nichrome',11520))
   .duration(30)
   .EUt(2048)//镍铬合金制作

   bas('gtceu:molten_niobium_nitride')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:niobium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:nitrogen',144))
   .outputFluids(Fluid.of('gtceu:molten_niobium_nitride',2304))
   .duration(30)
   .EUt(64)//氮化铌制作
   bas('gtceu:molten_niobium_nitride_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:niobium_dust','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:nitrogen',144))
   .outputFluids(Fluid.of('gtceu:molten_niobium_nitride',4608))
   .duration(30)
   .EUt(64)//氮化铌制作

   bas('gtceu:molten_niobium_titanium')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:niobium_dust','gtceu:titanium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_niobium_titanium',2304))
   .duration(30)
   .EUt(256)//铌钛合金制作
   bas('gtceu:molten_niobium_titanium_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:niobium_dust','gtceu:titanium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_niobium_titanium',4608))
   .duration(30)
   .EUt(256)//铌钛合金制作

   bas('gtceu:molten_black_bronze')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/gold','gtceu:silver_dust','3x #forge:dusts/copper','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_black_bronze',5760))
   .duration(30)
   .EUt(64)//黑青铜制作
   bas('gtceu:molten_black_bronze_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/gold','gtceu:silver_dust','3x #forge:dusts/copper','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_black_bronze',11520))
   .duration(30)
   .EUt(64)//黑青铜制作

   bas('gtceu:molten_ultimet')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('5x #forge:dusts/cobalt','2x gtceu:chromium_dust','gtceu:nickel_dust','gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_ultimet',10368))
   .duration(30)
   .EUt(256)//哈氏合金制作
   bas('gtceu:molten_ultimet_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('5x #forge:dusts/cobalt','2x gtceu:chromium_dust','gtceu:nickel_dust','gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_ultimet',20736))
   .duration(30)
   .EUt(256)//哈氏合金制作

   bas('gtceu:molten_rtm_alloy')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:ruthenium_dust','2x gtceu:tungsten_dust','gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_rtm_alloy',8064))
   .duration(30)
   .EUt(1024)//钌钨钼合金制作
   bas('gtceu:molten_rtm_alloy_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:ruthenium_dust','2x gtceu:tungsten_dust','gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_rtm_alloy',16128))
   .duration(30)
   .EUt(1024)//钌钨钼合金制作

   bas('gtceu:molten_hssg')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('5x gtceu:tungsten_steel_dust','gtceu:chromium_dust','2x gtceu:molybdenum_dust','gtceu:vanadium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hssg',10368))
   .duration(30)
   .EUt(1024)//高速钢-G制作
   bas('gtceu:molten_hssg_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('5x gtceu:tungsten_steel_dust','gtceu:chromium_dust','2x gtceu:molybdenum_dust','gtceu:vanadium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hssg',20736))
   .duration(30)
   .EUt(1024)//高速钢-G制作

   bas('gtceu:molten_uranium_rhodium_dinaquadide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/uranium','2x #forge:dusts/naquadah','gtceu:rhodium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_uranium_rhodium_dinaquadide',4608))
   .duration(30)
   .EUt(1024)//铀铑硅岩合金制作
   bas('gtceu:molten_uranium_rhodium_dinaquadide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/uranium','2x #forge:dusts/naquadah','gtceu:rhodium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_uranium_rhodium_dinaquadide',9216))
   .duration(30)
   .EUt(1024)//铀铑硅岩合金制作

   bas('gtceu:molten_indium_tin_barium_titanium_cuprate')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:indium_dust','2x #forge:dusts/tin','2x gtceu:barium_dust','gtceu:titanium_dust','7x #forge:dusts/copper','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',14000))
   .outputFluids(Fluid.of('gtceu:molten_indium_tin_barium_titanium_cuprate',18432))
   .duration(30)
   .EUt(1024)//铟锡钡钛铜氧化物制作
   bas('gtceu:molten_indium_tin_barium_titanium_cuprate_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:indium_dust','2x #forge:dusts/tin','2x gtceu:barium_dust','gtceu:titanium_dust','7x #forge:dusts/copper','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',14000))
   .outputFluids(Fluid.of('gtceu:molten_indium_tin_barium_titanium_cuprate',36864))
   .duration(30)
   .EUt(1024)//铟锡钡钛铜氧化物制作

   bas('gtceu:molten_samarium_iron_arsenic_oxide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:arsenic_dust','gtceu:samarium_dust','#forge:dusts/iron','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',1000))
   .outputFluids(Fluid.of('gtceu:molten_samarium_iron_arsenic_oxide',4608))
   .duration(30)
   .EUt(1024)//钐铁砷氧化物制作
   bas('gtceu:molten_samarium_iron_arsenic_oxide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:arsenic_dust','gtceu:samarium_dust','#forge:dusts/iron','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',1000))
   .outputFluids(Fluid.of('gtceu:molten_samarium_iron_arsenic_oxide',9216))
   .duration(30)
   .EUt(1024)//钐铁砷氧化物制作

   bas('gtceu:molten_uranium_triplatinum')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/uranium','3x gtceu:platinum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_uranium_triplatinum',4608))
   .duration(30)
   .EUt(1024)//三铂化铀制作
   bas('gtceu:molten_uranium_triplatinum_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/uranium','3x gtceu:platinum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_uranium_triplatinum',9216))
   .duration(30)
   .EUt(1024)//三铂化铀制作

   bas('gtceu:molten_mercury_barium_calcium_cuprate')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/copper','2x gtceu:calcium_dust','2x gtceu:barium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',8000))
   .inputFluids(Fluid.of('gtceu:mercury',1000))
   .outputFluids(Fluid.of('gtceu:molten_mercury_barium_calcium_cuprate',18432))
   .duration(30)
   .EUt(256)//汞钡钙铜氧化物制作
   bas('gtceu:molten_mercury_barium_calcium_cuprate_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/copper','2x gtceu:calcium_dust','2x gtceu:barium_dust','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',8000))
   .inputFluids(Fluid.of('gtceu:mercury',1000))
   .outputFluids(Fluid.of('gtceu:molten_mercury_barium_calcium_cuprate',36864))
   .duration(30)
   .EUt(256)//汞钡钙铜氧化物制作

   bas('gtceu:molten_magnesium_diboride')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:boron_dust','gtceu:magnesium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_magnesium_diboride',3456))
   .duration(30)
   .EUt(256)//二硼化镁制作
   bas('gtceu:molten_magnesium_diboride_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:boron_dust','gtceu:magnesium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_magnesium_diboride',6912))
   .duration(30)
   .EUt(256)//二硼化镁制作

   bas('gtceu:molten_tungsten_carbide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:tungsten_dust','gtceu:carbon_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tungsten_carbide',2304))
   .duration(30)
   .EUt(1024)//碳化钨制作
   bas('gtceu:molten_tungsten_carbide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:tungsten_dust','gtceu:carbon_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tungsten_carbide',4608))
   .duration(30)
   .EUt(1024)//碳化钨制作

   bas('gtceu:molten_osmiridium')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_osmiridium',4608))
   .duration(30)
   .EUt(1024)//铱锇合金制作
   bas('gtceu:molten_osmiridium_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_osmiridium',9216))
   .duration(30)
   .EUt(1024)//铱锇合金制作

   bas('gtceu:molten_yttrium_barium_cuprate')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/copper','gtceu:yttrium_dust','2x gtceu:barium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',7000))
   .outputFluids(Fluid.of('gtceu:molten_yttrium_barium_cuprate',14976))
   .duration(30)
   .EUt(4096)//钇钡铜氧化物制作
   bas('gtceu:molten_yttrium_barium_cuprate_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/copper','gtceu:yttrium_dust','2x gtceu:barium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_yttrium_barium_cuprate',29952))
   .duration(30)
   .EUt(4096)//钇钡铜氧化物制作

   bas('gtceu:molten_vanadium_gallium')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:gallium_dust','gtceu:vanadium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_vanadium_gallium',4608))
   .duration(30)
   .EUt(4096)//钒镓合金制作
   bas('gtceu:molten_vanadium_gallium_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:gallium_dust','gtceu:vanadium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_vanadium_gallium',9216))
   .duration(30)
   .EUt(4096)//钒镓合金制作

   bas('gtceu:molten_enriched_naquadah_trinium_europium_duranide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:duranium_dust','2x gtceu:europium_dust','3x gtceu:trinium_dust','4x gtceu:enriched_naquadah_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_enriched_naquadah_trinium_europium_duranide',11520))
   .duration(30)
   .EUt(4096)//富集硅岩凯金铕铿铀合金制作
   bas('gtceu:molten_enriched_naquadah_trinium_europium_duranide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:duranium_dust','2x gtceu:europium_dust','3x gtceu:trinium_dust','4x gtceu:enriched_naquadah_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_enriched_naquadah_trinium_europium_duranide',23040))
   .duration(30)
   .EUt(4096)//富集硅岩凯金铕铿铀合金制作

   bas('gtceu:molten_black_steel')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:nickel_dust','gtceu:black_bronze_dust','3x #forge:dusts/steel','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_black_steel',5760))
   .duration(30)
   .EUt(64)//黑钢制作
   bas('gtceu:molten_black_steel_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:nickel_dust','gtceu:black_bronze_dust','3x #forge:dusts/steel','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_black_steel',11520))
   .duration(30)
   .EUt(64)//黑钢制作

   bas('gtceu:molten_tungsten_steel')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/steel','gtceu:tungsten_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tungsten_steel',2304))
   .duration(30)
   .EUt(1024)//钨钢制作
   bas('gtceu:molten_tungsten_steel_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/steel','gtceu:tungsten_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tungsten_steel',4608))
   .duration(30)
   .EUt(1024)//钨钢制作

   bas('gtceu:molten_naquadah_alloy')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x #forge:dusts/naquadah','gtceu:osmiridium_dust','gtceu:trinium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_naquadah_alloy',2304))
   .duration(30)
   .EUt(1024)//硅岩合金制作
   bas('gtceu:molten_naquadah_alloy_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x #forge:dusts/naquadah','gtceu:osmiridium_dust','gtceu:trinium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_naquadah_alloy',4608))
   .duration(30)
   .EUt(1024)//硅岩合金制作

   bas('gtceu:molten_rhodium_plated_palladium')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:palladium_dust','gtceu:rhodium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_rhodium_plated_palladium',4608))
   .duration(30)
   .EUt(1024)//镀铑钯制作
   bas('gtceu:molten_rhodium_plated_palladium_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x gtceu:palladium_dust','gtceu:rhodium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_rhodium_plated_palladium',9216))
   .duration(30)
   .EUt(1024)//镀铑钯制作

   bas('gtceu:molten_red_steel')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:rose_gold_dust','gtceu:brass_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_red_steel',9216))
   .duration(30)
   .EUt(256)//红钢制作
   bas('gtceu:molten_red_steel_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:rose_gold_dust','gtceu:brass_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_red_steel',18432))
   .duration(30)
   .EUt(256)//红钢制作

   bas('gtceu:molten_blue_steel')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:sterling_silver_dust','gtceu:bismuth_bronze_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_blue_steel',9216))
   .duration(30)
   .EUt(256)//蓝钢制作
   bas('gtceu:molten_blue_steel_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:sterling_silver_dust','gtceu:bismuth_bronze_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_blue_steel',18432))
   .duration(30)
   .EUt(256)//蓝钢制作

   bas('gtceu:molten_hsse')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/cobalt','gtceu:manganese_dust','gtceu:silicon_dust','6x gtceu:hssg_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsse',10368))
   .duration(30)
   .EUt(1024)//高速钢-E制作
   bas('gtceu:molten_hsse_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('#forge:dusts/cobalt','gtceu:manganese_dust','gtceu:silicon_dust','6x gtceu:hssg_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsse',20736))
   .duration(30)
   .EUt(1024)//高速钢-E制作

   bas('gtceu:molten_hsss')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('6x gtceu:hssg_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsss',10368))
   .duration(30)
   .EUt(1024)//高速钢-S制作
   bas('gtceu:molten_hsss_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('6x gtceu:hssg_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsss',20736))
   .duration(30)
   .EUt(1024)//高速钢-S制作
   bas('gtceu:molten_hsss_2')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('6x gtceu:hsse_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsss',20736))
   .duration(30)
   .EUt(1024)//高速钢-S制作
   bas('gtceu:molten_hsss_3')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('6x gtceu:hsse_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hsss',41472))
   .duration(30)
   .EUt(1024)//高速钢-S制作

   bas('gtceu:molten_hastelloy_c_276')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('12x gtceu:nickel_dust','8x gtceu:molybdenum_dust','7x gtceu:chromium_dust','gtceu:tungsten_dust','#forge:dusts/cobalt','#forge:dusts/copper','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hastelloy_c_276',34560))
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金制作
   bas('gtceu:molten_hastelloy_c_276_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('12x gtceu:nickel_dust','8x gtceu:molybdenum_dust','7x gtceu:chromium_dust','gtceu:tungsten_dust','#forge:dusts/cobalt','#forge:dusts/copper','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hastelloy_c_276',69120))
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金制作

   bas('gtceu:molten_titanium_tungsten_carbide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:titanium_carbide_dust','gtceu:tungsten_carbide_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_titanium_tungsten_carbide',3456))
   .duration(30)
   .EUt(1024)//碳化钛钨制作
   bas('gtceu:molten_titanium_tungsten_carbide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:titanium_carbide_dust','gtceu:tungsten_carbide_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_titanium_tungsten_carbide',6912))
   .duration(30)
   .EUt(1024)//碳化钛钨制作

   bas('gtceu:molten_titanium_carbide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:carbon_dust','gtceu:titanium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_titanium_carbide',2304))
   .duration(30)
   .EUt(1024)//碳化钛制作
   bas('gtceu:molten_titanium_carbide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:carbon_dust','gtceu:titanium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_titanium_carbide',4608))
   .duration(30)
   .EUt(1024)//碳化钛制作

   bas('gtceu:molten_stellite_100')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/iron','gtceu:molybdenum_dust','2x gtceu:tungsten_dust','4x gtceu:chromium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_stellite_100',11520))
   .duration(30)
   .EUt(1024)//司立太-100制作
   bas('gtceu:molten_stellite_100_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/iron','gtceu:molybdenum_dust','2x gtceu:tungsten_dust','4x gtceu:chromium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_stellite_100',23040))
   .duration(30)
   .EUt(1024)//司立太-100制作

   bas('gtceu:molten_hastelloy_x')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/iron','gtceu:chromium_dust','gtceu:niobium_dust','12x gtceu:nickel_dust','4x gtceu:tungsten_dust','2x gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hastelloy_x',21888))
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金-X制作
   bas('gtceu:molten_hastelloy_x_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('3x #forge:dusts/iron','gtceu:chromium_dust','gtceu:niobium_dust','12x gtceu:nickel_dust','4x gtceu:tungsten_dust','2x gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_hastelloy_x',43776))
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金-X制作

   bas('gtceu:molten_incoloy_ma_956')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:vanadium_steel_dust','2x gtceu:manganese_dust','5x gtceu:aluminium_dust','2x gtceu:yttrium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_incoloy_ma_956',14976))
   .duration(30)
   .EUt(1024)//耐热铬铁合金MA-956制作
   bas('gtceu:molten_incoloy_ma_956_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x gtceu:vanadium_steel_dust','2x gtceu:manganese_dust','5x gtceu:aluminium_dust','2x gtceu:yttrium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_incoloy_ma_956',29952))
   .duration(30)
   .EUt(1024)//耐热铬铁合金MA-956制作

   bas('gtceu:molten_watertight_steel')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('7x #forge:dusts/iron','4x gtceu:aluminium_dust','2x gtceu:nickel_dust','gtceu:chromium_dust','#forge:dusts/sulfur','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_watertight_steel',17280))
   .duration(30)
   .EUt(1024)//防水钢制作
   bas('gtceu:molten_watertight_steel_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('7x #forge:dusts/iron','4x gtceu:aluminium_dust','2x gtceu:nickel_dust','gtceu:chromium_dust','#forge:dusts/sulfur','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_watertight_steel',34560))
   .duration(30)
   .EUt(1024)//防水钢制作

   bas('gtceu:molten_zeron_100')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('10x #forge:dusts/iron','2x gtceu:nickel_dust','2x gtceu:tungsten_dust','gtceu:niobium_dust','gtceu:cobalt_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_zeron_100',18432))
   .duration(30)
   .EUt(1024)//赛龙-100制作
   bas('gtceu:molten_zeron_100_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('10x #forge:dusts/iron','2x gtceu:nickel_dust','2x gtceu:tungsten_dust','gtceu:niobium_dust','gtceu:cobalt_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_zeron_100',36864))
   .duration(30)
   .EUt(1024)//赛龙-100制作

   bas('gtceu:molten_molybdenum_disilicide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x #forge:dusts/silicon','gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_molybdenum_disilicide',3456))
   .duration(30)
   .EUt(1024)//二硅化钼制作
   bas('gtceu:molten_molybdenum_disilicide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x #forge:dusts/silicon','gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_molybdenum_disilicide',6912))
   .duration(30)
   .EUt(1024)//二硅化钼制作

   bas('gtceu:molten_ruridit')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:ruthenium_dust','gtceu:iridium_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_ruridit',3456))
   .duration(30)
   .EUt(1024)//铱钌合金制作
   bas('gtceu:molten_ruridit_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('2x gtceu:ruthenium_dust','gtceu:iridium_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_ruridit',6912))
   .duration(30)
   .EUt(1024)//铱钌合金制作

   bas('gtceu:molten_tantalum_carbide')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:carbon_dust','gtceu:tantalum_dust','64x prts:basic_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tantalum_carbide',2304))
   .duration(30)
   .EUt(1024)//碳化钽制作
   bas('gtceu:molten_tantalum_carbide_1')
   .circuit(1)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('gtceu:carbon_dust','gtceu:tantalum_dust','64x prts:type_one_wanzi')
   .outputFluids(Fluid.of('gtceu:molten_tantalum_carbide',4608))
   .duration(30)
   .EUt(1024)//碳化钽制作

   bas('prts:type_one_alloy')
   .circuit(6)
   .itemInputs('4x #gtceu:iron_yuan','4x prts:basic_wanzi','gtceu:red_alloy_ingot')
   .itemOutputs('32x prts:type_one_wanzi_special_alloy')
   .duration(30)
   .EUt(32)//一型万子特殊合金
   bas('prts:type_two_alloy')
   .circuit(6)
   .itemInputs('5x #forge:dusts/tin','4x #forge:dusts/copper','4x prts:basic_wanzi','prts:type_one_wanzi_special_alloy')
   .itemOutputs('32x prts:type_two_wanzi_special_alloy')
   .duration(30)
   .EUt(32)//二型万子特殊合金
   bas('gtceu:waw')
   .circuit(6)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x prts:type_one_wanzi_special_alloy','8x prts:basic_wanzi','4x #forge:dusts/gold')
   .outputFluids(Fluid.of('gtceu:waw',15552))
   .duration(30)
   .EUt(64)//瓦拉帕斯制作
   bas('gtceu:flt')
   .circuit(6)
   .notConsumable('prts:type_c_phase_change_device')
   .itemInputs('4x prts:type_two_wanzi_special_alloy','8x prts:type_one_wanzi','4x #gtceu:diamond_yuan')
   .outputFluids(Fluid.of('gtceu:flt',15552))
   .duration(30)
   .EUt(64)//菲利特瓦制作

//■\/■\/■\/■\/■\/■\/■\/■\/■\板材蓝图应用/■\/■\/■\/■\/■\/■\/■\/■\/■\\

   bas('gtceu:molten_maraging_steel_300_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('16x #forge:dusts/iron','gtceu:titanium_dust','gtceu:aluminium_dust','4x gtceu:nickel_dust','2x #forge:dusts/cobalt','64x prts:basic_wanzi')
   .itemOutputs('192x gtceu:maraging_steel_300_plate')
   .duration(30)
   .EUt(2048)//马氏体时效钢-300板制作
   bas('gtceu:molten_maraging_steel_300_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('16x #forge:dusts/iron','gtceu:titanium_dust','gtceu:aluminium_dust','4x gtceu:nickel_dust','2x #forge:dusts/cobalt','64x prts:type_one_wanzi')
   .itemOutputs('384x gtceu:maraging_steel_300_plate')
   .duration(30)
   .EUt(2048)//马氏体时效钢-300板制作

   bas('gtceu:molten_kanthal_plate')
   .circuit(4)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('#forge:dusts/iron','gtceu:aluminium_dust','gtceu:chromium_dust','64x prts:basic_wanzi')
   .itemOutputs('24x gtceu:kanthal_plate')
   .duration(30)
   .EUt(64)//坎塔尔合金板制作
   bas('gtceu:molten_kanthal_plate_1')
   .circuit(4)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('#forge:dusts/iron','gtceu:aluminium_dust','gtceu:chromium_dust','64x prts:type_one_wanzi')
   .itemOutputs('48x gtceu:kanthal_plate')
   .duration(30)
   .EUt(64)//坎塔尔合金板制作

   bas('gtceu:molten_nichrome_plate')
   .circuit(4)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:nickel_dust','gtceu:chromium_dust','64x prts:basic_wanzi')
   .itemOutputs('40x gtceu:nichrome_plate')
   .duration(30)
   .EUt(2048)//镍铬合金板制作
   bas('gtceu:molten_nichrome_plate_1')
   .circuit(4)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:nickel_dust','gtceu:chromium_dust','64x prts:type_one_wanzi')
   .itemOutputs('80x gtceu:nichrome_plate')
   .duration(30)
   .EUt(2048)//镍铬合金板制作

   bas('gtceu:molten_niobium_nitride_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('gtceu:niobium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:nitrogen',144))
   .itemOutputs('16x gtceu:niobium_nitride_plate')
   .duration(30)
   .EUt(64)//氮化铌板制作
   bas('gtceu:molten_niobium_nitride_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('gtceu:niobium_dust','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:nitrogen',144))
   .itemOutputs('32x gtceu:niobium_nitride_plate')
   .duration(30)
   .EUt(64)//氮化铌板制作

   bas('gtceu:molten_niobium_titanium_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:niobium_dust','gtceu:titanium_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:niobium_titanium_plate')
   .duration(30)
   .EUt(256)//铌钛合金板制作
   bas('gtceu:molten_niobium_titanium_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:niobium_dust','gtceu:titanium_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:niobium_titanium_plate')
   .duration(30)
   .EUt(256)//铌钛合金板制作

   bas('gtceu:molten_black_bronze_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('#forge:dusts/gold','gtceu:silver_dust','3x #forge:dusts/copper','64x prts:basic_wanzi')
   .itemOutputs('40x gtceu:black_bronze_plate')
   .duration(30)
   .EUt(64)//黑青铜板制作
   bas('gtceu:molten_black_bronze_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('#forge:dusts/gold','gtceu:silver_dust','3x #forge:dusts/copper','64x prts:type_one_wanzi')
   .itemOutputs('80x gtceu:black_bronze_plate')
   .duration(30)
   .EUt(64)//黑青铜板制作

   bas('gtceu:molten_ultimet_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('5x #forge:dusts/cobalt','2x gtceu:chromium_dust','gtceu:nickel_dust','gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .itemOutputs('72x gtceu:ultimet_plate')
   .duration(30)
   .EUt(256)//哈氏合金板制作
   bas('gtceu:molten_ultimet_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('5x #forge:dusts/cobalt','2x gtceu:chromium_dust','gtceu:nickel_dust','gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .itemOutputs('144x gtceu:ultimet_plate')
   .duration(30)
   .EUt(256)//哈氏合金板制作

   bas('gtceu:molten_hssg_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('5x gtceu:tungsten_steel_dust','gtceu:chromium_dust','2x gtceu:molybdenum_dust','gtceu:vanadium_dust','64x prts:basic_wanzi')
   .itemOutputs('72x gtceu:hssg_plate')
   .duration(30)
   .EUt(1024)//高速钢-G板制作
   bas('gtceu:molten_hssg_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('5x gtceu:tungsten_steel_dust','gtceu:chromium_dust','2x gtceu:molybdenum_dust','gtceu:vanadium_dust','64x prts:type_one_wanzi')
   .itemOutputs('144x gtceu:hssg_plate')
   .duration(30)
   .EUt(1024)//高速钢-G板制作

   bas('gtceu:molten_uranium_rhodium_dinaquadide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/uranium','2x #forge:dusts/naquadah','gtceu:rhodium_dust','64x prts:basic_wanzi')
   .itemOutputs('32x gtceu:uranium_rhodium_dinaquadide_plate')
   .duration(30)
   .EUt(1024)//铀铑硅岩合金板制作
   bas('gtceu:molten_uranium_rhodium_dinaquadide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/uranium','2x #forge:dusts/naquadah','gtceu:rhodium_dust','64x prts:type_one_wanzi')
   .itemOutputs('64x gtceu:uranium_rhodium_dinaquadide_plate')
   .duration(30)
   .EUt(1024)//铀铑硅岩合金板制作

   bas('gtceu:molten_indium_tin_barium_titanium_cuprate_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:indium_dust','2x #forge:dusts/tin','2x gtceu:barium_dust','gtceu:titanium_dust','7x #forge:dusts/copper','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',14000))
   .itemOutputs('128x gtceu:indium_tin_barium_titanium_cuprate_plate')
   .duration(30)
   .EUt(1024)//铟锡钡钛铜氧化物板制作
   bas('gtceu:molten_indium_tin_barium_titanium_cuprate_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:indium_dust','2x #forge:dusts/tin','2x gtceu:barium_dust','gtceu:titanium_dust','7x #forge:dusts/copper','64x prts:type_one_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',14000))
   .itemOutputs('256x gtceu:indium_tin_barium_titanium_cuprate_plate')
   .duration(30)
   .EUt(1024)//铟锡钡钛铜氧化物板制作

   bas('gtceu:molten_tungsten_carbide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:tungsten_dust','gtceu:carbon_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:tungsten_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钨板制作
   bas('gtceu:molten_tungsten_carbide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:tungsten_dust','gtceu:carbon_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:tungsten_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钨板制作

   bas('gtceu:molten_osmiridium_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .itemOutputs('32x gtceu:osmiridium_plate')
   .duration(30)
   .EUt(1024)//铱锇合金板制作
   bas('gtceu:molten_osmiridium_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .itemOutputs('64x gtceu:osmiridium_plate')
   .duration(30)
   .EUt(1024)//铱锇合金板制作

   bas('gtceu:molten_yttrium_barium_cuprate_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('3x #forge:dusts/copper','gtceu:yttrium_dust','2x gtceu:barium_dust','64x prts:basic_wanzi')
   .inputFluids(Fluid.of('gtceu:oxygen',7000))
   .itemOutputs('104x gtceu:yttrium_barium_cuprate_plate')
   .duration(30)
   .EUt(4096)//钇钡铜氧化物板制作
   bas('gtceu:molten_yttrium_barium_cuprate_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('3x #forge:dusts/copper','gtceu:yttrium_dust','2x gtceu:barium_dust','64x prts:type_one_wanzi')
   .itemOutputs('208x gtceu:yttrium_barium_cuprate_plate')
   .duration(30)
   .EUt(4096)//钇钡铜氧化物板制作

   bas('gtceu:molten_vanadium_gallium_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('3x gtceu:gallium_dust','gtceu:vanadium_dust','64x prts:basic_wanzi')
   .itemOutputs('32x gtceu:vanadium_gallium_plate')
   .duration(30)
   .EUt(4096)//钒镓合金板制作
   bas('gtceu:molten_vanadium_gallium_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('3x gtceu:gallium_dust','gtceu:vanadium_dust','64x prts:type_one_wanzi')
   .itemOutputs('64x gtceu:vanadium_gallium_plate')
   .duration(30)
   .EUt(4096)//钒镓合金板制作

   bas('gtceu:molten_enriched_naquadah_trinium_europium_duranide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('gtceu:duranium_dust','2x gtceu:europium_dust','3x gtceu:trinium_dust','4x gtceu:enriched_naquadah_dust','64x prts:basic_wanzi')
   .itemOutputs('80x gtceu:enriched_naquadah_trinium_europium_duranide_plate')
   .duration(30)
   .EUt(4096)//富集硅岩凯金铕铿铀合金板制作
   bas('gtceu:molten_enriched_naquadah_trinium_europium_duranide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2500,500)
   .itemInputs('gtceu:duranium_dust','2x gtceu:europium_dust','3x gtceu:trinium_dust','4x gtceu:enriched_naquadah_dust','64x prts:type_one_wanzi')
   .itemOutputs('160x gtceu:enriched_naquadah_trinium_europium_duranide_plate')
   .duration(30)
   .EUt(4096)//富集硅岩凯金铕铿铀合金板制作

   bas('gtceu:molten_black_steel_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('gtceu:nickel_dust','gtceu:black_bronze_dust','3x #forge:dusts/steel','64x prts:basic_wanzi')
   .itemOutputs('40x gtceu:black_steel_plate')
   .duration(30)
   .EUt(64)//黑钢板制作
   bas('gtceu:molten_black_steel_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1000,500)
   .itemInputs('gtceu:nickel_dust','gtceu:black_bronze_dust','3x #forge:dusts/steel','64x prts:type_one_wanzi')
   .itemOutputs('80x gtceu:black_steel_plate')
   .duration(30)
   .EUt(64)//黑钢板制作

   bas('gtceu:molten_tungsten_steel_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/steel','gtceu:tungsten_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:tungsten_steel_plate')
   .duration(30)
   .EUt(1024)//钨钢板制作
   bas('gtceu:molten_tungsten_steel_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/steel','gtceu:tungsten_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:tungsten_steel_plate')
   .duration(30)
   .EUt(1024)//钨钢板制作

   bas('gtceu:molten_naquadah_alloy_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x #forge:dusts/naquadah','gtceu:osmiridium_dust','gtceu:trinium_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:naquadah_alloy_plate')
   .duration(30)
   .EUt(1024)//硅岩合金板制作
   bas('gtceu:molten_naquadah_alloy_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x #forge:dusts/naquadah','gtceu:osmiridium_dust','gtceu:trinium_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:naquadah_alloy_plate')
   .duration(30)
   .EUt(1024)//硅岩合金板制作

   bas('gtceu:molten_rhodium_plated_palladium_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x gtceu:palladium_dust','gtceu:rhodium_dust','64x prts:basic_wanzi')
   .itemOutputs('32x gtceu:rhodium_plated_palladium_plate')
   .duration(30)
   .EUt(1024)//镀铑钯板制作
   bas('gtceu:molten_rhodium_plated_palladium_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x gtceu:palladium_dust','gtceu:rhodium_dust','64x prts:type_one_wanzi')
   .itemOutputs('64x gtceu:rhodium_plated_palladium_plate')
   .duration(30)
   .EUt(1024)//镀铑钯板制作

   bas('gtceu:molten_red_steel_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:rose_gold_dust','gtceu:brass_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:basic_wanzi')
   .itemOutputs('64x gtceu:red_steel_plate')
   .duration(30)
   .EUt(256)//红钢板制作
   bas('gtceu:molten_red_steel_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:rose_gold_dust','gtceu:brass_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:type_one_wanzi')
   .itemOutputs('128x gtceu:red_steel_plate')
   .duration(30)
   .EUt(256)//红钢板制作

   bas('gtceu:molten_blue_steel_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:sterling_silver_dust','gtceu:bismuth_bronze_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:basic_wanzi')
   .itemOutputs('64x gtceu:blue_steel_plate')
   .duration(30)
   .EUt(256)//蓝钢板制作
   bas('gtceu:molten_blue_steel_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',1500,500)
   .itemInputs('gtceu:sterling_silver_dust','gtceu:bismuth_bronze_dust','4x gtceu:black_steel_dust','2x #forge:dusts/steel','64x prts:type_one_wanzi')
   .itemOutputs('128x gtceu:blue_steel_plate')
   .duration(30)
   .EUt(256)//蓝钢板制作

   bas('gtceu:molten_hsse_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/cobalt','gtceu:manganese_dust','gtceu:silicon_dust','6x gtceu:hssg_dust','64x prts:basic_wanzi')
   .itemOutputs('72x gtceu:hsse_plate')
   .duration(30)
   .EUt(1024)//高速钢-E板制作
   bas('gtceu:molten_hsse_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('#forge:dusts/cobalt','gtceu:manganese_dust','gtceu:silicon_dust','6x gtceu:hssg_dust','64x prts:type_one_wanzi')
   .itemOutputs('144x gtceu:hsse_plate')
   .duration(30)
   .EUt(1024)//高速钢-E板制作

   bas('gtceu:molten_hsss_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('6x gtceu:hssg_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .itemOutputs('72x gtceu:hsss_plate')
   .duration(30)
   .EUt(1024)//高速钢-S板制作
   bas('gtceu:molten_hsss_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('6x gtceu:hssg_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .itemOutputs('144x gtceu:hsss_plate')
   .duration(30)
   .EUt(1024)//高速钢-S板制作
   bas('gtceu:molten_hsss_plate_2')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('6x gtceu:hsse_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:basic_wanzi')
   .itemOutputs('144x gtceu:hsss_plate')
   .duration(30)
   .EUt(1024)//高速钢-S板制作
   bas('gtceu:molten_hsss_plate_3')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('6x gtceu:hsse_dust','2x gtceu:iridium_dust','#forge:dusts/osmium','64x prts:type_one_wanzi')
   .itemOutputs('288x gtceu:hsss_plate')
   .duration(30)
   .EUt(1024)//高速钢-S板制作

   bas('gtceu:molten_hastelloy_c_276_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('12x gtceu:nickel_dust','8x gtceu:molybdenum_dust','7x gtceu:chromium_dust','gtceu:tungsten_dust','#forge:dusts/cobalt','#forge:dusts/copper','64x prts:basic_wanzi')
   .itemOutputs('240x gtceu:hastelloy_c_276_plate')
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金板制作
   bas('gtceu:molten_hastelloy_c_276_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('12x gtceu:nickel_dust','8x gtceu:molybdenum_dust','7x gtceu:chromium_dust','gtceu:tungsten_dust','#forge:dusts/cobalt','#forge:dusts/copper','64x prts:type_one_wanzi')
   .itemOutputs('480x gtceu:hastelloy_c_276_plate')
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金板制作

   bas('gtceu:molten_titanium_tungsten_carbide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x gtceu:titanium_carbide_dust','gtceu:tungsten_carbide_dust','64x prts:basic_wanzi')
   .itemOutputs('24x gtceu:titanium_tungsten_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钛钨板制作
   bas('gtceu:molten_titanium_tungsten_carbide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x gtceu:titanium_carbide_dust','gtceu:tungsten_carbide_dust','64x prts:type_one_wanzi')
   .itemOutputs('48x gtceu:titanium_tungsten_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钛钨板制作

   bas('gtceu:molten_titanium_carbide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:carbon_dust','gtceu:titanium_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:titanium_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钛板制作
   bas('gtceu:molten_titanium_carbide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:carbon_dust','gtceu:titanium_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:titanium_carbide_plate')
   .duration(30)
   .EUt(1024)//碳化钛板制作

   bas('gtceu:molten_stellite_100_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x #forge:dusts/iron','gtceu:molybdenum_dust','2x gtceu:tungsten_dust','4x gtceu:chromium_dust','64x prts:basic_wanzi')
   .itemOutputs('80x gtceu:stellite_100_plate')
   .duration(30)
   .EUt(1024)//司立太-100板制作
   bas('gtceu:molten_stellite_100_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x #forge:dusts/iron','gtceu:molybdenum_dust','2x gtceu:tungsten_dust','4x gtceu:chromium_dust','64x prts:type_one_wanzi')
   .itemOutputs('160x gtceu:stellite_100_plate')
   .duration(30)
   .EUt(1024)//司立太-100板制作

   bas('gtceu:molten_hastelloy_x_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x #forge:dusts/iron','gtceu:chromium_dust','gtceu:niobium_dust','12x gtceu:nickel_dust','4x gtceu:tungsten_dust','2x gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .itemOutputs('152x gtceu:hastelloy_x_plate')
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金-X板制作
   bas('gtceu:molten_hastelloy_x_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('3x #forge:dusts/iron','gtceu:chromium_dust','gtceu:niobium_dust','12x gtceu:nickel_dust','4x gtceu:tungsten_dust','2x gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .itemOutputs('304x gtceu:hastelloy_x_plate')
   .duration(30)
   .EUt(1024)//哈斯特洛伊合金-X板制作

   bas('gtceu:molten_incoloy_ma_956_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:vanadium_steel_dust','2x gtceu:manganese_dust','5x gtceu:aluminium_dust','2x gtceu:yttrium_dust','64x prts:basic_wanzi')
   .itemOutputs('104x gtceu:incoloy_ma_956_plate')
   .duration(30)
   .EUt(1024)//耐热铬铁合金MA-956板制作
   bas('gtceu:molten_incoloy_ma_956_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('4x gtceu:vanadium_steel_dust','2x gtceu:manganese_dust','5x gtceu:aluminium_dust','2x gtceu:yttrium_dust','64x prts:type_one_wanzi')
   .itemOutputs('208x gtceu:incoloy_ma_956_plate')
   .duration(30)
   .EUt(1024)//耐热铬铁合金MA-956板制作

   bas('gtceu:molten_watertight_steel_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('7x #forge:dusts/iron','4x gtceu:aluminium_dust','2x gtceu:nickel_dust','gtceu:chromium_dust','#forge:dusts/sulfur','64x prts:basic_wanzi')
   .itemOutputs('120x gtceu:watertight_steel_plate')
   .duration(30)
   .EUt(1024)//防水钢板制作
   bas('gtceu:molten_watertight_steel_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('7x #forge:dusts/iron','4x gtceu:aluminium_dust','2x gtceu:nickel_dust','gtceu:chromium_dust','#forge:dusts/sulfur','64x prts:type_one_wanzi')
   .itemOutputs('240x gtceu:watertight_steel_plate')
   .duration(30)
   .EUt(1024)//防水钢板制作

   bas('gtceu:molten_zeron_100_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('10x #forge:dusts/iron','2x gtceu:nickel_dust','2x gtceu:tungsten_dust','gtceu:niobium_dust','gtceu:cobalt_dust','64x prts:basic_wanzi')
   .itemOutputs('128x gtceu:zeron_100_plate')
   .duration(30)
   .EUt(1024)//赛龙-100板制作
   bas('gtceu:molten_zeron_100_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('10x #forge:dusts/iron','2x gtceu:nickel_dust','2x gtceu:tungsten_dust','gtceu:niobium_dust','gtceu:cobalt_dust','64x prts:type_one_wanzi')
   .itemOutputs('256x gtceu:zeron_100_plate')
   .duration(30)
   .EUt(1024)//赛龙-100板制作

   bas('gtceu:molten_molybdenum_disilicide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x #forge:dusts/silicon','gtceu:molybdenum_dust','64x prts:basic_wanzi')
   .itemOutputs('24x gtceu:disilicide_plate')
   .duration(30)
   .EUt(1024)//二硅化钼板制作
   bas('gtceu:molten_molybdenum_disilicide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x #forge:dusts/silicon','gtceu:molybdenum_dust','64x prts:type_one_wanzi')
   .itemOutputs('48x gtceu:disilicide_plate')
   .duration(30)
   .EUt(1024)//二硅化钼板制作

   bas('gtceu:molten_ruridit_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x gtceu:ruthenium_dust','gtceu:iridium_dust','64x prts:basic_wanzi')
   .itemOutputs('24x gtceu:ruridit_plate')
   .duration(30)
   .EUt(1024)//铱钌合金板制作
   bas('gtceu:molten_ruridit_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('2x gtceu:ruthenium_dust','gtceu:iridium_dust','64x prts:type_one_wanzi')
   .itemOutputs('48x gtceu:ruridit_plate')
   .duration(30)
   .EUt(1024)//铱钌合金板制作

   bas('gtceu:molten_tantalum_carbide_plate')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:carbon_dust','gtceu:tantalum_dust','64x prts:basic_wanzi')
   .itemOutputs('16x gtceu:ruridit_plate')
   .duration(30)
   .EUt(1024)//碳化钽板制作
   bas('gtceu:molten_tantalum_carbide_plate_1')
   .circuit(2)
   .notConsumable('prts:type_c_phase_change_device')
   .chancedInput('prts:blueprint_plate',2000,500)
   .itemInputs('gtceu:carbon_dust','gtceu:tantalum_dust','64x prts:type_one_wanzi')
   .itemOutputs('32x gtceu:ruridit_plate')
   .duration(30)
   .EUt(1024)//碳化钽板制作

   avaritia.shaped_table(2,
    "gtceu:bigger_wanzi_alloy_smelter_factory",
    [
        "AAAAA",
        "ABCBA",
        "ABSBA",
        "ABCBA",
        "AAAAA"
    ],{
        A:'gtceu:titanium_plate',
        B:'prts:advanced_wanzi_impact_plate',
        C:'gtceu:mv_energy_input_hatch_16a',
        S:'gtceu:chaogaosuhejinyelian',
    })//大型万子合金炉制作
})