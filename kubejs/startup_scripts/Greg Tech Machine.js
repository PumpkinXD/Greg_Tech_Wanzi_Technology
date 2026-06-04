const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');
const $Collections = Java.loadClass('java.util.Collections');
const $Objects = Java.loadClass('java.util.Objects');
// 注册机器配方类型

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('large_scale_steam_generator')//配方：大型蒸汽发电
       .category('large_scale_steam_generator')//设置类型
       .setEUIO('out') //设置机器的能源输入/输出
       .setMaxIOSize(8, 3, 4, 2)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//设置机器运行时处理中的样子
       .setSound(GTSoundEntries.BATH)//设置机器运行时工作的声音
       .setMaxTooltips(5)//设置最大信息提示

  event.create('large_steam_generator_machine')//配方：大型蒸汽产生
       .category('large_steam_generator_machine')
       .setEUIO('in')
       .setMaxIOSize(2, 0, 1, 1)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.SUS_RECORD)
       .setMaxTooltips(5)

  event.create('basic_model_wanzi_power_supply_machine_1')//配方：万子供电
       .category('basic_model_wanzi_power_supply_machine_1')
       .setEUIO('out')
       .setMaxIOSize(2, 1, 0, 0)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.SUS_RECORD)
       .setMaxTooltips(5)

  event.create('basic_model_wanzi_electrolyzer_1')//配方：万子电解
       .category('basic_model_wanzi_electrolyzer_1')
       .setEUIO('in')
       .setMaxIOSize(4, 8, 2, 4)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
  
  event.create('gaosujiaohuaji_1')//配方：高速焦化
       .category('gaosujiaohuaji_1')
       .setEUIO('in')
       .setMaxIOSize(4,1,1,1)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
  
 event.create('chaogaosuhejinyelian_1')//配方：超高速合金冶炼
       .category('chaogaosuhejinyelian_1')
       .setEUIO('in')
       .setMaxIOSize(4,2,2,0)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
  
  event.create('zhidingxinghuaxuefanying')//配方：指定性化学反应
       .category('zhidingxinghuaxuefanying')
       .setEUIO('in')
       .setMaxIOSize(8,8,8,8)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
  
  event.create('super_kc')//配方：超高速矿物处理
       .category('super_kc')
       .setEUIO('in')
       .setMaxIOSize(1, 9, 1, 9)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
    
  event.create('liquid_magic_generator')//配方：魔能
       .category('liquid_magic_generator')
       .setEUIO('in') 
       .setMaxIOSize(4,6,4,6)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)
       .setMaxTooltips(5)
  
  event.create('bigger_wanzi_condenser')//配方：大型万子凝练
       .category('liquid_magic_generator')
       .setEUIO('in') 
       .setMaxIOSize(9,9,9,9)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)
       .setMaxTooltips(5)

  event.create('bigger_wanzi_processor')//配方：大型万子处理
       .category('liquid_magic_generator')
       .setEUIO('in') 
       .setMaxIOSize(9,9,9,9)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)
       .setMaxTooltips(5)
})

// 注册机器方块
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('large_scale_steam_generator', 'multiblock')//大型蒸汽发电机
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_scale_steam_generator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        //recipeModifiers部分预设
        //OC_PERFECT                            无损超频
        //OC_NON_PERFECT                  损失能量的超频
        //OC_PERFECT_SUBTICK
        //OC_NON_PERFECT_SUBTICK
        //PARALLEL_HATCH                   使用并行仓
        //BATCH_MODE                         使用批量处理模式
        //crackerOverclock                    带线圈能量折扣的 OC（常见于裂化机）
        //ebfOverclock                          基于线圈温度折扣的OC（EBF）
        //pyrolyseOvenOverclock          基于线圈等级进行加速的OC（热解炉）
        //multiSmelterParallel                基于线圈等级增加并行

        //是否为发电机？
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('PPCPP', 'PCGCP', 'CCGCC', 'PCCCP', 'PPCPP')
            .aisle('PCCCP', 'C###C', 'C###C', 'C###C', 'PCCCP')
            .aisle('CCCCC', 'G#P#G', 'G#P#G', 'C#P#C', 'CCOCC')
            .aisle('PCCCP', 'C###C', 'C###C', 'C###C', 'PCCCP')
            .aisle('PPKPP', 'PCGCP', 'CCGCC', 'PCCCP', 'PPNPP')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('gtceu:bronze_block'))
            .where('C', Predicates.blocks('gtceu:firebricks')
             .or(Predicates.autoAbilities(definition.getRecipeTypes()))//自动化接口
            )
            .where('G', Predicates.blocks('minecraft:glass'))
            .where('M', Predicates.any())
            .where('O', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))//消声仓
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))//维护仓
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/steam/bricked_bronze/bottom',"gtceu:block/multiblock/implosion_compressor")

  event.create('large_steam_generator_machine', 'multiblock')//大型蒸汽发生器
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('large_steam_generator_machine')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .generator(false)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('PPPPP','PCCCP','PCCCP','PCCCP','PPPPP')
        .aisle('PCCCP','C###C','C###C','C###C','PCCCP')
        .aisle('PCCCP','C###C','C###C','C###C','PCOCP')
        .aisle('PCCCP','C###C','C###C','C###C','PCCCP')
        .aisle('PPPPP','PCCCP','PCUCP','PCCCP','PPPPP')
        .where('U', Predicates.controller(Predicates.blocks(definition.get())))
        .where('P', Predicates.blocks('gtceu:bronze_machine_casing'))
        .where('C', Predicates.blocks('gtceu:firebricks')
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('#', Predicates.air())
        .where('O', Predicates.abilities(PartAbility.MAINTENANCE))
        .build()
        )
        .workableCasingModel('gtceu:block/casings/steam/bricked_bronze/bottom',"gtceu:block/multiblock/implosion_compressor")

 event.create('basic_model_wanzi_power_supply_machine', 'multiblock')//万子发电机
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('basic_model_wanzi_power_supply_machine_1')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .generator(true)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('PPP','PPP','PPP',)
        .aisle('PPP','P#P','PPP',)
        .aisle('PPP','PUP','POP',)
        .where('U', Predicates.controller(Predicates.blocks(definition.get())))
        .where('P', Predicates.blocks('gtceu:lv_machine_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('#', Predicates.air())
        .where('O', Predicates.abilities(PartAbility.MAINTENANCE))
        .build()
               )
               .workableCasingModel('gtceu:block/machines/casing/prts/lv_front',"gtceu:block/machines/basic_model_wanzi_power_supply_machine")

  event.create('basic_model_wanzi_electrolyzer', 'multiblock')//万子电解机
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('basic_model_wanzi_electrolyzer_1')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .generator(false)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('PPPPP','PPPPP','PPPPP','PPPPP','*****')
        .aisle('PPPPP','PL#LP','P###P','PL#LP','*PPP*')
        .aisle('PPPPP','S###S','S#L#S','S###S','*PPP*')
        .aisle('PPPPP','PL#LP','P###P','PL#LP','*PPP*')
        .aisle('PPPPP','PPKPP','PPOPP','PPPPP','*****')
        .where('K',Predicates.controller(Predicates.blocks(definition.get())))
        .where('P',Predicates.blocks('minecraft:polished_deepslate'))
        .where('S',Predicates.blocks('minecraft:polished_deepslate')
              .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('#',Predicates.air())
        .where('L',Predicates.blocks('minecraft:iron_block'))
        .where('*',Predicates.any())
        .where('O',Predicates.abilities(PartAbility.MAINTENANCE))
        .build()
              )
              .workableCasingModel('gtceu:block/machines/casing/prts/lv_front_1',"gtceu:block/machines/basic_model_wanzi_electrolyzer")

  event.create('gaosujiaohuaji', 'multiblock')//高速焦化机
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gaosujiaohuaji_1')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .generator(false)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('*BBB*','*AAA*','*AAA*','*AAA*','*AAA*')
        .aisle('BAAAB','ACCCA','ACCCA','ACCCA','AAAAA')
        .aisle('BAAAB','ACCCA','AC#CA','ACCCA','AAOAA')
        .aisle('BAAAB','ACCCA','ACCCA','ACCCA','AAAAA')
        .aisle('*AKA*','*AAA*','*AAA*','*AAA*','*ASA*')
        .where('O', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
        .where('S', Predicates.abilities(PartAbility.MAINTENANCE))
        .where('*', Predicates.any())
        .where('#', Predicates.air())
        .where('A', Predicates.blocks('minecraft:stone_bricks'))
        .where('B', Predicates.blocks('minecraft:stone_bricks')
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('C', Predicates.blocks('minecraft:iron_block'))
        .build())
        .workableCasingModel('gtceu:block/machines/casing/prts/lv_front',"gtceu:block/machines/basic_model_wanzi_electrolyzer")

  event.create('chaogaosuhejinyelian', 'multiblock')//超高速合金冶炼机
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('chaogaosuhejinyelian_1')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .generator(false)
        .regressWhenWaiting(false)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('BBBB######','#AAA######','#AAA######','AAAA######','##########','######AAAA','######AAA#','######AAA#','######AAAA')
        .aisle('BAAABBBBBB','AA*AA##AAA','AA*AA###AA','AA*AAA##AA','#AAAAAAAAA','###AAAA*AA','####AAA*AA','#####AA*AA','######AAAA')
        .aisle('BAAAAAAAAB','A***A###AA','A***A#####','A****A####','#AA***AAA#','###A*****A','####A****A','#####A***A','######AAOA')
        .aisle('BAAAABBBBB','AA*AA##AAA','AA*AA###AA','AA*AAA##AA','#AAAAAAAAA','###AAAA*AA','####AAA*AA','#####AA*AA','######AAAA')
        .aisle('BBBBKS####','#AAA######','#AAA######','AAAA######','##########','######AAAA','######AAA#','######AAA#','######AAAA')
        .where('O', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
        .where('K', Predicates.controller(Predicates.blocks(definition.get())))
        .where('S', Predicates.abilities(PartAbility.MAINTENANCE))
        .where('*', Predicates.air())
        .where('#', Predicates.any())
        .where('A', Predicates.blocks('minecraft:stone_bricks'))
        .where('B', Predicates.blocks('minecraft:stone_bricks')
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .build())
        .workableCasingModel('gtceu:block/machines/casing/prts/lv_front',
                               "gtceu:block/machines/basic_model_wanzi_electrolyzer"
       )
  
  event.create('wanzihuaxueyichangcuihuachang', 'multiblock')//万子化学异常催化厂
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('zhidingxinghuaxuefanying')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('**A**','*AAA*','AAAAA','*AAA*','**A**')
       .aisle('*AAA*','ABBBA','ABBBA','ABBBA','*AAA*')
       .aisle('AAAAA','ABBBA','AB#BA','ABBBA','AAAAA')
       .aisle('*AAA*','ABBBA','ABBBA','ABBBA','*AAA*')
       .aisle('**A**','*AAA*','AASAA','*ACA*','**A**')
       .where('S',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('gtceu:solid_machine_casing')
          .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('gtceu:inert_machine_casing'))
       .where('*',Predicates.any())
       .where('#',Predicates.air())
       .where('C',Predicates.abilities(PartAbility.MAINTENANCE))
       .build())
       .workableCasingModel('gtceu:block/machines/casing/prts/lv_front',
                               "gtceu:block/machines/basic_model_wanzi_electrolyzer"
       )

  event.create('super_kc_1', 'multiblock')//超高速矿物处理厂
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('super_kc')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('*AAA*','*ABA*','*ABA*','*ABA*','*AAA*')
       .aisle('AAAAA','ABCBA','ABCBA','ABCBA','AAAAA')
       .aisle('AAAAA','BCDCB','BCDCB','BCDCB','AAOAA')
       .aisle('AAAAA','ABCBA','ABCBA','ABCBA','AAAAA')
       .aisle('*AKA*','*ABA*','*ABA*','*ABA*','*ASA*')
       .where('A',Predicates.blocks('gtceu:heatproof_machine_casing')
          .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('gtceu:cupronickel_coil_block'))
       .where('C',Predicates.blocks('minecraft:water'))
       .where('D',Predicates.blocks('prts:gaoxiaoshuiyayanmofangkuai'))
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('S',Predicates.abilities(PartAbility.MAINTENANCE))
       .where('O',Predicates.abilities(PartAbility.MUFFLER)
         .setExactLimit(1))
       .where('*',Predicates.any())
       .build())
       .workableCasingModel('gtceu:block/casings/solid/machine_casing_heatproof',
                               "gtceu:block/machines/basic_model_wanzi_electrolyzer"
       )

  event.create('liquid_magic_generator_1', 'multiblock')//魔魂生成器
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('liquid_magic_generator')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('AA***AA','*AAAAA*','*AAAAA*','*AAAAA*','AA***AA')
       .aisle('ABABABA','AD###DA','AF###FA','AD###DA','ABABABA')
       .aisle('*AACAA*','A#EEE#A','A#E#E#A','A#EEE#A','*AACAA*')
       .aisle('*BCBCB*','A#EBE#A','A##G##A','A#EBE#A','*BCBCB*')
       .aisle('*AACAA*','A#EEE#A','A#E#E#A','A#EEE#A','*AACAA*')
       .aisle('ABABABA','AD###DA','AF###FA','AD###DA','ABABABA')
       .aisle('AA***AA','*AAXAA*','*AAKAA*','*AAAAA*','AA***AA')
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('botania:polished_livingrock')
         .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('botania:azulejo_1'))
       .where('C',Predicates.blocks('botania:azulejo_3'))
       .where('D',Predicates.blocks('botania:mana_pylon'))
       .where('E',Predicates.blocks('botania:dreamwood_wall'))
       .where('F',Predicates.blocks('botania:terrasteel_block'))
       .where('G',Predicates.blocks('botania:natura_pylon'))
       .where('X',Predicates.abilities(PartAbility.MAINTENANCE))
       .where('*',Predicates.any())
       .where('#',Predicates.air())
       .build())
       .workableCasingModel('gtceu:block/botania/polished_livingrock',"gtceu:block/multiblock/implosion_compressor")
  
  event.create('bigger_wanzi_condenser_processor', 'multiblock')//大型凝练处理总站
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('bigger_wanzi_condenser')
       .recipeType('bigger_wanzi_processor')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('AAAAA','ABABA','ABBBA','ABABA','AAAAA')
       .aisle('AAAAA','B###B','B#C#B','B###B','AAAAA')
       .aisle('AAAAA','A#C#A','BCDCB','A#C#A','AAAAA')
       .aisle('AAAAA','B###B','B#C#B','B###B','AAAAA')
       .aisle('AAKAA','ABABA','ABBBA','ABABA','AAEAA')
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('gtceu:clean_machine_casing')
          .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('gtceu:kanthal_coil_block'))
       .where('C',Predicates.blocks('gtceu:waw_frame'))
       .where('D',Predicates.blocks('prts:ultra_high_efficiency_adsorption_core_component'))
       .where('E',Predicates.abilities(PartAbility.MAINTENANCE))
       .where('#',Predicates.blocks('gtceu:waw'))
       .build())
       .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel',"gtceu:block/machines/basic_model_wanzi_condenser")
})          
//////////////////////////////////////以下为单方块机器////////////////////////////////////////////////
GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_condenser')//设置配方的名字（基础型万子凝练机）
    .category('basic_model_wanzi_condenser')//设置类型
    .setEUIO('in') //设置机器的能源输入/输出
    .setMaxIOSize(2, 1, 0, 0)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)//设置机器的背面带有覆盖版
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//设置机器运行时处理中的样子
    .setSound(GTSoundEntries.BATH)//设置机器运行时工作的声音
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_condenser', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_condenser')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_condenser')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_processor')//设置机器的名字（基础型万子处理机）
    .category('basic_model_wanzi_processor')
    .setEUIO('in') 
    .setMaxIOSize(5, 4, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_processor', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_processor')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_processor')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_etching_machine')//设置机器的名字（基础型万子蚀刻机）
    .category('basic_model_wanzi_etching_machine')
    .setEUIO('in')
    .setMaxIOSize(7, 5, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_etching_machine', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_etching_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_etching_machine')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_phase_change_machine')//设置机器的名字（基础型万子相变机）
    .category('basic_model_wanzi_phase_change_machine')
    .setEUIO('in')
    .setMaxIOSize(7, 3, 3, 3)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_phase_change_machine', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_phase_change_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_phase_change_machine')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_mining_machine')//设置机器的名字（基础型万子采矿机）
    .category('basic_model_wanzi_mining_machine')
    .setEUIO('in')
    .setMaxIOSize(6, 8, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_mining_machine', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_mining_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_mining_machine')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_wanzi_assembler')//设置机器的名字(基础型万子组装厂)
    .category('basic_wanzi_assembler')
    .setEUIO('in')
    .setMaxIOSize(8, 2, 2, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_wanzi_assembler', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_wanzi_assembler')
              .workableTieredHullModel('gtceu:block/machines/basic_wanzi_assembler')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_compressor')//设置机器的名字(基础型万子压缩器)
    .category('basic_model_wanzi_compressor')
    .setEUIO('in') 
    .setMaxIOSize(10, 6, 8, 6)
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_compressor', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_compressor')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_compressor')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_disassembler')//设置机器的名字(基础型万子拆解机)
    .category('basic_model_wanzi_disassembler')
    .setEUIO('in')
    .setMaxIOSize(3, 8, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_disassembler', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_disassembler')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_disassembler')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_purifier')//设置机器的名字(基础型万子净化机)
    .category('basic_model_wanzi_purifier')
    .setEUIO('in') 
    .setMaxIOSize(2, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_purifier', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_purifier')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_purifier')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_electronics_assembler')//设置机器的名字(基础型万子电路组装厂)
    .category('basic_model_wanzi_electronics_assembler')
    .setEUIO('in')
    .setMaxIOSize(6, 2, 2, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_electronics_assembler', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_electronics_assembler')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_electronics_assembler')
          );
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('wanzi_automated_culture_system')//设置机器的名字(万子培养机)
    .category('wanzi_automated_culture_system')
    .setEUIO('in')
    .setMaxIOSize(1, 6, 1, 6)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('wanzi_automated_culture_system', 'simple')
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('wanzi_automated_culture_system')
              .workableTieredHullModel('gtceu:block/machines/wanzi_automated_culture_system')
          );
})
