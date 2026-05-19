const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
GTCEuStartupEvents.registry('gtceu:element', event => {
    // 参数1：名称 - string
    // 参数2：质子数量 - number
    // 参数3：中子数量 - number
    // 参数4：半衰期（秒）- number - 设为 -1 时没有半衰期
    // 参数5：衰变后的元素 - string | null
    // 参数6：符号 - string
    // 参数7：是否为同位素 - boolean
    event.create('waw', 80, 62, -1, null, 'Wa', false)
})

GTCEuStartupEvents.registry('gtceu:material', e => {
    // 一些东西不在全局变量中，你需要使用 Java.loadClass() 获取它们的引用

     
    // 注册材料，create() 方法将返回 com.gregtechceu.gtceu.api.data.chemical.material.Material$Builder
    // 这个东西 ProbeJS 没有任何提示，这些方法都是我看源码找到的
    e.create('waw')
        // 主要颜色
        .color(0x5b444e)
        // 次要颜色
        .secondaryColor(0x2e4352)
        // 为此材料添加锭
        .ingot()
        // 为此材料添加流体（液体、气体、等离子体），以及流体属性（此处是温度）
        // 如果你想要为流体指定温度等属性，只能这样写，虽然看起来很丑
        // 如果你只是想单纯地添加流体，只需要 fluid() 即可
        // 同样地，想要单纯地添加气体、液体、等离子体，使用 gas()、liquid()、plasma()
        //['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(100000))
        .fluid()
        // 指定此材料的物品图标样式
        .iconSet(GTMaterialIconSet.DULL)
        // 材料标记，指定此材料可以制作哪些零件
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_SPRING
        )
        // 此材料的构成元素
        .element(GTElements.get('waw'))
        // 如果此材料可以制作导线
        // 参数1：电压 - number
        // 参数2：电流 - number
        // 参数3：损耗 - number
        // 参数4：是否为超导体 - boolean
        // 参数5（可省略）：临界温度 - number
        .cableProperties(GTValues.V[GTValues.MV], 8, 0, true)
        // 此材料的工具属性
        // 参数1：工具属性 - ToolProperty
        // ToolProperty 构造函数：
        // 参数1：挖掘速度 - number
        // 参数2：攻击伤害 - number
        // 参数3：耐久 - number
        // 参数4：挖掘等级 - number
        // 参数5：工具类型 - GTToolType[]
        //.toolStats(new ToolProperty(144, 114, 80000, 6, [GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD]))
})