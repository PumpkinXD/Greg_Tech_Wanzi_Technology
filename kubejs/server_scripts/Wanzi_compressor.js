ServerEvents.recipes((event) => {
    const wcp = event.recipes.gtceu.basic_model_wanzi_compressor
     // === 金属板材快速制作 ===
     wcp('prts:wanzi_aluminium_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:aluminium_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:aluminium_plate')
     .duration(32)
     .EUt(64)//铝板制作
     wcp('prts:wanzi_aluminium_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:aluminium_ingot','prts:type_c_conductive_circuit','4x prts:basic_wanzi')
     .itemOutputs('10x gtceu:aluminium_plate')
     .duration(32)
     .EUt(64)//铝板制作2
     wcp('prts:wanzi_aluminium_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:aluminium_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:aluminium_plate')
     .duration(32)
     .EUt(64)//铝板制作3
     wcp('prts:wanzi_aluminium_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:aluminium_ingot','prts:type_c_purified_conductive_circuit','4x prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:aluminium_plate')
     .duration(32)
     .EUt(64)//铝板制作4
 
     wcp('prts:wanzi_stainless_steel_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:stainless_steel_ingot','prts:type_c_conductive_circuit','prts:type_one_wanzi')
     .itemOutputs('6x gtceu:stainless_steel_plate')
     .duration(40)
     .EUt(64)//不锈钢板制作
     wcp('prts:wanzi_stainless_steel_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:stainless_steel_ingot','prts:type_c_conductive_circuit','4x prts:type_one_wanzi')
     .itemOutputs('10x gtceu:stainless_steel_plate')
     .duration(40)
     .EUt(64)//不锈钢板制作2
     wcp('prts:wanzi_stainless_steel_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:stainless_steel_ingot','prts:type_c_purified_conductive_circuit','prts:purified_type_one_wanzi')
     .itemOutputs('8x gtceu:stainless_steel_plate')
     .duration(40)
     .EUt(64)//不锈钢板制作3
     wcp('prts:wanzi_stainless_steel_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:stainless_steel_ingot','prts:type_c_purified_conductive_circuit','4x prts:purified_type_one_wanzi')
     .itemOutputs('14x gtceu:stainless_steel_plate')
     .duration(40)
     .EUt(64)//不锈钢板制作4
 
     wcp('prts:wanzi_steel_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:steel_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:steel_plate')
     .duration(28)
     .EUt(64)//钢板制作
     wcp('prts:wanzi_steel_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:steel_ingot','prts:type_c_conductive_circuit','4x prts:basic_wanzi')
     .itemOutputs('10x gtceu:steel_plate')
     .duration(28)
     .EUt(64)//钢板制作2
     wcp('prts:wanzi_steel_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:steel_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:steel_plate')
     .duration(28)
     .EUt(64)//钢板制作3
     wcp('prts:wanzi_steel_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:steel_ingot','prts:type_c_purified_conductive_circuit','4x prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:steel_plate')
     .duration(28)
     .EUt(64)//钢板制作4
 
     wcp('prts:wanzi_bronze_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:bronze_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:bronze_plate')
     .duration(24)
     .EUt(64)//青铜板制作
     wcp('prts:wanzi_bronze_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:bronze_ingot','prts:type_c_conductive_circuit','4x prts:basic_wanzi')
     .itemOutputs('10x gtceu:bronze_plate')
     .duration(24)
     .EUt(64)//青铜板制作2
     wcp('prts:wanzi_bronze_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:bronze_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:bronze_plate')
     .duration(24)
     .EUt(64)//青铜板制作3
     wcp('prts:wanzi_bronze_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:bronze_ingot','prts:type_c_purified_conductive_circuit','4x prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:bronze_plate')
     .duration(24)
     .EUt(64)//青铜板制作4

     wcp('prts:wanzi_brass_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:brass_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:brass_plate')
     .duration(24)
     .EUt(64)//黄铜板制作1
     wcp('prts:wanzi_brass_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:brass_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:brass_plate')
     .duration(24)
     .EUt(64)//黄铜板制作2
     wcp('prts:wanzi_brass_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:brass_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:brass_plate')
     .duration(24)
     .EUt(64)//黄铜板制作3
     wcp('prts:wanzi_brass_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:brass_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:brass_plate')
     .duration(24)
     .EUt(64)//黄铜板制作4

     wcp('prts:wanzi_copper_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('minecraft:copper_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:copper_plate')
     .duration(24)
     .EUt(64)//铜板制作1
     wcp('prts:wanzi_copper_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('minecraft:copper_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:copper_plate')
     .duration(24)
     .EUt(64)//铜板制作2
     wcp('prts:wanzi_copper_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('minecraft:copper_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:copper_plate')
     .duration(24)
     .EUt(64)//铜板制作3
     wcp('prts:wanzi_copper_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('minecraft:copper_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:copper_plate')
     .duration(24)
     .EUt(64)//铜板制作4

     wcp('prts:wanzi_cupronickel_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:cupronickel_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:cupronickel_plate')
     .duration(24)
     .EUt(64)//白铜板制作1
     wcp('prts:wanzi_cupronickel_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:cupronickel_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:cupronickel_plate')
     .duration(24)
     .EUt(64)//白铜板制作2
     wcp('prts:wanzi_cupronickel_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:cupronickel_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:cupronickel_plate')
     .duration(24)
     .EUt(64)//白铜板制作3
     wcp('prts:wanzi_cupronickel_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:cupronickel_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:cupronickel_plate')
     .duration(24)
     .EUt(64)//白铜板制作4

     wcp('prts:wanzi_annealed_copper_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:annealed_copper_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:annealed_copper_plate')
     .duration(24)
     .EUt(64)//退火铜板制作1
     wcp('prts:wanzi_annealed_copper_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:annealed_copper_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:annealed_copper_plate')
     .duration(24)
     .EUt(64)//退火铜板制作2
     wcp('prts:wanzi_annealed_copper_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:annealed_copper_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:annealed_copper_plate')
     .duration(24)
     .EUt(64)//退火铜板制作3
     wcp('prts:wanzi_annealed_copper_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:annealed_copper_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:annealed_copper_plate')
     .duration(24)
     .EUt(64)//退火铜板制作4

     wcp('prts:wanzi_bismuth_bronze_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:bismuth_bronze_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:bismuth_bronze_plate')
     .duration(24)
     .EUt(64)//铋青铜铜板制作1
     wcp('prts:wanzi_bismuth_bronze_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:bismuth_bronze_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:bismuth_bronze_plate')
     .duration(24)
     .EUt(64)//铋青铜铜板制作2
     wcp('prts:wanzi_bismuth_bronze_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:bismuth_bronze_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:bismuth_bronze_plate')
     .duration(24)
     .EUt(64)//铋青铜铜板制作3
     wcp('prts:wanzi_bismuth_bronze_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:bismuth_bronze_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:bismuth_bronze_plate')
     .duration(24)
     .EUt(64)//铋青铜铜板制作4

     wcp('prts:wanzi_black_bronze_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:black_bronze_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:black_bronze_plate')
     .duration(24)
     .EUt(64)//黑青铜板制作1
     wcp('prts:wanzi_black_bronze_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:black_bronze_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:black_bronze_plate')
     .duration(24)
     .EUt(64)//黑青铜板制作2
     wcp('prts:wanzi_black_bronze_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:black_bronze_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:black_bronze_plate')
     .duration(24)
     .EUt(64)//黑青铜板制作3
     wcp('prts:wanzi_black_bronze_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:black_bronze_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:black_bronze_plate')
     .duration(24)
     .EUt(64)//黑青铜板制作4

     wcp('prts:wanzi_cobalt_brass_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:cobalt_brass_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('6x gtceu:cobalt_brass_plate')
     .duration(24)
     .EUt(64)//钴黄铜板制作1
     wcp('prts:wanzi_cobalt_brass_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:cobalt_brass_ingot','prts:type_c_conductive_circuit','prts:basic_wanzi')
     .itemOutputs('10x gtceu:cobalt_brass_plate')
     .duration(24)
     .EUt(64)//钴黄铜板制作2
     wcp('prts:wanzi_cobalt_brass_plate_3')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:cobalt_brass_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('8x gtceu:cobalt_brass_plate')
     .duration(24)
     .EUt(64)//钴黄铜板制作3
     wcp('prts:wanzi_cobalt_brass_plate_4')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:cobalt_brass_ingot','prts:type_c_purified_conductive_circuit','prts:purified_basic_wanzi')
     .itemOutputs('14x gtceu:cobalt_brass_plate')
     .duration(24)
     .EUt(64)//钴黄铜板制作4
 
     wcp('prts:wanzi_waw_plate_1')
     .notConsumable('prts:type_c_phase_change_device')
     .circuit(1)
     .itemInputs('gtceu:waw_ingot','prts:type_c_purified_conductive_circuit','prts:purified_type_one_wanzi')
     .itemOutputs('6x gtceu:waw_plate')
     .duration(34)
     .EUt(96)//瓦拉帕斯锭制板1
     wcp('prts:wanzi_waw_plate_2')
     .notConsumable('prts:type_c_phase_change_device')
     .notConsumable('prts:type_c_packaging_unit')
     .circuit(2)
     .itemInputs('gtceu:waw_ingot','prts:type_c_purified_conductive_circuit','4x prts:purified_type_one_wanzi')
     .itemOutputs('10x gtceu:waw_plate')
     .duration(34)
     .EUt(96)//瓦拉帕斯锭制板2

    wcp('prts:ultra_compacted_copper_plate_1')
    .notConsumable('prts:type_c_phase_change_device')
    .circuit(1)
    .itemInputs('gtceu:copper_plate','gtceu:annealed_copper_plate','gtceu:brass_plate','gtceu:bronze_plate','gtceu:cupronickel_plate','gtceu:black_bronze_plate','gtceu:bismuth_bronze_plate','gtceu:cobalt_brass_plate')
    .itemOutputs('4x prts:ultra_compacted_copper_plate')
    .duration(120)
    .EUt(120)//超压缩铜板制作
    wcp('prts:ultra_compacted_copper_plate_2')
    .notConsumable('prts:type_c_purified_phase_change_device')
    .circuit(1)
    .itemInputs('gtceu:copper_plate','gtceu:annealed_copper_plate','gtceu:brass_plate','gtceu:bronze_plate','gtceu:cupronickel_plate','gtceu:black_bronze_plate','gtceu:bismuth_bronze_plate','gtceu:cobalt_brass_plate')
    .itemOutputs('6x prts:ultra_compacted_copper_plate')
    .duration(120)
    .EUt(120)//超压缩铜板制作2

    wcp('prts:unconventional_crystal_plate')
    .circuit(1)
    .itemInputs('5x #gtceu:ender_pearl_yuan','2x #gtceu:diamond_yuan','2x #gtceu:emerald_yuan')
    .itemOutputs('2x prts:unconventional_crystal_plate')
    .duration(120)
    .EUt(120)//超规格晶体板制作1

    wcp('prts:ultra_high_stiffness_toughness_plate')
    .circuit(1)
    .itemInputs('prts:ultra_compacted_copper_plate','prts:unconventional_crystal_plate','prts:type_two_wanzi_special_alloy')
    .itemOutputs('2x prts:ultra_high_stiffness_toughness_plate')
    .duration(200)
    .EUt(120)//超纲韧性材料板制作

    wcp('prts:ultra_high_stiffness_toughness_plate_2')
    .circuit(1)
    .itemInputs('prts:ultra_compacted_copper_plate','prts:unconventional_crystal_plate','4x prts:type_one_wanzi_special_alloy')
    .itemOutputs('2x prts:ultra_high_stiffness_toughness_plate')
    .duration(200)
    .EUt(120)//超纲韧性材料板制作2

    wcp('prts:ultra_high_stiffness_toughness_plate_3')
    .circuit(1)
    .itemInputs('gtceu:rhodium_dust','gtceu:ruthenium_dust','gtceu:iridium_dust','gtceu:platinum_dust','gtceu:palladium_dust','prts:unconventional_crystal_plate','prts:type_two_wanzi_special_alloy')
    .itemOutputs('4x prts:ultra_high_stiffness_toughness_plate')
    .duration(200)
    .EUt(150)//超纲韧性材料板制作3

    wcp('prts:ultra_high_stiffness_toughness_plate_4')
    .circuit(1)
    .itemInputs('gtceu:rhodium_dust','gtceu:ruthenium_dust','gtceu:iridium_dust','gtceu:platinum_dust','gtceu:palladium_dust','prts:unconventional_crystal_plate','4x prts:type_one_wanzi_special_alloy')
    .itemOutputs('4x prts:ultra_high_stiffness_toughness_plate')
    .duration(200)
    .EUt(150)//超纲韧性材料板制作4

     // === 末影珍珠板快速制作 ===
    wcp('wanzi_mv_ender_pearl_plate_1')
     .circuit(6)
     .itemInputs('minecraft:ender_pearl','prts:type_c_packaging_unit')
     .itemOutputs('3x gtceu:ender_pearl_plate')
     .duration(40)
     .EUt(80)
 
     wcp('wanzi_mv_ender_pearl_plate_2')
     .circuit(6)
     .itemInputs('minecraft:ender_pearl','prts:type_c_purified_packaging_unit')
     .itemOutputs('5x gtceu:ender_pearl_plate')
     .duration(34)
     .EUt(96)
 
     // === 末影之眼板快速制作 ===
     wcp('wanzi_mv_ender_eye_plate_1')
     .circuit(7)
     .itemInputs('minecraft:ender_eye','prts:type_c_packaging_unit')
     .itemOutputs('3x gtceu:ender_eye_plate')
     .duration(44)
     .EUt(96)
 
 
     wcp('wanzi_mv_ender_eye_plate_2')
     .circuit(7)
     .itemInputs('minecraft:ender_eye','prts:type_c_purified_packaging_unit')
     .itemOutputs('5x gtceu:ender_eye_plate')
     .duration(38)
     .EUt(112)
 
     // === 钻石板快速制作 ===
     wcp('wanzi_mv_diamond_plate_1')
     .circuit(8)
     .itemInputs('minecraft:diamond','prts:type_c_circuit_cross_domain_actuator')
     .itemOutputs('3x gtceu:diamond_plate')
     .duration(48)
     .EUt(96)
 
     wcp('wanzi_mv_diamond_plate_2')
     .circuit(8)
     .itemInputs('minecraft:diamond','prts:type_c_purified_circuit_cross_domain_actuator')
     .itemOutputs('5x gtceu:diamond_plate')
     .duration(41)
     .EUt(112)
 
     // === 绿宝石板快速制作 ===
     wcp('wanzi_mv_emerald_plate_1')
     .circuit(9)
     .itemInputs('minecraft:emerald','prts:type_c_circuit_cross_domain_actuator')
     .itemOutputs('16x gtceu:emerald_plate')
     .duration(48)
     .EUt(96)
 
     wcp('wanzi_mv_emerald_plate_2')
     .circuit(9)
     .itemInputs('minecraft:emerald','prts:type_c_purified_circuit_cross_domain_actuator')
     .itemOutputs('32x gtceu:emerald_plate')
     .duration(41)
     .EUt(112)
 
    // === 塑料板快速制作 ===
    wcp('wanzi_mv_plastic_plate_1')
    .circuit(6)
    .inputFluids(Fluid.of('gtceu:polyethylene',144))
    .notConsumable('prts:type_c_packaging_unit')
    .itemOutputs('6x gtceu:polyethylene_plate')
    .duration(24)
    .EUt(64)
 
    wcp('wanzi_mv_plastic_plate_2')
    .circuit(6)
    .inputFluids(Fluid.of('gtceu:polyethylene',144))
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemOutputs('8x gtceu:polyethylene_plate')
    .duration(20)
    .EUt(80)

    wcp('prts:wood_plate_1')
    .circuit(1)
    .itemInputs('2x minecraft:sugar_cane')
    .itemOutputs('gtceu:wood_plate')
    .duration(60)
    .EUt(16)//甘蔗制作木板

    wcp('prts:wood_plate_2')
    .circuit(2)
    .itemInputs('2x minecraft:sugar_cane','prts:basic_wanzi')
    .itemOutputs('4x gtceu:wood_plate')
    .duration(60)
    .EUt(16)//甘蔗制作木板Ⅱ
    
    function basic_model_wanzi_compressor(id,C,I,O,T,E,CH,CHT1,CHT2){
        wcp(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
             .chancedOutput(CH,CHT1,CHT2)
    }//万子压缩机
    basic_model_wanzi_compressor('ya_li_shan_da_1',9,[
        '5x prts:basic_wanzi',
    ],'prts:compression_type_wanzi',80,20,'prts:basic_wanzi',10,10)
    basic_model_wanzi_compressor('ya_li_shan_da_2',1,[
        '5x prts:compression_type_wanzi',
        '3x minecraft:coal',
        'minecraft:iron_ingot',
        '2x minecraft:copper_ingot'
    ],'prts:basic_wanjing',80,20,'prts:compression_type_wanzi',1150,575)
    basic_model_wanzi_compressor('ya_li_shan_da_4',1,[
        '4x prts:basic_wanzi',
        'prts:refined_etched_iron_block',
        '8x minecraft:iron_block'
    ],'2x prts:zhimitiekuai',160,30,'prts:densified_iron_dust',575,575)
    basic_model_wanzi_compressor('ya_li_shan_da_5',1,[
        '8x prts:basic_wanzi',
        'prts:refined_etched_gold_block',
        '8x minecraft:gold_block'
    ],'2x prts:zhimijinkuai',200,30,'prts:densified_gold_dust',287,287)
    basic_model_wanzi_compressor('ya_li_shan_da_6',1,[
        '4x prts:basic_wanzi',
        'prts:refined_etched_copper_block',
        '8x minecraft:copper_block'
    ],'2x prts:zhimitongkuai',160,30,'prts:densified_copper_dust',575,575)
    basic_model_wanzi_compressor('ya_li_shan_da_7',1,[
        '9x #forge:storage_blocks/tin',
        '9x #forge:dusts/tin',
        '4x prts:basic_wanzi'
    ],'2x prts:zhimixikuai',160,30,'prts:densified_tin_dust',575,575)
    basic_model_wanzi_compressor('ya_li_shan_da_8',1,[
        '9x #forge:storage_blocks/lead',
        '9x #forge:dusts/lead',
        '4x prts:basic_wanzi'
    ],'2x prts:zhimiqiankuai',160,30,'prts:densified_lead_dust',575,575)
    basic_model_wanzi_compressor('ya_li_shan_da_9',1,[
        '9x minecraft:diamond_block',
        '9x #forge:dusts/diamond',
        '10x prts:basic_wanzi'
    ],'2x prts:zhimizuanshikuai',240,30,'prts:densified_diamond_dust',115,115)
    basic_model_wanzi_compressor('ya_li_shan_da_10',1,[
        '81x gtceu:carbon_dust',
        '5x prts:basic_wanzi'
    ],'2x prts:zhimitankuai',160,30,'prts:densified_carbon_dust',1150,862)
    basic_model_wanzi_compressor('ya_li_shan_da_11',1,[
        '9x #forge:storage_blocks/steel',
        '9x #forge:dusts/steel',
        '10x prts:basic_wanzi'
    ],'2x prts:zhimigangkuai',200,30,'prts:densified_steel_dust',575,517)
    basic_model_wanzi_compressor('ya_li_shan_da_12',1,[
        'prts:substrate_dust_wanjing'
    ],'prts:base_substrate_wanjing',200,30,'prts:basic_wanzi',10,10)

    event.shaped('gtceu:lv_basic_model_wanzi_compressor',[
        "BBA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:lv_robot_arm',
        B:'prts:basic_wanzi_resistance_plate',
        C:'prts:basic_wanzi_redirection_plate',
        D:'prts:basic_wanzi_actuator',
        E:'prts:basic_wanzi_position_corrector',
        F:'prts:low_voltage_wanzi_circuit',
        S:'gtceu:lv_machine_hull'
    })//基础型万子压缩机配方

    event.shaped('gtceu:mv_basic_model_wanzi_compressor',[
        "BBA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:mv_robot_arm',
        B:'prts:production_type_wanzi_resistor_board',
        C:'prts:production_type_wanzi_redirection_plate',
        D:'prts:production_type_wanzi_actuator',
        E:'prts:production_type_wanzi_position_corrector',
        F:'prts:medium_voltage_wanzi_circuit',
        S:'gtceu:mv_machine_hull'
    })//正式型万子压缩机配方

    event.shaped('gtceu:hv_basic_model_wanzi_compressor',[
        "BBA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:hv_robot_arm',
        B:'prts:basic_wanzi_resistance_plate',
        C:'prts:basic_wanzi_redirection_plate',
        D:'prts:basic_wanzi_actuator',
        E:'prts:basic_wanzi_position_corrector',
        F:'prts:medium_voltage_wanzi_circuit',
        S:'prts:high_voltage_universal_casing'
    })//进阶型万子压缩机配方

    wcp('prts:wanzi_compressor_plastic_block_1')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','4x prts:micro_plastic_block')
    .inputFluids(Fluid.of('gtceu:hydrogen',576))
    .inputFluids(Fluid.of('gtceu:distilled_water',200))
    .itemOutputs('16x prts:deformable_plastic_block')
    .chancedOutput('prts:micro_plastic_block',1000,500)
    .duration(150)
    .EUt(20)
    //可变形塑料块Ⅰ

    wcp('prts:wanzi_compressor_plastic_block_2')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','4x prts:micro_plastic_block')
    .inputFluids(Fluid.of('gtceu:hydrogen',576))
    .inputFluids(Fluid.of('prts:yisanwanzi',800))
    .itemOutputs('32x prts:deformable_plastic_block')
    .chancedOutput('prts:micro_plastic_block',1000,500)
    .duration(150)
    .EUt(20)
    //可变形塑料块Ⅱ

    wcp('prts:alpha_yansuowanzi')
    .itemInputs('5x prts:type_one_wanzi')
    .itemOutputs('prts:alpha_compression_type_wanzi')
    .duration(120)
    .EUt(96)//阿尔法型压缩万子

    wcp('prts:alpha_yasuowanjing_1')
    .circuit(1)
    .itemInputs('5x prts:alpha_compression_type_wanzi','2x #gtceu:waw_yuan','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan')
    .inputFluids(Fluid.of('prts:yisanwanzi',288))
    .itemOutputs('prts:alpha_wanjing')
    .duration(200)
    .EUt(80)//阿尔法压缩型万晶1

    wcp('prts:alpha_yasuowanjing_2')
    .circuit(1)
    .itemInputs('3x prts:purified_basic_wanjing','2x #gtceu:waw_yuan','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan')
    .inputFluids(Fluid.of('prts:yisanwanzi',576))
    .itemOutputs('prts:alpha_wanjing')
    .duration(200)
    .EUt(80)//阿尔法压缩型万晶2
})