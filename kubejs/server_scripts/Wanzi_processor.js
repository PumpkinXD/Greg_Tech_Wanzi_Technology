ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_model_wanzi_processor('prts:yxcl_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanzi')
    .itemOutputs('3x minecraft:iron_ingot')
    .duration(150)
    .EUt(64)
    //一型万子 => 铁锭

    event.recipes.gtceu.basic_model_wanzi_processor('prts:yxcl_2')
    .circuit(2)
    .itemInputs('prts:type_one_wanzi')
    .itemOutputs('3x minecraft:copper_ingot')
    .duration(150)
    .EUt(64)
    //一型万子 => 铜锭

    event.recipes.gtceu.basic_model_wanzi_processor('prts:yxcl_3')
    .circuit(3)
    .itemInputs('prts:type_one_wanzi')
    .itemOutputs('2x minecraft:gold_ingot')
    .duration(150)
    .EUt(64)
    //一型万子 => 金锭

    event.recipes.gtceu.basic_model_wanzi_processor('prts:yxcl_4')
    .circuit(4)
    .itemInputs('4x prts:type_one_wanzi')
    .itemOutputs('2x minecraft:diamond')
    .duration(150)
    .EUt(64)
    //一型万子 => 钻石

    event.recipes.gtceu.basic_model_wanzi_processor('prts:yxcl_5')
    .circuit(5)
    .itemInputs('8x prts:type_one_wanzi')
    .itemOutputs('gtceu:waw_dust')
    .duration(150)
    .EUt(64)
    //一型万子 => 瓦拉帕斯

    event.recipes.gtceu.basic_model_wanzi_processor('prts:pseudo_wanjing_substrate')
    .circuit(1)
    .itemInputs('prts:gold_grit_dust_wanzi','prts:copper_grit_dust_wanzi','prts:type_two_wanzi','gtceu:flt_ingot')
    .itemOutputs('2x prts:pseudo_wanjing_substrate')
    .duration(50)
    .EUt(256)
    //拟化万晶基板制作1
    event.recipes.gtceu.basic_model_wanzi_processor('prts:pseudo_wanjing_substrate_1')
    .circuit(1)
    .itemInputs('prts:stable_wanjing_substrate','2x gtceu:flt_ingot')
    .itemOutputs('2x prts:pseudo_wanjing_substrate')
    .duration(50)
    .EUt(256)
    //拟化万晶基板制作2

    function basic_model_wanzi_processor(id,C,I,O,T,E,Ch1,Ch2,CHT1,CHT3,CHT2,CHT4){
        event.recipes.gtceu.basic_model_wanzi_processor(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
             .chancedOutput(Ch1,CHT1,CHT3)
             .chancedOutput(Ch2,CHT2,CHT4)
    }//基础型万子处理机代码，以下为万子处理配方实现代码
    basic_model_wanzi_processor('wanzi_processor',0,[
        'prts:basic_wanzi',
        'gtceu:tiny_iron_dust'
    ],'2x minecraft:iron_ingot',160,30,'gtceu:iron_dust','gtceu:iron_dust',575,115,115,115)
    basic_model_wanzi_processor('wanzi_processor_1',0,[
        'prts:basic_wanzi',
        'gtceu:tiny_copper_dust'
    ],'2x minecraft:copper_ingot',144,30,'gtceu:copper_dust','gtceu:copper_dust',1150,230,575,230)
    basic_model_wanzi_processor('wanzi_processor_2',6,[
        '2x prts:basic_wanzi'
    ],'2x minecraft:gold_ingot',160,30,'gtceu:gold_dust','gtceu:gold_dust',287,115,57,115)
    basic_model_wanzi_processor('wanzi_processor_3',3,[
        '8x prts:basic_wanzi'
    ],'2x minecraft:diamond',240,30,'gtceu:diamond_dust','gtceu:diamond_dust',143,115,28,57)
    basic_model_wanzi_processor('wanzi_processor_4',8,[
        'prts:basic_wanzi'
    ],'3x minecraft:coal',80,15,'minecraft:coal','minecraft:coal',1000,500,500,250)
    basic_model_wanzi_processor('wanzi_processor_5',4,[
        'prts:basic_wanzi'
    ],'3x minecraft:redstone',80,15,'minecraft:redstone','minecraft:redstone',1000,500,500,250)
    basic_model_wanzi_processor('wanzi_processor_6',5,[
        'prts:basic_wanzi'
    ],'4x minecraft:lapis_lazuli',80,15,'minecraft:lapis_lazuli','minecraft:lapis_lazuli',1000,500,500,250)
    basic_model_wanzi_processor('wanzi_processor_7',0,[
        '16x prts:basic_wanzi',
        'prts:iron_grit_dust_wanzi',
        'prts:copper_grit_dust_wanzi'
    ],'2x prts:base_substrate_wanjing',240,30,'prts:substrate_dust_wanjing','prts:substrate_dust_wanjing',143,28,100,20)
    basic_model_wanzi_processor('wanzi_processor_8',1,[
        '8x prts:basic_wanzi',
        '4x prts:iron_grit_dust_wanzi',
        '2x prts:copper_grit_dust_wanzi'
    ],'2x prts:base_substrate_wanjing',192,20,'prts:substrate_dust_wanjing','prts:substrate_dust_wanjing',143,28,100,20)
    basic_model_wanzi_processor('wanzi_processor_9',2,[
        '4x prts:basic_wanzi',
        '8x prts:iron_grit_dust_wanzi',
        '4x prts:copper_grit_dust_wanzi',
        'prts:gold_grit_dust_wanzi'
    ],'2x prts:base_substrate_wanjing',144,10,'prts:substrate_dust_wanjing','prts:substrate_dust_wanjing',287,57,100,20)
    basic_model_wanzi_processor('wanzi_processor_10',2,[
        'prts:iron_grit_dust_wanzi',
        '4x prts:type_one_wanzi',
        '#gtceu:waw_yuan',
        'prts:copper_grit_dust_wanzi'
    ],'2x prts:stable_wanjing_substrate',144,40,'prts:substrate_dust_wanjing','prts:substrate_dust_wanjing',575,115,100,20)
    basic_model_wanzi_processor('wanzi_processor_11',2,[
        'prts:base_substrate_wanjing',
        '#gtceu:waw_yuan'
    ],'2x prts:stable_wanjing_substrate',144,40,'prts:substrate_dust_wanjing','prts:substrate_dust_wanjing',575,115,100,20)

    // ==================== DSV型实验组件合成配方 ====================
    // DSV型实验组件 - 万子处理机制作（使用DSV型组件升级）
    
    event.recipes.gtceu.basic_model_wanzi_processor('dsv_experimental_processor_1')
        .circuit(11)
        .itemInputs(
            'prts:dsv_component',
            '4x prts:basic_wanzi',
            '2x prts:type_d_circuit_cross_domain_actuator',
            'prts:type_d_risk_management_unit'
        )
        .itemOutputs('2x prts:experimental_dsv_component')
        .duration(150)
        .EUt(48)

    // ==================== 机器合成配方 ====================

    event.shaped('gtceu:lv_basic_model_wanzi_processor',[
        ['#forge:glass','prts:basic_wanzi','gtceu:lv_electric_motor'],
        ['gtceu:basic_electronic_circuit','gtceu:lv_machine_hull','gtceu:basic_electronic_circuit'],
        ['#forge:glass','prts:basic_wanzi','gtceu:lv_electric_motor']
    ])//基础型万子处理机制作

    event.shaped('gtceu:mv_basic_model_wanzi_processor',[
        ['#forge:glass','prts:type_one_wanzi','gtceu:mv_electric_motor'],
        ['gtceu:good_electronic_circuit','gtceu:mv_machine_hull','gtceu:good_electronic_circuit'],
        ['#forge:glass','prts:type_one_wanzi','gtceu:mv_electric_motor']
    ])//正式型万子处理机制作

    event.shaped('gtceu:hv_basic_model_wanzi_processor',[
        ['#forge:glass','prts:type_two_wanzi','gtceu:hv_electric_motor'],
        ['gtceu:advanced_integrated_circuit','prts:high_voltage_universal_casing','gtceu:advanced_integrated_circuit'],
        ['#forge:glass','prts:type_two_wanzi','gtceu:hv_electric_motor']
    ])//进阶型万子处理机制作
})