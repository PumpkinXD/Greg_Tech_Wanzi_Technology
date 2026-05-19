ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_1')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ram_wafer')
    .notConsumable('#forge:lenses/green')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造1

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_2')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ilc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造2

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_3')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:cpu_wafer')
    .notConsumable('#forge:lenses/light_blue')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_4')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ulpic_wafer')
    .notConsumable('#forge:lenses/blue')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造4

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_5')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:lpic_wafer')
    .notConsumable('gtceu:orange_glass_lens')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造5

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_6')
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:simple_soc_wafer')
    .notConsumable('gtceu:cyan_glass_lens')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板再造6
    
    function basic_model_wanzi_etching_machine(id,C,I,O,T,E,Ch1,Ch2,CHT1,CHT3,CHT2,CHT4){
        event.recipes.gtceu.basic_model_wanzi_etching_machine(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
             .chancedOutput(Ch1,CHT1,CHT3)
             .chancedOutput(Ch2,CHT2,CHT4)
    }//基础型万子蚀刻机代码，以下为万子蚀刻配方实现代码
    basic_model_wanzi_etching_machine('wanzi_etching',1,[
        'prts:base_substrate_wanjing',
        'minecraft:iron_ingot',
        '2x minecraft:copper_ingot',
        '3x gtceu:tiny_iron_dust',
        '3x gtceu:tiny_copper_dust'
    ],'prts:type_one_wanjing_etched_substrate',170,20,'prts:waste_material','air',287,115,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_1',1,[
        'prts:base_substrate_wanjing',
        '3x minecraft:iron_ingot',
        '3x minecraft:copper_ingot'
    ],'prts:type_one_wanjing_etched_substrate',340,30,'air','air',0,0,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_2',1,[
        'minecraft:iron_block'
    ],[
        'prts:crude_etched_iron_block',
        '3x prts:iron_grit_dust_wanzi'
    ],255,30,'prts:iron_grit_dust_wanzi','air',920,575,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_3',1,[
        'minecraft:copper_block'
    ],[
        'prts:crude_etched_copper_block',
        '3x prts:copper_grit_dust_wanzi'
    ],255,30,'prts:copper_grit_dust_wanzi','air',920,575,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_4',1,[
        'minecraft:gold_block'
    ],[
        'prts:crude_etched_gold_block',
        '3x prts:gold_grit_dust_wanzi'
    ],255,30,'prts:gold_grit_dust_wanzi','air',460,287,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_5',1,[
        'prts:crude_etched_iron_block'
    ],[
        'prts:refined_etched_iron_block',
        '3x prts:iron_grit_dust_wanzi'
    ],340,30,'prts:iron_grit_dust_wanzi','air',1840,575,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_6',1,[
        'prts:crude_etched_copper_block'
    ],[
        'prts:refined_etched_copper_block',
        '3x prts:copper_grit_dust_wanzi'
    ],340,30,'prts:copper_grit_dust_wanzi','air',1840,575,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_7',1,[
        'prts:crude_etched_gold_block'
    ],[
        'prts:refined_etched_gold_block',
        '3x prts:gold_grit_dust_wanzi'
    ],340,30,'prts:gold_grit_dust_wanzi','air',920,287,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_8',1,[
        'prts:stable_wanjing_substrate',
        '2x minecraft:copper_ingot',
        'minecraft:iron_ingot'
    ],[
        'prts:stable_wanjing_etched_substrate'
    ],170,80,'prts:waste_material','air',460,230,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_9',1,[
        'prts:stable_wanjing_substrate',
        '2x gtceu:copper_dust',
        'gtceu:iron_dust'
    ],[
        'prts:stable_wanjing_etched_substrate'
    ],170,80,'prts:waste_material','air',460,230,0,0)
    basic_model_wanzi_etching_machine('wanzi_etching_10',1,[
        'prts:zhimitiekuai',
        '4x prts:type_one_wanzi'
    ],['prts:naweigeshiketiekuai','3x prts:densified_iron_dust'],170,120,'prts:densified_iron_dust','prts:densified_iron_dust',1840,920,920,460)
    basic_model_wanzi_etching_machine('wanzi_etching_11',1,[
        'prts:zhimitongkuai',
        '4x prts:type_one_wanzi'
    ],['prts:naweigeshiketongkuai','3x prts:densified_copper_dust'],170,120,'prts:densified_copper_dust','prts:densified_copper_dust',1840,920,920,460)
    basic_model_wanzi_etching_machine('wanzi_etching_12',1,[
        'prts:zhimijinkuai',
        '4x prts:type_one_wanzi'
    ],['prts:naweigeshikejinkuai','3x prts:densified_gold_dust'],170,120,'prts:densified_gold_dust','prts:densified_gold_dust',920,460,460,230)
    basic_model_wanzi_etching_machine('wanzi_etching_13',1,[
        'prts:zhimigangkuai',
        '4x prts:type_one_wanzi'
    ],['prts:naweigeshikegangkuai','3x prts:densified_steel_dust'],170,120,'prts:densified_steel_dust','prts:densified_steel_dust',1380,690,690,345)
    basic_model_wanzi_etching_machine('wanzi_etching_14',1,[
        '3x minecraft:emerald_block',
        '12x prts:purified_type_one_wanzi'
    ],['prts:naweigeshikelvbaoshikuai','12x gtceu:emerald_dust'],170,120,'4x gtceu:emerald_dust','4x gtceu:emerald_dust',690,345,345,172)

    event.shaped('gtceu:lv_basic_model_wanzi_etching_machine',[
        "DBD",
        "ASA",
        "CFC"
    ],{
        D:'gtceu:steel_plate',
        B:'prts:type_d_packaging_unit',
        A:'prts:type_d_conductive_circuit',
        S:'gtceu:lv_machine_hull',
        C:'prts:type_d_high_voltage_transformation_component',
        F:'prts:type_d_risk_management_unit'
    })//基础型万子蚀刻机配方

    event.shaped('gtceu:mv_basic_model_wanzi_etching_machine',[
        "DBD",
        "ASA",
        "CFC"
    ],{
        D:'gtceu:aluminium_plate',
        B:'prts:type_c_purified_packaging_unit',
        A:'prts:type_c_purified_conductive_circuit',
        S:'gtceu:mv_machine_hull',
        C:'prts:type_c_high_voltage_transformation_component',
        F:'prts:type_c_risk_management_unit'
    })//正式型万子蚀刻机配方

    event.shaped('gtceu:hv_basic_model_wanzi_etching_machine',[
        "DBD",
        "ASA",
        "CFC"
    ],{
        D:'gtceu:stainless_steel_plate',
        B:'prts:type_c_purified_packaging_unit',
        A:'prts:type_c_purified_conductive_circuit',
        S:'gtceu:hv_machine_hull',
        C:'prts:type_c_high_voltage_transformation_component',
        F:'prts:type_c_risk_management_unit'
    })//进阶型万子蚀刻机配方
})