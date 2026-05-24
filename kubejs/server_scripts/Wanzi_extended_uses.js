ServerEvents.recipes(event => {
    //这些全TM是AI写的，除了部分我修正过其他的都没修正
    // 基础万子传动器 - 用于制作传动设备
    event.recipes.gtceu.assembler('gtceu_wanzi_conveyor_boost')
        .notConsumable('prts:basic_wanzi_actuator')
        .itemInputs('gtceu:lv_electric_motor', 'gtceu:rubber_plate')
        .itemOutputs('4x gtceu:lv_conveyor_module')  // 原版2个
        .duration(120)
        .EUt(32)
    
    event.recipes.gtceu.assembler('gtceu_wanzi_piston_boost')
        .notConsumable('prts:basic_wanzi_actuator')
        .itemInputs('gtceu:lv_electric_motor', '2x gtceu:steel_plate')
        .itemOutputs('3x gtceu:lv_electric_piston')  // 原版1个
        .duration(140)
        .EUt(32)
    
    // 基础万子吸收板 - 用于能量吸收和转换
    event.recipes.gtceu.assembler('gtceu_wanzi_battery_boost')
        .itemInputs('4x gtceu:battery_alloy_plate', 'prts:basic_wanzi_absorber_plate', 'gtceu:red_alloy_single_cable')
        .itemOutputs('5x gtceu:battery')  // 原版2个
        .duration(100)
        .EUt(24)
    
    event.recipes.gtceu.assembler('gtceu_wanzi_energy_hatch')
        .itemInputs('gtceu:lv_machine_hull', 'gtceu:tin_single_cable', 'prts:basic_wanzi_absorber_plate')
        .itemOutputs('4x gtceu:lv_input_hatch')  // 原版1个
        .duration(120)
        .EUt(32)
    
    // 基础万子容纳器 - 用于存储设备
    event.recipes.gtceu.assembler('gtceu_wanzi_chest_boost')
        .itemInputs('minecraft:chest', 'prts:basic_wanzi_holder', '2x gtceu:steel_plate')
        .itemOutputs('4x gtceu:steel_crate')  // 原版1个
        .duration(100)
        .EUt(32)
    
    event.recipes.gtceu.assembler('gtceu_wanzi_tank_boost')
        .itemInputs('gtceu:steel_drum', 'prts:basic_wanzi_holder', '2x gtceu:steel_plate')
        .itemOutputs('4x gtceu:steel_drum')  // 产量提升
        .duration(120)
        .EUt(32)
    
    // 基础万子发射器 - 用于发射和传输设备
    event.recipes.gtceu.assembler('gtceu_wanzi_emitter_boost')
        .itemInputs('gtceu:lv_electric_motor', '2x gtceu:steel_rod', 'prts:basic_wanzi_emitter')
        .itemOutputs('2x gtceu:lv_emitter')  // 原版1个
        .duration(150)
        .EUt(32)
    
    event.recipes.gtceu.assembler('gtceu_wanzi_sensor_boost')
        .itemInputs('gtceu:lv_electric_motor', 'gtceu:steel_rod', 'prts:basic_wanzi_emitter')
        .itemOutputs('2x gtceu:lv_sensor')  // 原版1个
        .duration(150)
        .EUt(32)
    
    // 基础万子抗冲击板 - 用于脱氧机械方块
    event.recipes.gtceu.assembler('prts:wanzi_casing_boost_1')
    .itemInputs('gtceu:invar_frame', 'prts:basic_wanzi_resistance_plate', '2x gtceu:steel_plate')
    .itemOutputs('2x gtceu:solid_machine_casing')  // 原版1个
    .duration(150)
    .EUt(32)

    event.recipes.gtceu.assembler('prts:wanzi_casing_boost_2')
    .itemInputs('gtceu:steel_frame', 'prts:basic_wanzi_resistance_plate', '2x gtceu:steel_plate')
    .itemOutputs('4x gtceu:solid_machine_casing')  // 原版1个
    .duration(150)
    .EUt(32)
    
    event.recipes.gtceu.assembler('prts:wanzi_casing_boost_3')
    .itemInputs('gtceu:stainless_steel_frame', 'prts:basic_wanzi_resistance_plate', '4x gtceu:steel_plate')
    .itemOutputs('6x gtceu:solid_machine_casing')  // 原版1个
    .duration(150)
    .EUt(32)

    event.recipes.gtceu.assembler('prts:wanzi_casing_boost_4')
    .itemInputs('gtceu:waw_frame', 'prts:basic_wanzi_resistance_plate', '4x gtceu:steel_plate')
    .itemOutputs('8x gtceu:solid_machine_casing')  // 原版1个
    .duration(150)
    .EUt(32)
    
    //基础万子重导向板 - 用于机器外壳
    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_1_lv')
    .itemInputs('gtceu:invar_frame','2x gtceu:steel_plate', 'prts:basic_wanzi_redirection_plate', '2x gtceu:tin_single_cable')
    .itemOutputs('4x gtceu:lv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))   
    .duration(120)
    .EUt(30)//LV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_2_lv')
    .itemInputs('gtceu:steel_frame','4x gtceu:steel_plate', 'prts:basic_wanzi_redirection_plate', '4x gtceu:tin_single_cable')
    .itemOutputs('6x gtceu:lv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))   
    .duration(120)
    .EUt(30)//LV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_1_mv')
    .itemInputs('gtceu:invar_frame','gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '2x gtceu:copper_single_cable')
    .itemOutputs('4x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_2_mv')
    .itemInputs('gtceu:steel_frame','gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '4x gtceu:copper_single_cable')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_3_mv')
    .itemInputs('gtceu:stainless_steel_frame','2x gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '4x gtceu:copper_single_cable')
    .itemOutputs('8x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_4_mv')
    .itemInputs('gtceu:waw_frame','4x gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '8x gtceu:copper_single_cable')
    .itemOutputs('12x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:rubber',576))  
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_5_mv')
    .itemInputs('gtceu:invar_frame','gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '2x gtceu:copper_single_cable')
    .itemOutputs('4x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:polyethylene',288))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_6_mv')
    .itemInputs('gtceu:steel_frame','gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '4x gtceu:copper_single_cable')
    .itemOutputs('6x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:polyethylene',288))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_7_mv')
    .itemInputs('gtceu:stainless_steel_frame','2x gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '4x gtceu:copper_single_cable')
    .itemOutputs('8x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:polyethylene',288))   
    .duration(120)
    .EUt(64)//MV

    event.recipes.gtceu.assembler('prts:wanzi_hull_boost_8_mv')
    .itemInputs('gtceu:waw_frame','4x gtceu:double_aluminium_plate', 'prts:basic_wanzi_redirection_plate', '8x gtceu:copper_single_cable')
    .itemOutputs('12x gtceu:mv_machine_hull')
    .inputFluids(Fluid.of('gtceu:polyethylene',288))  
    .duration(120)
    .EUt(64)//MV
    
    // ==================== 正式万子组件系列 ====================
    
    // 正式万子传动器 - MV级传动设备
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_conveyor')
        .itemInputs('gtceu:mv_electric_motor', 'gtceu:rubber_plate', 'prts:production_type_wanzi_actuator')
        .itemOutputs('4x gtceu:mv_conveyor_module')  // 原版2个
        .duration(100)
        .EUt(64)
    
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_robot_arm')
        .itemInputs('2x gtceu:mv_electric_motor', '2x gtceu:steel_rod', 'prts:production_type_wanzi_actuator')
        .itemOutputs('2x gtceu:mv_robot_arm')  // 原版1个
        .duration(180)
        .EUt(64)
    
    // 正式万子吸收板 - MV级能量设备
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_energy_boost')
        .itemInputs('gtceu:mv_machine_hull', '2x gtceu:copper_single_cable', 'prts:production_type_wanzi_absorber_plate')
        .itemOutputs('3x gtceu:mv_input_hatch')  // 原版1个
        .duration(100)
        .EUt(64)
    
    // 正式万子容纳器 - MV级存储
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_storage')
        .itemInputs('gtceu:steel_crate', 'prts:production_type_wanzi_holder', '4x gtceu:aluminium_plate')
        .itemOutputs('2x gtceu:aluminium_crate')  // 原版1个
        .duration(120)
        .EUt(64)
    
    // 正式万子发射器 - MV级发射设备
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_emitter')
        .itemInputs('gtceu:mv_electric_motor', '2x gtceu:steel_rod', 'prts:production_type_wanzi_emitter')
        .itemOutputs('3x gtceu:mv_emitter')  // 原版1个
        .duration(140)
        .EUt(64)
    
    // 正式万子抗冲击板 - MV级防护
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_casing')
        .itemInputs('gtceu:waw_frame', 'prts:production_type_wanzi_impact_resistant_plate', '4x gtceu:aluminium_plate')
        .itemOutputs('8x gtceu:solid_machine_casing')  // 原版1个
        .duration(140)
        .EUt(64)
    
    // 正式万子校正器 - MV级精密加工（催化剂）
    event.recipes.gtceu.lathe('gtceu_formal_wanzi_precise_rod')
        .itemInputs('gtceu:aluminium_ingot')
        .notConsumable('prts:production_type_wanzi_position_corrector')
        .itemOutputs('8x gtceu:aluminium_rod', 'gtceu:small_aluminium_dust')  // 原版1个杆
        .duration(60)  // 原版100 ticks
        .EUt(32)
    
    event.recipes.gtceu.cutter('gtceu_formal_wanzi_precise_plate')
        .itemInputs('gtceu:aluminium_ingot')
        .notConsumable('prts:production_type_wanzi_position_corrector')
        .itemOutputs('3x gtceu:aluminium_plate')  // 原版1个
        .duration(50)  // 原版80 ticks
        .EUt(48)
    
    // 正式覆膜喷涂器 - MV级涂层
    event.recipes.gtceu.assembler('gtceu_formal_wanzi_coating')
    .notConsumable('prts:production_type_wanzi_film_coating_sprayer')    
    .itemInputs('4x gtceu:aluminium_plate')
    .inputFluids(Fluid.of('gtceu:polyethylene', 288))
    .itemOutputs('9x gtceu:polyethylene_plate')  // 高效转换
    .duration(60)
    .EUt(96)
    
    // ==================== DSV型试验组件 ====================
    
    // DSV型试验组件 - 实验性高效配方
    event.recipes.gtceu.assembler('gtceu_dsv_motor_boost')
        .itemInputs('gtceu:lv_electric_motor', 'prts:experimental_dsv_component')
        .itemOutputs('6x gtceu:lv_electric_motor')  // 超高产量
        .duration(100)
        .EUt(48)
    
    event.recipes.gtceu.assembler('gtceu_dsv_pump_boost')
        .itemInputs('gtceu:lv_electric_pump', 'prts:experimental_dsv_component')
        .itemOutputs('6x gtceu:lv_electric_pump')  // 超高产量
        .duration(100)
        .EUt(48)
    
    event.recipes.gtceu.circuit_assembler('gtceu_dsv_circuit_boost')
        .itemInputs('gtceu:basic_electronic_circuit', 'prts:experimental_dsv_component')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('6x gtceu:basic_electronic_circuit')  // 超高产量
        .duration(80)
        .EUt(48)
    
    // ==================== 万子特殊合金系列 ====================
    
    // 万子特殊合金Ⅰ型 - 用于合金制作
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_1_steel')
        .itemInputs('2x gtceu:iron_dust', 'gtceu:carbon_dust', 'prts:type_one_wanzi_special_alloy')
        .itemOutputs('8x gtceu:steel_dust')  // 原版3个
        .duration(120)
        .EUt(32)
    
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_1_bronze')
        .itemInputs('3x gtceu:copper_dust', 'gtceu:tin_dust', 'prts:type_one_wanzi_special_alloy')
        .itemOutputs('9x gtceu:bronze_dust')  // 原版4个
        .duration(120)
        .EUt(32)
    
    // 万子特殊合金Ⅱ型 - 用于高级合金
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_2_stainless')
        .itemInputs('6x gtceu:iron_dust', 'gtceu:chromium_dust', 'gtceu:manganese_dust', 'gtceu:nickel_dust', 'prts:type_two_wanzi_special_alloy')
        .itemOutputs('18x gtceu:stainless_steel_dust')  // 原版9个
        .duration(180)
        .EUt(64)
    
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_2_invar')
        .itemInputs('2x gtceu:iron_dust', 'gtceu:nickel_dust', 'prts:type_two_wanzi_special_alloy')
        .itemOutputs('6x gtceu:invar_dust')  // 原版3个
        .duration(150)
        .EUt(64)
    
    // 万子特殊合金Ⅲ型 - 用于特殊材料
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_3_titanium')
        .itemInputs('gtceu:titanium_dust', 'gtceu:aluminium_dust', 'gtceu:vanadium_dust', 'prts:type_three_wanzi_special_alloy')
        .itemOutputs('8x gtceu:titanium_dust')  // 产量提升
        .duration(200)
        .EUt(128)
    
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_3_tungsten_steel')
        .itemInputs('gtceu:steel_dust', 'gtceu:tungsten_dust', 'prts:type_three_wanzi_special_alloy')
        .itemOutputs('6x gtceu:tungsten_steel_dust')  // 原版2个
        .duration(200)
        .EUt(128)
    
    // 万子特殊合金Ⅳ型 - 用于顶级材料
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_4_hssg')
        .itemInputs('6x gtceu:tungsten_steel_dust', '3x gtceu:chromium_dust', '2x gtceu:molybdenum_dust', 'gtceu:vanadium_dust', 'prts:type_four_wanzi_special_alloy')
        .itemOutputs('24x gtceu:hssg_dust')  // 原版12个
        .duration(250)
        .EUt(256)
    
    event.recipes.gtceu.mixer('gtceu_wanzi_alloy_4_naquadah')
        .itemInputs('2x gtceu:naquadah_dust', 'gtceu:trinium_dust', 'prts:type_four_wanzi_special_alloy')
        .itemOutputs('6x gtceu:naquadah_alloy_dust')  // 原版3个
        .duration(300)
        .EUt(256)
    
    // ==================== 低压/中压万子电路 ====================
    
    // 低压万子电路 - 用于电路制作
    event.recipes.gtceu.circuit_assembler('gtceu_lv_circuit_boost')
        .itemInputs('gtceu:phenolic_printed_circuit_board', 'prts:low_voltage_wanzi_circuit')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
        .itemOutputs('3x gtceu:basic_electronic_circuit')  // 原版2个
        .duration(100)
        .EUt(32)
    
    // 中压万子电路 - 用于高级电路
    event.recipes.gtceu.circuit_assembler('gtceu_mv_circuit_boost')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'prts:medium_voltage_wanzi_circuit')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('3x gtceu:good_electronic_circuit')  // 原版2个
        .duration(120)
        .EUt(64)
    
    event.recipes.gtceu.circuit_assembler('gtceu_mv_advanced_circuit')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:good_electronic_circuit', 'prts:medium_voltage_wanzi_circuit')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('6x gtceu:advanced_integrated_circuit')  // 原版1个
        .duration(150)
        .EUt(96)
    
    // ==================== 异常数据 ====================
    
    // 异常数据 - 用于数据处理和特殊配方
    event.recipes.gtceu.circuit_assembler('gtceu_abnormal_data_processor')
        .itemInputs('gtceu:advanced_integrated_circuit', 'prts:abnormal_data', 'gtceu:ram_chip')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('4x gtceu:micro_processor_assembly')  // 原版1个
        .duration(180)
        .EUt(128)
    
    event.recipes.gtceu.assembler('gtceu_abnormal_data_storage')
        .itemInputs('gtceu:data_orb', 'prts:abnormal_data')
        .itemOutputs('2x gtceu:data_orb')  // 数据复制
        .duration(200)
        .EUt(256)
})
