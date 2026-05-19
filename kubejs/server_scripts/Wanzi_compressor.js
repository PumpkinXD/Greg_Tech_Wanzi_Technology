ServerEvents.recipes((event) => {
    const wcp = event.recipes.gtceu.basic_model_wanzi_compressor
     // === 金属板材快速制作 ===
     wcp('wanzi_mv_plate_1')
     .circuit(1)
     .itemInputs('gtceu:aluminium_ingot','prts:type_c_conductive_circuit')
     .itemOutputs('6x gtceu:aluminium_plate')
     .duration(32)
     .EUt(64)
 
     wcp('wanzi_mv_plate_2')
     .circuit(1)
     .itemInputs('gtceu:stainless_steel_ingot','prts:type_c_conductive_circuit')
     .itemOutputs('6x gtceu:stainless_steel_plate')
     .duration(40)
     .EUt(64)
 
     wcp('wanzi_mv_plate_3')
     .circuit(1)
     .itemInputs('gtceu:steel_ingot','prts:type_c_conductive_circuit')
     .itemOutputs('6x gtceu:steel_plate')
     .duration(28)
     .EUt(64)
 
     wcp('wanzi_mv_plate_4')
     .circuit(1)
     .itemInputs('gtceu:bronze_ingot','prts:type_c_resistor')
     .itemOutputs('6x gtceu:bronze_plate')
     .duration(24)
     .EUt(64)
 
     wcp('wanzi_mv_plate_5')
     .circuit(1)
     .itemInputs('gtceu:waw_ingot','prts:type_c_purified_conductive_circuit')
     .itemOutputs('9x gtceu:waw_plate')
     .duration(34)
     .EUt(96)
 
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
    ],'prts:compression_type_wanzi',80,20,'air',0,0)
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
    ],'prts:base_substrate_wanjing',200,30,'air',0,0)

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
        S:'gtceu:hv_machine_hull'
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