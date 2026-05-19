ServerEvents.recipes((event) => {
    event.recipes.gtceu.basic_wanzi_assembler('prts:mv_wupinshuru')
    .circuit(1)
    .itemInputs('prts:type_c_packaging_unit','4x gtceu:mv_machine_hull','4x gtceu:bronze_crate')
    .itemOutputs('4x gtceu:mv_input_bus')
    .duration(240)
    .EUt(92)
    //MV物品输入总线组装

    event.recipes.gtceu.basic_wanzi_assembler('prts:mv_liuticang')
    .circuit(1)
    .itemInputs('prts:type_c_packaging_unit','4x gtceu:mv_machine_hull','4x gtceu:bronze_drum')
    .itemOutputs('4x gtceu:mv_input_hatch')
    .duration(240)
    .EUt(92)
    //MV流体输入仓组装

    // === LV机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_hull_1')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_hull_2')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_conductive_circuit')
    .itemOutputs('2x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_hull_3')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_c_purified_conductive_circuit')
    .itemOutputs('6x gtceu:lv_machine_hull')
    .duration(34)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_hull_4')
    .circuit(1)
    .itemInputs('gtceu:lv_machine_casing','4x prts:type_d_purified_conductive_circuit')
    .itemOutputs('3x gtceu:lv_machine_hull')
    .duration(30)
    .EUt(80)

    // === MV机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_mv_hull_1')
    .circuit(1)
    .itemInputs('gtceu:mv_machine_casing','prts:type_c_conductive_circuit')
    .itemOutputs('gtceu:mv_machine_hull')
    .duration(36)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_mv_hull_2')
    .circuit(1)
    .itemInputs('2x gtceu:mv_machine_casing','2x prts:type_c_purified_conductive_circuit','#gtecu:waw_yuan')
    .itemOutputs('4x gtceu:mv_machine_hull')
    .duration(30)
    .EUt(96)

    // === HV机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_hv_hull_1')
    .circuit(3)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:hv_machine_hull')
    .duration(40)
    .EUt(96)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_hv_hull_2')
    .circuit(3)
    .itemInputs('2x gtceu:hv_machine_casing','2x gtceu:gold_single_cable','2x prts:type_c_purified_conductive_circuit')
    .itemOutputs('6x gtceu:hv_machine_hull')
    .duration(34)
    .EUt(112)

    // === LV变压器快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_transformer_1')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','2x gtceu:tin_single_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:lv_transformer_1a')
    .duration(40)
    .EUt(20)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_lv_transformer_2')
    .circuit(3)
    .itemInputs('gtceu:lv_machine_hull','4x gtceu:tin_single_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:lv_transformer_1a')
    .duration(34)
    .EUt(32)


    // === MV变压器快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_mv_transformer_1')
    .circuit(3)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:copper_single_cable','prts:type_d_high_voltage_transformation_component')
    .itemOutputs('4x gtceu:mv_transformer_1a')
    .duration(44)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_mv_transformer_2')
    .circuit(3)
    .itemInputs('gtceu:mv_machine_hull','2x gtceu:copper_single_cable','prts:type_c_purified_high_voltage_transformation_component')
    .itemOutputs('6x gtceu:mv_transformer_1a')
    .duration(38)
    .EUt(96)

    // === 能源输入仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_in_1')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:lv_machine_hull','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:lv_energy_input_hatch')
    .duration(34)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_in_2')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:mv_machine_hull','4x prts:type_c_conductive_circuit')
    .itemOutputs('4x gtceu:mv_energy_input_hatch')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_in_3')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:lv_machine_hull','4x prts:type_c_purified_conductive_circuit')
    .itemOutputs('6x gtceu:lv_energy_input_hatch')
    .duration(34)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_in_4')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:mv_machine_hull','4x prts:type_c_purified_conductive_circuit')
    .itemOutputs('6x gtceu:mv_energy_input_hatch')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_in_5')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:lv_machine_hull','2x #gtceu:waw_yuan','prts:type_c_purified_conductive_circuit')
    .itemOutputs('3x gtceu:mv_energy_input_hatch')
    .duration(35)
    .EUt(80)

    // === 能源输出仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_out_1')
    .circuit(7)
    .itemInputs('gtceu:lv_machine_hull','gtceu:tin_single_cable','prts:type_c_risk_management_unit')
    .itemOutputs('2x gtceu:lv_energy_output_hatch')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_out_2')
    .circuit(7)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','prts:type_c_risk_management_unit')
    .itemOutputs('2x gtceu:mv_energy_output_hatch')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_out_3')
    .circuit(7)
    .itemInputs('gtceu:lv_machine_hull','#gtceu:waw_yuan','prts:type_c_risk_management_unit')
    .itemOutputs('3x gtceu:lv_energy_output_hatch')
    .duration(35)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_energy_out_4')
    .circuit(7)
    .itemInputs('gtceu:mv_machine_hull','#gtceu:waw_yuan','prts:type_c_purified_risk_management_unit')
    .itemOutputs('3x gtceu:mv_energy_output_hatch')
    .duration(45)
    .EUt(80)

    // === 物品输入总线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_in_1')
    .circuit(8)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('3x gtceu:lv_input_bus')
    .duration(35)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_in_2')
    .circuit(8)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','prts:type_c_circuit_cross_domain_actuator')
    .itemOutputs('3x gtceu:mv_input_bus')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_in_3')
    .circuit(8)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','prts:type_c_purified_circuit_cross_domain_actuator')
    .itemOutputs('6x gtceu:lv_input_bus')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_in_4')
    .circuit(8)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','prts:type_c_purified_circuit_cross_domain_actuator')
    .itemOutputs('6x gtceu:mv_input_bus')
    .duration(30)
    .EUt(80)

    // === 物品输出总线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_out_1')
    .circuit(9)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','prts:type_c_packaging_unit')
    .itemOutputs('3x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_out_2')
    .circuit(9)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','prts:type_c_packaging_unit')
    .itemOutputs('3x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_out_3')
    .circuit(9)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_conveyor_module','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:lv_output_bus')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_item_out_4')
    .circuit(9)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_conveyor_module','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:mv_output_bus')
    .duration(40)
    .EUt(80)

    // === 流体输入仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_in_1')
    .circuit(10)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','prts:type_c_packaging_unit')
    .itemOutputs('3x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_in_2')
    .circuit(10)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','prts:type_c_packaging_unit')
    .itemOutputs('3x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_in_3')
    .circuit(10)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:lv_input_hatch')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_in_4')
    .circuit(10)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','prts:type_c_purified_packaging_unit')
    .itemOutputs('6x gtceu:mv_input_hatch')
    .duration(40)
    .EUt(80)

    // === 流体输出仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_out_1')
    .circuit(11)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','prts:type_c_risk_management_unit')
    .itemOutputs('3x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_out_2')
    .circuit(11)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','prts:type_c_risk_management_unit')
    .itemOutputs('3x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_out_3')
    .circuit(11)
    .itemInputs('gtceu:lv_machine_hull','gtceu:lv_electric_pump','prts:type_c_purified_risk_management_unit')
    .itemOutputs('6x gtceu:lv_output_hatch')
    .duration(30)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fluid_out_4')
    .circuit(11)
    .itemInputs('gtceu:mv_machine_hull','gtceu:mv_electric_pump','prts:type_c_purified_risk_management_unit')
    .itemOutputs('6x gtceu:mv_output_hatch')
    .duration(40)
    .EUt(80)

    // === 消声器快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_muffler_1')
    .circuit(12)
    .itemInputs('gtceu:lv_machine_hull','gtceu:steel_rotor','prts:type_c_risk_management_unit')
    .itemOutputs('2x gtceu:lv_muffler_hatch')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_muffler_2')
    .circuit(12)
    .itemInputs('gtceu:mv_machine_hull','gtceu:steel_rotor','prts:type_c_risk_management_unit')
    .itemOutputs('2x gtceu:mv_muffler_hatch')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_muffler_3')
    .circuit(12)
    .itemInputs('gtceu:lv_machine_hull','gtceu:steel_rotor','prts:type_c_purified_risk_management_unit')
    .itemOutputs('3x gtceu:lv_muffler_hatch')
    .duration(35)
    .EUt(80)

    // === 维护仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_maintenance_1')
    .circuit(13)
    .itemInputs('gtceu:lv_machine_hull','minecraft:chest','prts:type_c_packaging_unit')
    .itemOutputs('2x gtceu:maintenance_hatch')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_maintenance_2')
    .circuit(13)
    .itemInputs('gtceu:lv_machine_hull','minecraft:chest','prts:type_c_purified_packaging_unit')
    .itemOutputs('3x gtceu:maintenance_hatch')
    .duration(35)
    .EUt(80)

    // === 自动维护仓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_auto_maintenance_1')
    .circuit(14)
    .itemInputs('gtceu:mv_machine_hull','gtceu:maintenance_hatch','gtceu:mv_robot_arm','prts:type_c_specialized_circuit_group')
    .itemOutputs('gtceu:auto_maintenance_hatch')
    .duration(60)
    .EUt(96)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_auto_maintenance_2')
    .circuit(14)
    .itemInputs('gtceu:mv_machine_hull','gtceu:maintenance_hatch','gtceu:mv_robot_arm','prts:type_c_purified_specialized_circuit_group')
    .itemOutputs('2x gtceu:auto_maintenance_hatch')
    .duration(55)
    .EUt(112)

    // === 机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_casing_1')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:steel_plate')
    .itemOutputs('3x gtceu:lv_machine_casing')
    .duration(40)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_casing_2')
    .circuit(15)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate')
    .itemOutputs('3x gtceu:mv_machine_casing')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_casing_3')
    .circuit(15)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('8x gtceu:stainless_steel_plate')
    .itemOutputs('3x gtceu:hv_machine_casing')
    .duration(50)
    .EUt(80)

    // === 脱氧机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_solid_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:steel_plate','gtceu:steel_frame')
    .itemOutputs('2x gtceu:solid_machine_casing')
    .duration(50)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_solid_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('8x gtceu:steel_plate','gtceu:steel_frame')
    .itemOutputs('4x gtceu:solid_machine_casing')
    .duration(40)
    .EUt(80)

    // === 惰性机器外壳快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_inert_casing_1')
    .circuit(16)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','gtceu:aluminium_frame')
    .itemOutputs('2x gtceu:inert_machine_casing')
    .duration(50)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_inert_casing_2')
    .circuit(16)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('8x gtceu:aluminium_plate','gtceu:aluminium_frame')
    .itemOutputs('4x gtceu:inert_machine_casing')
    .duration(45)
    .EUt(96)

    // === 金属杆材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_1')
    .circuit(2)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:aluminium_rod')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_2')
    .circuit(2)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('4x gtceu:steel_rod')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_3')
    .circuit(2)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('6x gtceu:stainless_steel_rod')
    .duration(45)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rod_4')
    .circuit(2)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('6x gtceu:waw_rod')
    .duration(40)
    .EUt(96)

    // === 齿轮快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_1')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:aluminium_plate')
    .itemOutputs('2x gtceu:aluminium_gear')
    .duration(50)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_2')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:steel_plate')
    .itemOutputs('2x gtceu:steel_gear')
    .duration(55)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_3')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:stainless_steel_plate')
    .itemOutputs('2x gtceu:stainless_steel_gear')
    .duration(60)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_4')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:aluminium_ingot')
    .itemOutputs('4x gtceu:small_aluminium_gear')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_5')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:stainless_steel_ingot')
    .itemOutputs('4x gtceu:small_stainless_steel_gear')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_gear_6')
    .circuit(3)
    .notConsumable('prts:type_c_packaging_unit')
    .notConsumable('prts:type_c_circuit_cross_domain_actuator')
    .itemInputs('2x gtceu:steel_ingot')
    .itemOutputs('4x gtceu:small_steel_gear')
    .duration(30)
    .EUt(64)


    // === 螺丝快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_1')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('8x gtceu:aluminium_screw')
    .duration(25)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_2')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('8x gtceu:steel_screw')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_3')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('10x gtceu:stainless_steel_screw')
    .duration(35)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_screw_4')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:bronze_rod')
    .itemOutputs('8x gtceu:bronze_screw')
    .duration(25)
    .EUt(64)

    // === 螺栓快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_1')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:aluminium_ingot')
    .itemOutputs('8x gtceu:aluminium_bolt')
    .duration(25)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_2')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:steel_ingot')
    .itemOutputs('8x gtceu:steel_bolt')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_bolt_3')
    .circuit(3)
    .notConsumable('2x prts:type_c_resistor')
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:stainless_steel_ingot')
    .itemOutputs('10x gtceu:stainless_steel_bolt')
    .duration(35)
    .EUt(80)

    // === 线材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_wire_1')
    .circuit(4)
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('minecraft:copper_ingot')
    .itemOutputs('6x gtceu:copper_single_wire')
    .duration(30)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_wire_2')
    .circuit(4)
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:cupronickel_ingot')
    .itemOutputs('6x gtceu:cupronickel_single_wire')
    .duration(35)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_wire_3')
    .circuit(4)
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:silver_ingot')
    .itemOutputs('6x gtceu:silver_single_wire')
    .duration(40)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_wire_4')
    .circuit(4)
    .notConsumable('2x prts:type_c_conductive_circuit')
    .itemInputs('gtceu:waw_ingot')
    .itemOutputs('6x gtceu:waw_single_wire')
    .duration(35)
    .EUt(32)

    // === 线缆快速制作（waw没有线缆，只有导线） ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_cable_1')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:copper_single_wire')
    .itemOutputs('6x gtceu:copper_single_cable')
    .duration(25)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_cable_2')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:cupronickel_single_wire')
    .itemOutputs('6x gtceu:cupronickel_single_cable')
    .duration(30)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_cable_3')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:silver_single_wire')
    .itemOutputs('6x gtceu:silver_single_cable')
    .duration(35)
    .EUt(32)

    // === 转子快速制作 ===

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rotor_2')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('4x gtceu:steel_plate')
    .itemOutputs('4x gtceu:steel_rotor')
    .duration(65)
    .EUt(32)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_rotor_3')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('4x gtceu:stainless_steel_plate')
    .itemOutputs('4x gtceu:stainless_steel_rotor')
    .duration(70)
    .EUt(32)

    // === 环材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_ring_1')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('6x gtceu:aluminium_ring')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_ring_2')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('6x gtceu:steel_ring')
    .duration(35)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_ring_3')
    .circuit(4)
    .notConsumable('prts:type_c_packaging_unit')
    .itemInputs('gtceu:stainless_steel_rod')
    .itemOutputs('6x gtceu:stainless_steel_ring')
    .duration(40)
    .EUt(80)

    // === 弹簧快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_spring_1')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:aluminium_rod')
    .itemOutputs('2x gtceu:aluminium_spring')
    .duration(40)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_spring_2')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:steel_rod')
    .itemOutputs('2x gtceu:steel_spring')
    .duration(45)
    .EUt(64)

    // === 箔材快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_foil_1')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:aluminium_plate')
    .itemOutputs('4x gtceu:aluminium_foil')
    .duration(25)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_foil_2')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:steel_plate')
    .itemOutputs('4x gtceu:steel_foil')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_foil_3')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:copper_plate')
    .itemOutputs('5x gtceu:copper_foil')
    .duration(25)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_foil_4')
    .circuit(4)
    .notConsumable('prts:type_c_purified_packaging_unit')
    .itemInputs('gtceu:silver_plate')
    .itemOutputs('5x gtceu:silver_foil')
    .duration(30)
    .EUt(80)

    // === 细线快速制作 ===
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fine_wire_1')
    .circuit(4)
    .notConsumable('prts:type_c_conductive_circuit')
    .notConsumable('prts:type_c_resistor')
    .itemInputs('gtceu:copper_foil')
    .itemOutputs('6x gtceu:fine_copper_wire')
    .duration(25)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fine_wire_2')
    .circuit(4)
    .notConsumable('prts:type_c_conductive_circuit')
    .notConsumable('prts:type_c_resistor')
    .itemInputs('gtceu:cupronickel_foil')
    .itemOutputs('6x gtceu:fine_cupronickel_wire')
    .duration(30)
    .EUt(64)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fine_wire_3')
    .circuit(4)
    .notConsumable('prts:type_c_conductive_circuit')
    .notConsumable('prts:type_c_resistor')
    .itemInputs('gtceu:silver_foil')
    .itemOutputs('6x gtceu:fine_silver_wire')
    .duration(25)
    .EUt(80)

    event.recipes.gtceu.basic_wanzi_assembler('wanzi_mv_fine_wire_4')
    .circuit(4)
    .notConsumable('prts:type_c_conductive_circuit')
    .notConsumable('prts:type_c_resistor')
    .itemInputs('gtceu:waw_foil')
    .itemOutputs('6x gtceu:fine_waw_wire')
    .duration(30)
    .EUt(96)

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
    ],'3x gtceu:lv_electric_motor',255,20)
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

    // ==================== DSV型组件合成配方 ====================
    // DSV型组件 - 万子组装机制作（标准方法）
    
    event.recipes.gtceu.basic_wanzi_assembler('dsv_component_assembler_1')
        .circuit(3)
        .itemInputs(
            '3x prts:type_c_conductive_circuit',
            '2x prts:type_c_packaging_unit',
            '2x prts:type_c_circuit_cross_domain_actuator',
            'prts:type_c_high_voltage_transformation_component',
            '2x prts:type_one_wanzi'
        )
        .inputFluids(Fluid.of('gtceu:waw', 144))
        .itemOutputs('2x prts:dsv_component')
        .duration(160)
        .EUt(96)
    
    // DSV型组件和实验组件的组合配方（高级应用）
    
    event.recipes.gtceu.basic_wanzi_assembler('dsv_combined_advanced_motor')
        .notConsumable('prts:dsv_component')
        .notConsumable('prts:experimental_dsv_component')
        .itemInputs(
            '2x gtceu:stainless_steel_rod',
            '4x gtceu:silver_single_wire',
            'gtceu:magnetic_steel_rod'
        )
        .inputFluids(Fluid.of('gtceu:waw', 144))
        .itemOutputs('8x gtceu:hv_electric_motor')  // 原版2个，提升300%
        .duration(50)
        .EUt(128)

    // ==================== 拓展用途配方 ====================
    
    // 高效隔绝组件 - 万子组装机制作
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_high_isolation')
        .circuit(15)
        .itemInputs('prts:type_c_risk_management_unit', '2x gtceu:polyethylene_plate', 'gtceu:rubber_plate')
        .itemOutputs('prts:high_efficiency_isolation_component')
        .duration(120)
        .EUt(96)
    
    // 常规组件 - 万子组装机制作
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_normal_component')
        .circuit(20)
        .itemInputs('prts:type_c_resistor', 'prts:type_c_packaging_unit', 'gtceu:steel_plate')
        .itemOutputs('2x prts:conventional_component')
        .duration(100)
        .EUt(64)
    
    // 反常规组件 - 万子组装机制作
    event.recipes.gtceu.basic_wanzi_assembler('wanzi_abnormal_component')
        .circuit(21)
        .itemInputs('prts:conventional_component', 'prts:abnormal_data', 'prts:type_c_specialized_circuit_group')
        .itemOutputs('prts:imitation_conventional_component')
        .duration(150)
        .EUt(96)
})

ServerEvents.recipes((event) => {
    function basic_wanzi_assembler(id,C,I,O,T,E){
        event.recipes.gtceu.basic_wanzi_assembler(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .duration(T)
             .EUt(E)
    }//C型材料简化MV组件配方

    // ========== MV电动马达 ==========
    
    // 1. C型导电线路马达
    basic_wanzi_assembler('c_simple_mv_motor_1',1,[
        '2x prts:type_c_conductive_circuit',
        'gtceu:magnetic_steel_rod',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_electric_motor',100,64)

    // 2. 纯化C型导电线路马达
    basic_wanzi_assembler('c_simple_mv_motor_2',1,[
        'prts:type_c_purified_conductive_circuit',
        'gtceu:magnetic_steel_rod',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_electric_motor',80,80)

    // ========== MV电动活塞 ==========

    // 3. C型封装活塞
    basic_wanzi_assembler('c_simple_mv_piston_1',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_packaging_unit',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_electric_piston',100,64)

    // 4. 纯化C型封装活塞
    basic_wanzi_assembler('c_simple_mv_piston_2',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_purified_packaging_unit',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_electric_piston',80,80)

    // ========== MV机械臂 ==========

    // 5. C型电阻机械臂
    basic_wanzi_assembler('c_simple_mv_arm_1',1,[
        'gtceu:mv_electric_piston',
        'prts:type_c_resistor',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_robot_arm',110,68)

    // 6. 纯化C型电阻机械臂
    basic_wanzi_assembler('c_simple_mv_arm_2',1,[
        'gtceu:mv_electric_piston',
        'prts:type_c_purified_resistor',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_robot_arm',90,84)

    // ========== MV传送带 ==========

    // 7. C型导电传送带
    basic_wanzi_assembler('c_simple_mv_conveyor_1',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_conductive_circuit',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_conveyor_module',100,64)

    // 8. 纯化C型导电传送带
    basic_wanzi_assembler('c_simple_mv_conveyor_2',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_purified_conductive_circuit',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_conveyor_module',80,80)

    // ========== MV电动泵 ==========

    // 9. C型高压泵
    basic_wanzi_assembler('c_simple_mv_pump_1',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_high_voltage_transformation_component',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_electric_pump',100,64)

    // 10. 纯化C型高压泵
    basic_wanzi_assembler('c_simple_mv_pump_2',1,[
        'gtceu:mv_electric_motor',
        'prts:type_c_purified_high_voltage_transformation_component',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_electric_pump',80,80)

    // ========== MV传感器 ==========

    // 11. C型导电传感器
    basic_wanzi_assembler('c_simple_mv_sensor_1',1,[
        'prts:type_c_conductive_circuit',
        'gtceu:ender_eye_plate',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_sensor',110,72)

    // 12. 纯化C型导电传感器
    basic_wanzi_assembler('c_simple_mv_sensor_2',1,[
        'prts:type_c_purified_conductive_circuit',
        'gtceu:ender_eye_plate',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_sensor',90,88)

    // ========== MV发射器 ==========

    // 13. C型电阻发射器
    basic_wanzi_assembler('c_simple_mv_emitter_1',1,[
        'prts:type_c_resistor',
        'gtceu:ender_eye_plate',
        'prts:type_one_wanzi'
    ],'2x gtceu:mv_emitter',110,72)

    // 14. 纯化C型电阻发射器
    basic_wanzi_assembler('c_simple_mv_emitter_2',1,[
        'prts:type_c_purified_resistor',
        'gtceu:ender_eye_plate',
        'prts:purified_type_one_wanzi'
    ],'3x gtceu:mv_emitter',90,88)

    // ========== MV力场发生器 ==========

    // 15. C型封装力场
    basic_wanzi_assembler('c_simple_mv_field_1',1,[
        'prts:type_c_packaging_unit',
        'gtceu:ender_pearl_plate',
        'prts:medium_voltage_wanzi_circuit'
    ],'2x gtceu:mv_field_generator',120,96)

    // 16. 纯化C型封装力场
    basic_wanzi_assembler('c_simple_mv_field_2',1,[
        'prts:type_c_purified_packaging_unit',
        'gtceu:ender_pearl_plate',
        'prts:medium_voltage_wanzi_circuit'
    ],'3x gtceu:mv_field_generator',100,112)
})