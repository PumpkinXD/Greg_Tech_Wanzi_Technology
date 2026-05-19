ServerEvents.recipes((event) => {
    function basic_model_wanzi_condenser(id,I,O,T,eu,P){
        event.recipes.gtceu.basic_model_wanzi_condenser(id)
             .circuit(P)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(eu)
    }//基础万子凝练机配方代码，以下为万子凝练配方实现代码块
    basic_model_wanzi_condenser('wanzi_condenser','minecraft:raw_iron','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_1','gtceu:raw_hematite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_2','gtceu:raw_goethite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_3','gtceu:raw_magnetite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_4','gtceu:raw_pyrite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_5','gtceu:raw_yellow_limonite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_6','2x minecraft:raw_copper','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_7','2x gtceu:raw_chalcopyrite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_8','2x gtceu:raw_tetrahedrite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_9','2x gtceu:raw_bornite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_10','2x gtceu:raw_chalcocite','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_11','minecraft:raw_gold','2x prts:basic_wanzi',128,20,1)
    basic_model_wanzi_condenser('wanzi_condenser_12','gtceu:raw_diamond','8x prts:basic_wanzi',179,30,1)
    basic_model_wanzi_condenser('wanzi_condenser_13','2x gtceu:raw_coal','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_14','4x gtceu:stone_dust','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_15','3x minecraft:lapis_lazuli','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_16','2x minecraft:redstone','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_17','#forge:dusts/iron','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_18','2x #forge:dusts/copper','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_19','#forge:dusts/gold','2x prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_20','#forge:dusts/diamond','8x prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_21','6x #forge:dusts/wood','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_22','3x gtceu:raw_rubber_dust','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_23','3x #forge:dusts/tin','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_24','3x gtceu:deepslate_dust','prts:basic_wanzi',77,10,1)
    basic_model_wanzi_condenser('wanzi_condenser_25','2x minecraft:raw_iron','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_26','2x gtceu:raw_hematite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_27','2x gtceu:raw_goethite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_28','2x gtceu:raw_magnetite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_29','2x gtceu:raw_pyrite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_30','2x gtceu:raw_yellow_limonite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_31','3x minecraft:raw_copper','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_32','3x gtceu:raw_chalcopyrite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_33','3x gtceu:raw_tetrahedrite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_34','3x gtceu:raw_bornite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_35','3x gtceu:raw_chalcocite','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_36','2x minecraft:raw_gold','3x prts:type_one_wanzi',120,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_37','2x gtceu:raw_diamond','12x prts:type_one_wanzi',168,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_38','3x gtceu:raw_coal','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_39','6x gtceu:stone_dust','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_40','4x minecraft:lapis_lazuli','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_41','3x minecraft:redstone','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_42','2x #forge:dusts/iron','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_43','3x #forge:dusts/copper','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_44','2x #forge:dusts/gold','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_45','2x #forge:dusts/diamond','12x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_46','8x #forge:dusts/wood','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_47','4x gtceu:raw_rubber_dust','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_48','4x #forge:dusts/tin','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_49','4x gtceu:deepslate_dust','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_50','gtceu:aluminium_dust','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_51','gtceu:aluminium_ingot','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_52','gtceu:aluminium_dust','prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_53','gtceu:aluminium_ingot','prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_54','6x #minecraft:completes_find_tree_tutorial','prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_55','8x #minecraft:completes_find_tree_tutorial','2x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_56','gtceu:raw_nickel','2x prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_57','2x gtceu:raw_nickel','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_58','gtceu:raw_garnierite','2x prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_59','2x gtceu:raw_garnierite','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_60','gtceu:raw_pentlandite','2x prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_61','2x gtceu:raw_pentlandite','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_62','gtceu:nickel_ingot','2x prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_63','2x gtceu:nickel_ingot','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_64','gtceu:nickel_dust','2x prts:basic_wanzi',77,40,1)
    basic_model_wanzi_condenser('wanzi_condenser_65','2x gtceu:nickel_dust','3x prts:type_one_wanzi',72,40,2)
    basic_model_wanzi_condenser('wanzi_condenser_66','2x prts:purified_basic_wanzi','2x prts:type_one_wanzi',72,40,2)


    event.shaped('gtceu:lv_basic_model_wanzi_condenser',[
        ['gtceu:copper_quadruple_wire','gtceu:basic_electronic_circuit','gtceu:red_alloy_quadruple_wire'],
        ['gtceu:basic_electronic_circuit','gtceu:lv_machine_hull','gtceu:basic_electronic_circuit'],
        ['gtceu:red_alloy_quadruple_wire','gtceu:basic_electronic_circuit','gtceu:copper_quadruple_wire']
    ])//基础型万子凝练机制作

    event.shaped('gtceu:mv_basic_model_wanzi_condenser',[
        ['gtceu:silver_quadruple_wire','gtceu:good_electronic_circuit','gtceu:electrum_quadruple_wire'],
        ['gtceu:good_electronic_circuit','gtceu:mv_machine_hull','gtceu:good_electronic_circuit'],
        ['gtceu:electrum_quadruple_wire','gtceu:good_electronic_circuit','gtceu:silver_quadruple_wire']
    ])//正式型万子凝练机制作

    event.shaped('gtceu:hv_basic_model_wanzi_condenser',[
        ['gtceu:electrum_quadruple_wire','gtceu:advanced_integrated_circuit','gtceu:nichrome_quadruple_wire'],
        ['gtceu:advanced_integrated_circuit','gtceu:hv_machine_hull','gtceu:advanced_integrated_circuit'],
        ['gtceu:nichrome_quadruple_wire','gtceu:advanced_integrated_circuit','gtceu:electrum_quadruple_wire']
    ])//进阶型万子凝练机制作
})