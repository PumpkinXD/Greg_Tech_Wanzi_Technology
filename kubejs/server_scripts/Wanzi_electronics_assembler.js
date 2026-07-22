ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('ae2:controller_1')
    .itemInputs('ae2:calculation_processor','ae2:logic_processor','ae2:engineering_processor','2x ae2:sky_dust','2x ae2:fluix_crystal','#gtceu:circuits/mv')
    .itemOutputs('3x ae2:controller')
    .duration(120)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('ae2:controller_2')
    .itemInputs('ae2:calculation_processor','ae2:logic_processor','ae2:engineering_processor','#gtceu:circuits/mv','3x ae2:fluix_crystal','2x gtceu:stainless_steel_dust')
    .itemOutputs('5x ae2:controller')
    .duration(56)
    .EUt(128)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('ae2:calculation_processor_1')
    .itemInputs('ae2:printed_calculation_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('3x ae2:calculation_processor')
    .duration(120)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('ae2:logic_processor_1')
    .itemInputs('ae2:printed_logic_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('3x ae2:logic_processor')
    .duration(120)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('ae2:engineering_processor_1')
    .itemInputs('ae2:printed_engineering_processor','2x ae2:printed_silicon')
    .inputFluids(Fluid.of('gtceu:redstone', 144))
    .itemOutputs('3x ae2:engineering_processor')
    .duration(120)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:mv_1')
    .circuit(4)
    .notConsumable('gtceu:good_electronic_circuit')
    .itemInputs('2x prts:type_d_purified_packaging_unit','prts:type_d_high_voltage_transformation_component','4x prts:type_d_purified_conductive_circuit','prts:type_d_purified_circuit_cross_domain_actuator')
    .itemOutputs('2x gtceu:good_integrated_circuit')
    .duration(160)
    .EUt(64)
    //MV级别电路组装（优质集成电路1）

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:mv_2')
    .circuit(1)
    .itemInputs('2x prts:type_c_purified_resistor','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_high_voltage_transformation_component')
    .inputFluids(Fluid.of('gtceu:waw',144))
    .itemOutputs('4x gtceu:good_integrated_circuit')
    .duration(188)
    .EUt(64)
    //MV级别电路组装（优质集成电路_2）

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:mv_3')
    .circuit(2)
    .itemInputs('2x prts:type_c_resistor','2x prts:type_c_conductive_circuit','prts:type_c_high_voltage_transformation_component')
    .inputFluids(Fluid.of('gtceu:waw',144))
    .itemOutputs('2x gtceu:good_integrated_circuit')
    .duration(168)
    .EUt(82)
    //MV级别电路组装（优质集成电路_3）

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:mv_reload_mv_1')
    .circuit(1)
    .itemInputs('gtceu:good_electronic_circuit','gtceu:phenolic_printed_circuit_board','2x gtceu:fine_gold_wire','2x gtceu:silver_bolt','prts:basic_wanzi')
    .itemOutputs('gtceu:good_integrated_circuit')
    .duration(154)
    .EUt(82)
    //优质电子电路=>优质集成电路Ⅰ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:mv_reload_mv_2')
    .circuit(1)
    .itemInputs('gtceu:good_electronic_circuit','gtceu:phenolic_printed_circuit_board','2x gtceu:fine_gold_wire','2x gtceu:silver_bolt')
    .inputFluids(Fluid.of('prts:yisanwanzi',144))
    .itemOutputs('gtceu:good_integrated_circuit')
    .duration(154)
    .EUt(82)
    //优质电子电路=>优质集成电路Ⅱ

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_1')
    .circuit(1)
    .itemInputs('gtceu:good_integrated_circuit','gtceu:plastic_printed_circuit_board','prts:low_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',256))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅰ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_2')
    .circuit(2)
    .itemInputs('gtceu:good_integrated_circuit','gtceu:plastic_printed_circuit_board','prts:low_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',256))
    .inputFluids(Fluid.of('prts:yisanwanzi',576))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .chancedOutput('gtceu:advanced_integrated_circuit',500,1500)
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅱ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_3')
    .circuit(1)
    .itemInputs('gtceu:good_integrated_circuit','gtceu:plastic_printed_circuit_board','prts:medium_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',256))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅲ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_4')
    .circuit(2)
    .itemInputs('gtceu:good_integrated_circuit','gtceu:plastic_printed_circuit_board','prts:medium_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',256))
    .inputFluids(Fluid.of('prts:yisanwanzi',576))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .chancedOutput('gtceu:advanced_integrated_circuit',1000,2000)
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅳ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_5')
    .circuit(1)
    .itemInputs('2x gtceu:good_electronic_circuit','gtceu:plastic_printed_circuit_board','2x prts:low_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',512))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅴ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_6')
    .circuit(2)
    .itemInputs('2x gtceu:good_electronic_circuit','gtceu:plastic_printed_circuit_board','2x prts:low_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',512))
    .inputFluids(Fluid.of('prts:yisanwanzi',1152))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .chancedOutput('gtceu:advanced_integrated_circuit',100,500)
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅵ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_7')
    .circuit(1)
    .itemInputs('2x gtceu:good_electronic_circuit','gtceu:plastic_printed_circuit_board','2x prts:medium_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',512))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅶ
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:advanced_integrated_circuit_8')
    .circuit(2)
    .itemInputs('2x gtceu:good_electronic_circuit','gtceu:plastic_printed_circuit_board','2x prts:medium_voltage_wanzi_circuit')
    .inputFluids(Fluid.of('gtceu:soldering_alloy',512))
    .inputFluids(Fluid.of('prts:yisanwanzi',1152))
    .itemOutputs('gtceu:advanced_integrated_circuit')
    .chancedOutput('gtceu:advanced_integrated_circuit',250,750)
    .duration(150)
    .EUt(128)
    //优质集成电路=>进阶集成电路Ⅷ

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:zy_1')
    .circuit(1)
    .itemInputs('2x prts:type_c_resistor','2x prts:type_c_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:waw',144))
    .inputFluids(Fluid.of('prts:yisanwanzi',144))
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .notConsumable('prts:type_c_specialized_circuit_group')
    .itemOutputs('2x prts:medium_voltage_wanzi_circuit')
    .duration(128)
    .EUt(60)
    //中压万子电路组装_1

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:zy_2')
    .circuit(2)
    .itemInputs('3x prts:type_c_resistor','3x prts:type_c_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:waw',288))
    .inputFluids(Fluid.of('prts:yisanwanzi',288))
    .notConsumable('prts:type_c_wire_guide_connection_device')
    .itemOutputs('2x prts:medium_voltage_wanzi_circuit')
    .duration(160)
    .EUt(80)
    //中压万子电路组装_2

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:zy_3')
    .circuit(3)
    .itemInputs('4x prts:type_c_resistor','4x prts:type_c_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:waw',576))
    .inputFluids(Fluid.of('prts:yisanwanzi',576))
    .itemOutputs('2x prts:medium_voltage_wanzi_circuit')
    .duration(240)
    .EUt(128)
    //中压万子电路组装_3

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wood_palte_electronics_1')
    .circuit(1)
    .chancedInput('prts:type_c_phase_change_device',1000,500)
    .itemInputs('gtceu:wood_plate','3x prts:type_c_purified_resistor','2x prts:type_c_conductive_circuit','gtceu:tiny_gallium_arsenide_dust')
    .itemOutputs('3x gtceu:good_integrated_circuit')
    .duration(240)
    .EUt(64)

    // === 电阻快速制作 === //
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_resistor_1')
    .circuit(1)
    .itemInputs('gtceu:copper_single_wire','#forge:dusts/coal','prts:type_d_resistor')
    .itemOutputs('6x gtceu:resistor')
    .duration(24)
    .EUt(24)//煤炭粉制作
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_resistor_2')
    .circuit(1)
    .itemInputs('gtceu:copper_single_wire','gtceu:carbon_dust','prts:type_d_purified_resistor')
    .itemOutputs('9x gtceu:resistor')
    .duration(20)
    .EUt(32)//碳粉制作

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_resistor_3')
    .circuit(1)
    .itemInputs('gtceu:fine_waw_wire','#forge:dusts/coal','gtceu:resistor','gtceu:tiny_waw_dust')
    .itemOutputs('2x prts:type_c_resistor')
    .duration(20)
    .EUt(64)//碳粉制作C型电阻
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_resistor_4')
    .circuit(1)
    .itemInputs('gtceu:fine_waw_wire','gtceu:carbon_dust','gtceu:resistor','gtceu:tiny_waw_dust')
    .itemOutputs('2x prts:type_c_resistor')
    .duration(20)
    .EUt(80)//碳粉制作C型电阻


    // === 二极管快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_diode_1')
    .circuit(12)
    .itemInputs('gtceu:silicon_wafer','gtceu:copper_single_wire','prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:diode')
    .duration(28)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_diode_2')
    .circuit(12)
    .itemInputs('gtceu:silicon_wafer','gtceu:silver_single_wire','prts:type_c_purified_conductive_circuit')
    .itemOutputs('9x gtceu:diode')
    .duration(24)
    .EUt(80)

    // === 电容快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_capacitor_1')
    .circuit(13)
    .itemInputs('2x gtceu:aluminium_foil','gtceu:polyethylene_plate','prts:type_c_packaging_unit')
    .itemOutputs('6x gtceu:capacitor')
    .duration(28)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_capacitor_2')
    .circuit(13)
    .itemInputs('2x gtceu:aluminium_foil','gtceu:polyethylene_plate','prts:type_c_purified_packaging_unit')
    .itemOutputs('9x gtceu:capacitor')
    .duration(24)
    .EUt(80)

    // === 晶体管快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_transistor_1')
    .circuit(14)
    .itemInputs('gtceu:silicon_plate','3x gtceu:copper_single_wire','prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:transistor')
    .duration(32)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_transistor_2')
    .circuit(14)
    .itemInputs('gtceu:silicon_plate','2x gtceu:silver_single_wire','prts:type_c_purified_conductive_circuit')
    .itemOutputs('9x gtceu:transistor')
    .duration(28)
    .EUt(80)


    // === SMD电阻快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_resistor_1')
    .circuit(15)
    .itemInputs('gtceu:resistor','minecraft:glowstone_dust','prts:type_c_packaging_unit')
    .itemOutputs('2x gtceu:smd_resistor')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_resistor_2')
    .circuit(15)
    .itemInputs('gtceu:resistor','minecraft:glowstone_dust','prts:type_c_purified_packaging_unit')
    .itemOutputs('3x gtceu:smd_resistor')
    .duration(25)
    .EUt(96)

    // === SMD二极管快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_diode_1')
    .circuit(16)
    .itemInputs('gtceu:diode','minecraft:glowstone_dust','prts:type_c_packaging_unit')
    .itemOutputs('2x gtceu:smd_diode')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_diode_2')
    .circuit(16)
    .itemInputs('gtceu:diode','minecraft:glowstone_dust','prts:type_c_purified_packaging_unit')
    .itemOutputs('3x gtceu:smd_diode')
    .duration(25)
    .EUt(96)

    // === SMD晶体管快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_transistor_1')
    .circuit(17)
    .itemInputs('gtceu:transistor','minecraft:glowstone_dust','prts:type_c_packaging_unit')
    .itemOutputs('2x gtceu:smd_transistor')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_transistor_2')
    .circuit(17)
    .itemInputs('gtceu:transistor','minecraft:glowstone_dust','prts:type_c_purified_packaging_unit')
    .itemOutputs('3x gtceu:smd_transistor')
    .duration(25)
    .EUt(96)

    // === SMD电容快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_capacitor_1')
    .circuit(18)
    .itemInputs('gtceu:capacitor','minecraft:glowstone_dust','prts:type_c_packaging_unit')
    .itemOutputs('2x gtceu:smd_capacitor')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_smd_capacitor_2')
    .circuit(18)
    .itemInputs('gtceu:capacitor','minecraft:glowstone_dust','prts:type_c_purified_packaging_unit')
    .itemOutputs('3x gtceu:smd_capacitor')
    .duration(25)
    .EUt(96)

    // === 电路板快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_pcb_1')
    .circuit(19)
    .itemInputs('gtceu:wood_plate','gtceu:copper_foil','prts:type_c_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:glue',100))
    .itemOutputs('2x gtceu:phenolic_printed_circuit_board')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_pcb_2')
    .circuit(19)
    .itemInputs('gtceu:wood_plate','gtceu:copper_foil','prts:type_c_purified_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:glue',100))
    .itemOutputs('3x gtceu:phenolic_printed_circuit_board')
    .duration(35)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_pcb_3')
    .circuit(19)
    .itemInputs('gtceu:wood_plate','gtceu:copper_foil','prts:type_c_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:wax',100))
    .itemOutputs('4x gtceu:phenolic_printed_circuit_board')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_pcb_4')
    .circuit(19)
    .itemInputs('gtceu:wood_plate','gtceu:copper_foil','prts:type_c_purified_conductive_circuit')
    .inputFluids(Fluid.of('gtceu:wax',100))
    .itemOutputs('6x gtceu:phenolic_printed_circuit_board')
    .duration(35)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:plastic_printed_circuit_board_1')
    .circuit(1)
    .itemInputs('gtceu:polyethylene_plate','gtceu:copper_foil','prts:type_c_conductive_circuit','prts:adhesive_plastic')
    .inputFluids(Fluid.of('gtceu:sulfuric_acid',100))
    .itemOutputs('2x gtceu:plastic_printed_circuit_board')
    .duration(45)
    .EUt(80)//塑料印刷电路板制作1
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:plastic_printed_circuit_board_2')
    .circuit(1)
    .itemInputs('gtceu:polyethylene_plate','gtceu:copper_foil','prts:type_c_purified_conductive_circuit','prts:adhesive_plastic')
    .inputFluids(Fluid.of('gtceu:sulfuric_acid',100))
    .itemOutputs('3x gtceu:plastic_printed_circuit_board')
    .duration(40)
    .EUt(96)//塑料印刷电路板制作2
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:plastic_printed_circuit_board_3')
    .circuit(1)
    .itemInputs('gtceu:polyethylene_plate','gtceu:copper_foil','prts:type_c_conductive_circuit','prts:adhesive_plastic')
    .inputFluids(Fluid.of('gtceu:wax',200))
    .inputFluids(Fluid.of('gtceu:sulfuric_acid',100))
    .itemOutputs('4x gtceu:plastic_printed_circuit_board')
    .duration(45)
    .EUt(80)//塑料印刷电路板制作3
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:plastic_printed_circuit_board_4')
    .circuit(1)
    .itemInputs('gtceu:polyethylene_plate','gtceu:copper_foil','prts:type_c_purified_conductive_circuit','prts:adhesive_plastic')
    .inputFluids(Fluid.of('gtceu:wax',200))
    .inputFluids(Fluid.of('gtceu:sulfuric_acid',100))
    .itemOutputs('6x gtceu:plastic_printed_circuit_board')
    .duration(40)
    .EUt(96)//塑料印刷电路板制作4

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_basic_circuit_1')
    .circuit(1)
    .itemInputs('gtceu:phenolic_printed_circuit_board','2x gtceu:resistor','2x gtceu:vacuum_tube','prts:type_c_conductive_circuit')
    .itemOutputs('2x gtceu:basic_electronic_circuit')
    .duration(50)
    .EUt(64)//基础电子电路制作1
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_basic_circuit_2')
    .circuit(1)
    .itemInputs('gtceu:phenolic_printed_circuit_board','gtceu:resistor','gtceu:vacuum_tube','prts:type_c_purified_conductive_circuit')
    .itemOutputs('3x gtceu:basic_electronic_circuit')
    .duration(45)
    .EUt(80)//基础电子电路制作2

    // === 优质电路快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_good_circuit_1')
    .circuit(1)
    .itemInputs('gtceu:plastic_printed_circuit_board','2x gtceu:diode','2x gtceu:transistor','prts:type_c_conductive_circuit')
    .itemOutputs('2x gtceu:good_electronic_circuit')
    .duration(55)
    .EUt(80)
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_good_circuit_2')
    .circuit(1)
    .itemInputs('gtceu:plastic_printed_circuit_board','gtceu:diode','gtceu:transistor','prts:type_c_purified_conductive_circuit')
    .itemOutputs('4x gtceu:good_electronic_circuit')
    .duration(50)
    .EUt(96)

    // === 真空管快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_vacuum_tube_1')
    .circuit(25)
    .itemInputs('gtceu:glass_tube','gtceu:steel_bolt','2x gtceu:copper_single_wire','prts:type_c_packaging_unit')
    .itemOutputs('3x gtceu:vacuum_tube')
    .duration(35)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_vacuum_tube_2')
    .circuit(25)
    .itemInputs('gtceu:glass_tube','gtceu:steel_bolt','gtceu:copper_single_wire','prts:type_c_purified_packaging_unit')
    .itemOutputs('4x gtceu:vacuum_tube')
    .duration(30)
    .EUt(80)

    // === 线圈快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_coil_1')
    .circuit(26)
    .itemInputs('gtceu:cupronickel_double_wire','gtceu:aluminium_foil','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('2x gtceu:lv_voltage_coil')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_coil_2')
    .circuit(26)
    .itemInputs('gtceu:cupronickel_double_wire','gtceu:aluminium_foil','prts:type_c_purified_circuit_cross_domain_actuator')
    .itemOutputs('3x gtceu:lv_voltage_coil')
    .duration(35)
    .EUt(80)

    // === MV线圈快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_mv_coil_1')
    .circuit(27)
    .itemInputs('gtceu:cupronickel_quadruple_wire','gtceu:steel_foil','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('2x gtceu:mv_voltage_coil')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_mv_coil_2')
    .circuit(27)
    .itemInputs('gtceu:cupronickel_quadruple_wire','gtceu:steel_foil','prts:type_c_purified_circuit_cross_domain_actuator')
    .itemOutputs('3x gtceu:mv_voltage_coil')
    .duration(40)
    .EUt(96)

    // === 芯片快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('wanzi_mv_chip_1')
    .circuit(28)
    .itemInputs('gtceu:silicon_wafer','gtceu:copper_foil','prts:type_c_packaging_unit')
    .itemOutputs('4x gtceu:ulpic_chip')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_chip_2')
    .circuit(28)
    .itemInputs('gtceu:silicon_wafer','gtceu:silver_foil','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:ulpic_chip')
    .duration(35)
    .EUt(96)

    // === LPIC芯片快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_lpic_1')
    .circuit(29)
    .itemInputs('gtceu:silicon_wafer','gtceu:aluminium_foil','prts:type_c_packaging_unit')
    .itemOutputs('4x gtceu:lpic_chip')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_lpic_2')
    .circuit(29)
    .itemInputs('gtceu:silicon_wafer','gtceu:electrum_foil','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:lpic_chip')
    .duration(40)
    .EUt(96)

    // === 硅晶圆快速制作 ===
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_wafer_1')
    .circuit(30)
    .itemInputs('gtceu:silicon_ingot','prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:silicon_wafer')
    .duration(50)
    .EUt(64)

    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('prts:wanzi_mv_wafer_2')
    .circuit(30)
    .itemInputs('gtceu:silicon_ingot','prts:type_c_purified_conductive_circuit')
    .itemOutputs('6x gtceu:silicon_wafer')
    .duration(45)
    .EUt(80)

    function basic_model_wanzi_electronics_assembler(id,C,I,O,T,E){
        event.recipes.gtceu.basic_model_wanzi_electronics_assembler(id)//别问跑不跑的动，他能跑
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
    }//万子电路组装
    basic_model_wanzi_electronics_assembler('ass_1',1,[
        'gtceu:resin_printed_circuit_board',
        '4x prts:type_d_resistor',
        'prts:type_d_circuit_cross_domain_actuator',
        '2x prts:type_d_packaging_unit',
        '4x prts:type_d_conductive_circuit'
    ],['2x gtceu:basic_electronic_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_2',1,[
        'gtceu:resin_printed_circuit_board',
        '4x prts:type_d_purified_resistor',
        'prts:type_d_circuit_cross_domain_actuator',
        '2x prts:type_d_packaging_unit',
        '4x prts:type_d_purified_conductive_circuit'
    ],['4x gtceu:basic_electronic_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_3',1,[
        '3x prts:type_d_resistor',
        '3x prts:type_d_conductive_circuit',
        'prts:type_d_packaging_unit',
        '2x prts:type_d_high_voltage_transformation_component'
    ],['prts:low_voltage_wanzi_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_4',1,[
        '5x prts:type_d_resistor',
        '5x prts:type_d_conductive_circuit',
        '2x prts:type_d_packaging_unit',
        '3x prts:type_d_high_voltage_transformation_component'
    ],['2x prts:low_voltage_wanzi_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_5',1,[
        '2x prts:type_d_resistor',
        'prts:type_d_circuit_cross_domain_actuator',
        '2x prts:type_d_high_voltage_transformation_component',
        'gtceu:basic_electronic_circuit',
        'gtceu:phenolic_printed_circuit_board'
    ],['gtceu:good_electronic_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_6',1,[
        '2x prts:type_d_purified_resistor',
        'prts:type_d_purified_circuit_cross_domain_actuator',
        '2x prts:type_d_purified_high_voltage_transformation_component',
        'gtceu:basic_electronic_circuit',
        'gtceu:phenolic_printed_circuit_board'
    ],['3x gtceu:good_electronic_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_7',1,[
        'prts:experimental_dsv_component',
        'prts:type_d_risk_management_unit',
        'prts:type_d_circuit_cross_domain_actuator',
        '2x prts:type_d_purified_high_voltage_transformation_component',
        '2x prts:type_d_conductive_circuit',
    ],['prts:medium_voltage_wanzi_circuit'],300,30)
    basic_model_wanzi_electronics_assembler('ass_8',2,[
        'prts:experimental_dsv_component',
        'prts:type_d_risk_management_unit',
        'prts:type_d_circuit_cross_domain_actuator',
        '3x prts:type_d_purified_high_voltage_transformation_component',
        '3x prts:type_d_conductive_circuit',
    ],['2x prts:medium_voltage_wanzi_circuit'],300,30)

    event.shaped('gtceu:lv_basic_model_wanzi_electronics_assembler',[
        "ABC",
        "DSE",
        "FFF"
    ],{
        A:'prts:type_d_purified_high_voltage_transformation_component',
        B:'prts:type_d_purified_circuit_cross_domain_actuator',
        C:'prts:type_d_purified_packaging_unit',
        D:'prts:basic_wanzi_emitter',
        E:'prts:basic_wanzi_actuator',
        F:'prts:basic_wanzi_impact_resistant_plate',
        S:'gtceu:basic_electronic_circuit'
    })//基础型万子电路组装机配方
    event.shaped('gtceu:mv_basic_model_wanzi_electronics_assembler',[
        "ABC",
        "DSE",
        "FFF"
    ],{
        A:'prts:type_c_purified_high_voltage_transformation_component',
        B:'prts:type_c_purified_circuit_cross_domain_actuator',
        C:'prts:type_c_purified_packaging_unit',
        D:'prts:production_type_wanzi_emitter',
        E:'prts:production_type_wanzi_actuator',
        F:'prts:production_type_wanzi_impact_resistant_plate',
        S:'gtceu:good_electronic_circuit'
    })//正式型万子电路组装机配方
    event.shaped('gtceu:hv_basic_model_wanzi_electronics_assembler',[
        "ABC",
        "DSE",
        "FFF"
    ],{
        A:'prts:type_b_purified_high_voltage_transformation_component',
        B:'prts:type_b_purified_circuit_cross_domain_actuator',
        C:'prts:type_b_purified_packaging_unit',
        D:'prts:advanced_wanzi_emitter',
        E:'prts:advanced_wanzi_actuator',
        F:'prts:advanced_wanzi_resistor_plate',
        S:'gtceu:good_electronic_circuit'
    })//进阶型万子电路组装机配方

    // ==================== DSV型组件合成配方 ====================
    // DSV型组件 - 万子电路组装厂制作（高效方法，产量最高）
    
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('dsv_component_electronics_1')
        .circuit(2)
        .itemInputs(
            '2x prts:medium_voltage_wanzi_circuit',
            '3x prts:type_c_purified_packaging_unit',
            '2x prts:type_c_specialized_circuit_group',
            'prts:abnormal_data'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
        .itemOutputs('3x prts:dsv_component')
        .duration(180)
        .EUt(128)
    
    // DSV型实验组件 - 万子电路组装厂制作（使用异常数据）
    
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('dsv_experimental_electronics_1')
        .circuit(10)
        .itemInputs(
            '4x prts:type_d_conductive_circuit',
            '2x prts:type_d_packaging_unit',
            '3x prts:type_d_circuit_cross_domain_actuator',
            '6x prts:basic_wanzi',
            'prts:abnormal_data'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x prts:experimental_dsv_component')
        .duration(120)
        .EUt(32)

    // ==================== 拓展用途配方 ====================
    
    // 电路通用信息块 - 万子电路组装厂制作
    event.recipes.gtceu.basic_model_wanzi_electronics_assembler('wanzi_circuit_info')
        .circuit(1)
        .itemInputs('2x prts:general_purpose_circuit_unit', 'gtceu:ram_chip', 'prts:type_c_circuit_cross_domain_actuator')
        .itemOutputs('2x prts:general_purpose_circuit_information_module')
        .duration(150)
        .EUt(128)

})