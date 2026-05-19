const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX] = GTValues.VA
// 注册机器配方类型
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {//注册一个新的多方块（大型蒸汽发电机）
  event.create('large_scale_steam_generator')//设置机器的名字
    .category('large_scale_steam_generator')//设置类型
    .setEUIO('out') //设置机器的能源输入/输出
    .setMaxIOSize(8, 0, 4, 2)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//设置机器运行时处理中的样子
    .setSound(GTSoundEntries.BATH)//设置机器运行时工作的声音
    .setMaxTooltips(5)//设置最大信息提示
})
// 注册机器方块
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('large_scale_steam_generator', 'multiblock')//注册为多方块
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType('large_scale_steam_generator')//使用的配方
    .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
    .pattern(definition => FactoryBlockPattern.start()
      .aisle('PPCPP', 'PCGCP', 'CCGCC', 'PCCCP', 'PPCPP')
      .aisle('PCCCP', 'C###C', 'C###C', 'C###C', 'PCCCP')
      .aisle('CCCCC', 'G#P#G', 'G#P#G', 'C#P#C', 'CCOCC')
      .aisle('PCCCP', 'C###C', 'C###C', 'C###C', 'PCCCP')
      .aisle('PPKPP', 'PCGCP', 'CCGCC', 'PCCCP', 'PPNPP')
      .where('K', Predicates.controller(Predicates.blocks(definition.get())))//给每个字符指定所需方块（此行为机器控制器）
      .where('G', Predicates.blocks('ae2:quartz_glass'))
      .where('P', Predicates.blocks('gtceu:bronze_block'))//某种意义上的外壳
      .where('C', Predicates.blocks('gtceu:firebricks')//外壳
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))//或者输入输出接口
      )
      .where('O', Predicates.abilities(PartAbility.MUFFLER)//消声器
        .setExactLimit(1)//限制数量
      )
      .where('N', Predicates.abilities(PartAbility.MAINTENANCE))//维护仓
      .where('#', Predicates.air())//空气
      .build()
              ).workableCasingRenderer('gtceu:block/casings/steam/bricked_bronze/bottom'
                                      ,'gtceu:block/multiblock/implosion_compressor'
                                      , false)//控制器材质，控制器正面样式
})          

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{//注册一个多方块配方（大型蒸汽发生机）
  event.create('large_steam_generator_machine')
       .category('large_steam_generator_machine')
       .setEUIO('in')
       .setMaxIOSize(2, 0, 1, 1)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.SUS_RECORD)
       .setMaxTooltips(5)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('large_steam_generator_machine','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)//多方块控制器不围绕Y轴旋转，即多方块正面不可以朝上或者朝下，这个可以多写，使多方块只能朝上或者朝下，也可以不写，让其自由飞翔
       .recipeType('large_steam_generator_machine')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
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
               ).workableCasingRenderer('gtceu:block/casings/steam/bricked_bronze/bottom',
                                        'gtceu:block/multiblock/implosion_compressor',
                                        false)//控制器材质，控制器正面样式
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{//注册一个多方块配方（基础型万子供电机）
  event.create('basic_model_wanzi_power_supply_machine_1')
       .category('basic_model_wanzi_power_supply_machine_1')
       .setEUIO('out')
       .setMaxIOSize(2, 1, 0, 0)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.SUS_RECORD)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('basic_model_wanzi_power_supply_machine','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)//多方块控制器不围绕Y轴旋转，即多方块正面不可以朝上或者朝下，这个可以多写，使多方块只能朝上或者朝下，也可以不写，让其自由飞翔
       .recipeType('basic_model_wanzi_power_supply_machine_1')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
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
               ).workableCasingRenderer('gtceu:block/machines/casing/prts/lv_front',
                                        'gtceu:block/machines/basic_model_wanzi_power_supply_machine',
                                        false)
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{//注册一个多方块配方（基础型万子电解机）
  event.create('basic_model_wanzi_electrolyzer_1')
       .category('basic_model_wanzi_electrolyzer_1')
       .setEUIO('in')
       .setMaxIOSize(4, 8, 2, 4)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{
  event.create('basic_model_wanzi_electrolyzer','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('basic_model_wanzi_electrolyzer_1')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
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
       .workableCasingRenderer('gtceu:block/machines/casing/prts/lv_front_1',
                               'gtceu:block/machines/basic_model_wanzi_electrolyzer',false
       )
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{//高速焦化机
  event.create('gaosujiaohuaji_1')
       .category('gaosujiaohuaji_1')
       .setEUIO('in')
       .setMaxIOSize(4,1,1,1)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{
  event.create('gaosujiaohuaji','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('gaosujiaohuaji_1')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
       .pattern(definition => FactoryBlockPattern.start()
               .aisle('*BBB*','*AAA*','*AAA*','*AAA*','*AAA*')
               .aisle('BAAAB','ACCCA','ACCCA','ACCCA','AAAAA')
               .aisle('BAAAB','ACCCA','AC#CA','ACCCA','AAOAA')
               .aisle('BAAAB','ACCCA','ACCCA','ACCCA','AAAAA')
               .aisle('*AKA*','*AAA*','*AAA*','*AAA*','*ASA*')
               .where('O', Predicates.abilities(PartAbility.MUFFLER)
                     .setExactLimit(1))
               .where('K', Predicates.controller(Predicates.blocks(definition.get())))
               .where('S', Predicates.abilities(PartAbility.MAINTENANCE))
               .where('*', Predicates.any())
               .where('#', Predicates.air())
               .where('A', Predicates.blocks('minecraft:stone_bricks'))
               .where('B', Predicates.blocks('minecraft:stone_bricks')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes())))
               .where('C', Predicates.blocks('minecraft:iron_block'))
               .build()
                )
       .workableCasingRenderer('gtceu:block/machines/casing/prts/lv_front',
                               'gtceu:block/machines/basic_model_wanzi_electrolyzer',false
       )
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{//超高速合金冶炼
  event.create('chaogaosuhejinyelian_1')
       .category('chaogaosuhejinyelian_1')
       .setEUIO('in')
       .setMaxIOSize(4,2,2,0)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{
  event.create('chaogaosuhejinyelian','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('chaogaosuhejinyelian_1')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
       .pattern(definition => FactoryBlockPattern.start()
               .aisle('BBBB######','#AAA######','#AAA######','AAAA######','##########','######AAAA','######AAA#','######AAA#','######AAAA')
               .aisle('BAAABBBBBB','AA*AA##AAA','AA*AA###AA','AA*AAA##AA','#AAAAAAAAA','###AAAA*AA','####AAA*AA','#####AA*AA','######AAAA')
               .aisle('BAAAAAAAAB','A***A###AA','A***A#####','A****A####','#AA***AAA#','###A*****A','####A****A','#####A***A','######AAOA')
               .aisle('BAAAABBBBB','AA*AA##AAA','AA*AA###AA','AA*AAA##AA','#AAAAAAAAA','###AAAA*AA','####AAA*AA','#####AA*AA','######AAAA')
               .aisle('BBBBKS####','#AAA######','#AAA######','AAAA######','##########','######AAAA','######AAA#','######AAA#','######AAAA')
               .where('O', Predicates.abilities(PartAbility.MUFFLER)
                     .setExactLimit(1))
               .where('K', Predicates.controller(Predicates.blocks(definition.get())))
               .where('S', Predicates.abilities(PartAbility.MAINTENANCE))
               .where('*', Predicates.air())
               .where('#', Predicates.any())
               .where('A', Predicates.blocks('minecraft:stone_bricks'))
               .where('B', Predicates.blocks('minecraft:stone_bricks')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes())))
               .build()
                )
       .workableCasingRenderer('gtceu:block/machines/casing/prts/lv_front',
                               'gtceu:block/machines/basic_model_wanzi_electrolyzer',false
       )
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{//指定性化学反应
  event.create('zhidingxinghuaxuefanying')
       .category('zhidingxinghuaxuefanying')
       .setEUIO('in')
       .setMaxIOSize(8,8,8,8)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{//万子化学异常催化厂
  event.create('wanzihuaxueyichangcuihuachang','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('zhidingxinghuaxuefanying')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
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
               .build()
                )
       .workableCasingRenderer('gtceu:block/machines/casing/prts/lv_front',
                               'gtceu:block/machines/basic_model_wanzi_electrolyzer',false
       )
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{//注册一个多方块配方（超高速矿物处理）
  event.create('super_kc')
       .category('super_kc')
       .setEUIO('in')
       .setMaxIOSize(1, 9, 1, 9)
       .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
       .setSound(GTSoundEntries.ELECTROLYZER)
       .setMaxTooltips(5)
})

GTCEuStartupEvents.registry('gtceu:machine', event=>{//超高速矿物处理厂
  event.create('super_kc_1','multiblock')
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('super_kc')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
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
               .build()
                )
       .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_heatproof',
                               'gtceu:block/machines/basic_model_wanzi_electrolyzer',false
       )
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {//魔魂生成机
  event.create('liquid_magic_generator')//设置机器的名字
    .category('liquid_magic_generator')//设置类型
    .setEUIO('in') 
    .setMaxIOSize(4,6,4,6)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
    .setMaxTooltips(5)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('liquid_magic_generator','multiblock')//（魔魂生成器）
       .rotationState(RotationState.NON_Y_AXIS)
       .recipeType('liquid_magic_generator')
       .appearanceBlock(GCyMBlocks.CASING_INDUSTRIAL_STEAM)
       .pattern(definition => FactoryBlockPattern.start()
                  .aisle('BBACABB','#B#E#B#','#B###B#','#B###B#','BBDDDBB','##FDF##','###F###','#######')
                  .aisle('BCADACB','BE###EB','B#####B','B#####B','B##C##B','#FFAFF#','###B###','#######')
                  .aisle('AAADAAA','#######','#######','#######','D##C##C','FFADAFF','###B###','#######')
                  .aisle('CDDDDDC','E#####E','#######','#######','DCCACCD','DADDDAD','FBBABBF','###P###')
                  .aisle('AAADAAA','#######','#######','#######','D##C##C','FFADAFF','###B###','#######')
                  .aisle('BCADACB','BE###EB','B#####B','B#####B','B##C##B','#FFAFF#','###B###','#######')
                  .aisle('BBAKABB','#B#E#B#','#B###B#','#B###B#','BBDDDBB','##FDF##','###F###','#######')
                  .where('K',Predicates.controller(Predicates.blocks(definition.get())))
                  .where('B',Predicates.blocks('botania:polished_livingrock_wall'))
                  .where('A',Predicates.blocks('botania:azulejo_5')
                      .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                  .where('C',Predicates.blocks('botania:azulejo_2'))
                  .where('D',Predicates.blocks('botania:mana_diamond_block'))
                  .where('E',Predicates.blocks('botania:mana_pylon'))
                  .where('F',Predicates.blocks('botania:livingrock_stairs'))
                  .where('P',Predicates.blocks('botania:natura_pylon'))
                  .where('#',Predicates.any())
                  .build()
               ).workableCasingRenderer('gtceu:block/casings/mechanic/machine_casing_turbine_stainless_steel',
                                        'gtceu:block/multiblock/implosion_compressor',
                                        false)//控制器材质，控制器正面样式
})
//////////////////////////////////////以下为单方块机器////////////////////////////////////////////////
GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_condenser')//设置机器的名字（基础型万子凝练机）
    .category('basic_model_wanzi_condenser')//设置类型
    .setEUIO('in') //设置机器的能源输入/输出
    .setMaxIOSize(2, 1, 0, 0)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)//设置机器的背面带有覆盖版
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//设置机器运行时处理中的样子
    .setSound(GTSoundEntries.BATH)//设置机器运行时工作的声音
})
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_condenser','simple',GTValues.LV,GTValues.MV,GTValues.HV)//名字和配方类型相同、单方块、机器电压
       .recipeType('basic_model_wanzi_condenser',true,true)//显示的配方类型名字（同时也作为可用的配方）
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_condenser')//设置机器材质
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_processor','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_processor',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_processor')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_etching_machine','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_etching_machine',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_etching_machine')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_phase_change_machine','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_phase_change_machine',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_phase_change_machine')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_mining_machine','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_mining_machine',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_mining_machine')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_wanzi_assembler','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_wanzi_assembler',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_wanzi_assembler')
})

GTCEuStartupEvents.registry('gtceu:recipe_type',event=>{
  event.create('basic_model_wanzi_compressor')//设置机器的名字(基础型万子压缩器)
    .category('basic_model_wanzi_compressor')
    .setEUIO('in') 
    .setMaxIOSize(6, 3, 4, 1)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_compressor','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_compressor',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_compressor')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_disassembler','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_disassembler',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_disassembler')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_purifier','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_purifier',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_purifier')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('basic_model_wanzi_electronics_assembler','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('basic_model_wanzi_electronics_assembler',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/basic_model_wanzi_electronics_assembler')
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
GTCEuStartupEvents.registry('gtceu:machine',event=>{
  event.create('wanzi_automated_culture_system','simple',GTValues.LV,GTValues.MV,GTValues.HV)
       .recipeType('wanzi_automated_culture_system',true,true)
       .workableTieredHullRenderer('gtceu:block/machines/wanzi_automated_culture_system')
})
