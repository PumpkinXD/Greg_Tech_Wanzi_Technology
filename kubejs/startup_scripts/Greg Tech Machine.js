const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA;
const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');
const $Collections = Java.loadClass('java.util.Collections');
const $Objects = Java.loadClass('java.util.Objects');
const $EnergyHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine");
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

  event.create('basic_model_wanzi_condenser')//配方:基础型万子凝练
       .category('basic_model_wanzi_condenser')
       .setEUIO('in') 
       .setMaxIOSize(2, 1, 0, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

  event.create('basic_model_wanzi_processor')//配方：基础型万子处理
       .category('basic_model_wanzi_processor')
       .setEUIO('in') 
       .setMaxIOSize(5, 4, 0, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_etching_machine')//配方：基础型万子蚀刻
       .category('basic_model_wanzi_etching_machine')
       .setEUIO('in')
       .setMaxIOSize(7, 5, 0, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_phase_change_machine')//配方：基础型万子相变
       .category('basic_model_wanzi_phase_change_machine')
       .setEUIO('in')
       .setMaxIOSize(7, 3, 3, 3)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_mining_machine')//配方：基础型万子采矿
       .category('basic_model_wanzi_mining_machine')
       .setEUIO('in')
       .setMaxIOSize(6, 8, 0, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_wanzi_assembler')//配方：基础型万子组装
       .category('basic_wanzi_assembler')
       .setEUIO('in')
       .setMaxIOSize(8, 2, 2, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_compressor')//配方：基础型万子压缩器
       .category('basic_model_wanzi_compressor')
       .setEUIO('in') 
       .setMaxIOSize(10, 6, 8, 6)
       .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)
    
 event.create('basic_model_wanzi_disassembler')//配方：基础型万子拆解机
       .category('basic_model_wanzi_disassembler')
       .setEUIO('in')
       .setMaxIOSize(6, 9, 0, 9)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_purifier')//配方：基础型万子净化机
       .category('basic_model_wanzi_purifier')
       .setEUIO('in') 
       .setMaxIOSize(2, 1, 0, 0)
       .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.BATH)

 event.create('basic_model_wanzi_electronics_assembler')//配方：基础型万子电路组装厂
      .category('basic_model_wanzi_electronics_assembler')
      .setEUIO('in')
      .setMaxIOSize(6, 2, 2, 0)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.BATH)

 event.create('wanzi_automated_culture_system')//配方：万子培养机
      .category('wanzi_automated_culture_system')
      .setEUIO('in')
      .setMaxIOSize(1, 6, 1, 6)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.BATH)
 
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
       .setMaxIOSize(8,4,4,2)
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
       .setSlotOverlay(false, false, GuiTextures.BEAKER_OVERLAY_4)
       .setSound(GTSoundEntries.BATH)
       .setMaxTooltips(5)

  event.create('bigger_wanzi_processor')//配方：大型万子处理
       .category('liquid_magic_generator')
       .setEUIO('in') 
       .setMaxIOSize(9,9,9,9)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSlotOverlay(false, false, GuiTextures.BEAKER_OVERLAY_4)
       .setSound(GTSoundEntries.BATH)
       .setMaxTooltips(5)

  event.create('bigger_wanzi_alloy_smelter')//配方：大型万子合金熔炼
       .category('wanzi_alloy_smelter')
       .setEUIO('in') 
       .setMaxIOSize(15,15,6,6)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSlotOverlay(false, false, GuiTextures.BEAKER_OVERLAY_4)
       .setSlotOverlay(false, true, GuiTextures.BEAKER_OVERLAY_3)
       .setSound(GTSoundEntries.MIXER)
       .setMaxTooltips(5)

 event.create('bigger_wanzi_electrolyzer_over')//配方：大型万子电解
       .category('bigger_wanzi_electrolyzer_over')
       .setEUIO('in') 
       .setMaxIOSize(3,15,3,15)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSlotOverlay(false, true, GuiTextures.BEAKER_OVERLAY_3)
       .setSound(GTSoundEntries.MIXER)
       .setMaxTooltips(5)

 event.create('bigger_wanzi_assembler_plan')//配方：大型万子组装
      .category('bigger_wanzi_assembler_plan')
      .setEUIO('in') 
      .setMaxIOSize(15,6,15,6)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSlotOverlay(false, true, GuiTextures.BEAKER_OVERLAY_3)
      .setSound(GTSoundEntries.MIXER)
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
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
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

  event.create('bigger_wanzi_alloy_smelter_factory', 'multiblock')//大型万子合金熔炼场
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('bigger_wanzi_alloy_smelter')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('####AAA####','####BCB####','####BCB####','####BCB####','####BCB####','####BCB####','####BBB####')
       .aisle('##AAAAAAA##','##BCBDBCB##','##BCBBBCB##','##BCBGBCB##','##BCBBBCB##','##BCBDBCB##','##BBBBBBB##')
       .aisle('#AAAAAAAAA#','#BBEDDDEBB#','#BBBFBFBBB#','#BBEGGGEBB#','#BBBHBHBBB#','#BBEDDDEBB#','#BBBBBBBBB#')
       .aisle('#AAAAAAAAA#','#CEDDDDDEC#','#CBBFBFBBC#','#CEGGGGGEC#','#CBBHBHBBC#','#CEDDDDDEC#','#BBBBBBBBB#')
       .aisle('AAAAAAAAAAA','BBDDEDEDDBB','BBFFEBEFFBB','BBGGEGEGGBB','BBHHEBEHHBB','BBDDEDEDDBB','BBBBBBBBBBB')
       .aisle('AAAAAAAAAAA','CDDDDDDDDDC','CBBBEBEBBBC','CGGGGGGGGGC','CBBBEBEBBBC','CDDDDDDDDDC','BBBBBBBBBBB')
       .aisle('AAAAAAAAAAA','BBDDEDEDDBB','BBFFEBEFFBB','BBGGEGEGGBB','BBHHEBEHHBB','BBDDEDEDDBB','BBBBBBBBBBB')
       .aisle('#AAAAAAAAA#','#CEDDDDDEC#','#CBBFBFBBC#','#CEGGGGGEC#','#CBBHBHBBC#','#CEDDDDDEC#','#BBBBBBBBB#')
       .aisle('#AAAAAAAAA#','#BBEDDDEBB#','#BBBFBFBBB#','#BBEGGGEBB#','#BBBHBHBBB#','#BBEDDDEBB#','#BBBBBBBBB#')
       .aisle('##AAAAAAA##','##BCBDBCB##','##BCBBBCB##','##BCBGBCB##','##BCBBBCB##','##BCBDBCB##','##BBBBBBB##')
       .aisle('####AKA####','####BCB####','####BCB####','####BCB####','####BCB####','####BCB####','####BPB####')
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('gtceu:titanium_firebox_casing'))
       .where('B',Predicates.blocks('gtceu:stable_machine_casing')
           .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('C',Predicates.blocks('gtceu:nichrome_coil_block'))
       .where('D',Predicates.blocks('gtceu:flt'))
       .where('E',Predicates.blocks('gtceu:titanium_gearbox'))
       .where('F',Predicates.blocks('gtceu:waw_frame'))
       .where('G',Predicates.blocks('gtceu:waw'))
       .where('H',Predicates.blocks('gtceu:flt_frame'))
       .where('P',Predicates.abilities(PartAbility.MAINTENANCE))
       .where('#',Predicates.any())
       .build())
       .workableCasingModel('gtceu:block/casings/solid/machine_casing_stable_titanium',"gtceu:block/machines/basic_model_wanzi_condenser")

  event.create('bigger_wanzi_electrolyzer', 'multiblock')//大型万子电解机
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('bigger_wanzi_electrolyzer_over')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('AAA','AAA','AAA','AAA','AAA')
       .aisle('AAA','ABA','ACA','ADA','AAA')
       .aisle('AKA','AAA','AAA','AAA','AEA')
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('gtceu:clean_machine_casing')
           .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('gtceu:waw'))
       .where('C',Predicates.blocks('gtceu:stainless_steel_gearbox'))
       .where('D',Predicates.blocks('gtceu:flt'))
       .where('E',Predicates.abilities(PartAbility.MAINTENANCE))
       .build())
       .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel',"gtceu:block/machines/basic_model_wanzi_electrolyzer")

  event.create('bigger_wanzi_assembler', 'multiblock')//大型万子组装机
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('bigger_wanzi_assembler_plan')
       .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
       .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
       .generator(false)
       .regressWhenWaiting(false)
       .pattern(definition => FactoryBlockPattern.start()
       .aisle('AAAAAAAAAA','AAGGGGGGAA','AAGGGGGGAA','AAAAAAAAAA')
       .aisle('GAAAAAAAAG','GFFFFFFFFG','GBBBBBBBBG','GAAAAAAAAG')
       .aisle('GBBABBABBG','G###BB###G','G###BB###G','GAAAAAAAAG')
       .aisle('GBAAAAAABG','GDDDDDDDDG','GDDCCCCDDG','GAAAAAAAAG')
       .aisle('AAAAAAAAAA','ADDCCCCDDA','ACCCCCCCCA','**********')
       .aisle('AAAAKEAAAA','ACCC**CCCA','**********','**********')
       .where('K',Predicates.controller(Predicates.blocks(definition.get())))
       .where('A',Predicates.blocks('gtceu:clean_machine_casing'))
       .where('G',Predicates.blocks('gtceu:clean_machine_casing')
           .or(Predicates.autoAbilities(definition.getRecipeTypes())))
       .where('B',Predicates.blocks('gtceu:stainless_steel_gearbox'))
       .where('C',Predicates.blocks('gtceu:cleanroom_glass'))
       .where('D',Predicates.blocks('gtceu:tempered_glass'))
       .where('F',Predicates.blocks('gtceu:steel_pipe_casing'))
       .where('E',Predicates.abilities(PartAbility.MAINTENANCE))
       .where('#',Predicates.air())
       .where('*',Predicates.any())
       .build())
       .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel',"gtceu:block/machines/basic_model_wanzi_electrolyzer")
         
//////////////////////////////////////以下为单方块机器////////////////////////////////////////////////

  event.create('basic_model_wanzi_condenser', 'simple')//万子凝练机
       .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
       .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_condenser')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_condenser')
          );
  event.create('basic_model_wanzi_processor', 'simple')//万子处理机
       .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
       .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_processor')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_processor')
          );
  event.create('basic_model_wanzi_etching_machine', 'simple')//万子蚀刻机
       .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
       .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_etching_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_etching_machine')
          );
  event.create('basic_model_wanzi_phase_change_machine', 'simple')//万子相变机
       .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
       .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_phase_change_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_phase_change_machine')
          );
  event.create('basic_model_wanzi_mining_machine', 'simple')//万子采矿机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_mining_machine')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_mining_machine')
          );
  event.create('basic_wanzi_assembler', 'simple')//万子组装厂
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_wanzi_assembler')
              .workableTieredHullModel('gtceu:block/machines/basic_wanzi_assembler')
          );
  event.create('basic_model_wanzi_compressor', 'simple')//万子压缩机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_compressor')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_compressor')
          );
  event.create('basic_model_wanzi_disassembler', 'simple')//万子拆解机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_disassembler')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_disassembler')
          );
  event.create('basic_model_wanzi_purifier', 'simple')//万子净化机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_purifier')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_purifier')
          );
  event.create('basic_model_wanzi_electronics_assembler', 'simple')//万子电路组装机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('basic_model_wanzi_electronics_assembler')
              .workableTieredHullModel('gtceu:block/machines/basic_model_wanzi_electronics_assembler')
          );
  event.create('wanzi_automated_culture_system', 'simple')//万子培养机
      .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
      .definition((tier, builder) =>
          builder
              .rotationState(RotationState.NON_Y_AXIS)
              .recipeType('wanzi_automated_culture_system')
              .workableTieredHullModel('gtceu:block/machines/wanzi_automated_culture_system')
          );

///////////////动力仓////////////

    event.create("energy_output_hatch_4a", "custom")
        .tiers(GTValues.LV, GTValues.MV,GTValues.HV)
        .machine((holder, tier, amperage) => {
            //public EnergyHatchPartMachine(IMachineBlockEntity holder, int tier, IO io, int amperage, Object... args)
            // amperage 即电流大小
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 4);//传回
        })
        .definition((tier, builder) => {
            let tierName;
            switch (tier) {
                case GTValues.LV: tierName = "LV"; break;
                case GTValues.MV: tierName = "MV"; break;
                case GTValues.HV: tierName = "HV"; break;
            }
 
            builder
                .langValue("4A"+ "Wanzi" + tierName +"Energy Output Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.OUTPUT_ENERGY)//标记为能量输出能力
                .workableTieredHullModel('gtceu:block/machines/4a_energy_output')  //工作方块模型
  })

    event.create("energy_output_hatch_16a", "custom")
      .tiers(GTValues.LV, GTValues.MV)
      .machine((holder, tier, amperage) => {
          //public EnergyHatchPartMachine(IMachineBlockEntity holder, int tier, IO io, int amperage, Object... args)
          // amperage 即电流大小
          return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 16);//传回
      })
      .definition((tier, builder) => {
          let tierName;
          switch (tier) {
              case GTValues.LV: tierName = "LV"; break;
              case GTValues.MV: tierName = "MV"; break;
          }

          builder
              .langValue("16A"+ "Wanzi" + tierName +"Energy Output Hatch")
              .rotationState(RotationState.ALL)
              .abilities(PartAbility.OUTPUT_ENERGY)//标记为能量输出能力
              .workableTieredHullModel('gtceu:block/machines/16a_energy_output')  //工作方块模型
})

  event.create("energy_output_hatch_64a", "custom")
      .tiers(GTValues.LV)
      .machine((holder, tier, amperage) => {
          return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 64);//传回
      })
      .definition((tier, builder) => {
          let tierName;
          switch (tier) {
              case GTValues.LV: tierName = "LV"; break;
          }

          builder
              .langValue("64A"+ "Wanzi" + tierName +"Energy Output Hatch")
              .rotationState(RotationState.ALL)
              .abilities(PartAbility.OUTPUT_ENERGY)//标记为能量输出能力
              .workableTieredHullModel('gtceu:block/machines/wanzi_automated_culture_system')  //工作方块模型
})

    //////////////能源仓/////////////
    event.create("energy_input_hatch_4a","custom")
        .tiers(GTValues.LV, GTValues.MV)
        .machine((holder, tier, amperage) => {
            //public EnergyHatchPartMachine(IMachineBlockEntity holder, int tier, IO io, int amperage, Object... args)
            // amperage 即电流大小
            return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 4);//传回
        })
        .definition((tier, builder) => {
            let tierName;
            switch (tier) {
                case GTValues.LV: tierName = "LV"; break;
                case GTValues.MV: tierName = "MV"; break;
            }
 
            builder
                .langValue("4A"+ "Wanzi" + tierName +"Energy Output Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.INPUT_ENERGY)//标记为能量输入能力
                .workableTieredHullModel('gtceu:block/machines/4a_energy_output')  //工作方块模型
  })

  event.create("energy_input_hatch_16a", "custom")
      .tiers(GTValues.LV,GTValues.MV)
      .machine((holder, tier, amperage) => {
          //public EnergyHatchPartMachine(IMachineBlockEntity holder, int tier, IO io, int amperage, Object... args)
          // amperage 即电流大小
          return new $EnergyHatchPartMachine(holder, tier, $IO.IN, 16);//传回
      })
      .definition((tier, builder) => {
          let tierName;
          switch (tier) {
              case GTValues.LV: tierName = "LV"; break;
              case GTValues.MV: tierName = "MV"; break;
          }

          builder
              .langValue("16A"+ "Wanzi" + tierName +"Energy Output Hatch")
              .rotationState(RotationState.ALL)
              .abilities(PartAbility.INPUT_ENERGY)//标记为能量输出能力
              .workableTieredHullModel('gtceu:block/machines/16a_energy_output')  //工作方块模型
})
});
