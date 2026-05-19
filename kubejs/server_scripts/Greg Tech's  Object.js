const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
ServerEvents.recipes((event) => {
    function large_scale_steam_generator(id, input, eu, fluid,fluid1) {
        event.recipes.gtceu.large_scale_steam_generator(id)//配方id
             .circuit(1)//设置编程电路
             .itemInputs(input)//物品输入
             .inputFluids(Fluid.of('gtceu:steam', fluid))//流体输入
             .outputFluids(Fluid.of('minecraft:water',fluid1))//流体输出
             .duration(60)//持续时间
             .EUt(eu)//电压
    }	//大型蒸汽发电配方设置代码块
        large_scale_steam_generator('steamgenerator','minecraft:coal',-HV,288,18,)
        large_scale_steam_generator('steamgenerator1','minecraft:charcoal',-HV,288,18,)
        large_scale_steam_generator('steamgenerator2','gtceu:charcoal_dust',-HV,288,18,)
        large_scale_steam_generator('steamgenerator3','gtceu:coal_dust',-HV,288,18,)
        large_scale_steam_generator('steamgenerator4','minecraft:coal_block',-EV,576,18,)   
        large_scale_steam_generator('steamgenerator5','gtceu:charcoal_block',-EV,576,18,) 
        //大型蒸汽发电配方实现代码块 
    
        event.shaped('gtceu:large_scale_steam_generator',[
            ['gtceu:bronze_block','gtceu:firebricks','gtceu:bronze_block'],
            ['gtceu:firebricks','#gtceu:circuits/mv','gtceu:firebricks'],
            ['gtceu:bronze_block','gtceu:firebricks','gtceu:bronze_block']
        ])
        //大型蒸汽发电机控制器配方新制
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function large_steam_generator_machine(id,input,eu,fluid2,fluid3){
        event.recipes.gtceu.large_steam_generator_machine(id)
             .circuit(10)
             .itemInputs(input)
             .inputFluids(Fluid.of('minecraft:water', fluid2))
             .outputFluids(Fluid.of('gtceu:steam', fluid3))
             .duration(20)
             .EUt(eu)
    }   //大型蒸汽发生配方代码块
        large_steam_generator_machine('steam_generator','minecraft:coal',20,18,288)
        large_steam_generator_machine('steam_generator_1','minecraft:charcoal',20,18,288)
        large_steam_generator_machine('steam_generator_2','gtceu:charcoal_dust',40,36,288)
        large_steam_generator_machine('steam_generator_3','gtceu:coal_dust',40,36,288)
        large_steam_generator_machine('steam_generator_4','minecraft:coal_block',10,18,576)
        large_steam_generator_machine('steam_generator_5','gtceu:charcoal_block',10,18,576)
        //大型蒸汽发生配方实现代码块
    
        event.shaped('gtceu:large_steam_generator_machine',[
            ['gtceu:bronze_machine_casing','gtceu:firebricks','gtceu:bronze_machine_casing'],
            ['gtceu:firebricks','#gtceu:circuits/mv','gtceu:firebricks'],
            ['gtceu:bronze_machine_casing','gtceu:firebricks','gtceu:bronze_machine_casing']
        ])
        //大型蒸汽发生机控制器配方新制
    
    function gaosujiaohuaji_1(id,C,I,O,IF,IFL,OF,OFL,T,E){
        event.recipes.gtceu.gaosujiaohuaji_1(id)
             .circuit(C)
             .itemInputs(I)
             .itemOutputs(O)
             .inputFluids(Fluid.of(IF,IFL))
             .outputFluids(Fluid.of(OF,OFL))
             .duration(T)
             .EUt(E)
    }
    gaosujiaohuaji_1('mucaijiaohua_1',1,
        ['16x #minecraft:logs_that_burn',
        'prts:basic_wanzi'],
        '16x minecraft:charcoal',
        'gtceu:air',144,
        'gtceu:wood_tar',2000,200,16)
    gaosujiaohuaji_1('mucaijiaohua_2',2,
        ['16x #minecraft:logs_that_burn',
        'prts:basic_wanzi'],
        '16x minecraft:charcoal',
        'gtceu:nitrogen',288,
        'gtceu:creosote',6000,200,16)
    gaosujiaohuaji_1('mucaijiaohua_3',3,
        ['16x #minecraft:logs_that_burn',
        'prts:basic_wanzi'],
        '16x minecraft:charcoal',
        'gtceu:nitrogen',288,
        'gtceu:oil_heavy',300,200,16)
    gaosujiaohuaji_1('mucaijiaohua_4',4,
        ['16x #minecraft:logs_that_burn',
        'prts:basic_wanzi'],
        '16x minecraft:charcoal',
        'gtceu:nitrogen',288,
        'gtceu:wood_vinegar',400,200,16)
    gaosujiaohuaji_1('mucaijiaohua_5',5,
        ['16x #minecraft:logs_that_burn',
        'prts:basic_wanzi'],
        '16x minecraft:charcoal',
        'gtceu:nitrogen',288,
        'gtceu:charcoal_byproducts',5000,200,16)
    gaosujiaohuaji_1('mucaijiaohua_6',6,
        ['16x minecraft:coal',
        'prts:basic_wanzi'],
        '16x gtceu:coke_gem',
        'gtceu:nitrogen',288,
        'gtceu:creosote',9000,200,16)
    gaosujiaohuaji_1('mucaijiaohua_7',7,
        ['16x minecraft:coal',
        'prts:basic_wanzi'],
        '16x gtceu:coke_gem',
        'gtceu:nitrogen',288,
        'gtceu:coal_tar',4000,200,16)

    event.shaped('gtceu:gaosujiaohuaji',[
        'ABA',
        'CSC',
        'ABA'
    ],{
        A:'gtceu:steel_plate',
        B:'prts:type_d_high_voltage_transformation_component',
        C:'gtceu:basic_electronic_circuit',
        S:'gtceu:lv_machine_casing'
    })//万子高速焦化机控制器配方

    event.shaped('gtceu:basic_model_wanzi_power_supply_machine',[
        ['#forge:glass','gtceu:basic_electronic_circuit','#forge:glass'],
        ['prts:basic_wanzi','gtceu:lv_machine_hull','prts:basic_wanzi'],
        ['#forge:glass','gtceu:copper_double_wire','#forge:glass']
    ])//基础万子供电机配方

    event.shaped('gtceu:chaogaosuhejinyelian',[
        ['#forge:storage_blocks/steel','prts:low_voltage_wanzi_circuit','#forge:storage_blocks/steel'],
        ['minecraft:iron_block','gtceu:lv_machine_hull','minecraft:iron_block'],
        ['#forge:storage_blocks/steel','prts:low_voltage_wanzi_circuit','#forge:storage_blocks/steel']
    ])//万子超高速合金冶炼机配方
})
