const PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

GTCEuStartupEvents.registry('gtceu:material', event => {//材料
    event.create('waw')
    .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1000).block())
   
    // 主要颜色
    .color(0x5b444e)
    // 次要颜色
    .secondaryColor(0x2e4352)
    .element('waw')
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING,
        GTMaterialFlags.GENERATE_ROUND
    )
    .cableProperties(128, 8, 0, true)

    event.create('flt')
    .ingot()
    ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1500).block())
   
    // 主要颜色
    .color(0xbc0707)
    // 次要颜色
    .secondaryColor(0x0725bb)
    .element('flt')
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_SPRING,
        GTMaterialFlags.GENERATE_ROUND
    )
    .cableProperties(512, 8, 0, true)
})

GTCEuStartupEvents.registry('gtceu:element', event => {//元素
    event.create("waw")//瓦拉帕斯
         //定义id    String
         .protons(8)
         //质子数    long
         .neutrons(2)
         //中子数    long
         .halfLifeSeconds(-1)
         //半衰期，-1表示该物质不能衰变    long
         .decayTo(null)
         //是否能够衰变？ null为该物质不能衰变    String
         .symbol('waw')
         //该元素的符号    String
         .isIsotope(false)
         //该元素是否为某元素的同位素？    boolean

    event.create('flt')//菲利特瓦
         .protons(15)
         .neutrons(6)
         .halfLifeSeconds(-1)
         .decayTo(null)
         .symbol('flt')
         .isIsotope(false) 
 })