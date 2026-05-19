ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_1')
    .itemInputs('prts:heteromorphic_iron')
    .itemOutputs('2x minecraft:raw_iron','2x minecraft:raw_copper')
    .chancedOutput('minecraft:raw_gold',1500,200)
    .duration(200)
    .EUt(20)//异形铁拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_2')
    .itemInputs('prts:heteromorphic_copper')
    .itemOutputs('2x gtceu:raw_hematite','2x gtceu:raw_chalcopyrite')
    .chancedOutput('gtceu:gold_dust',1500,200)
    .duration(200)
    .EUt(20)//异形铜拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_3')
    .itemInputs('prts:heteromorphic_gold')
    .itemOutputs('2x minecraft:raw_gold','2x minecraft:raw_copper')
    .chancedOutput('gtceu:raw_diamond',500,500)
    .duration(200)
    .EUt(30)//异形金拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_4')
    .itemInputs('prts:heteromorphic_diamond')
    .itemOutputs('2x gtceu:raw_diamond','2x minecraft:raw_gold')
    .chancedOutput('2x gtceu:raw_sphalerite',2500,1500)
    .duration(200)
    .EUt(30)//异形钻石拆解 

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_5')
    .itemInputs('prts:heteromorphic_tin')
    .itemOutputs('2x minecraft:raw_iron','2x gtceu:raw_tin')
    .chancedOutput('2x minecraft:raw_copper',1500,200)
    .duration(200)
    .EUt(20)//异形锡拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_6')
    .itemInputs('prts:heteromorphic_steel')
    .itemOutputs('4x gtceu:steel_ingot','2x gtceu:raw_silver')
    .chancedOutput('2x gtceu:raw_realgar',1500,500)
    .duration(200)
    .EUt(28)//异形钢拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_7')
    .itemInputs('prts:primary_void_coal')
    .itemOutputs('4x minecraft:coal','2x minecraft:raw_iron')
    .chancedOutput('2x minecraft:coal',2000,500)
    .duration(200)
    .EUt(28)//初虚化煤炭拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_8')
    .itemInputs('prts:heterolattice_lapis_lazuli')
    .itemOutputs('2x gtceu:raw_lapis','2x gtceu:raw_lead')
    .chancedOutput('2x gtceu:raw_emerald',1200,200)
    .duration(200)
    .EUt(28)//异格构青金石拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:kuangwulixi_9')
    .itemInputs('prts:crimson_stone')
    .itemOutputs('2x gtceu:raw_redstone','2x minecraft:raw_gold')
    .chancedOutput('4x gtceu:raw_rock_salt',1500,500)
    .duration(200)
    .EUt(30)//赤石拆解

    event.recipes.gtceu.basic_model_wanzi_disassembler('prts:mokuaifenjie_1')
    .itemInputs('prts:component_module')
    .itemOutputs('prts:conventional_component')
    .chancedOutput('prts:conventional_component',5000,2500)
    .chancedOutput('prts:non_conventional_component',1000,500)
    .chancedOutput('prts:imitation_conventional_component',2500,1250)
    .duration(200)
    .EUt(30)//组件模块用途——拆解

    function basic_model_wanzi_disassembler(id,C,I,O,T,E){
        event.recipes.gtceu.basic_model_wanzi_disassembler(id)//别问跑不跑的动，他能跑
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
    }//拆解机配方代码
    basic_model_wanzi_disassembler('ka_cha_1',1,[
        'prts:zhimitiekuai'
    ],[
        '2x prts:basic_wanzi',
        'prts:refined_etched_iron_block',
        '3x minecraft:iron_block'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_2',1,[
        'prts:zhimijinkuai'
    ],[
        '4x prts:basic_wanzi',
        'prts:refined_etched_gold_block',
        'minecraft:gold_block'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_3',1,[
        'prts:zhimitongkuai'
    ],[
        '3x prts:basic_wanzi',
        'prts:refined_etched_copper_block',
        '3x minecraft:copper_block'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_4',1,[
        'prts:zhimixikuai'
    ],[
        '3x prts:basic_wanzi',
        '3x gtceu:tin_block',
        '4x gtceu:tin_dust'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_5',1,[
        'prts:zhimiqiankuai'
    ],[
        '3x gtceu:lead_block',
        '3x gtceu:lead_dust',
        '3x prts:basic_wanzi'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_6',1,[
        'prts:zhimizuanshikuai'
    ],[
        'minecraft:diamond_block',
        '2x #forge:dusts/diamond',
        '8x prts:basic_wanzi'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_7',1,[
        'prts:zhimitankuai'
    ],[
        '27x gtceu:carbon_dust',
        '2x prts:basic_wanzi'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_8',1,[
        'prts:zhimigangkuai'
    ],[
        '4x gtceu:steel_block',
        '4x gtceu:steel_dust',
        '4x prts:basic_wanzi'
    ],150,30)
    basic_model_wanzi_disassembler('ka_cha_9',1,[
        'prts:basic_wanzi_position_corrector'
    ],[
        '2x prts:basic_wanzi',
        'prts:type_d_packaging_unit',
        'prts:basic_wanzi_resistance_plate',
        'prts:basic_wanzi_redirection_plate',
        'prts:type_d_conductive_circuit',
        'prts:type_d_circuit_cross_domain_actuator'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_10',1,[
        'prts:basic_wanzi_actuator'
    ],[
        'prts:basic_wanzi',
        'gtceu:lv_electric_motor',
        'gtceu:lv_electric_piston',
        'prts:type_d_circuit_cross_domain_actuator',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_11',1,[
        'prts:basic_wanzi_emitter'
    ],[
        'prts:basic_wanzi',
        'gtceu:lv_electric_motor',
        'prts:basic_wanzi_holder',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_12',1,[
        'prts:basic_wanzi_redirection_plate'
    ],[
        '2x prts:basic_wanzi',
        'prts:type_d_circuit_cross_domain_actuator',
        'prts:type_d_conductive_circuit',
        'prts:basic_wanzi_resistance_plate'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_13',1,[
        'prts:basic_wanzi_resistance_plate'
    ],[
        '2x prts:basic_wanzi',
        'prts:micro_plastic_block',
        'minecraft:iron_ingot',
        '2x minecraft:copper_ingot'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_14',1,[
        'prts:basic_wanzi_holder'
    ],[
        'prts:type_d_packaging_unit',
        'prts:basic_wanzi_resistance_plate',
        'prts:type_d_risk_management_unit'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_15',1,[
        'prts:experimental_dsv_component'
    ],[
        'prts:type_d_conductive_circuit',
        'prts:type_d_packaging_unit',
        'prts:type_d_resistor',
        '5x prts:basic_wanzi',
        'prts:type_d_circuit_cross_domain_actuator'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_16',1,[
        'prts:type_d_risk_management_unit'
    ],[
        '2x prts:basic_wanzi',
        'minecraft:iron_ingot',
        '2x minecraft:copper_ingot',
        'prts:type_d_conductive_circuit',
        '2x prts:micro_plastic_block'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_17',1,[
        'prts:type_d_high_voltage_transformation_component'
    ],[
        'prts:type_d_conductive_circuit',
        'prts:basic_wanzi',
        'prts:type_d_resistor',
        'minecraft:iron_ingot',
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_18',1,[
        'prts:type_d_circuit_cross_domain_actuator'
    ],[
        'prts:type_one_wanjing_etched_substrate',
        'prts:basic_wanzi',
        'prts:micro_plastic_block'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_19',1,[
        'prts:micro_plastic_block'
    ],[
        'prts:basic_wanzi',
        '2x gtceu:sticky_resin'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_20',1,[
        'prts:type_d_packaging_unit'
    ],[
        'prts:basic_wanzi',
        '2x prts:micro_plastic_block',
        'minecraft:iron_ingot'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_21',1,[
        '4x prts:type_d_resistor'
    ],[
        'prts:basic_wanzi',
        'minecraft:iron_ingot',
        '2x minecraft:copper_ingot'
    ],300,30)
    basic_model_wanzi_disassembler('ka_cha_22',1,[
        'prts:type_d_conductive_circuit'
    ],[
        'prts:basic_wanzi',
        'minecraft:iron_ingot'
    ],300,30)

    event.shaped('gtceu:lv_basic_model_wanzi_disassembler',[
        "ABA",
        "CSC",
        "DDD"
    ],{
        A:'prts:basic_wanzi_impact_resistant_plate',
        B:'prts:basic_wanzi_emitter',
        C:'prts:low_voltage_wanzi_circuit',
        D:'prts:type_d_purifie_high_voltage_transformation_component',
        S:'prts:experimental_dsv_component'
    })//万子拆解机配方 
})