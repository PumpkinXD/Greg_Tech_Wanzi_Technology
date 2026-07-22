ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:zizhi_ram_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ram_wafer')
    .notConsumable('#forge:lenses/green')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造RAM 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ram_emitter_1')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('2x gtceu:ram_wafer')
    .notConsumable('#forge:lenses/green')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造RAM 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ram_emitter_2')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('4x gtceu:ram_wafer')
    .notConsumable('#forge:lenses/green')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造RAM 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ilc_emitter_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ilc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LIC 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ilc_emitter_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('gtceu:ilc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LIC 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ilc_emitter_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('gtceu:ilc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LIC 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_cpu_emitter_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:cpu_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造CPU 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_cpu_emitter_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('gtceu:cpu_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造CPU 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_cpu_emitter_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('gtceu:cpu_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造CPU 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ulpic_emitter_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:ulpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造ULPIC 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ulpic_emitter_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('gtceu:ulpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造ULPIC 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_ulpic_emitter_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('gtceu:ulpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造ULPIC 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_lpic_emitter_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:lpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LPIC 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_lpic_emitter_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('gtceu:lpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LPIC 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_lpic_emitter_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('gtceu:lpic_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造LPIC 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_soc_emitter_1')
    .circuit(1)
    .itemInputs('prts:type_one_wanjing_etched_substrate')
    .itemOutputs('gtceu:soc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造SOC 1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_soc_emitter_2')
    .circuit(2)
    .chancedInput('prts:basic_wanzi_emitter',5000,5000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:basic_wanzi')
    .itemOutputs('gtceu:soc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造SOC 2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('gtceu:wanzi_soc_emitter_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_emitter',1000,1000)
    .itemInputs('prts:type_one_wanjing_etched_substrate','prts:type_one_wanzi')
    .itemOutputs('gtceu:soc_wafer')
    .notConsumable('#forge:lenses/red')
    .duration(600)
    .EUt(48)
    //一型蚀刻万晶基板造SOC 3

    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:gold_girt_dust_1')
    .circuit(2)
    .itemInputs('minecraft:gold_ingot')
    .chancedOutput('prts:gold_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //金砂尘直接制作1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:gold_girt_dust_2')
    .circuit(2)
    .itemInputs('minecraft:gold_block')
    .itemOutputs('9x prts:gold_grit_dust_wanzi')
    .chancedOutput('prts:gold_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:gold_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:gold_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //金砂尘直接制作2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:gold_girt_dust_3')
    .circuit(2)
    .itemInputs('minecraft:raw_gold')
    .chancedOutput('prts:gold_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //金砂尘直接制作3
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:gold_girt_dust_4')
    .circuit(2)
    .itemInputs('minecraft:raw_gold_block')
    .itemOutputs('9x prts:gold_grit_dust_wanzi')
    .chancedOutput('prts:gold_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:gold_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:gold_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //金砂尘直接制作4

    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:iron_girt_dust_1')
    .circuit(2)
    .itemInputs('minecraft:iron_ingot')
    .chancedOutput('prts:iron_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //铁砂尘直接制作1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:iron_girt_dust_2')
    .circuit(2)
    .itemInputs('minecraft:iron_block')
    .itemOutputs('9x prts:iron_grit_dust_wanzi')
    .chancedOutput('prts:iron_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:iron_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:iron_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //铁砂尘直接制作2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:iron_girt_dust_3')
    .circuit(2)
    .itemInputs('minecraft:raw_iron')
    .chancedOutput('prts:iron_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //铁砂尘直接制作3
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:iron_girt_dust_4')
    .circuit(2)
    .itemInputs('minecraft:raw_iron_block')
    .itemOutputs('9x prts:iron_grit_dust_wanzi')
    .chancedOutput('prts:iron_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:iron_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:iron_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //铁砂尘直接制作4

    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:copper_girt_dust_1')
    .circuit(2)
    .itemInputs('minecraft:copper_ingot')
    .chancedOutput('prts:copper_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //铜砂尘直接制作1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:copper_girt_dust_2')
    .circuit(2)
    .itemInputs('minecraft:copper_block')
    .itemOutputs('9x prts:copper_grit_dust_wanzi')
    .chancedOutput('prts:copper_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:copper_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:copper_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //铜砂尘直接制作2
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:copper_girt_dust_3')
    .circuit(2)
    .itemInputs('minecraft:raw_copper')
    .chancedOutput('prts:copper_grit_dust_wanzi',5000,0)
    .duration(150)
    .EUt(256)
    //铜砂尘直接制作3
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:copper_girt_dust_4')
    .circuit(2)
    .itemInputs('minecraft:raw_copper_block')
    .itemOutputs('9x prts:copper_grit_dust_wanzi')
    .chancedOutput('prts:copper_grit_dust_wanzi',5000,0)
    .chancedOutput('2x prts:copper_grit_dust_wanzi',2500,0)
    .chancedOutput('4x prts:copper_grit_dust_wanzi',1250,0)
    .duration(150)
    .EUt(256)
    //铜砂尘直接制作4

    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:pseudo_wanjing_etched_substrate')
    .circuit(1)
    .itemInputs('prts:pseudo_wanjing_substrate','prts:type_two_wanzi','2x #forge:dusts/gold','2x gtceu:silver_dust')
    .itemOutputs('prts:pseudo_wanjing_etched_substrate')
    .duration(150)
    .EUt(256)
    //拟化万晶蚀刻基板制作1
    event.recipes.gtceu.basic_model_wanzi_etching_machine('prts:pseudo_wanjing_etched_substrate')
    .circuit(2)
    .chancedInput('prts:advanced_wanzi_emitter',2000,0)
    .chancedInput('prts:type_b_wanzi_emission_concentrator',2000,0)
    .itemInputs('prts:pseudo_wanjing_substrate','prts:type_two_wanzi','2x #forge:dusts/gold','2x gtceu:silver_dust')
    .itemOutputs('2x prts:pseudo_wanjing_etched_substrate')
    .duration(150)
    .EUt(256)
    //拟化万晶蚀刻基板制作1
    
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
    ],'prts:type_one_wanjing_etched_substrate',170,20,'prts:waste_material','gtceu:tiny_iron_dust',287,115,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_1',1,[
        'prts:base_substrate_wanjing',
        '3x minecraft:iron_ingot',
        '3x minecraft:copper_ingot'
    ],'prts:type_one_wanjing_etched_substrate',340,30,'gtceu:tiny_iron_dust','gtceu:tiny_copper_dust',10,10,20,20)
    basic_model_wanzi_etching_machine('wanzi_etching_2',1,[
        'minecraft:iron_block'
    ],[
        'prts:crude_etched_iron_block',
        '3x prts:iron_grit_dust_wanzi'
    ],255,30,'prts:iron_grit_dust_wanzi','prts:iron_grit_dust_wanzi',920,575,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_3',1,[
        'minecraft:copper_block'
    ],[
        'prts:crude_etched_copper_block',
        '3x prts:copper_grit_dust_wanzi'
    ],255,30,'prts:copper_grit_dust_wanzi','prts:copper_grit_dust_wanzi',920,575,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_4',1,[
        'minecraft:gold_block'
    ],[
        'prts:crude_etched_gold_block',
        '3x prts:gold_grit_dust_wanzi'
    ],255,30,'prts:gold_grit_dust_wanzi','prts:gold_grit_dust_wanzi',460,287,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_5',1,[
        'prts:crude_etched_iron_block'
    ],[
        'prts:refined_etched_iron_block',
        '3x prts:iron_grit_dust_wanzi'
    ],340,30,'prts:iron_grit_dust_wanzi','prts:iron_grit_dust_wanzi',1840,575,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_6',1,[
        'prts:crude_etched_copper_block'
    ],[
        'prts:refined_etched_copper_block',
        '3x prts:copper_grit_dust_wanzi'
    ],340,30,'prts:copper_grit_dust_wanzi','prts:copper_grit_dust_wanzi',1840,575,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_7',1,[
        'prts:crude_etched_gold_block'
    ],[
        'prts:refined_etched_gold_block',
        '3x prts:gold_grit_dust_wanzi'
    ],340,30,'prts:gold_grit_dust_wanzi','prts:gold_grit_dust_wanzi',920,287,10,10)
    basic_model_wanzi_etching_machine('wanzi_etching_8',1,[
        'prts:stable_wanjing_substrate',
        '2x minecraft:copper_ingot',
        'minecraft:iron_ingot'
    ],[
        'prts:stable_wanjing_etched_substrate'
    ],170,80,'prts:waste_material','5x gtceu:tiny_copper_dust',460,230,1000,1000)
    basic_model_wanzi_etching_machine('wanzi_etching_9',1,[
        'prts:stable_wanjing_substrate',
        '2x gtceu:copper_dust',
        'gtceu:iron_dust'
    ],[
        'prts:stable_wanjing_etched_substrate'
    ],170,80,'prts:waste_material','5x gtceu:tiny_copper_dust',460,230,1000,1000)
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
        B:'prts:type_c_packaging_unit',
        A:'prts:type_c_conductive_circuit',
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
        B:'prts:type_b_packaging_unit',
        A:'prts:type_b_conductive_circuit',
        S:'prts:high_voltage_universal_casing',
        C:'prts:type_b_high_voltage_transformation_component',
        F:'prts:type_b_risk_management_unit'
    })//进阶型万子蚀刻机配方
})