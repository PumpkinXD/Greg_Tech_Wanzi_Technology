ServerEvents.recipes((event) => {
    // === 机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_conductive_circuit','2x gtceu:tin_single_cable')
    .itemOutputs('5x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)//LV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_conductive_circuit','2x gtceu:tin_single_cable')
    .itemOutputs('3x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)//LV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_purified_conductive_circuit','2x gtceu:copper_single_cable')
    .itemOutputs('8x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)//LV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_purified_conductive_circuit','2x gtceu:copper_single_cable')
    .itemOutputs('5x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)//LV机器外壳

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',1000,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:annealed_copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',1000,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:annealed_copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_5')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:cupronickel_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_6')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',500,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:cupronickel_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_7')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','2x gtceu:waw_single_wire','prts:type_c_conductive_circuit')
    .itemOutputs('5x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_hull_8')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',500,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_purified_conductive_circuit')
    .itemOutputs('10x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('3x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('4x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('3x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('6x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_5')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:flt_single_wire','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('4x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_hull_6')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:flt_single_wire','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('8x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳

    // ===LV变压器快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_1a_transformer_1')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','2x gtceu:tin_single_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:lv_transformer_1a')
    .duration(40)
    .EUt(20)//1A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_1a_transformer_2')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','4x gtceu:tin_single_cable','prts:type_d_purified_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:lv_transformer_1a')
    .duration(34)
    .EUt(32)//1A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_2a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:tin_double_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_2a')
    .duration(40)
    .EUt(20)//1A => 2A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_2a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_1a','4x gtceu:tin_double_cable','prts:type_d_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_2a')
    .duration(34)
    .EUt(32)//1A => 2A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_4a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:tin_quadruple_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_4a')
    .duration(40)
    .EUt(20)//2A => 4A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_4a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_2a','4x gtceu:tin_quadruple_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_4a')
    .duration(34)
    .EUt(32)//2A => 4A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_16a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_4a','gtceu:tin_hex_cable','gtceu:small_copper_spring','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_16a')
    .duration(40)
    .EUt(20)//4A => 16A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_16a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_4a','gtceu:tin_hex_cable','gtceu:small_copper_spring','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_16a')
    .duration(34)
    .EUt(32)//4A => 16A

    // === MV变压器快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_1a_transformer_1')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:copper_single_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:mv_transformer_1a')
    .duration(80)
    .EUt(20)//1A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_1a_transformer_2')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_machine_hull','4x gtceu:copper_single_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:mv_transformer_1a')
    .duration(20)
    .EUt(32)//1A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_2a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_1a','2x gtceu:copper_double_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_2a')
    .duration(80)
    .EUt(20)//1A => 2A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_2a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_1a','4x gtceu:copper_double_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_2a')
    .duration(20)
    .EUt(32)//1A => 2A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_4a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_2a','2x gtceu:copper_quadruple_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_4a')
    .duration(80)
    .EUt(20)//2A => 4A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_4a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_2a','4x gtceu:copper_quadruple_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_4a')
    .duration(20)
    .EUt(32)//2A => 4A

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_16a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_4a','gtceu:copper_hex_cable','gtceu:gold_spring','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_16a')
    .duration(80)
    .EUt(20)//4A => 16A
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_16a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_4a','gtceu:copper_hex_cable','gtceu:gold_spring','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_16a')
    .duration(20)
    .EUt(32)//4A => 16A

    //  ↓  ↓  LV能量转换器制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_1a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（基础线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_1a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（高级线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_1a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（精英线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_1a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//1A（终极线缆）

    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_4a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（基础线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_4a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（高级线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_4a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（精英线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_4a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（终极线缆）

    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_8a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（基础线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_8a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（高级线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_8a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（精英线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_8a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（终极线缆）

    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_16a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（基础线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_16a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（高级线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_16a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（精英线缆）
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_16a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（终极线缆）

    // === 能源输入仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_1')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_ring',2000,1500)
    .itemInputs('gtceu:lv_machine_hull','4x #forge:ingots/tin','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:lv_energy_input_hatch')
    .duration(34)
    .EUt(16)//LV能源仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_2')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:blueprint_ring',3500,1500)
    .itemInputs('gtceu:mv_machine_hull','4x #forge:ingots/copper','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:mv_energy_input_hatch')
    .duration(60)
    .EUt(64)//MV能源仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_3')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:blueprint_ring',3500,1500)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','4x prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:mv_energy_input_hatch')
    .duration(20)
    .EUt(64)//MV能源仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_4')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','4x #forge:ingots/aluminium','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:hv_energy_input_hatch')
    .duration(60)
    .EUt(256)//HV能源仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_5')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','#gtceu:waw_yuan','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:hv_energy_input_hatch')
    .duration(20)
    .EUt(256)//HV能源仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_in_6')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:flt_ingot','4x prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:hv_energy_input_hatch')
    .duration(20)
    .EUt(256)//HV能源仓

    // === 能源输出仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_out_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1500,-500)
    .itemInputs('gtceu:lv_machine_hull','4x #forge:ingots/tin','4x prts:basic_wanzi')
    .itemOutputs('4x gtceu:lv_energy_output_hatch')
    .duration(40)
    .EUt(64)//LV动力仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_out_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','4x #forge:ingots/copper','4x prts:basic_wanzi')
    .itemOutputs('4x gtceu:mv_energy_output_hatch')
    .duration(40)
    .EUt(64)//MV动力仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_out_3')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_energy_output_hatch')
    .duration(40)
    .EUt(64)//MV动力仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_out_4')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_machine_hull','4x #forge:ingots/aluminium','4x prts:type_one_wanzi')
    .itemOutputs('4x gtceu:hv_energy_output_hatch')
    .duration(40)
    .EUt(256)//HV动力仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_energy_out_5')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_machine_hull','#gtceu:waw_yuan','4x prts:type_one_wanzi')
    .itemOutputs('4x gtceu:hv_energy_output_hatch')
    .duration(40)
    .EUt(256)//HV动力仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_1a','gtceu:lv_energy_output_hatch','4x #forge:ingots/steel','4x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_4a')
    .duration(40)
    .EUt(16)//LV-4A动力仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_energy_output_hatch_16a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_4a','4x gtceu:lv_energy_output_hatch','8x #forge:ingots/steel','8x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_16a')
    .duration(40)
    .EUt(16)//LV-16A动力仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:lv_energy_output_hatch_64a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_16a','8x gtceu:lv_energy_output_hatch','16x #forge:ingots/steel','16x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_64a')
    .duration(40)
    .EUt(16)//LV-64A动力仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:mv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',500,-500)
    .itemInputs('gtceu:mv_transformer_1a','gtceu:mv_energy_output_hatch','4x #forge:ingots/aluminium','4x prts:basic_wanzi')
    .itemOutputs('gtceu:mv_energy_output_hatch_4a')
    .duration(40)
    .EUt(64)//MV-4A动力仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:mv_energy_output_hatch_16a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',500,-500)
    .itemInputs('gtceu:mv_transformer_4a','4x gtceu:mv_energy_output_hatch','8x #forge:ingots/aluminium','8x prts:basic_wanzi')
    .itemOutputs('gtceu:mv_energy_output_hatch_16a')
    .duration(40)
    .EUt(64)//MV-16A动力仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:hv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_transformer_1a','gtceu:hv_energy_output_hatch','4x #forge:ingots/stainless_steel','4x prts:type_one_wanzi')
    .itemOutputs('gtceu:hv_energy_output_hatch_4a')
    .duration(40)
    .EUt(64)//HV-4A动力仓制作

    // === 物品输入总线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_1')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:lv_input_bus')
    .duration(30)
    .EUt(80)//LV物品输入总线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_2')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_input_bus')
    .duration(40)
    .EUt(80)//MV物品输入总线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_4')
    .circuit(2)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lv_input_bus')
    .duration(30)
    .EUt(80)//LV物品输入总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_5')
    .circuit(2)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:mv_input_bus')
    .duration(40)
    .EUt(80)//MV物品输入总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_6')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:hv_input_bus')
    .duration(40)
    .EUt(80)//HV物品输入总线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_7')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:ev_input_bus')
    .duration(40)
    .EUt(80)//EV物品输入总线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_8')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:hv_input_bus')
    .duration(40)
    .EUt(80)//HV物品输入总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_iteminput_9')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:ev_input_bus')
    .duration(40)
    .EUt(80)//EV物品输入总线（加倍）

    // === 物品输出总线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_1')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)//LV物品输出总线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_2')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)//MV物品输出总线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)//LV物品输出总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)//MV物品输出总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_6')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:hv_output_bus')
    .duration(40)
    .EUt(80)//HV物品输出总线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_7')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:ev_output_bus')
    .duration(40)
    .EUt(80)//EV物品输出总线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_8')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:hv_output_bus')
    .duration(40)
    .EUt(80)//HV物品输出总线（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_itemoutput_9')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:ev_output_bus')
    .duration(40)
    .EUt(80)//EV物品输出总线（加倍）

    // === 流体输入仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_1')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:tin_spring')
    .itemOutputs('3x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(64)//LV流体输入仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_2')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:copper_spring')
    .itemOutputs('3x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)//MV流体输入仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_3')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:copper_spring')
    .itemOutputs('6x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(80)//LV流体输入仓（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:gold_spring')
    .itemOutputs('6x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)//MV流体输入仓（加倍）

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:gold_spring')
    .itemOutputs('3x gtceu:hv_input_hatch')
    .duration(30)
    .EUt(80)//HV流体输入仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_6')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('3x gtceu:ev_input_hatch')
    .duration(40)
    .EUt(80)//EV流体输入仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_7')
    .circuit(1)
    .chancedInput('prts:type_b_packaging_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('6x gtceu:hv_input_hatch')
    .duration(30)
    .EUt(80)//HV流体输入仓（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_in_8')
    .circuit(1)
    .chancedInput('prts:type_b_packaging_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:tungsten_spring')
    .itemOutputs('6x gtceu:ev_input_hatch')
    .duration(40)
    .EUt(80)//EV流体输入仓（加倍）

    // === 流体输出仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_1')
    .circuit(11)
    .chancedInput('prts:type_c_risk_management_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:tin_spring')
    .itemOutputs('3x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(64)//LV流体输出仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_2')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:copper_spring')
    .itemOutputs('3x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)//MV流体输出仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_3')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:copper_spring')
    .itemOutputs('6x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(80)//LV流体输出仓（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:gold_spring')
    .itemOutputs('6x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)//MV流体输出仓（加倍）

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:gold_spring')
    .itemOutputs('3x gtceu:hv_output_hatch')
    .duration(30)
    .EUt(80)//HV流体输出仓
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_6')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('3x gtceu:ev_output_hatch')
    .duration(40)
    .EUt(80)//EV流体输出仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_7')
    .circuit(1)
    .chancedInput('prts:type_b_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('6x gtceu:hv_output_hatch')
    .duration(30)
    .EUt(80)//HV流体输出仓（加倍）
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fluid_out_8')
    .circuit(1)
    .chancedInput('prts:type_b_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:tungsten_spring')
    .itemOutputs('6x gtceu:ev_output_hatch')
    .duration(40)
    .EUt(80)//EV流体输出仓（加倍）

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_muffler_1')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,5000)
    .itemInputs('gtceu:lv_machine_hull','gtceu:bronze_rotor','gtceu:steel_spring','gtceu:lv_electric_motor')
    .itemOutputs('4x gtceu:lv_muffler_hatch')
    .duration(40)
    .EUt(64)//LV消声仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_muffler_1')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,5000)
    .itemInputs('gtceu:mv_machine_hull','gtceu:steel_rotor','gtceu:steel_spring','gtceu:mv_electric_motor')
    .itemOutputs('4x gtceu:mv_muffler_hatch')
    .duration(45)
    .EUt(80)//MV消声仓制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_muffler_1')
    .circuit(12)
    .itemInputs('gtceu:hv_machine_hull','gtceu:steel_rotor','gtceu:aluminium_spring','gtceu:hv_electric_motor')
    .itemOutputs('3x gtceu:hv_muffler_hatch')
    .duration(35)
    .EUt(80)//HV消声仓制作

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_maintenance_1')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_hull','prts:type_c_packaging_unit','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('4x gtceu:maintenance_hatch')
    .duration(40)
    .EUt(64)//普通维护仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_maintenance_2')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_hull','prts:type_c_purified_packaging_unit','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('6x gtceu:maintenance_hatch')
    .duration(35)
    .EUt(80)//普通维护仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_auto_maintenance_1')
    .circuit(1)
    .chancedInput('prts:type_c_specialized_circuit_group',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:maintenance_hatch','2x gtceu:mv_robot_arm')
    .itemOutputs('gtceu:auto_maintenance_hatch')
    .duration(200)
    .EUt(96)//自动维护仓

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_auto_maintenance_2')
    .circuit(1)
    .chancedInput('prts:type_c_purified_specialized_circuit_group',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:maintenance_hatch','gtceu:mv_robot_arm')
    .itemOutputs('gtceu:auto_maintenance_hatch')
    .duration(50)
    .EUt(112)//自动维护仓（高速）

    // === 机械方块快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:steel_plate','2x gtceu:tin_spring','prts:basic_wanzi')
    .itemOutputs('5x gtceu:lv_machine_casing')
    .duration(40)
    .EUt(16)//LV机械方块
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_lv_casing_2')
    .circuit(15)
    .notConsumable('2x prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:steel_plate','2x gtceu:copper_spring','prts:basic_wanzi')
    .itemOutputs('8x gtceu:lv_machine_casing')
    .duration(40)
    .EUt(16)//LV机械方块

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','2x gtceu:copper_spring','prts:basic_wanzi')
    .itemOutputs('5x gtceu:mv_machine_casing')
    .duration(45)
    .EUt(64)//MV机械方块
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_casing_2')
    .circuit(15)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:aluminium_plate','2x gtceu:gold_spring','prts:basic_wanzi')
    .itemOutputs('8x gtceu:mv_machine_casing')
    .duration(45)
    .EUt(64)//MV机械方块

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:stainless_steel_plate','2x gtceu:gold_spring','prts:type_one_wanzi')
    .itemOutputs('5x gtceu:hv_machine_casing')
    .duration(50)
    .EUt(256)//HV机械方块
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_casing_2')
    .circuit(15)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:stainless_steel_plate','2x gtceu:aluminium_spring','prts:type_one_wanzi')
    .itemOutputs('8x gtceu:hv_machine_casing')
    .duration(50)
    .EUt(256)//HV机械方块

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ev_casing_1')
    .circuit(15)
    .notConsumable('prts:type_b_packaging_unit')
    .itemInputs('8x gtceu:titanium_plate','2x gtceu:aluminium_spring','prts:type_one_wanzi')
    .itemOutputs('5x gtceu:ev_machine_casing')
    .duration(50)
    .EUt(256)//EV机械方块
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ev_casing_2')
    .circuit(15)
    .notConsumable('prts:type_b_purified_packaging_unit')
    .itemInputs('12x gtceu:titanium_plate','2x gtceu:tungsten_spring','prts:type_one_wanzi')
    .itemOutputs('8x gtceu:ev_machine_casing')
    .duration(50)
    .EUt(256)//EV机械方块

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_solid_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('4x gtceu:steel_plate','gtceu:steel_frame','2x prts:basic_wanzi_resistance_plate')
    .itemOutputs('3x gtceu:solid_machine_casing')
    .duration(50)
    .EUt(80)//脱氧机器外壳

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_solid_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('4x gtceu:steel_plate','gtceu:steel_frame','2x prts:production_type_wanzi_resistor_board')
    .itemOutputs('8x gtceu:solid_machine_casing')
    .duration(40)
    .EUt(80)//脱氧机器外壳

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_inert_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','gtceu:aluminium_frame','2x prts:basic_wanzi_redirection_plate','prts:type_c_directed_chemical_reaction_device')
    .itemOutputs('8x gtceu:inert_machine_casing')
    .duration(50)
    .EUt(80)//聚四氟乙烯化学惰性方块

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_inert_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:aluminium_plate','gtceu:aluminium_frame','2x prts:production_type_wanzi_redirection_plate','prts:type_c_purified_directed_chemical_reaction_device')
    .itemOutputs('16x gtceu:inert_machine_casing')
    .duration(45)
    .EUt(96)//聚四氟乙烯化学惰性方块

    // === 金属杆材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_1')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:aluminium_rod')
    .duration(40)
    .EUt(64)//铝杆

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_2')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('4x gtceu:steel_rod')
    .duration(40)
    .EUt(64)//钢杆

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_3')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('6x gtceu:stainless_steel_rod')
    .duration(45)
    .EUt(80)//不锈钢杆

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_4')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('6x gtceu:waw_rod')
    .duration(40)
    .EUt(96)//瓦拉帕斯杆

    // === 齿轮快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_1')
    .circuit(1)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:aluminium_plate')
    .itemOutputs('2x gtceu:aluminium_gear')
    .duration(50)
    .EUt(64)//铝齿轮

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_2')
    .circuit(1)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:steel_plate')
    .itemOutputs('2x gtceu:steel_gear')
    .duration(55)
    .EUt(64)//钢齿轮

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_3')
    .circuit(1)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:stainless_steel_plate')
    .itemOutputs('2x gtceu:stainless_steel_gear')
    .duration(60)
    .EUt(80)//不锈钢齿轮

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_4')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:small_aluminium_gear')
    .duration(30)
    .EUt(64)//小铝齿轮

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_5')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:stainless_steel_ingot')
    .itemOutputs('4x gtceu:small_stainless_steel_gear')
    .duration(30)
    .EUt(64)//小不锈钢齿轮

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_6')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:steel_ingot')
    .itemOutputs('4x gtceu:small_steel_gear')
    .duration(30)
    .EUt(64)//小钢齿轮

    // === 螺丝快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_1')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('16x gtceu:aluminium_screw')
    .duration(25)
    .EUt(64)//铝螺丝

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_2')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('16x gtceu:steel_screw')
    .duration(30)
    .EUt(64)//钢螺丝

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_3')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('16x gtceu:stainless_steel_screw')
    .duration(35)
    .EUt(80)//不锈钢螺丝

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_4')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:bronze_rod')
    .itemOutputs('16x gtceu:bronze_screw')
    .duration(25)
    .EUt(64)//青铜螺丝

    // === 螺栓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_1')
    .circuit(2)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('10x gtceu:aluminium_bolt')
    .duration(25)
    .EUt(64)//铝螺栓

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_2')
    .circuit(2)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('10x gtceu:steel_bolt')
    .duration(30)
    .EUt(64)//钢螺栓

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_3')
    .circuit(2)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('10x gtceu:stainless_steel_bolt')
    .duration(35)
    .EUt(80)//不锈钢螺栓

    // === 线材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_copper_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('minecraft:copper_ingot')
    .itemOutputs('16x gtceu:copper_single_wire')
    .duration(30)
    .EUt(32)//1X铜导线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_copper_wire_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:copper_ingot')
    .itemOutputs('16x gtceu:copper_single_cable')
    .duration(30)
    .EUt(32)//1X铜线缆

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_iron_wire')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('minecraft:iron_ingot')
    .itemOutputs('16x gtceu:iron_single_wire')
    .duration(30)
    .EUt(32)//1X铁导线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_iron_wire_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:iron_ingot')
    .itemOutputs('16x gtceu:iron_single_cable')
    .duration(30)
    .EUt(32)//1X铁线缆

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_cupronickel_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:cupronickel_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_wire')
    .duration(35)
    .EUt(32)//1X白铜导线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_cupronickel_wire_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:cupronickel_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_cable')
    .duration(30)
    .EUt(32)//1X白铜线缆

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_silver_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:silver_ingot')
    .itemOutputs('16x gtceu:silver_single_wire')
    .duration(40)
    .EUt(32)//1X银导线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_hv_silver_wire_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5000,5000)
    .itemInputs('minecraft:silver_ingot')
    .itemOutputs('16x gtceu:silver_single_cable')
    .duration(30)
    .EUt(32)//1X银线缆

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_waw_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('16x gtceu:waw_single_wire')
    .duration(35)
    .EUt(32)//1X瓦拉帕斯导线
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_mv_magnesium_diboride_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:magnesium_diboride_ingot')
    .itemOutputs('16x gtceu:magnesium_diboride_single_wire')
    .duration(35)
    .EUt(32)//1X二硼化镁导线

    // === 转子快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_rotor_1')
    .circuit(1)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:tin_plate')
    .itemOutputs('4x gtceu:tin_rotor')
    .duration(65)
    .EUt(32)//锡转子

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_rotor_2')
    .circuit(1)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:bronze_plate')
    .itemOutputs('4x gtceu:bronze_rotor')
    .duration(65)
    .EUt(32)//青铜转子

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_rotor_3')
    .circuit(1)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:steel_plate')
    .itemOutputs('4x gtceu:steel_rotor')
    .duration(65)
    .EUt(32)//钢转子

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_rotor_4')
    .circuit(1)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemOutputs('4x gtceu:stainless_steel_rotor')
    .duration(70)
    .EUt(32)//不锈钢转子

    // === 环材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ring_1')
    .circuit(1)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('6x gtceu:aluminium_ring')
    .duration(30)
    .EUt(64)//铝环

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ring_2')
    .circuit(1)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:bronze_rod')
    .itemOutputs('6x gtceu:bronze_ring')
    .duration(30)
    .EUt(64)//青铜环

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ring_3')
    .circuit(1)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('6x gtceu:steel_ring')
    .duration(35)
    .EUt(64)//钢环

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_ring_4')
    .circuit(1)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('6x gtceu:stainless_steel_ring')
    .duration(40)
    .EUt(80)//不锈钢环

    // === 弹簧快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_1')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hssg_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:hssg_spring')
    .duration(40)
    .EUt(64)//高速钢-G弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_2')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hssg_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:hssg_spring')
    .duration(40)
    .EUt(64)//高速钢-G弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_3')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:nichrome_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:nichrome_spring')
    .duration(45)
    .EUt(64)//镍铬合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_4')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:nichrome_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:nichrome_spring')
    .duration(45)
    .EUt(64)//镍铬合金弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_5')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tin_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:tin_spring')
    .duration(40)
    .EUt(64)//锡弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_6')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tin_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:tin_spring')
    .duration(40)
    .EUt(64)//锡弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_7')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:niobium_titanium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:niobium_titanium_spring')
    .duration(45)
    .EUt(64)//铌钛合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_8')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:niobium_titanium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:niobium_titanium_spring')
    .duration(45)
    .EUt(64)//铌钛合金弹簧
    
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_9')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tungsten_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:tungsten_spring')
    .duration(40)
    .EUt(64)//钨弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_10')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tungsten_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:tungsten_spring')
    .duration(40)
    .EUt(64)//钨弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_11')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:aluminium_spring')
    .duration(45)
    .EUt(64)//铝弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_12')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:aluminium_spring')
    .duration(45)
    .EUt(64)//铝弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_13')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_alloy_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:naquadah_alloy_spring')
    .duration(40)
    .EUt(64)//硅岩合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_14')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_alloy_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:naquadah_alloy_spring')
    .duration(40)
    .EUt(64)//硅岩合金弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_15')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hsla_steel_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:hsla_steel_spring')
    .duration(45)
    .EUt(64)//HSLA钢弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_16')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hsla_steel_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:hsla_steel_spring')
    .duration(45)
    .EUt(64)//HSLA钢弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_17')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:platinum_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:platinum_spring')
    .duration(40)
    .EUt(64)//铂弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_18')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:platinum_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:platinum_spring')
    .duration(40)
    .EUt(64)//铂弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_19')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:yttrium_barium_cuprate_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:yttrium_barium_cuprate_spring')
    .duration(45)
    .EUt(64)//钇钡铜氧化物弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_20')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:yttrium_barium_cuprate_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:yttrium_barium_cuprate_spring')
    .duration(45)
    .EUt(64)//钇钡铜氧化物弹簧
    
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_21')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:molybdenum_disilicide_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:molybdenum_disilicide_spring')
    .duration(40)
    .EUt(64)//二硅化钼弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_22')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:molybdenum_disilicide_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:molybdenum_disilicide_spring')
    .duration(40)
    .EUt(64)//二硅化钼弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_23')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:europium_spring')
    .duration(45)
    .EUt(64)//铕弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_24')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:europium_spring')
    .duration(45)
    .EUt(64)//铕弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_25')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:lead_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:lead_spring')
    .duration(40)
    .EUt(64)//铅弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_26')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:lead_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lead_spring')
    .duration(40)
    .EUt(64)//铅弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_27')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:gold_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:gold_spring')
    .duration(45)
    .EUt(64)//金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_28')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:gold_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:gold_spring')
    .duration(45)
    .EUt(64)//金弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_29')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:naquadah_spring')
    .duration(40)
    .EUt(64)//硅岩弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_30')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:naquadah_spring')
    .duration(40)
    .EUt(64)//硅岩弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_31')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:kanthal_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:kanthal_spring')
    .duration(45)
    .EUt(64)//坎塔尔合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_32')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:kanthal_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:kanthal_spring')
    .duration(45)
    .EUt(64)//坎塔尔合金弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_33')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('minecraft:copper_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:copper_spring')
    .duration(40)
    .EUt(64)//铜弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_34')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('minecraft:copper_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:copper_spring')
    .duration(40)
    .EUt(64)//铜弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_35')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:rtm_alloy_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:rtm_alloy_spring')
    .duration(45)
    .EUt(64)//钌钨钼合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_36')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:rtm_alloy_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:rtm_alloy_spring')
    .duration(45)
    .EUt(64)//钌钨钼合金弹簧
    
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_37')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:cupronickel_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:cupronickel_spring')
    .duration(40)
    .EUt(64)//白铜弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_38')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:cupronickel_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:cupronickel_spring')
    .duration(40)
    .EUt(64)//白铜弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_39')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:vanadium_gallium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:vanadium_gallium_spring')
    .duration(45)
    .EUt(64)//钒镓合金弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_40')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:vanadium_gallium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:vanadium_gallium_spring')
    .duration(45)
    .EUt(64)//钒镓合金弹簧

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_41')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('#forge:ingot/steel','prts:basic_wanzi')
    .itemOutputs('4x gtceu:steel_spring')
    .duration(45)
    .EUt(64)//钢弹簧
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_spring_42')
    .circuit(2)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('#forge:ingot/steel','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:steel_spring')
    .duration(45)
    .EUt(64)//钢弹簧
    
    // === 细线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_1')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:copper_foil')
    .itemOutputs('8x gtceu:fine_copper_wire')
    .duration(25)
    .EUt(64)//细铜导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_2')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:cupronickel_foil')
    .itemOutputs('8x gtceu:fine_cupronickel_wire')
    .duration(30)
    .EUt(64)//细白铜导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_3')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:annealed_copper_foil')
    .itemOutputs('8x gtceu:fine_annealed_copper_wire')
    .duration(30)
    .EUt(64)//细退火铜导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_4')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:silver_foil')
    .itemOutputs('8x gtceu:fine_silver_wire')
    .duration(25)
    .EUt(80)//细银导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_5')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:gold_foil')
    .itemOutputs('8x gtceu:fine_gold_wire')
    .duration(25)
    .EUt(80)//细金导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_6')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:waw_foil')
    .itemOutputs('8x gtceu:fine_waw_wire')
    .duration(30)
    .EUt(96)//细瓦拉帕斯导线

    event.recipes.gtceu.basic_wanzi_assembler('prts:wanzi_fine_wire_7')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:waw_foil')
    .itemOutputs('8x gtceu:fine_flt_wire')
    .duration(30)
    .EUt(96)//细菲利特瓦导线

    function basic_wanzi_assembler(id,C,I,O,T,E){
        event.recipes.gtceu.basic_wanzi_assembler(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
    }//组装
    basic_wanzi_assembler('wanzi_assembler',1,[
        '4x gtceu:copper_single_wire',
        '2x gtceu:iron_rod',
        'gtceu:magnetic_iron_rod',
        '2x prts:type_d_conductive_circuit',
        '2x prts:basic_wanzi'
    ],'4x gtceu:lv_electric_motor',255,20)
    basic_wanzi_assembler('wanzi_assembler_1',1,[
        'gtceu:lv_electric_motor',
        '2x gtceu:iron_rod',
        '2x gtceu:iron_plate',
        'gtceu:small_iron_gear',
        '2x prts:type_d_conductive_circuit',
        '3x prts:basic_wanzi'
    ],'2x gtceu:lv_electric_piston',272,21)
    basic_wanzi_assembler('wanzi_assembler_2',1,[
        'gtceu:lv_electric_piston',
        'gtceu:lv_electric_motor',
        '2x gtceu:iron_rod',
        'gtceu:basic_electronic_circuit',
        '3x prts:basic_wanzi',
        '2x prts:type_d_conductive_circuit'
    ],'2x gtceu:lv_robot_arm',272,24)
    basic_wanzi_assembler('wanzi_assmbler_3',1,[
        '2x gtceu:lv_electric_motor',
        'gtceu:basic_electronic_circuit',
        '3x prts:micro_plastic_block',
        '3x prts:basic_wanzi'
    ],'2x gtceu:lv_conveyor_module',255,20)
    basic_wanzi_assembler('wanzi_assmbler_4',1,[
        'gtceu:lv_electric_motor',
        '4x gtceu:tin_screw',
        'prts:type_d_conductive_circuit',
        '4x prts:basic_wanzi'
    ],'2x gtceu:lv_electric_pump',272,22)
    basic_wanzi_assembler('wanzi_assmbler_5',1,[
        '2x prts:type_d_packaging_unit',
        '2x prts:basic_wanzi_resistance_plate',
        'prts:type_d_risk_management_unit'
    ],'2x prts:basic_wanzi_holder',255,25)
    basic_wanzi_assembler('wanzi_assmbler_6',1,[
        '4x prts:basic_wanzi',
        '2x prts:micro_plastic_block',
        '2x minecraft:iron_ingot',
        '4x minecraft:copper_ingot'
    ],'2x prts:basic_wanzi_resistance_plate',255,15)
    basic_wanzi_assembler('wanzi_assmbler_7',1,[
        '4x prts:basic_wanzi',
        'prts:type_d_circuit_cross_domain_actuator',
        '2x prts:type_d_conductive_circuit',
        'prts:basic_wanzi_resistance_plate'
    ],'2x prts:basic_wanzi_redirection_plate',255,30)
    basic_wanzi_assembler('wanzi_assmbler_8',1,[
        '2x prts:basic_wanzi',
        '2x gtceu:lv_electric_motor',
        'prts:basic_wanzi_holder',
        '2x minecraft:iron_ingot',
        '2x minecraft:copper_ingot'
    ],'2x prts:basic_wanzi_emitter',255,18)
    basic_wanzi_assembler('wanzi_assmbler_9',1,[
        '4x prts:basic_wanzi',
        'gtceu:lv_electric_motor',
        'gtceu:lv_electric_piston',
        'prts:type_d_circuit_cross_domain_actuator',
        'minecraft:iron_ingot',
        'minecraft:copper_ingot'
    ],'2x prts:basic_wanzi_actuator',255,20)
    basic_wanzi_assembler('wanzi_assmbler_11',4,[
        '4x prts:basic_wanzi',
        '2x prts:type_d_packaging_unit',
        'prts:basic_wanzi_resistance_plate',
        'prts:basic_wanzi_redirection_plate',
        '4x prts:type_d_conductive_circuit',
        'prts:type_d_circuit_cross_domain_actuator'
    ],'2x prts:basic_wanzi_position_corrector',255,30)
    basic_wanzi_assembler('wanzi_assmbler_12',1,[
        '#gtceu:waw_yuan',
        '4x prts:type_one_wanzi',
        '2x prts:deformable_plastic_block'
    ],'2x prts:production_type_wanzi_resistor_board',120,120)
    basic_wanzi_assembler('wanzi_assmbler_12_1',1,[
        '4x gtceu:waw_foil',
        '4x prts:type_one_wanzi',
        '2x prts:deformable_plastic_block'
    ],'2x prts:production_type_wanzi_resistor_board',120,120)
    basic_wanzi_assembler('wanzi_assmlber_13',1,[
        'prts:type_c_circuit_cross_domain_actuator',
        '3x prts:type_one_wanzi',
        '3x prts:type_c_conductive_circuit',
        'prts:production_type_wanzi_resistor_board'
    ],'2x prts:production_type_wanzi_redirection_plate',120,120)
    basic_wanzi_assembler('wanzi_assmlber_14',1,[
        'prts:type_c_packaging_unit',
        'prts:production_type_wanzi_resistor_board',
        'prts:type_c_risk_management_unit'
    ],'2x prts:production_type_wanzi_holder',120,120)
    basic_wanzi_assembler('wanzi_assmlber_15',1,[
        'prts:production_type_wanzi_holder',
        'prts:production_type_wanzi_resistor_board',
        '4x gtceu:waw_foil',
        'gtceu:mv_electric_motor'
    ],'2x prts:production_type_wanzi_emitter',120,120)
    basic_wanzi_assembler('wanzi_assmlber_15_1',1,[
        'prts:production_type_wanzi_holder',
        'prts:production_type_wanzi_resistor_board',
        '#gtceu:waw_yuan',
        'gtceu:mv_electric_motor'
    ],'2x prts:production_type_wanzi_emitter',120,120)
    basic_wanzi_assembler('wanzi_assmlber_16',1,[
        '3x prts:type_one_wanzi',
        'prts:type_c_circuit_cross_domain_actuator',
        '2x #gtceu:waw_yuan',
        'gtceu:mv_electric_motor',
        'gtceu:mv_electric_piston'
    ],'2x prts:production_type_wanzi_actuator',120,120)
    basic_wanzi_assembler('wanzi_assmlber_17',1,[
        '4x prts:type_one_wanzi',
        '2x prts:type_c_packaging_unit',
        'prts:production_type_wanzi_resistor_board',
        'prts:production_type_wanzi_redirection_plate',
        'prts:type_c_conductive_circuit'
    ],'2x prts:production_type_wanzi_position_corrector',120,120)

    event.shaped('gtceu:lv_basic_wanzi_assembler',[
        "ABA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:steel_plate',
        B:'prts:type_d_packaging_unit',
        C:'gtceu:lv_robot_arm',
        D:'prts:type_d_risk_management_unit',
        E:'prts:type_d_high_voltage_transformation_component',
        F:'gtceu:basic_electronic_circuit',
        S:'gtceu:lv_machine_hull'
    })//基础型万子组装机配方

    event.shaped('gtceu:mv_basic_wanzi_assembler',[
        "ABA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:aluminium_plate',
        B:'prts:type_c_packaging_unit',
        C:'gtceu:mv_robot_arm',
        D:'prts:type_c_risk_management_unit',
        E:'prts:type_c_high_voltage_transformation_component',
        F:'gtceu:good_electronic_circuit',
        S:'gtceu:mv_machine_hull'
    })//正式型万子组装机配方

    event.shaped('gtceu:hv_basic_wanzi_assembler',[
        "ABA",
        "CSD",
        "EFE"
    ],{
        A:'gtceu:stainless_steel_plate',
        B:'prts:type_b_packaging_unit',
        C:'gtceu:hv_robot_arm',
        D:'prts:type_b_risk_management_unit',
        E:'prts:type_b_high_voltage_transformation_component',
        F:'gtceu:advanced_integrated_circuit',
        S:'prts:high_voltage_universal_casing'
    })//进阶型万子组装机配方

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_assembler_11')
    .circuit(1)
    .itemInputs('2x prts:basic_wanzi_resistance_plate','prts:type_d_circuit_cross_domain_actuator','prts:basic_wanjing','prts:basic_wanzi_redirection_plate')
    .inputFluids(Fluid.of('gtceu:steel',288))
    .itemOutputs('prts:basic_wanzi_impact_resistant_plate')
    .duration(200)
    .EUt(15)
    //基础万子抗冲击板
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_assembler_10')
    .circuit(2)
    .itemInputs('4x prts:basic_wanzi','prts:basic_wanzi_holder','prts:basic_wanzi_resistance_plate','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan')
    .itemOutputs('prts:basic_wanzi_absorber_plate')
    .inputFluids(Fluid.of('minecraft:lava',100))
    .duration(300)
    .EUt(20)
    //基础万子吸收板
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_assemler_12')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','prts:type_d_packaging_unit','2x prts:type_d_conductive_circuit','2x #gtceu:iron_yuan')
    .itemOutputs('prts:basic_wanzi_film_coating_sprayer')
    .inputFluids(Fluid.of('gtceu:tin',144))
    .duration(300)
    .EUt(30)
    //基础覆膜喷涂器

    event.recipes.gtceu.basic_wanzi_assembler('prts:zhengshiwanzixishouban_1')
    .circuit(1)
    .itemInputs('prts:production_type_wanzi_resistor_board','prts:production_type_wanzi_holder','3x prts:type_one_wanzi','3x #gtceu:waw_yuan','#gtceu:iron_yuan')
    .inputFluids(Fluid.of('prts:yisanwanzi',144))
    .inputFluids(Fluid.of('minecraft:lava',288))
    .itemOutputs('prts:production_type_wanzi_absorber_plate')
    .duration(120)
    .EUt(96)
    //正式万子吸收板
    event.recipes.gtceu.basic_wanzi_assembler('prts:zhengshiwanzikangchongjiban_1')
    .circuit(1)
    .itemInputs('2x prts:production_type_wanzi_resistor_board','prts:production_type_wanzi_redirection_plate','prts:type_c_circuit_cross_domain_actuator','prts:alpha_wanjing')
    .inputFluids(Fluid.of('gtceu:steel',288))
    .inputFluids(Fluid.of('gtceu:aluminium',576))
    .itemOutputs('prts:production_type_wanzi_impact_resistant_plate')
    .duration(120)
    .EUt(120)
    //正式万子抗冲击板
    event.recipes.gtceu.basic_wanzi_assembler('prts:zhengshiwanzifumopentuqi_1')
    .circuit(1)
    .itemInputs('4x prts:type_one_wanzi','prts:type_c_packaging_unit','prts:type_c_conductive_circuit','#gtceu:waw_yuan')
    .inputFluids(Fluid.of('gtceu:waw',144))
    .itemOutputs('prts:production_type_wanzi_film_coating_sprayer')
    .duration(120)
    .EUt(120)
    //正式万子覆膜喷涂器

    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_actuator')
    .circuit(1)
    .itemInputs('3x prts:type_two_wanzi','prts:type_b_circuit_cross_domain_actuator','gtceu:flt_ingot','gtceu:hv_electric_motor','gtceu:hv_electric_piston')
    .itemOutputs('2x prts:advanced_wanzi_actuator')
    .duration(120)
    .EUt(256)
    //进阶型万子传动器
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_impact_plate')
    .circuit(1)
    .itemInputs('prts:advanced_wanzi_resistor_plate','prts:advanced_wanzi_redirection_plate','prts:type_b_circuit_cross_domain_actuator','prts:beta_wanjing')
    .inputFluids(Fluid.of('gtceu:titanium',144))
    .inputFluids(Fluid.of('gtceu:stainless_steel',576))
    .itemOutputs('prts:advanced_wanzi_impact_plate')
    .duration(120)
    .EUt(256)
    //进阶型万子抗冲击板
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_resistor_plate')
    .circuit(1)
    .itemInputs('gtceu:flt_ingot','prts:adhesive_plastic','prts:type_two_wanzi')
    .itemOutputs('prts:advanced_wanzi_resistor_plate')
    .duration(120)
    .EUt(256)
    //进阶型万子抵抗板
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_redirection_plate')
    .circuit(1)
    .itemInputs('prts:advanced_wanzi_resistor_plate','prts:type_b_circuit_cross_domain_actuator','2x prts:type_b_conductive_circuit','4x prts:type_two_wanzi')
    .itemOutputs('prts:advanced_wanzi_redirection_plate')
    .duration(120)
    .EUt(256)
    //进阶型万子重导向板
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_holder')
    .circuit(1)
    .itemInputs('prts:type_b_risk_management_unit','prts:type_b_packaging_unit','prts:advanced_wanzi_resistor_plate')
    .itemOutputs('prts:advanced_wanzi_holder')
    .duration(120)
    .EUt(256)
    //进阶型万子容纳器
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_absorber_plate')
    .circuit(1)
    .itemInputs('3x #forge:dusts/gold','gtceu:flt_ingot','prts:advanced_wanzi_resistor_plate','prts:advanced_wanzi_holder','2x prts:type_two_wanzi')
    .inputFluids(Fluid.of('prts:yisanwanzi',144))
    .inputFluids(Fluid.of('gtceu:stainless_steel',576))
    .itemOutputs('prts:advanced_wanzi_absorber_plate')
    .duration(120)
    .EUt(256)
    //进阶型万子吸收板
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_position_corrector')
    .circuit(1)
    .itemInputs('4x prts:type_two_wanzi','2x prts:type_b_packaging_unit','prts:advanced_wanzi_resistor_plate','prts:advanced_wanzi_redirection_plate','2x prts:type_b_conductive_circuit')
    .itemOutputs('2x prts:advanced_wanzi_position_corrector')
    .duration(120)
    .EUt(256)
    //进阶型万子矫正器
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_emitter')
    .circuit(1)
    .itemInputs('prts:advanced_wanzi_holder','prts:advanced_wanzi_resistor_plate','gtceu:flt_ingot','gtceu:hv_electric_motor','gtceu:hv_electric_piston')
    .itemOutputs('2x prts:advanced_wanzi_emitter')
    .duration(120)
    .EUt(256)
    //进阶型万子发射器
    event.recipes.gtceu.basic_wanzi_assembler('prts:advanced_wanzi_film_coating_sprayer')
    .circuit(1)
    .itemInputs('prts:type_b_wanzi_emission_concentrator','prts:type_b_conductive_circuit','gtceu:flt_ingot','prts:type_two_wanzi') 
    .inputFluids(Fluid.of('gtceu:flt',144))
    .itemOutputs('prts:advanced_wanzi_film_coating_sprayer')
    .duration(120)
    .EUt(256)
    //进阶型万子覆膜喷涂器

    event.recipes.gtceu.basic_wanzi_assembler('prts:high_efficiency_isolation_component_1')
    .circuit(1)
    .notConsumable('prts:dsv_component')
    .itemInputs('4x prts:type_c_resistor','prts:type_c_packaging_unit')
    .itemOutputs('3x prts:high_efficiency_isolation_component')
    .duration(100)
    .EUt(120)//高效隔绝组件制作
    event.recipes.gtceu.basic_wanzi_assembler('prts:high_efficiency_isolation_component_2')
    .circuit(1)
    .notConsumable('prts:dsv_component')
    .itemInputs('4x prts:type_c_purified_resistor','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x prts:high_efficiency_isolation_component')
    .duration(100)
    .EUt(120)//高效隔绝组件制作2

    event.recipes.gtceu.basic_wanzi_assembler('prts:disassembler_unit_1')
    .circuit(1)
    .itemInputs('4x prts:high_efficiency_isolation_component','2x gtceu:ram_chip','gtceu:lv_item_collector','2x prts:abnormal_data')
    .itemOutputs('2x prts:disassembler_unit')
    .duration(100)
    .EUt(32)//拆解单元组装
    event.recipes.gtceu.basic_wanzi_assembler('prts:disassembler_unit_2')
    .circuit(1)
    .itemInputs('4x prts:high_efficiency_isolation_component','2x gtceu:ram_chip','gtceu:mv_item_collector','2x prts:abnormal_data')
    .itemOutputs('8x prts:disassembler_unit')
    .duration(100)
    .EUt(32)//拆解单元组装2

    event.recipes.gtceu.basic_wanzi_assembler('prts:hv_wn_1')
    .circuit(1)
    .itemInputs('2x prts:ultra_high_stiffness_toughness_plate','2x gtceu:waw_quadruple_wire','prts:unconventional_crystal_plate','gtceu:hv_machine_hull')
    .itemOutputs('prts:high_voltage_universal_casing')
    .duration(145)
    .EUt(120)//HV万能机壳制作1
    event.recipes.gtceu.basic_wanzi_assembler('prts:hv_wn_2')
    .circuit(1)
    .itemInputs('2x prts:ultra_high_stiffness_toughness_plate','2x gtceu:waw_quadruple_wire','prts:unconventional_crystal_plate','2x gtceu:mv_machine_hull','prts:medium_voltage_wanzi_circuit')
    .itemOutputs('prts:high_voltage_universal_casing')
    .duration(145)
    .EUt(120)//HV万能机壳制作2
})



ServerEvents.recipes((event) => {
    const { avaritia } = event.recipes;
    const bbwz = event.recipes.gtceu.bigger_wanzi_assembler_plan

    // === LV组件制作 === //
    bbwz('gtceu:lv_electric_motor')
    .circuit(1)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .itemInputs('2x #forge:ingots/steel','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:lv_electric_motor')//LV电动马达
    bbwz('gtceu:lv_electric_piston')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .itemInputs('2x gtceu:lv_electric_motor','2x #forge:ingots/steel','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:lv_electric_piston')//LV电力活塞
    bbwz('gtceu:lv_conveyor_module')
    .circuit(1)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .inputFluids(Fluid.of('gtceu:rubber',512))
    .itemInputs('2x gtceu:lv_electric_motor','2x #forge:ingots/steel','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:lv_conveyor_module')//LV传送带
    bbwz('gtceu:lv_electric_piston')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .itemInputs('2x gtceu:lv_electric_motor','2x gtceu:lv_electric_piston','prts:low_voltage_wanzi_circuit','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:lv_electric_piston')//LV机械臂
    bbwz('gtceu:lv_electric_pump')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .inputFluids(Fluid.of('gtceu:rubber',144))
    .itemInputs('2x gtceu:lv_electric_motor','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:lv_electric_pump')//LV电动泵
    
    // === MV组件制作 === //
    bbwz('gtceu:mv_electric_motor')
    .circuit(1)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .itemInputs('2x gtceu:aluminium_ingot','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:mv_electric_motor')//LV电动马达
    bbwz('gtceu:mv_electric_piston')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .itemInputs('2x gtceu:mv_electric_motor','2x gtceu:aluminium_ingot','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:mv_electric_piston')//LV电力活塞
    bbwz('gtceu:mv_conveyor_module')
    .circuit(1)
    .chancedInput('prts:blueprint_ball',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .inputFluids(Fluid.of('gtceu:rubber',512))
    .itemInputs('2x gtceu:lv_electric_motor','2x gtceu:aluminium_ingot','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:mv_conveyor_module')//LV传送带
    bbwz('gtceu:mv_electric_piston')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .itemInputs('2x gtceu:mv_electric_motor','2x gtceu:mv_electric_piston','prts:low_voltage_wanzi_circuit','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:mv_electric_piston')//LV机械臂
    bbwz('gtceu:mv_electric_pump')
    .circuit(1)
    .chancedInput('prts:blueprint_small_gear',1000,1000)
    .chancedInput('prts:blueprint_gear',1000,1000)
    .chancedInput('prts:blueprint_plate',1000,1000)
    .chancedInput('prts:blueprint_single_wire',1000,1000)
    .chancedInput('prts:blueprint_fine_wire',1000,1000)
    .inputFluids(Fluid.of('gtceu:rubber',144))
    .itemInputs('2x gtceu:mv_electric_motor','2x #gtceu:copper_yuan')
    .itemOutputs('8x gtceu:mv_electric_pump')//LV电动泵

    // === 机器外壳快速制作 === //
    bbwz('prts:wanzi_lv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_conductive_circuit','2x gtceu:tin_single_cable')
    .itemOutputs('5x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)//LV机器外壳
    bbwz('prts:wanzi_lv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_conductive_circuit','2x gtceu:tin_single_cable')
    .itemOutputs('3x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)//LV机器外壳
    bbwz('prts:wanzi_lv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_purified_conductive_circuit','2x gtceu:copper_single_cable')
    .itemOutputs('8x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)//LV机器外壳
    bbwz('prts:wanzi_lv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_purified_conductive_circuit','2x gtceu:copper_single_cable')
    .itemOutputs('5x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)//LV机器外壳

    bbwz('prts:wanzi_mv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',1000,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:annealed_copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',1000,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:annealed_copper_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_5')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit','2x gtceu:cupronickel_single_cable','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_6')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',500,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','2x gtceu:cupronickel_single_cable','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_7')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('gtceu:mv_machine_casing','2x gtceu:waw_single_wire','prts:type_c_conductive_circuit')
    .itemOutputs('5x gtceu:mv_machine_hull')
    .duration(36)
    .EUt(128)//MV机器外壳
    bbwz('prts:wanzi_mv_hull_8')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .chancedInput('prts:type_c_wire_guide_connection_device',500,-500)
    .itemInputs('2x gtceu:mv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_purified_conductive_circuit')
    .itemOutputs('10x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(128)//MV机器外壳

    bbwz('prts:wanzi_hv_hull_1')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('3x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    bbwz('prts:wanzi_hv_hull_2')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('4x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳
    bbwz('prts:wanzi_hv_hull_3')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('3x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    bbwz('prts:wanzi_hv_hull_4')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:waw_single_wire','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('6x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳
    bbwz('prts:wanzi_hv_hull_5')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:flt_single_wire','2x prts:type_c_conductive_circuit','prts:type_c_resistor')
    .itemOutputs('4x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)//HV机器外壳
    bbwz('prts:wanzi_hv_hull_6')
    .circuit(1)
    .chancedInput('prts:blueprint_plate',1000,1500)
    .chancedInput('prts:blueprint_single_wire',1000,1500)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:flt_single_wire','2x prts:type_c_purified_conductive_circuit','prts:type_c_purified_resistor')
    .itemOutputs('8x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)//HV机器外壳

    // ===LV变压器快速制作 ===
    bbwz('prts:wanzi_lv_1a_transformer_1')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','2x gtceu:tin_single_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:lv_transformer_1a')
    .duration(40)
    .EUt(20)//1A
    bbwz('prts:wanzi_lv_1a_transformer_2')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','4x gtceu:tin_single_cable','prts:type_d_purified_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:lv_transformer_1a')
    .duration(34)
    .EUt(32)//1A

    bbwz('prts:wanzi_lv_2a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:tin_double_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_2a')
    .duration(40)
    .EUt(20)//1A => 2A
    bbwz('prts:wanzi_lv_2a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_1a','4x gtceu:tin_double_cable','prts:type_d_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_2a')
    .duration(34)
    .EUt(32)//1A => 2A

    bbwz('prts:wanzi_lv_4a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:tin_quadruple_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_4a')
    .duration(40)
    .EUt(20)//2A => 4A
    bbwz('prts:wanzi_lv_4a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_2a','4x gtceu:tin_quadruple_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_4a')
    .duration(34)
    .EUt(32)//2A => 4A

    bbwz('prts:wanzi_lv_16a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_4a','gtceu:tin_hex_cable','gtceu:small_copper_spring','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:lv_transformer_16a')
    .duration(40)
    .EUt(20)//4A => 16A
    bbwz('prts:wanzi_lv_16a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .itemInputs('gtceu:lv_transformer_4a','gtceu:tin_hex_cable','gtceu:small_copper_spring','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:lv_transformer_16a')
    .duration(34)
    .EUt(32)//4A => 16A

    // === MV变压器快速制作 ===
    bbwz('prts:wanzi_mv_1a_transformer_1')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:copper_single_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:mv_transformer_1a')
    .duration(80)
    .EUt(20)//1A
    bbwz('prts:wanzi_mv_1a_transformer_2')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_machine_hull','4x gtceu:copper_single_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:mv_transformer_1a')
    .duration(20)
    .EUt(32)//1A

    bbwz('prts:wanzi_mv_2a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_1a','2x gtceu:copper_double_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_2a')
    .duration(80)
    .EUt(20)//1A => 2A
    bbwz('prts:wanzi_mv_2a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_1a','4x gtceu:copper_double_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_2a')
    .duration(20)
    .EUt(32)//1A => 2A

    bbwz('prts:wanzi_mv_4a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_2a','2x gtceu:copper_quadruple_cable','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_4a')
    .duration(80)
    .EUt(20)//2A => 4A
    bbwz('prts:wanzi_mv_4a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_2a','4x gtceu:copper_quadruple_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_4a')
    .duration(20)
    .EUt(32)//2A => 4A

    bbwz('prts:wanzi_mv_16a_transformer_1')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_4a','gtceu:copper_hex_cable','gtceu:gold_spring','prts:type_c_high_voltage_transformation_component')
    .itemOutputs('2x gtceu:mv_transformer_16a')
    .duration(80)
    .EUt(20)//4A => 16A
    bbwz('prts:wanzi_mv_16a_transformer_2')
    .circuit(3)
    .notConsumable('prts:type_c_phase_change_device')
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .itemInputs('gtceu:mv_transformer_4a','gtceu:copper_hex_cable','gtceu:gold_spring','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('3x gtceu:mv_transformer_16a')
    .duration(20)
    .EUt(32)//4A => 16A

    //  ↓  ↓  LV能量转换器制作
    bbwz('prts:lv_1a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（基础线缆）
    bbwz('prts:lv_1a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（高级线缆）
    bbwz('prts:lv_1a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_1a_energy_converter')
    .duration(40)
    .EUt(20)//1A（精英线缆）
    bbwz('prts:lv_1a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_1a','2x gtceu:copper_single_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//1A（终极线缆）

    bbwz('prts:lv_4a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（基础线缆）
    bbwz('prts:lv_4a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（高级线缆）
    bbwz('prts:lv_4a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（精英线缆）
    bbwz('prts:lv_4a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_2a','2x gtceu:copper_double_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_4a_energy_converter')
    .duration(40)
    .EUt(20)//4A（终极线缆）

    bbwz('prts:lv_8a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（基础线缆）
    bbwz('prts:lv_8a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（高级线缆）
    bbwz('prts:lv_8a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（精英线缆）
    bbwz('prts:lv_8a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_4a','2x gtceu:copper_quadruple_cable','2x gtceu:steel_plate','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_8a_energy_converter')
    .duration(40)
    .EUt(20)//8A（终极线缆）

    bbwz('prts:lv_16a_energy_converter_1')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','8x mekanism:basic_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（基础线缆）
    bbwz('prts:lv_16a_energy_converter_2')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','4x mekanism:advanced_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（高级线缆）
    bbwz('prts:lv_16a_energy_converter_3')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','2x mekanism:elite_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（精英线缆）
    bbwz('prts:lv_16a_energy_converter_4')
    .circuit(3)
    .itemInputs('gtceu:lv_transformer_16a','2x gtceu:copper_hex_cable','2x gtceu:steel_plate','2x gtceu:tin_spring','mekanism:ultimate_universal_cable')
    .itemOutputs('2x gtceu:lv_16a_energy_converter')
    .duration(40)
    .EUt(20)//16A（终极线缆）

    // === 能源输入仓快速制作 ===
    bbwz('prts:wanzi_energy_in_1')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:blueprint_ring',2000,1500)
    .itemInputs('gtceu:lv_machine_hull','4x #forge:ingots/tin','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:lv_energy_input_hatch')
    .duration(34)
    .EUt(16)//LV能源仓

    bbwz('prts:wanzi_energy_in_2')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:blueprint_ring',3500,1500)
    .itemInputs('gtceu:mv_machine_hull','4x #forge:ingots/copper','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:mv_energy_input_hatch')
    .duration(60)
    .EUt(64)//MV能源仓
    bbwz('prts:wanzi_energy_in_3')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:blueprint_ring',3500,1500)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','4x prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:mv_energy_input_hatch')
    .duration(20)
    .EUt(64)//MV能源仓

    bbwz('prts:wanzi_energy_in_4')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','4x #forge:ingots/aluminium','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:hv_energy_input_hatch')
    .duration(60)
    .EUt(256)//HV能源仓
    bbwz('prts:wanzi_energy_in_5')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','#gtceu:waw_yuan','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:hv_energy_input_hatch')
    .duration(20)
    .EUt(256)//HV能源仓
    bbwz('prts:wanzi_energy_in_6')
    .circuit(1)
    .chancedInput('prts:blueprint_fine_wire',5000,1500)
    .chancedInput('prts:blueprint_ring',5000,1500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:flt_ingot','4x prts:type_c_conductive_circuit')
    .itemOutputs('6x gtceu:hv_energy_input_hatch')
    .duration(20)
    .EUt(256)//HV能源仓

    // === 能源输出仓快速制作 ===
    bbwz('prts:wanzi_energy_out_1')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1500,-500)
    .itemInputs('gtceu:lv_machine_hull','4x #forge:ingots/tin','4x prts:basic_wanzi')
    .itemOutputs('4x gtceu:lv_energy_output_hatch')
    .duration(40)
    .EUt(64)//LV动力仓制作

    bbwz('prts:wanzi_energy_out_2')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','4x #forge:ingots/copper','4x prts:basic_wanzi')
    .itemOutputs('4x gtceu:mv_energy_output_hatch')
    .duration(40)
    .EUt(64)//MV动力仓制作
    bbwz('prts:wanzi_energy_out_3')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',2000,1500)
    .chancedInput('prts:blueprint_fine_wire',2000,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','4x prts:basic_wanzi')
    .itemOutputs('6x gtceu:mv_energy_output_hatch')
    .duration(40)
    .EUt(64)//MV动力仓制作

    bbwz('prts:wanzi_energy_out_4')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_machine_hull','4x #forge:ingots/aluminium','4x prts:type_one_wanzi')
    .itemOutputs('4x gtceu:hv_energy_output_hatch')
    .duration(40)
    .EUt(256)//HV动力仓制作
    bbwz('prts:wanzi_energy_out_5')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_machine_hull','#gtceu:waw_yuan','4x prts:type_one_wanzi')
    .itemOutputs('4x gtceu:hv_energy_output_hatch')
    .duration(40)
    .EUt(256)//HV动力仓制作

    bbwz('prts:lv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_1a','gtceu:lv_energy_output_hatch','4x #forge:ingots/steel','4x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_4a')
    .duration(40)
    .EUt(16)//LV-4A动力仓制作
    bbwz('prts:lv_energy_output_hatch_16a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_4a','4x gtceu:lv_energy_output_hatch','8x #forge:ingots/steel','8x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_16a')
    .duration(40)
    .EUt(16)//LV-16A动力仓制作
    bbwz('prts:lv_energy_output_hatch_64a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',1000,-500)
    .itemInputs('gtceu:lv_transformer_16a','8x gtceu:lv_energy_output_hatch','16x #forge:ingots/steel','16x prts:basic_wanzi')
    .itemOutputs('gtceu:lv_energy_output_hatch_64a')
    .duration(40)
    .EUt(16)//LV-64A动力仓制作

    bbwz('prts:mv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',500,-500)
    .itemInputs('gtceu:mv_transformer_1a','gtceu:mv_energy_output_hatch','4x #forge:ingots/aluminium','4x prts:basic_wanzi')
    .itemOutputs('gtceu:mv_energy_output_hatch_4a')
    .duration(40)
    .EUt(64)//MV-4A动力仓制作
    bbwz('prts:mv_energy_output_hatch_16a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .chancedInput('prts:type_c_risk_management_unit',500,-500)
    .itemInputs('gtceu:mv_transformer_4a','4x gtceu:mv_energy_output_hatch','8x #forge:ingots/aluminium','8x prts:basic_wanzi')
    .itemOutputs('gtceu:mv_energy_output_hatch_16a')
    .duration(40)
    .EUt(64)//MV-16A动力仓制作

    bbwz('prts:hv_energy_output_hatch_4a')
    .circuit(1)
    .chancedInput('prts:blueprint_single_wire',3500,1500)
    .chancedInput('prts:blueprint_fine_wire',3500,1500)
    .notConsumable('prts:type_c_risk_management_unit')
    .itemInputs('gtceu:hv_transformer_1a','gtceu:hv_energy_output_hatch','4x #forge:ingots/stainless_steel','4x prts:type_one_wanzi')
    .itemOutputs('gtceu:hv_energy_output_hatch_4a')
    .duration(40)
    .EUt(64)//HV-4A动力仓制作

    // === 物品输入总线快速制作 ===
    bbwz('prts:wanzi_iteminput_1')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:lv_input_bus')
    .duration(30)
    .EUt(80)//LV物品输入总线
    bbwz('prts:wanzi_iteminput_2')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_input_bus')
    .duration(40)
    .EUt(80)//MV物品输入总线

    bbwz('prts:wanzi_iteminput_4')
    .circuit(2)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lv_input_bus')
    .duration(30)
    .EUt(80)//LV物品输入总线（加倍）
    bbwz('prts:wanzi_iteminput_5')
    .circuit(2)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:mv_input_bus')
    .duration(40)
    .EUt(80)//MV物品输入总线（加倍）
    bbwz('prts:wanzi_iteminput_6')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:hv_input_bus')
    .duration(40)
    .EUt(80)//HV物品输入总线
    bbwz('prts:wanzi_iteminput_7')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:ev_input_bus')
    .duration(40)
    .EUt(80)//EV物品输入总线

    bbwz('prts:wanzi_iteminput_8')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:hv_input_bus')
    .duration(40)
    .EUt(80)//HV物品输入总线（加倍）
    bbwz('prts:wanzi_iteminput_9')
    .circuit(2)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:ev_input_bus')
    .duration(40)
    .EUt(80)//EV物品输入总线（加倍）

    // === 物品输出总线快速制作 ===
    bbwz('prts:wanzi_itemoutput_1')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)//LV物品输出总线
    bbwz('prts:wanzi_itemoutput_2')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:basic_wanzi')
    .itemOutputs('3x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)//MV物品输出总线

    bbwz('prts:wanzi_itemoutput_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)//LV物品输出总线（加倍）
    bbwz('prts:wanzi_itemoutput_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('6x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)//MV物品输出总线（加倍）
    bbwz('prts:wanzi_itemoutput_6')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:hv_output_bus')
    .duration(40)
    .EUt(80)//HV物品输出总线
    bbwz('prts:wanzi_itemoutput_7')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_one_wanzi')
    .itemOutputs('3x gtceu:ev_output_bus')
    .duration(40)
    .EUt(80)//EV物品输出总线

    bbwz('prts:wanzi_itemoutput_8')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:hv_output_bus')
    .duration(40)
    .EUt(80)//HV物品输出总线（加倍）
    bbwz('prts:wanzi_itemoutput_9')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,-500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_conveyor_module','4x prts:type_two_wanzi')
    .itemOutputs('6x gtceu:ev_output_bus')
    .duration(40)
    .EUt(80)//EV物品输出总线（加倍）

    // === 流体输入仓快速制作 ===
    bbwz('prts:wanzi_fluid_in_1')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:tin_spring')
    .itemOutputs('3x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(64)//LV流体输入仓
    bbwz('prts:wanzi_fluid_in_2')
    .circuit(1)
    .chancedInput('prts:type_c_packaging_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:copper_spring')
    .itemOutputs('3x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)//MV流体输入仓

    bbwz('prts:wanzi_fluid_in_3')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:copper_spring')
    .itemOutputs('6x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(80)//LV流体输入仓（加倍）
    bbwz('prts:wanzi_fluid_in_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:gold_spring')
    .itemOutputs('6x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)//MV流体输入仓（加倍）

    bbwz('prts:wanzi_fluid_in_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:gold_spring')
    .itemOutputs('3x gtceu:hv_input_hatch')
    .duration(30)
    .EUt(80)//HV流体输入仓
    bbwz('prts:wanzi_fluid_in_6')
    .circuit(1)
    .chancedInput('prts:type_c_purified_packaging_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('3x gtceu:ev_input_hatch')
    .duration(40)
    .EUt(80)//EV流体输入仓

    bbwz('prts:wanzi_fluid_in_7')
    .circuit(1)
    .chancedInput('prts:type_b_packaging_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('6x gtceu:hv_input_hatch')
    .duration(30)
    .EUt(80)//HV流体输入仓（加倍）
    bbwz('prts:wanzi_fluid_in_8')
    .circuit(1)
    .chancedInput('prts:type_b_packaging_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:tungsten_spring')
    .itemOutputs('6x gtceu:ev_input_hatch')
    .duration(40)
    .EUt(80)//EV流体输入仓（加倍）

    // === 流体输出仓快速制作 ===
    bbwz('prts:wanzi_fluid_out_1')
    .circuit(11)
    .chancedInput('prts:type_c_risk_management_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:tin_spring')
    .itemOutputs('3x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(64)//LV流体输出仓
    bbwz('prts:wanzi_fluid_out_2')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:copper_spring')
    .itemOutputs('3x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)//MV流体输出仓

    bbwz('prts:wanzi_fluid_out_3')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','gtceu:copper_spring')
    .itemOutputs('6x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(80)//LV流体输出仓（加倍）
    bbwz('prts:wanzi_fluid_out_4')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','gtceu:gold_spring')
    .itemOutputs('6x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)//MV流体输出仓（加倍）

    bbwz('prts:wanzi_fluid_out_5')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:gold_spring')
    .itemOutputs('3x gtceu:hv_output_hatch')
    .duration(30)
    .EUt(80)//HV流体输出仓
    bbwz('prts:wanzi_fluid_out_6')
    .circuit(1)
    .chancedInput('prts:type_c_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('3x gtceu:ev_output_hatch')
    .duration(40)
    .EUt(80)//EV流体输出仓

    bbwz('prts:wanzi_fluid_out_7')
    .circuit(1)
    .chancedInput('prts:type_b_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:hv_machine_hull','gtceu:hv_electric_pump','gtceu:aluminium_spring')
    .itemOutputs('6x gtceu:hv_output_hatch')
    .duration(30)
    .EUt(80)//HV流体输出仓（加倍）
    bbwz('prts:wanzi_fluid_out_8')
    .circuit(1)
    .chancedInput('prts:type_b_purified_risk_management_unit',1000,500)
    .itemInputs('gtceu:ev_machine_hull','gtceu:ev_electric_pump','gtceu:tungsten_spring')
    .itemOutputs('6x gtceu:ev_output_hatch')
    .duration(40)
    .EUt(80)//EV流体输出仓（加倍）

    bbwz('prts:wanzi_lv_muffler_1')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,5000)
    .itemInputs('gtceu:lv_machine_hull','gtceu:bronze_rotor','gtceu:steel_spring','gtceu:lv_electric_motor')
    .itemOutputs('4x gtceu:lv_muffler_hatch')
    .duration(40)
    .EUt(64)//LV消声仓制作
    bbwz('prts:wanzi_mv_muffler_1')
    .circuit(1)
    .chancedInput('prts:type_c_risk_management_unit',1000,5000)
    .itemInputs('gtceu:mv_machine_hull','gtceu:steel_rotor','gtceu:steel_spring','gtceu:mv_electric_motor')
    .itemOutputs('4x gtceu:mv_muffler_hatch')
    .duration(45)
    .EUt(80)//MV消声仓制作
    bbwz('prts:wanzi_hv_muffler_1')
    .circuit(12)
    .itemInputs('gtceu:hv_machine_hull','gtceu:steel_rotor','gtceu:aluminium_spring','gtceu:hv_electric_motor')
    .itemOutputs('3x gtceu:hv_muffler_hatch')
    .duration(35)
    .EUt(80)//HV消声仓制作

    bbwz('prts:wanzi_maintenance_1')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_hull','prts:type_c_packaging_unit','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('4x gtceu:maintenance_hatch')
    .duration(40)
    .EUt(64)//普通维护仓

    bbwz('prts:wanzi_maintenance_2')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_hull','prts:type_c_purified_packaging_unit','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('6x gtceu:maintenance_hatch')
    .duration(35)
    .EUt(80)//普通维护仓

    bbwz('prts:wanzi_auto_maintenance_1')
    .circuit(1)
    .chancedInput('prts:type_c_specialized_circuit_group',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:maintenance_hatch','2x gtceu:mv_robot_arm')
    .itemOutputs('gtceu:auto_maintenance_hatch')
    .duration(200)
    .EUt(96)//自动维护仓

    bbwz('prts:wanzi_auto_maintenance_2')
    .circuit(1)
    .chancedInput('prts:type_c_purified_specialized_circuit_group',1000,-500)
    .itemInputs('gtceu:mv_machine_hull','gtceu:maintenance_hatch','gtceu:mv_robot_arm')
    .itemOutputs('gtceu:auto_maintenance_hatch')
    .duration(50)
    .EUt(112)//自动维护仓（高速）

    // === 机械方块快速制作 ===
    bbwz('prts:wanzi_lv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:steel_plate','2x gtceu:tin_spring','prts:basic_wanzi')
    .itemOutputs('5x gtceu:lv_machine_casing')
    .duration(40)
    .EUt(16)//LV机械方块
    bbwz('prts:wanzi_lv_casing_2')
    .circuit(15)
    .notConsumable('2x prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:steel_plate','2x gtceu:copper_spring','prts:basic_wanzi')
    .itemOutputs('8x gtceu:lv_machine_casing')
    .duration(40)
    .EUt(16)//LV机械方块

    bbwz('prts:wanzi_mv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','2x gtceu:copper_spring','prts:basic_wanzi')
    .itemOutputs('5x gtceu:mv_machine_casing')
    .duration(45)
    .EUt(64)//MV机械方块
    bbwz('prts:wanzi_mv_casing_2')
    .circuit(15)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:aluminium_plate','2x gtceu:gold_spring','prts:basic_wanzi')
    .itemOutputs('8x gtceu:mv_machine_casing')
    .duration(45)
    .EUt(64)//MV机械方块

    bbwz('prts:wanzi_hv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:stainless_steel_plate','2x gtceu:gold_spring','prts:type_one_wanzi')
    .itemOutputs('5x gtceu:hv_machine_casing')
    .duration(50)
    .EUt(256)//HV机械方块
    bbwz('prts:wanzi_hv_casing_2')
    .circuit(15)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:stainless_steel_plate','2x gtceu:aluminium_spring','prts:type_one_wanzi')
    .itemOutputs('8x gtceu:hv_machine_casing')
    .duration(50)
    .EUt(256)//HV机械方块

    bbwz('prts:wanzi_ev_casing_1')
    .circuit(15)
    .notConsumable('prts:type_b_packaging_unit')
    .itemInputs('8x gtceu:titanium_plate','2x gtceu:aluminium_spring','prts:type_one_wanzi')
    .itemOutputs('5x gtceu:ev_machine_casing')
    .duration(50)
    .EUt(256)//EV机械方块
    bbwz('prts:wanzi_ev_casing_2')
    .circuit(15)
    .notConsumable('prts:type_b_purified_packaging_unit')
    .itemInputs('12x gtceu:titanium_plate','2x gtceu:tungsten_spring','prts:type_one_wanzi')
    .itemOutputs('8x gtceu:ev_machine_casing')
    .duration(50)
    .EUt(256)//EV机械方块

    bbwz('prts:wanzi_solid_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('4x gtceu:steel_plate','gtceu:steel_frame','2x prts:basic_wanzi_resistance_plate')
    .itemOutputs('3x gtceu:solid_machine_casing')
    .duration(50)
    .EUt(80)//脱氧机器外壳

    bbwz('prts:wanzi_solid_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('4x gtceu:steel_plate','gtceu:steel_frame','2x prts:production_type_wanzi_resistor_board')
    .itemOutputs('8x gtceu:solid_machine_casing')
    .duration(40)
    .EUt(80)//脱氧机器外壳

    bbwz('prts:wanzi_inert_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','gtceu:aluminium_frame','2x prts:basic_wanzi_redirection_plate','prts:type_c_directed_chemical_reaction_device')
    .itemOutputs('8x gtceu:inert_machine_casing')
    .duration(50)
    .EUt(80)//聚四氟乙烯化学惰性方块

    bbwz('prts:wanzi_inert_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('12x gtceu:aluminium_plate','gtceu:aluminium_frame','2x prts:production_type_wanzi_redirection_plate','prts:type_c_purified_directed_chemical_reaction_device')
    .itemOutputs('16x gtceu:inert_machine_casing')
    .duration(45)
    .EUt(96)//聚四氟乙烯化学惰性方块

    // === 金属杆材快速制作 ===
    bbwz('wanzi_mv_rod_1')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:aluminium_rod')
    .duration(40)
    .EUt(64)//铝杆

    bbwz('wanzi_mv_rod_2')
    .circuit(1)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('4x gtceu:steel_rod')
    .duration(40)
    .EUt(64)//钢杆

    bbwz('wanzi_mv_rod_3')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('6x gtceu:stainless_steel_rod')
    .duration(45)
    .EUt(80)//不锈钢杆

    bbwz('wanzi_mv_rod_4')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('6x gtceu:waw_rod')
    .duration(40)
    .EUt(96)//瓦拉帕斯杆

    // === 齿轮快速制作 ===
    bbwz('wanzi_mv_gear_1')
    .circuit(4)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:aluminium_plate')
    .itemOutputs('2x gtceu:aluminium_gear')
    .duration(50)
    .EUt(64)//铝齿轮

    bbwz('wanzi_mv_gear_2')
    .circuit(4)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:steel_plate')
    .itemOutputs('2x gtceu:steel_gear')
    .duration(55)
    .EUt(64)//钢齿轮

    bbwz('wanzi_mv_gear_3')
    .circuit(4)
    .chancedInput('prts:blueprint_gear',1000,500)
    .itemInputs('2x gtceu:stainless_steel_plate')
    .itemOutputs('2x gtceu:stainless_steel_gear')
    .duration(60)
    .EUt(80)//不锈钢齿轮

    bbwz('wanzi_mv_gear_4')
    .circuit(4)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:small_aluminium_gear')
    .duration(30)
    .EUt(64)//小铝齿轮

    bbwz('wanzi_mv_gear_5')
    .circuit(4)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:stainless_steel_ingot')
    .itemOutputs('4x gtceu:small_stainless_steel_gear')
    .duration(30)
    .EUt(64)//小不锈钢齿轮

    bbwz('wanzi_mv_gear_6')
    .circuit(4)
    .chancedInput('prts:blueprint_small_gear',1000,500)
    .itemInputs('2x gtceu:steel_ingot')
    .itemOutputs('4x gtceu:small_steel_gear')
    .duration(30)
    .EUt(64)//小钢齿轮

    // === 螺丝快速制作 ===
    bbwz('wanzi_mv_screw_1')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('16x gtceu:aluminium_screw')
    .duration(25)
    .EUt(64)//铝螺丝

    bbwz('wanzi_mv_screw_2')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('16x gtceu:steel_screw')
    .duration(30)
    .EUt(64)//钢螺丝

    bbwz('wanzi_mv_screw_3')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('16x gtceu:stainless_steel_screw')
    .duration(35)
    .EUt(80)//不锈钢螺丝

    bbwz('wanzi_mv_screw_4')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:bronze_rod')
    .itemOutputs('16x gtceu:bronze_screw')
    .duration(25)
    .EUt(64)//青铜螺丝

    // === 螺栓快速制作 ===
    bbwz('wanzi_mv_bolt_1')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('10x gtceu:aluminium_bolt')
    .duration(25)
    .EUt(64)//铝螺栓

    bbwz('wanzi_mv_bolt_2')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('10x gtceu:steel_bolt')
    .duration(30)
    .EUt(64)//钢螺栓

    bbwz('wanzi_mv_bolt_3')
    .circuit(4)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('10x gtceu:stainless_steel_bolt')
    .duration(35)
    .EUt(80)//不锈钢螺栓

    // === 线材快速制作 ===
    bbwz('prts:wanzi_mv_copper_wire_1')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('minecraft:copper_ingot')
    .itemOutputs('16x gtceu:copper_single_wire')
    .duration(30)
    .EUt(32)//1X铜导线
    bbwz('prts:wanzi_mv_copper_wire_2')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:copper_ingot')
    .itemOutputs('16x gtceu:copper_single_cable')
    .duration(30)
    .EUt(32)//1X铜线缆

    bbwz('prts:wanzi_mv_iron_wire')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('minecraft:iron_ingot')
    .itemOutputs('16x gtceu:iron_single_wire')
    .duration(30)
    .EUt(32)//1X铁导线
    bbwz('prts:wanzi_mv_iron_wire_2')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:iron_ingot')
    .itemOutputs('16x gtceu:iron_single_cable')
    .duration(30)
    .EUt(32)//1X铁线缆

    bbwz('prts:wanzi_mv_cupronickel_wire_1')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:cupronickel_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_wire')
    .duration(35)
    .EUt(32)//1X白铜导线
    bbwz('prts:wanzi_mv_cupronickel_wire_2')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5,5000)
    .itemInputs('minecraft:cupronickel_ingot')
    .itemOutputs('16x gtceu:cupronickel_single_cable')
    .duration(30)
    .EUt(32)//1X白铜线缆

    bbwz('prts:wanzi_hv_silver_wire_1')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:silver_ingot')
    .itemOutputs('16x gtceu:silver_single_wire')
    .duration(40)
    .EUt(32)//1X银导线
    bbwz('prts:wanzi_hv_silver_wire_2')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .chancedInput('prts:type_c_packaging_unit',5000,5000)
    .itemInputs('minecraft:silver_ingot')
    .itemOutputs('16x gtceu:silver_single_cable')
    .duration(30)
    .EUt(32)//1X银线缆

    bbwz('prts:wanzi_mv_waw_wire_1')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('16x gtceu:waw_single_wire')
    .duration(35)
    .EUt(32)//1X瓦拉帕斯导线
    bbwz('prts:wanzi_mv_magnesium_diboride_wire_1')
    .circuit(4)
    .chancedInput('prts:blueprint_single_wire',1000,500)
    .itemInputs('gtceu:magnesium_diboride_ingot')
    .itemOutputs('16x gtceu:magnesium_diboride_single_wire')
    .duration(35)
    .EUt(32)//1X二硼化镁导线

    // === 转子快速制作 ===
    bbwz('prts:wanzi_rotor_1')
    .circuit(4)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:tin_plate')
    .itemOutputs('4x gtceu:tin_rotor')
    .duration(65)
    .EUt(32)//锡转子

    bbwz('prts:wanzi_rotor_2')
    .circuit(4)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:bronze_plate')
    .itemOutputs('4x gtceu:bronze_rotor')
    .duration(65)
    .EUt(32)//青铜转子

    bbwz('prts:wanzi_rotor_3')
    .circuit(4)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:steel_plate')
    .itemOutputs('4x gtceu:steel_rotor')
    .duration(65)
    .EUt(32)//钢转子

    bbwz('prts:wanzi_rotor_4')
    .circuit(4)
    .chancedInput('prts:blueprint_rotor',1000,500)
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemOutputs('4x gtceu:stainless_steel_rotor')
    .duration(70)
    .EUt(32)//不锈钢转子

    // === 环材快速制作 ===
    bbwz('prts:wanzi_ring_1')
    .circuit(4)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('6x gtceu:aluminium_ring')
    .duration(30)
    .EUt(64)//铝环

    bbwz('prts:wanzi_ring_2')
    .circuit(4)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:bronze_rod')
    .itemOutputs('6x gtceu:bronze_ring')
    .duration(30)
    .EUt(64)//青铜环

    bbwz('prts:wanzi_ring_3')
    .circuit(4)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('6x gtceu:steel_ring')
    .duration(35)
    .EUt(64)//钢环

    bbwz('prts:wanzi_ring_4')
    .circuit(4)
    .chancedInput('prts:blueprint_ring',1000,500)
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('6x gtceu:stainless_steel_ring')
    .duration(40)
    .EUt(80)//不锈钢环

    // === 弹簧快速制作 ===
    bbwz('prts:wanzi_spring_1')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hssg_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:hssg_spring')
    .duration(40)
    .EUt(64)//高速钢-G弹簧
    bbwz('prts:wanzi_spring_2')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hssg_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:hssg_spring')
    .duration(40)
    .EUt(64)//高速钢-G弹簧

    bbwz('prts:wanzi_spring_3')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:nichrome_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:nichrome_spring')
    .duration(45)
    .EUt(64)//镍铬合金弹簧
    bbwz('prts:wanzi_spring_4')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:nichrome_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:nichrome_spring')
    .duration(45)
    .EUt(64)//镍铬合金弹簧

    bbwz('prts:wanzi_spring_5')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tin_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:tin_spring')
    .duration(40)
    .EUt(64)//锡弹簧
    bbwz('prts:wanzi_spring_6')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tin_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:tin_spring')
    .duration(40)
    .EUt(64)//锡弹簧

    bbwz('prts:wanzi_spring_7')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:niobium_titanium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:niobium_titanium_spring')
    .duration(45)
    .EUt(64)//铌钛合金弹簧
    bbwz('prts:wanzi_spring_8')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:niobium_titanium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:niobium_titanium_spring')
    .duration(45)
    .EUt(64)//铌钛合金弹簧
    
    bbwz('prts:wanzi_spring_9')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tungsten_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:tungsten_spring')
    .duration(40)
    .EUt(64)//钨弹簧
    bbwz('prts:wanzi_spring_10')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:tungsten_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:tungsten_spring')
    .duration(40)
    .EUt(64)//钨弹簧

    bbwz('prts:wanzi_spring_11')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:aluminium_spring')
    .duration(45)
    .EUt(64)//铝弹簧
    bbwz('prts:wanzi_spring_12')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:aluminium_spring')
    .duration(45)
    .EUt(64)//铝弹簧

    bbwz('prts:wanzi_spring_13')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_alloy_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:naquadah_alloy_spring')
    .duration(40)
    .EUt(64)//硅岩合金弹簧
    bbwz('prts:wanzi_spring_14')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_alloy_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:naquadah_alloy_spring')
    .duration(40)
    .EUt(64)//硅岩合金弹簧

    bbwz('prts:wanzi_spring_15')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hsla_steel_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:hsla_steel_spring')
    .duration(45)
    .EUt(64)//HSLA钢弹簧
    bbwz('prts:wanzi_spring_16')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:hsla_steel_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:hsla_steel_spring')
    .duration(45)
    .EUt(64)//HSLA钢弹簧

    bbwz('prts:wanzi_spring_17')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:platinum_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:platinum_spring')
    .duration(40)
    .EUt(64)//铂弹簧
    bbwz('prts:wanzi_spring_18')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:platinum_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:platinum_spring')
    .duration(40)
    .EUt(64)//铂弹簧

    bbwz('prts:wanzi_spring_19')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:yttrium_barium_cuprate_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:yttrium_barium_cuprate_spring')
    .duration(45)
    .EUt(64)//钇钡铜氧化物弹簧
    bbwz('prts:wanzi_spring_20')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:yttrium_barium_cuprate_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:yttrium_barium_cuprate_spring')
    .duration(45)
    .EUt(64)//钇钡铜氧化物弹簧
    
    bbwz('prts:wanzi_spring_21')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:molybdenum_disilicide_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:molybdenum_disilicide_spring')
    .duration(40)
    .EUt(64)//二硅化钼弹簧
    bbwz('prts:wanzi_spring_22')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:molybdenum_disilicide_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:molybdenum_disilicide_spring')
    .duration(40)
    .EUt(64)//二硅化钼弹簧

    bbwz('prts:wanzi_spring_23')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:europium_spring')
    .duration(45)
    .EUt(64)//铕弹簧
    bbwz('prts:wanzi_spring_24')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:aluminium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:europium_spring')
    .duration(45)
    .EUt(64)//铕弹簧

    bbwz('prts:wanzi_spring_25')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:lead_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:lead_spring')
    .duration(40)
    .EUt(64)//铅弹簧
    bbwz('prts:wanzi_spring_26')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:lead_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:lead_spring')
    .duration(40)
    .EUt(64)//铅弹簧

    bbwz('prts:wanzi_spring_27')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:gold_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:gold_spring')
    .duration(45)
    .EUt(64)//金弹簧
    bbwz('prts:wanzi_spring_28')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:gold_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:gold_spring')
    .duration(45)
    .EUt(64)//金弹簧

    bbwz('prts:wanzi_spring_29')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:naquadah_spring')
    .duration(40)
    .EUt(64)//硅岩弹簧
    bbwz('prts:wanzi_spring_30')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:naquadah_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:naquadah_spring')
    .duration(40)
    .EUt(64)//硅岩弹簧

    bbwz('prts:wanzi_spring_31')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:kanthal_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:kanthal_spring')
    .duration(45)
    .EUt(64)//坎塔尔合金弹簧
    bbwz('prts:wanzi_spring_32')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:kanthal_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:kanthal_spring')
    .duration(45)
    .EUt(64)//坎塔尔合金弹簧

    bbwz('prts:wanzi_spring_33')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('minecraft:copper_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:copper_spring')
    .duration(40)
    .EUt(64)//铜弹簧
    bbwz('prts:wanzi_spring_34')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('minecraft:copper_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:copper_spring')
    .duration(40)
    .EUt(64)//铜弹簧

    bbwz('prts:wanzi_spring_35')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:rtm_alloy_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:rtm_alloy_spring')
    .duration(45)
    .EUt(64)//钌钨钼合金弹簧
    bbwz('prts:wanzi_spring_36')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:rtm_alloy_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:rtm_alloy_spring')
    .duration(45)
    .EUt(64)//钌钨钼合金弹簧
    
    bbwz('prts:wanzi_spring_37')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:cupronickel_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:cupronickel_spring')
    .duration(40)
    .EUt(64)//白铜弹簧
    bbwz('prts:wanzi_spring_38')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:cupronickel_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:cupronickel_spring')
    .duration(40)
    .EUt(64)//白铜弹簧

    bbwz('prts:wanzi_spring_39')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:vanadium_gallium_ingot','prts:basic_wanzi')
    .itemOutputs('4x gtceu:vanadium_gallium_spring')
    .duration(45)
    .EUt(64)//钒镓合金弹簧
    bbwz('prts:wanzi_spring_40')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('gtceu:vanadium_gallium_ingot','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:vanadium_gallium_spring')
    .duration(45)
    .EUt(64)//钒镓合金弹簧

    bbwz('prts:wanzi_spring_41')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('#forge:ingot/steel','prts:basic_wanzi')
    .itemOutputs('4x gtceu:steel_spring')
    .duration(45)
    .EUt(64)//钢弹簧
    bbwz('prts:wanzi_spring_42')
    .circuit(3)
    .chancedInput('prts:blueprint_ring',1000,500)
    .chancedInput('prts:blueprint_rod',1000,500)
    .itemInputs('#forge:ingot/steel','prts:type_one_wanzi')
    .itemOutputs('6x gtceu:steel_spring')
    .duration(45)
    .EUt(64)//钢弹簧
    
    // === 细线快速制作 ===
    bbwz('prts:wanzi_fine_wire_1')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:copper_foil')
    .itemOutputs('8x gtceu:fine_copper_wire')
    .duration(25)
    .EUt(64)//细铜导线

    bbwz('prts:wanzi_fine_wire_2')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:cupronickel_foil')
    .itemOutputs('8x gtceu:fine_cupronickel_wire')
    .duration(30)
    .EUt(64)//细白铜导线

    bbwz('prts:wanzi_fine_wire_3')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:annealed_copper_foil')
    .itemOutputs('8x gtceu:fine_annealed_copper_wire')
    .duration(30)
    .EUt(64)//细退火铜导线

    bbwz('prts:wanzi_fine_wire_4')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:silver_foil')
    .itemOutputs('8x gtceu:fine_silver_wire')
    .duration(25)
    .EUt(80)//细银导线

    bbwz('prts:wanzi_fine_wire_5')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:gold_foil')
    .itemOutputs('8x gtceu:fine_gold_wire')
    .duration(25)
    .EUt(80)//细金导线

    bbwz('prts:wanzi_fine_wire_6')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:waw_foil')
    .itemOutputs('8x gtceu:fine_waw_wire')
    .duration(30)
    .EUt(96)//细瓦拉帕斯导线

    bbwz('prts:wanzi_fine_wire_7')
    .circuit(3)
    .chancedInput('prts:blueprint_fine_wire',1000,500)
    .itemInputs('gtceu:waw_foil')
    .itemOutputs('8x gtceu:fine_flt_wire')
    .duration(30)
    .EUt(96)//细菲利特瓦导线

    bbwz('wanzi_assembler_11')
    .circuit(2)
    .itemInputs('2x prts:basic_wanzi_resistance_plate','prts:type_d_circuit_cross_domain_actuator','prts:basic_wanjing','prts:basic_wanzi_redirection_plate')
    .inputFluids(Fluid.of('gtceu:steel',288))
    .itemOutputs('prts:basic_wanzi_impact_resistant_plate')
    .duration(200)
    .EUt(15)
    //基础万子抗冲击板

    bbwz('wanzi_assembler_10')
    .circuit(2)
    .itemInputs('4x prts:basic_wanzi','prts:basic_wanzi_holder','prts:basic_wanzi_resistance_plate','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan')
    .itemOutputs('prts:basic_wanzi_absorber_plate')
    .inputFluids(Fluid.of('minecraft:lava',100))
    .duration(300)
    .EUt(20)
    //基础万子吸收板

    bbwz('wanzi_assemler_12')
    .circuit(1)
    .itemInputs('4x prts:basic_wanzi','prts:type_d_packaging_unit','2x prts:type_d_conductive_circuit','2x #gtceu:iron_yuan')
    .itemOutputs('prts:basic_wanzi_film_coating_sprayer')
    .inputFluids(Fluid.of('gtceu:tin',144))
    .duration(300)
    .EUt(30)
    //基础覆膜喷涂器

    bbwz('prts:zhengshiwanzixishouban_1')
    .circuit(1)
    .itemInputs('prts:production_type_wanzi_resistor_board','prts:production_type_wanzi_holder','3x prts:type_one_wanzi','3x #gtceu:waw_yuan','#gtceu:iron_yuan')
    .inputFluids(Fluid.of('prts:yisanwanzi',144))
    .inputFluids(Fluid.of('minecraft:lava',288))
    .itemOutputs('prts:production_type_wanzi_absorber_plate')
    .duration(120)
    .EUt(96)
    //正式万子吸收板

    bbwz('prts:zhengshiwanzikangchongjiban_1')
    .circuit(1)
    .itemInputs('2x prts:production_type_wanzi_resistor_board','prts:production_type_wanzi_redirection_plate','prts:type_c_circuit_cross_domain_actuator','prts:alpha_wanjing')
    .inputFluids(Fluid.of('gtceu:steel',288))
    .inputFluids(Fluid.of('gtceu:aluminium',576))
    .itemOutputs('prts:production_type_wanzi_impact_resistant_plate')
    .duration(120)
    .EUt(120)
    //正式万子抗冲击板

    bbwz('prts:zhengshiwanzifumopentuqi_1')
    .circuit(1)
    .itemInputs('4x prts:type_one_wanzi','prts:type_c_packaging_unit','prts:type_c_conductive_circuit','#gtceu:waw_yuan')
    .inputFluids(Fluid.of('gtceu:waw',144))
    .itemOutputs('prts:production_type_wanzi_film_coating_sprayer')
    .duration(120)
    .EUt(120)
    //正式万子覆膜喷涂器

    bbwz('prts:high_efficiency_isolation_component_1')
    .circuit(1)
    .notConsumable('prts:dsv_component')
    .itemInputs('4x prts:type_c_resistor','prts:type_c_packaging_unit')
    .itemOutputs('3x prts:high_efficiency_isolation_component')
    .duration(100)
    .EUt(120)//高效隔绝组件制作
    bbwz('prts:high_efficiency_isolation_component_2')
    .circuit(1)
    .notConsumable('prts:dsv_component')
    .itemInputs('4x prts:type_c_purified_resistor','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x prts:high_efficiency_isolation_component')
    .duration(100)
    .EUt(120)//高效隔绝组件制作2

    bbwz('gtceu:mv_voltage_coil')
    .circuit(1)
    .itemInputs('gtceu:magnetic_steel_rod','2x gtceu:fine_waw_wire')
    .itemOutputs('gtceu:mv_voltage_coil')
    .duration(100)
    .EUt(32)//中压线圈

    bbwz('prts:disassembler_unit_1')
    .circuit(1)
    .itemInputs('4x prts:high_efficiency_isolation_component','2x gtceu:ram_chip','gtceu:lv_item_collector','2x prts:abnormal_data')
    .itemOutputs('2x prts:disassembler_unit')
    .duration(100)
    .EUt(32)//拆解单元组装
    bbwz('prts:disassembler_unit_2')
    .circuit(1)
    .itemInputs('4x prts:high_efficiency_isolation_component','2x gtceu:ram_chip','gtceu:mv_item_collector','2x prts:abnormal_data')
    .itemOutputs('8x prts:disassembler_unit')
    .duration(100)
    .EUt(32)//拆解单元组装2

    bbwz('prts:hv_wn_1')
    .circuit(1)
    .itemInputs('2x prts:ultra_high_stiffness_toughness_plate','2x gtceu:waw_quadruple_wire','prts:unconventional_crystal_plate','gtceu:hv_machine_hull')
    .itemOutputs('prts:high_voltage_universal_casing')
    .duration(145)
    .EUt(120)//HV万能机壳制作1
    bbwz('prts:hv_wn_2')
    .circuit(1)
    .itemInputs('2x prts:ultra_high_stiffness_toughness_plate','2x gtceu:waw_quadruple_wire','prts:unconventional_crystal_plate','2x gtceu:mv_machine_hull','prts:medium_voltage_wanzi_circuit')
    .itemOutputs('prts:high_voltage_universal_casing')
    .duration(145)
    .EUt(120)//HV万能机壳制作2

    // === 万子系列 === //

    bbwz('prts:basic_wanzi_emitter_assembler')
    .circuit(1)
    .itemInputs('gtceu:lv_electric_motor','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan','prts:basic_wanzi','prts:basic_wanzi_holder')
    .itemOutputs('2x prts:basic_wanzi_emitter')
    .duration(40)
    .EUt(12)//基础万子发射器制造
    bbwz('prts:basic_wanzi_emitter_assembler_1')
    .circuit(1)
    .itemInputs('gtceu:lv_emitter','2x #gtceu:iron_yuan','2x #gtceu:copper_yuan','4x prts:basic_wanzi','prts:basic_wanzi_holder')
    .itemOutputs('4x prts:basic_wanzi_emitter')
    .duration(40)
    .EUt(12)//基础万子发射器制造

    bbwz('prts:basic_wanzi_holder_assembler')
    .circuit(1)
    .itemInputs('2x prts:type_d_packaging_unit','2x prts:basic_wanzi_resistance_plate','prts:type_d_risk_management_unit','4x prts:basic_wanzi')
    .itemOutputs('2x prts:basic_wanzi_holder')
    .duration(40)
    .EUt(12)//基础万子容纳器制造
    bbwz('prts:basic_wanzi_holder_assembler_1')
    .circuit(1)
    .itemInputs('2x prts:type_d_packaging_unit','2x prts:basic_wanzi_resistance_plate','prts:type_d_risk_management_unit','4x prts:type_one_wanzi')
    .itemOutputs('4x prts:basic_wanzi_holder')
    .duration(40)
    .EUt(12)//基础万子容纳器制造

    //AE系列//

    bbwz('prts:ae2_interface')
    .circuit(1)
    .itemInputs('2x #forge:dusts/gold','2x minecraft:redstone','ae2:fluix_dust','#forge:dusts/certus_quartz','gtceu:nether_quartz_dust','4x #gtceu:iron_yuan','2x #forge:glass','2x prts:type_one_wanzi')
    .itemOutputs('4x ae2:interface')
    .duration(140)
    .EUt(128)//ME接口制作
    bbwz('prts:ae2_interface_1')
    .circuit(1)
    .itemInputs('3x #forge:dusts/gold','3x minecraft:redstone','2x ae2:fluix_dust','#forge:dusts/certus_quartz','gtceu:nether_quartz_dust','4x #gtceu:iron_yuan','2x #forge:glass','2x prts:type_two_wanzi')
    .itemOutputs('6x ae2:interface')
    .duration(140)
    .EUt(128)//ME接口制作
    bbwz('prts:ae2_interface_2')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_position_corrector',1000,500)
    .itemInputs('2x #forge:dusts/gold','2x minecraft:redstone','ae2:fluix_dust','#forge:dusts/certus_quartz','gtceu:nether_quartz_dust','4x #gtceu:iron_yuan','2x #forge:glass','2x prts:type_one_wanzi')
    .itemOutputs('6x ae2:interface')
    .duration(140)
    .EUt(128)//ME接口制作
    bbwz('prts:ae2_interface_3')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_position_corrector',1000,500)
    .itemInputs('3x #forge:dusts/gold','3x minecraft:redstone','2x ae2:fluix_dust','#forge:dusts/certus_quartz','gtceu:nether_quartz_dust','4x #gtceu:iron_yuan','2x #forge:glass','2x prts:type_two_wanzi')
    .itemOutputs('8x ae2:interface')
    .duration(140)
    .EUt(128)//ME接口制作
    bbwz('prts:speed_card')
    .circuit(1)
    .itemInputs('2x #forge:dusts/diamond','6x #gtceu:iron_yuan','4x minecraft:redstone','#forge:dusts/certus_quartz','2x ae2:fluix_dust','2x prts:type_one_wanzi')
    .itemOutputs('6x ae2:speed_card')
    .duration(140)
    .EUt(128)//加速卡制作
    bbwz('prts:speed_card_1')
    .circuit(1)
    .itemInputs('3x #forge:dusts/diamond','7x #gtceu:iron_yuan','5x minecraft:redstone','#forge:dusts/certus_quartz','3x ae2:fluix_dust','2x prts:type_two_wanzi')
    .itemOutputs('8x ae2:speed_card')
    .duration(140)
    .EUt(128)//加速卡制作
    bbwz('prts:me_output_bus')
    .circuit(1)
    .chancedInput('prts:production_type_wanzi_position_corrector',1000,500)
    .itemInputs('ae2:speed_card','ae2:interface','2x gtceu:ev_machine_casing','2x prts:type_two_wanzi')
    .itemOutputs('2x gtceu:me_output_bus')
    .duration(140)
    .EUt(128)//GT-ME输出接口制作
    bbwz('prts:me_input_bus')
    .circuit(2)
    .chancedInput('prts:production_type_wanzi_position_corrector',1000,500)
    .itemInputs('ae2:speed_card','ae2:interface','2x gtceu:ev_machine_casing','2x prts:type_two_wanzi')
    .itemOutputs('2x gtceu:me_input_bus')
    .duration(140)
    .EUt(128)//GT-ME输出接口制作
    bbwz('gtceu:me_pattern_buffer')
    .circuit(1)
    .itemInputs('32x advanced_ae:adv_pattern_provider','32x advanced_ae:small_adv_pattern_provider','4x megacells:bulk_cell_component','megacells:1m_crafting_storage','gtceu:luv_machine_casing','512x prts:type_one_wanzi')
    .itemOutputs('gtceu:me_pattern_buffer')
    .duration(140)
    .EUt(1024)//GT-ME样板供应器制作
    bbwz('gtceu:me_pattern_buffer_proxy')
    .circuit(2)
    .itemInputs('32x advanced_ae:adv_pattern_provider','32x advanced_ae:small_adv_pattern_provider','4x megacells:bulk_cell_component','megacells:1m_crafting_storage','gtceu:luv_machine_casing','256x prts:type_two_wanzi')
    .itemOutputs('gtceu:me_pattern_buffer_proxy')
    .duration(140)
    .EUt(1024)//GT-ME镜像样板供应器制作

    avaritia.shaped_table(2,
        "gtceu:bigger_wanzi_assembler",
        [
            "AAAAA",
            "ABCBA",
            "ABSBA",
            "ABCBA",
            "AAAAA"
        ],{
            A:'gtceu:double_stainless_steel_plate',
            B:'prts:advanced_wanzi_actuator',
            C:'gtceu:mv_energy_input_hatch_16a',
            S:'gtceu:hv_basic_wanzi_assembler',
        })//大型万子组装站制作
})