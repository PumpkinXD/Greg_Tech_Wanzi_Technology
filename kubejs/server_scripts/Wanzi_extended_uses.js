ServerEvents.recipes(event => {
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
})
