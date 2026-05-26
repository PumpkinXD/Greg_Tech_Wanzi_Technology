ServerEvents.recipes((event) => {
    const kc = event.recipes.gtceu.super_kc

    kc('gold_1')
    .itemInputs('#forge:ores/gold')
    .itemOutputs('48x gtceu:gold_dust','16x gtceu:copper_dust','16x gtceu:nickel_dust','16x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//粗金矿高速处理
    kc('gold_2')
    .itemInputs('minecraft:raw_gold')
    .itemOutputs('36x gtceu:gold_dust','12x gtceu:copper_dust','12x gtceu:nickel_dust','12x gtceu:silver_dust')
    .duration(20)
    .EUt(20)//粗金高速处理
    kc('gold_3')
    .itemInputs('gtceu:crushed_gold_ore')
    .itemOutputs('18x gtceu:gold_dust','6x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:silver_dust')
    .duration(20)
    .EUt(20)//粉碎金矿石高速处理
    kc('gold_4')
    .itemInputs('gtceu:purified_gold_ore')
    .itemOutputs('18x gtceu:gold_dust','6x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:silver_dust')
    .duration(20)
    .EUt(20)//纯净金矿石高速处理
    kc('gold_5')
    .itemInputs('gtceu:refined_gold_ore')
    .itemOutputs('18x gtceu:gold_dust','6x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:silver_dust')
    .duration(20)
    .EUt(20)//精炼金矿石高速处理

    kc('iron_1')
    .itemInputs('#forge:ores/iron')
    .itemOutputs('48x gtceu:iron_dust','24x gtceu:tin_dust','24x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗铁矿高速处理
    kc('iron_2')
    .itemInputs('minecraft:raw_iron')
    .itemOutputs('36x gtceu:iron_dust','18x gtceu:tin_dust','18x gtceu:nickel_dust')
    .duration(20)
    .EUt(20)//粗铁高速处理
    kc('iron_3')
    .itemInputs('gtceu:crushed_iron_ore')
    .itemOutputs('18x gtceu:iron_dust','9x gtceu:tin_dust','9x gtceu:nickel_dust')
    .duration(20)
    .EUt(20)//粉碎铁矿石高速处理
    kc('iron_4')
    .itemInputs('gtceu:purified_iron_ore')
    .itemOutputs('18x gtceu:iron_dust','9x gtceu:tin_dust','9x gtceu:nickel_dust')
    .duration(20)
    .EUt(20)//纯净铁矿石高速处理
    kc('iron_5')
    .itemInputs('gtceu:refined_iron_ore')
    .itemOutputs('18x gtceu:iron_dust','9x gtceu:tin_dust','9x gtceu:nickel_dust')
    .duration(20)
    .EUt(20)//精炼铁矿石高速处理

    kc('raw_almandine_1')
    .itemInputs('#forge:ores/almandine')
    .itemOutputs('120x gtceu:almandine_dust','60x gtceu:red_garnet_dust','60x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗铁铝榴石矿高速处理
    kc('raw_almandine_2')
    .itemInputs('gtceu:raw_almandine')
    .itemOutputs('96x gtceu:almandine_dust','48x gtceu:red_garnet_dust','48x gtceu:aluminium_dust')
    .duration(20)
    .EUt(20)//粗铁铝榴石高速处理
    kc('raw_almandine_3')
    .itemInputs('gtceu:crushed_almandine_ore')
    .itemOutputs('16x gtceu:almandine_dust','8x gtceu:red_garnet_dust','8x gtceu:aluminium_dust')
    .duration(20)
    .EUt(20)//粉碎铁铝榴石矿石高速处理
    kc('raw_almandine_4')
    .itemInputs('gtceu:purified_almandine_ore')
    .itemOutputs('16x gtceu:almandine_dust','8x gtceu:red_garnet_dust','8x gtceu:aluminium_dust')
    .duration(20)
    .EUt(20)//纯净铁铝榴石矿石高速处理
    kc('raw_almandine_5')
    .itemInputs('gtceu:refined_almandine_ore')
    .itemOutputs('16x gtceu:almandine_dust','8x gtceu:red_garnet_dust','8x gtceu:aluminium_dust')
    .duration(20)
    .EUt(20)//精炼铁铝榴石矿石高速处理

    kc('prts:crushed_aluminium_ore_1')
    .itemInputs('#forge:ores/aluminium')
    .itemOutputs('48x gtceu:aluminium_dust','24x gtceu:ilmenite_dust','24x gtceu:bauxite_dust')
    .duration(20)
    .EUt(16)//粗铝矿高速处理
    kc('prts:crushed_aluminium_ore_2')
    .itemInputs('gtceu:raw_aluminium')
    .itemOutputs('36x gtceu:aluminium_dust','18x gtceu:ilmenite_dust','18x gtceu:bauxite_dust')
    .duration(20)
    .EUt(16)//粗铝高速处理
    kc('prts:crushed_aluminium_ore_3')
    .itemInputs('gtceu:crushed_aluminium_ore')
    .itemOutputs('18x gtceu:aluminium_dust','9x gtceu:ilmenite_dust','9x gtceu:bauxite_dust')
    .duration(20)
    .EUt(16)//粉碎铝矿石高速处理
    kc('prts:crushed_aluminium_ore_4')
    .itemInputs('gtceu:purified_aluminium_ore')
    .itemOutputs('18x gtceu:aluminium_dust','9x gtceu:ilmenite_dust','9x gtceu:bauxite_dust')
    .duration(20)
    .EUt(16)//纯净铝矿石高速处理
    kc('prts:crushed_aluminium_ore_5')
    .itemInputs('gtceu:refined_aluminium_ore')
    .itemOutputs('18x gtceu:aluminium_dust','9x gtceu:ilmenite_dust','9x gtceu:bauxite_dust')
    .duration(20)
    .EUt(16)//精炼铝矿石高速处理

    kc('prts:crushed_beryllium_ore_1')
    .itemInputs('#forge:ores/beryllium')
    .itemOutputs('48x gtceu:beryllium_dust','24x gtceu:thorium_dust','24x gtceu:emerald_dust')
    .duration(20)
    .EUt(16)//粗铍矿高速处理
    kc('prts:crushed_beryllium_ore_2')
    .itemInputs('gtceu:raw_beryllium')
    .itemOutputs('36x gtceu:beryllium_dust','18x gtceu:thorium_dust','18x gtceu:emerald_dust')
    .duration(20)
    .EUt(16)//粗铍高速处理
    kc('prts:crushed_beryllium_ore_3')
    .itemInputs('gtceu:crushed_beryllium_ore')
    .itemOutputs('18x gtceu:beryllium_dust','9x gtceu:thorium_dust','9x gtceu:emerald_dust')
    .duration(20)
    .EUt(16)//粉碎铍矿石高速处理
    kc('prts:crushed_beryllium_ore_4')
    .itemInputs('gtceu:purified_beryllium_ore')
    .itemOutputs('18x gtceu:beryllium_dust','9x gtceu:thorium_dust','9x gtceu:emerald_dust')
    .duration(20)
    .EUt(16)//纯净铍矿石高速处理
    kc('prts:crushed_beryllium_ore_5')
    .itemInputs('gtceu:refined_beryllium_ore')
    .itemOutputs('18x gtceu:beryllium_dust','9x gtceu:thorium_dust','9x gtceu:emerald_dust')
    .duration(20)
    .EUt(16)//精炼铍矿石高速处理

    kc('prts:crushed_cobalt_ore_1')
    .itemInputs('#forge:ores/cobalt')
    .itemOutputs('48x gtceu:cobalt_dust','24x gtceu:cobaltite_dust','24x gtceu:cobalt_oxide_dust')
    .duration(20)
    .EUt(16)//粗钴矿高速处理
    kc('prts:crushed_cobalt_ore_2')
    .itemInputs('gtceu:raw_cobalt')
    .itemOutputs('36x gtceu:cobalt_dust','18x gtceu:cobaltite_dust','18x gtceu:cobalt_oxide_dust')
    .EUt(16)//粗钴高速处理
    kc('prts:crushed_cobalt_ore_3')
    .itemInputs('gtceu:crushed_cobalt_ore')
    .itemOutputs('18x gtceu:cobalt_dust','9x gtceu:cobaltite_dust','9x gtceu:cobalt_oxide_dust')
    .duration(20)
    .EUt(16)//粉碎钴矿石高速处理
    kc('prts:crushed_cobalt_ore_4')
    .itemInputs('gtceu:purified_cobalt_ore')
    .itemOutputs('18x gtceu:cobalt_dust','9x gtceu:cobaltite_dust','9x gtceu:cobalt_oxide_dust')
    .duration(20)
    .EUt(16)//纯净钴矿石高速处理
    kc('prts:crushed_cobalt_ore_5')
    .itemInputs('gtceu:refined_cobalt_ore')
    .itemOutputs('18x gtceu:cobalt_dust','9x gtceu:cobaltite_dust','9x gtceu:cobalt_oxide_dust')
    .duration(20)
    .EUt(16)//精炼钴矿石高速处理

    kc('prts:crushed_copper_ore_1')
    .itemInputs('#forge:ores/copper')
    .itemOutputs('48x gtceu:copper_dust','16x gtceu:nickel_dust','16x gtceu:gold_dust','16x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粗铜矿高速处理
    kc('prts:crushed_copper_ore_2')
    .itemInputs('minecraft:raw_copper')
    .itemOutputs('36x gtceu:copper_dust','12x gtceu:nickel_dust','12x gtceu:gold_dust','12x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粗铜高速处理
    kc('prts:crushed_copper_ore_3')
    .itemInputs('gtceu:crushed_copper_ore')
    .itemOutputs('18x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:gold_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粉碎铜矿石高速处理
    kc('prts:crushed_copper_ore_4')
    .itemInputs('gtceu:purified_copper_ore')
    .itemOutputs('18x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:gold_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//纯净铜矿石高速处理
    kc('prts:crushed_copper_ore_5')
    .itemInputs('gtceu:refined_copper_ore')
    .itemOutputs('18x gtceu:copper_dust','6x gtceu:nickel_dust','6x gtceu:gold_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//精炼铜矿石高速处理

    kc('prts:crushed_lead_ore_1')
    .itemInputs('#forge:ores/lead')
    .itemOutputs('48x gtceu:lead_dust','24x gtceu:sulfur_dust','24x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//粗铅矿高速处理
    kc('prts:crushed_lead_ore_2')
    .itemInputs('gtceu:raw_lead')
    .itemOutputs('36x gtceu:lead_dust','18x gtceu:sulfur_dust','18x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//粗铅高速处理
    kc('prts:crushed_lead_ore_3')
    .itemInputs('gtceu:crushed_lead_ore')
    .itemOutputs('18x gtceu:lead_dust','9x gtceu:sulfur_dust','9x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//粉碎铅矿石高速处理
    kc('prts:crushed_lead_ore_4')
    .itemInputs('gtceu:purified_lead_ore')
    .itemOutputs('18x gtceu:lead_dust','9x gtceu:sulfur_dust','9x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//纯净铅矿石高速处理
    kc('prts:crushed_lead_ore_5')
    .itemInputs('gtceu:refined_lead_ore')
    .itemOutputs('18x gtceu:lead_dust','9x gtceu:sulfur_dust','9x gtceu:silver_dust')
    .duration(20)
    .EUt(16)//精炼铅矿石高速处理

    kc('prts:crushed_plutonium_ore_1')
    .itemInputs('#forge:ores/plutonium')
    .itemOutputs('48x gtceu:plutonium_dust','24x gtceu:lead_dust','24x gtceu:uraninite_dust')
    .duration(20)
    .EUt(16)//粗钚矿高速处理
    kc('prts:crushed_plutonium_ore_2')
    .itemInputs('gtceu:raw_plutonium')
    .itemOutputs('36x gtceu:plutonium_dust','18x gtceu:lead_dust','18x gtceu:uraninite_dust')
    .duration(20)
    .EUt(16)//粗钚高速处理
    kc('prts:crushed_plutonium_ore_3')
    .itemInputs('gtceu:crushed_plutonium_ore')
    .itemOutputs('18x gtceu:plutonium_dust','9x gtceu:lead_dust','9x gtceu:uraninite_dust')
    .duration(20)
    .EUt(16)//粉碎钚矿石高速处理
    kc('prts:crushed_plutonium_ore_4')
    .itemInputs('gtceu:purified_plutonium_ore')
    .itemOutputs('18x gtceu:plutonium_dust','9x gtceu:lead_dust','9x gtceu:uraninite_dust')
    .duration(20)
    .EUt(16)//纯净钚矿石高速处理
    kc('prts:crushed_plutonium_ore_5')
    .itemInputs('gtceu:refined_plutonium_ore')
    .itemOutputs('18x gtceu:plutonium_dust','9x gtceu:lead_dust','9x gtceu:uraninite_dust')
    .duration(20)
    .EUt(16)//精炼钚矿石高速处理

    kc('prts:crushed_platinum_ore_1')
    .itemInputs('#forge:ores/platinum')
    .itemOutputs('48x gtceu:platinum_dust','12x gtceu:cobalt_dust','36x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗铂矿高速处理
    kc('prts:crushed_platinum_ore_2')
    .itemInputs('gtceu:raw_platinum')
    .itemOutputs('36x gtceu:platinum_dust','8x gtceu:cobalt_dust','28x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗铂高速处理
    kc('prts:crushed_platinum_ore_3')
    .itemInputs('gtceu:crushed_platinum_ore')
    .itemOutputs('18x gtceu:platinum_dust','4x gtceu:cobalt_dust','14x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粉碎铂矿石高速处理
    kc('prts:crushed_platinum_ore_4')
    .itemInputs('gtceu:purified_platinum_ore')
    .itemOutputs('18x gtceu:platinum_dust','4x gtceu:cobalt_dust','14x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//纯净铂矿石高速处理
    kc('prts:crushed_platinumore_5')
    .itemInputs('gtceu:refined_platinum_ore')
    .itemOutputs('18x gtceu:platinum_dust','4x gtceu:cobalt_dust','14x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//精炼铂矿石高速处理

    kc('prts:crushed_palladium_ore_1')
    .itemInputs('#forge:ores/palladium')
    .itemOutputs('96x gtceu:palladium_dust')
    .duration(20)
    .EUt(16)//粗钯矿高速处理
    kc('prts:crushed_palladium_ore_2')
    .itemInputs('gtceu:raw_palladium')
    .itemOutputs('72x gtceu:palladium_dust')
    .duration(20)
    .EUt(16)//粗钯高速处理
    kc('prts:crushed_palladium_ore_3')
    .itemInputs('gtceu:crushed_palladium_ore')
    .itemOutputs('36x gtceu:palladium_dust')
    .duration(20)
    .EUt(16)//粉碎钯矿石高速处理
    kc('prts:crushed_palladium_ore_4')
    .itemInputs('gtceu:purified_palladium_ore')
    .itemOutputs('36x gtceu:palladium_dust')
    .duration(20)
    .EUt(16)//纯净钯矿石高速处理
    kc('prts:crushed_palladium_ore_5')
    .itemInputs('gtceu:refined_palladium_ore')
    .itemOutputs('36x gtceu:palladium_dust')
    .duration(20)
    .EUt(16)//精炼钯矿石高速处理

    kc('prts:crushed_nickel_ore_1')
    .itemInputs('#forge:ores/nickel')
    .itemOutputs('48x gtceu:nickel_dust','16x gtceu:platinum_dust','16x gtceu:iron_dust','16x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粗镍矿高速处理
    kc('prts:crushed_nickel_ore_2')
    .itemInputs('gtceu:raw_nickel')
    .itemOutputs('36x gtceu:nickel_dust','12x gtceu:platinum_dust','12x gtceu:iron_dust','12x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粗镍高速处理
    kc('prts:crushed_nickel_ore_3')
    .itemInputs('gtceu:crushed_nickel_ore')
    .itemOutputs('18x gtceu:nickel_dust','6x gtceu:platinum_dust','6x gtceu:iron_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//粉碎镍矿石高速处理
    kc('prts:crushed_nickel_ore_4')
    .itemInputs('gtceu:purified_nickel_ore')
    .itemOutputs('18x gtceu:nickel_dust','6x gtceu:platinum_dust','6x gtceu:iron_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//纯净镍矿石高速处理
    kc('prts:crushed_nickel_ore_5')
    .itemInputs('gtceu:refined_nickel_ore')
    .itemOutputs('18x gtceu:nickel_dust','6x gtceu:platinum_dust','6x gtceu:iron_dust','6x gtceu:cobalt_dust')
    .duration(20)
    .EUt(16)//精炼镍矿石高速处理
    
    kc('prts:crushed_neodymium_ore_1')
    .itemInputs('#forge:ores/neodymium')
    .itemOutputs('48x gtceu:neodymium_dust','48x gtceu:rare_earth_dust')
    .duration(20)
    .EUt(16)//粗钕矿高速处理
    kc('prts:crushed_neodymium_ore_2')
    .itemInputs('gtceu:raw_neodymium')
    .itemOutputs('36x gtceu:neodymium_dust','36x gtceu:rare_earth_dust')
    .duration(20)
    .EUt(16)//粗钕高速处理
    kc('prts:crushed_neodymium_ore_3')
    .itemInputs('gtceu:crushed_neodymium_ore')
    .itemOutputs('18x gtceu:neodymium_dust','18x gtceu:rare_earth_dust')
    .duration(20)
    .EUt(16)//粉碎钕矿石高速处理
    kc('prts:crushed_neodymium_ore_4')
    .itemInputs('gtceu:purified_neodymium_ore')
    .itemOutputs('18x gtceu:neodymium_dust','18x gtceu:rare_earth_dust')
    .duration(20)
    .EUt(16)//纯净钕矿石高速处理
    kc('prts:crushed_neodymium_ore_5')
    .itemInputs('gtceu:refined_neodymium_ore')
    .itemOutputs('18x gtceu:neodymium_dust','18x gtceu:rare_earth_dust')
    .duration(20)
    .EUt(16)//精炼钕矿石高速处理

    kc('prts:crushed_molybdenum_ore_1')
    .itemInputs('#forge:ores/molybdenum')
    .itemOutputs('96x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粗钼矿高速处理
    kc('prts:crushed_molybdenum_ore_2')
    .itemInputs('gtceu:raw_molybdenum')
    .itemOutputs('72x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粗钼高速处理
    kc('prts:crushed_molybdenum_ore_3')
    .itemInputs('gtceu:crushed_molybdenum_ore')
    .itemOutputs('36x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粉碎钼矿石高速处理
    kc('prts:crushed_molybdenum_ore_4')
    .itemInputs('gtceu:purified_molybdenum_ore')
    .itemOutputs('36x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//纯净钼矿石高速处理
    kc('prts:crushed_molybdenum_ore_5')
    .itemInputs('gtceu:refined_molybdenum_ore')
    .itemOutputs('36x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//精炼钼矿石高速处理

    kc('prts:crushed_lithium_ore_1')
    .itemInputs('#forge:ores/lithium')
    .itemOutputs('96x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粗锂矿高速处理
    kc('prts:crushed_lithium_ore_2')
    .itemInputs('gtceu:raw_lithium')
    .itemOutputs('72x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粗锂高速处理
    kc('prts:crushed_lithium_ore_3')
    .itemInputs('gtceu:crushed_lithium_ore')
    .itemOutputs('36x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粉碎锂矿石高速处理
    kc('prts:crushed_lithium_ore_4')
    .itemInputs('gtceu:purified_lithium_ore')
    .itemOutputs('36x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//纯净锂矿石高速处理
    kc('prts:crushed_lithium_ore_5')
    .itemInputs('gtceu:refined_lithium_ore')
    .itemOutputs('36x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//精炼锂矿石高速处理

    kc('prts:crushed_silver_ore_1')
    .itemInputs('#forge:ores/silver')
    .itemOutputs('48x gtceu:silver_dust','24x gtceu:sulfur_dust','24x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粗银矿高速处理
    kc('prts:crushed_silver_ore_2')
    .itemInputs('gtceu:raw_silver')
    .itemOutputs('36x gtceu:silver_dust','18x gtceu:sulfur_dust','18x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粗银高速处理
    kc('prts:crushed_silver_ore_3')
    .itemInputs('gtceu:crushed_silver_ore')
    .itemOutputs('18x gtceu:silver_dust','9x gtceu:sulfur_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粉碎银矿石高速处理
    kc('prts:crushed_silver_ore_4')
    .itemInputs('gtceu:purified_silver_ore')
    .itemOutputs('18x gtceu:silver_dust','9x gtceu:sulfur_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//纯净银矿石高速处理
    kc('prts:crushed_silver_ore_5')
    .itemInputs('gtceu:refined_silver_ore')
    .itemOutputs('18x gtceu:silver_dust','9x gtceu:sulfur_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//精炼银矿石高速处理

    kc('prts:crushed_sulfur_ore_1')
    .itemInputs('#forge:ores/sulfur')
    .itemOutputs('96x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗硫矿高速处理
    kc('prts:crushed_sulfur_ore_2')
    .itemInputs('gtceu:raw_sulfur')
    .itemOutputs('72x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗硫高速处理
    kc('prts:crushed_sulfur_ore_3')
    .itemInputs('gtceu:crushed_sulfur_ore')
    .itemOutputs('36x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎硫矿石高速处理
    kc('prts:crushed_sulfur_ore_4')
    .itemInputs('gtceu:purified_sulfur_ore')
    .itemOutputs('36x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净硫矿石高速处理
    kc('prts:crushed_sulfur_ore_5')
    .itemInputs('gtceu:refined_sulfur_ore')
    .itemOutputs('36x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼硫矿石高速处理

    kc('prts:crushed_thorium_ore_1')
    .itemInputs('#forge:ores/thorium')
    .itemOutputs('48x gtceu:thorium_dust','24x gtceu:uraninite_dust','24x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粗钍矿高速处理
    kc('prts:crushed_thorium_ore_2')
    .itemInputs('gtceu:raw_thorium')
    .itemOutputs('36x gtceu:thorium_dust','18x gtceu:uraninite_dust','18x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粗钍高速处理
    kc('prts:crushed_thorium_ore_3')
    .itemInputs('gtceu:crushed_thorium_ore')
    .itemOutputs('18x gtceu:thorium_dust','9x gtceu:uraninite_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//粉碎钍矿石高速处理
    kc('prts:crushed_thorium_ore_4')
    .itemInputs('gtceu:purified_thorium_ore')
    .itemOutputs('18x gtceu:thorium_dust','9x gtceu:uraninite_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//纯净钍矿石高速处理
    kc('prts:crushed_thorium_ore_5')
    .itemInputs('gtceu:refined_thorium_ore')
    .itemOutputs('18x gtceu:thorium_dust','9x gtceu:uraninite_dust','9x gtceu:lead_dust')
    .duration(20)
    .EUt(16)//精炼钍矿石高速处理

    kc('prts:crushed_tin_ore_1')
    .itemInputs('#forge:ores/tin')
    .itemOutputs('48x gtceu:tin_dust','24x gtceu:zinc_dust','24x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗锡矿高速处理
    kc('prts:crushed_tin_ore_2')
    .itemInputs('gtceu:raw_tin')
    .itemOutputs('36x gtceu:tin_dust','18x gtceu:zinc_dust','18x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗锡高速处理
    kc('prts:crushed_tin_ore_3')
    .itemInputs('gtceu:crushed_tin_ore')
    .itemOutputs('18x gtceu:tin_dust','9x gtceu:zinc_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎锡矿石高速处理
    kc('prts:crushed_tin_ore_4')
    .itemInputs('gtceu:purified_tin_ore')
    .itemOutputs('18x gtceu:tin_dust','9x gtceu:zinc_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净锡矿石高速处理
    kc('prts:crushed_tin_ore_5')
    .itemInputs('gtceu:refined_tin_ore')
    .itemOutputs('18x gtceu:tin_dust','9x gtceu:zinc_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼锡矿石高速处理

    kc('prts:crushed_naquadah_ore_1')
    .itemInputs('#forge:ores/naquadah')
    .itemOutputs('48x gtceu:naquadah_dust','16x gtceu:enriched_naquadah_dust','16x gtceu:barite_dust','16x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗硅岩矿高速处理
    kc('prts:crushed_naquadah_ore_2')
    .itemInputs('gtceu:raw_naquadah')
    .itemOutputs('36x gtceu:naquadah_dust','12x gtceu:enriched_naquadah_dust','12x gtceu:barite_dust','12x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗硅岩高速处理
    kc('prts:crushed_naquadah_ore_3')
    .itemInputs('gtceu:crushed_naquadah_ore')
    .itemOutputs('18x gtceu:naquadah_dust','6x gtceu:enriched_naquadah_dust','6x gtceu:barite_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎硅岩矿石高速处理
    kc('prts:crushed_naquadah_ore_4')
    .itemInputs('gtceu:purified_naquadah_ore')
    .itemOutputs('18x gtceu:naquadah_dust','6x gtceu:enriched_naquadah_dust','6x gtceu:barite_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净硅岩矿石高速处理
    kc('prts:crushed_naquadah_ore_5')
    .itemInputs('gtceu:refined_naquadah_ore')
    .itemOutputs('18x gtceu:naquadah_dust','6x gtceu:enriched_naquadah_dust','6x gtceu:barite_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼硅岩矿石高速处理

    kc('prts:crushed_asbestos_ore_1')
    .itemInputs('#forge:ores/asbestos')
    .itemOutputs('120x gtceu:asbestos_dust','40x gtceu:magnesium_dust','40x gtceu:silicon_dust','40x gtceu:diatomite_dust')
    .duration(20)
    .EUt(16)//粗石棉矿高速处理
    kc('prts:crushed_asbestos_ore_2')
    .itemInputs('gtceu:raw_asbestos')
    .itemOutputs('96x gtceu:asbestos_dust','36x gtceu:magnesium_dust','36x gtceu:silicon_dust','36x gtceu:diatomite_dust')
    .duration(20)
    .EUt(16)//粗石棉高速处理
    kc('prts:crushed_asbestos_ore_3')
    .itemInputs('gtceu:crushed_asbestos_ore')
    .itemOutputs('16x gtceu:asbestos_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:diatomite_dust')
    .duration(20)
    .EUt(16)//粉碎石棉矿石高速处理
    kc('prts:crushed_asbestos_ore_4')
    .itemInputs('gtceu:purified_asbestos_ore')
    .itemOutputs('16x gtceu:asbestos_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:diatomite_dust')
    .duration(20)
    .EUt(16)//纯净石棉矿石高速处理
    kc('prts:crushed_asbestos_ore_5')
    .itemInputs('gtceu:refined_asbestos_ore')
    .itemOutputs('16x gtceu:asbestos_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:diatomite_dust')
    .duration(20)
    .EUt(16)//精炼石棉矿石高速处理

    kc('prts:crushed_chalcopyrite_ore_1')
    .itemInputs('#forge:ores/chalcopyrite')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .itemOutputs('48x gtceu:chalcopyrite_dust','12x gtceu:cadmium_dust','12x gtceu:cobalt_dust','12x gtceu:pyrite_dust','12x gtceu:platinum_group_sludge_dust')
    .duration(20)
    .EUt(16)//粗黄铜矿高速处理
    kc('prts:crushed_chalcopyrite_ore_2')
    .itemInputs('gtceu:raw_chalcopyrite')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .itemOutputs('36x gtceu:chalcopyrite_dust','9x gtceu:cadmium_dust','9x gtceu:cobalt_dust','9x gtceu:pyrite_dust','9x gtceu:platinum_group_sludge_dust')
    .duration(20)
    .EUt(16)//粗黄铜高速处理
    kc('prts:crushed_chalcopyrite_ore_3')
    .itemInputs('gtceu:crushed_chalcopyrite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:chalcopyrite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:pyrite_dust','4x gtceu:platinum_group_sludge_dust')
    .duration(20)
    .EUt(16)//粉碎黄铜矿石高速处理
    kc('prts:crushed_chalcopyrite_ore_4')
    .itemInputs('gtceu:purified_chalcopyrite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:chalcopyrite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:pyrite_dust','4x gtceu:platinum_group_sludge_dust')
    .duration(20)
    .EUt(16)//纯净黄铜矿石高速处理
    kc('prts:crushed_chalcopyrite_ore_5')
    .itemInputs('gtceu:refined_chalcopyrite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:chalcopyrite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:pyrite_dust','4x gtceu:platinum_group_sludge_dust')
    .duration(20)
    .EUt(16)//精炼黄铜矿石高速处理

    kc('prts:crushed_cassiterite_sand_ore_1')
    .itemInputs('#forge:ores/cassiterite_sand')
    .itemOutputs('48x gtceu:cassiterite_sand_dust','48x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粗锡石矿砂矿高速处理
    kc('prts:crushed_cassiterite_sand_ore_2')
    .itemInputs('gtceu:raw_cassiterite_sand')
    .itemOutputs('36x gtceu:cassiterite_sand_dust','36x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粗锡石矿砂高速处理
    kc('prts:crushed_cassiterite_sand_ore_3')
    .itemInputs('gtceu:crushed_cassiterite_sand_ore')
    .itemOutputs('18x gtceu:cassiterite_sand_dust','18x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粉碎锡石矿砂矿石高速处理
    kc('prts:crushed_cassiterite_sand_ore_4')
    .itemInputs('gtceu:purified_cassiterite_sand_ore')
    .itemOutputs('18x gtceu:cassiterite_sand_dust','18x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//纯净锡石矿砂矿石高速处理
    kc('prts:crushed_cassiterite_sand_ore_5')
    .itemInputs('gtceu:refined_cassiterite_sand_ore')
    .itemOutputs('18x gtceu:cassiterite_sand_dust','18x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//精炼锡石矿砂矿石高速处理

    kc('prts:crushed_cassiterite_ore_1')
    .itemInputs('#forge:ores/cassiterite')
    .itemOutputs('80x gtceu:cassiterite_dust','40x gtceu:bismuth_dust','40x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粗锡石矿高速处理
    kc('prts:crushed_cassiterite_ore_2')
    .itemInputs('gtceu:raw_cassiterite')
    .itemOutputs('64x gtceu:cassiterite_dust','32x gtceu:bismuth_dust','32x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粗锡石高速处理
    kc('prts:crushed_cassiterite_ore_3')
    .itemInputs('gtceu:crushed_cassiterite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粉碎锡石矿石高速处理
    kc('prts:crushed_cassiterite_ore_4')
    .itemInputs('gtceu:purified_cassiterite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//纯净锡石矿石高速处理
    kc('prts:crushed_cassiterite_ore_5')
    .itemInputs('gtceu:refined_cassiterite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//精炼锡石矿石高速处理

    kc('prts:crushed_calcite_ore_1')
    .itemInputs('#forge:ores/calcite')
    .itemOutputs('48x gtceu:calcite_dust','24x gtceu:calcium_dust','24x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//粗方解石矿高速处理
    kc('prts:crushed_calcite_ore_2')
    .itemInputs('gtceu:raw_calcite')
    .itemOutputs('36x gtceu:calcite_dust','18x gtceu:calcium_dust','18x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//粗方解石高速处理
    kc('prts:crushed_calcite_ore_3')
    .itemInputs('gtceu:crushed_calcite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//粉碎方解石矿石高速处理
    kc('prts:crushed_calcite_ore_4')
    .itemInputs('gtceu:purified_calcite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//纯净方解石矿石高速处理
    kc('prts:crushed_calcite_ore_5')
    .itemInputs('gtceu:refined_calcite_ore')
    .itemOutputs('16x gtceu:cassiterite_dust','8x gtceu:bismuth_dust','8x gtceu:tin_dust')
    .duration(20)
    .EUt(16)//精炼方解石矿石高速处理

    kc('prts:crushed_goethite_ore_1')
    .itemInputs('#forge:ores/goethite')
    .itemOutputs('48x gtceu:goethite_dust','24x gtceu:yellow_limonite_dust','24x gtceu:malachite_dust')
    .duration(20)
    .EUt(16)//粗针铁矿高速处理
    kc('prts:crushed_goethite_ore_2')
    .itemInputs('gtceu:raw_goethite')
    .itemOutputs('36x gtceu:goethite_dust','18x gtceu:yellow_limonite_dust','18x gtceu:malachite_dust')
    .duration(20)
    .EUt(16)//粗针铁高速处理
    kc('prts:crushed_goethite_ore_3')
    .itemInputs('gtceu:crushed_goethite_ore')
    .itemOutputs('18x gtceu:goethite_dust','9x gtceu:yellow_limonite_dust','9x gtceu:malachite_dust')
    .duration(20)
    .EUt(16)//粉碎针铁矿石高速处理
    kc('prts:crushed_goethite_ore_4')
    .itemInputs('gtceu:purified_goethite_ore')
    .itemOutputs('18x gtceu:goethite_dust','9x gtceu:yellow_limonite_dust','9x gtceu:malachite_dust')
    .duration(20)
    .EUt(16)//纯净针铁矿石高速处理
    kc('prts:crushed_goethite_ore_5')
    .itemInputs('gtceu:refined_goethite_ore')
    .itemOutputs('18x gtceu:goethite_dust','9x gtceu:yellow_limonite_dust','9x gtceu:malachite_dust')
    .duration(20)
    .EUt(16)//精炼针铁矿石高速处理

    kc('prts:crushed_blue_topaz_ore_1')
    .itemInputs('#forge:ores/blue_topaz')
    .itemOutputs('80x gtceu:blue_topaz_dust','80x gtceu:topaz_dust')
    .duration(20)
    .EUt(16)//粗蓝黄玉矿高速处理
    kc('prts:crushed_blue_topaz_ore_2')
    .itemInputs('gtceu:raw_blue_topaz')
    .itemOutputs('64x gtceu:blue_topaz_dust','64x gtceu:topaz_dust')
    .duration(20)
    .EUt(16)//粗蓝黄玉高速处理
    kc('prts:crushed_blue_topaz_ore_3')
    .itemInputs('gtceu:crushed_blue_topaz_ore')
    .itemOutputs('16x gtceu:blue_topaz_dust','16x gtceu:topaz_dust')
    .duration(20)
    .EUt(16)//粉碎蓝黄玉矿石高速处理
    kc('prts:crushed_blue_topaz_ore_4')
    .itemInputs('gtceu:purified_blue_topaz_ore')
    .itemOutputs('16x gtceu:blue_topaz_dust','16x gtceu:topaz_dust')
    .duration(20)
    .EUt(16)//纯净蓝黄玉矿石高速处理
    kc('prts:crushed_blue_topaz_ore_5')
    .itemInputs('gtceu:refined_blue_topaz_ore')
    .itemOutputs('16x gtceu:blue_topaz_dust','16x gtceu:topaz_dust')
    .duration(20)
    .EUt(16)//精炼蓝黄玉矿石高速处理

    kc('prts:crushed_hematite_ore_1')
    .itemInputs('#forge:ores/hematite')
    .itemOutputs('48x gtceu:hematite_dust','16x gtceu:magnesium_dust','16x gtceu:calcium_dust','16x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粗赤铁矿高速处理
    kc('prts:crushed_hematite_ore_2')
    .itemInputs('gtceu:raw_hematite')
    .itemOutputs('36x gtceu:hematite_dust','12x gtceu:magnesium_dust','12x gtceu:calcium_dust','12x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粗赤铁高速处理
    kc('prts:crushed_hematite_ore_3')
    .itemInputs('gtceu:crushed_hematite_ore')
    .itemOutputs('18x gtceu:hematite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粉碎赤铁矿石高速处理
    kc('prts:crushed_hematite_ore_4')
    .itemInputs('gtceu:purified_hematite_ore')
    .itemOutputs('18x gtceu:hematite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//纯净赤铁矿石高速处理
    kc('prts:crushed_hematite_ore_5')
    .itemInputs('gtceu:refined_hematite_ore')
    .itemOutputs('18x gtceu:hematite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//精炼赤铁矿石高速处理

    kc('prts:crushed_chromite_ore_1')
    .itemInputs('#forge:ores/chromite')
    .itemOutputs('48x gtceu:chromite_dust','16x gtceu:chromium_dust','16x gtceu:magnesium_dust','16x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗铬铁矿高速处理
    kc('prts:crushed_chromite_ore_2')
    .itemInputs('gtceu:raw_chromite')
    .itemOutputs('36x gtceu:chromite_dust','12x gtceu:chromium_dust','12x gtceu:magnesium_dust','12x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗铬铁高速处理
    kc('prts:crushed_chromite_ore_3')
    .itemInputs('gtceu:crushed_chromite_ore')
    .itemOutputs('18x gtceu:chromite_dust','6x gtceu:chromium_dust','6x gtceu:magnesium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎铬铁矿石高速处理
    kc('prts:crushed_chromite_ore_4')
    .itemInputs('gtceu:purified_chromite_ore')
    .itemOutputs('18x gtceu:chromite_dust','6x gtceu:chromium_dust','6x gtceu:magnesium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净铬铁矿石高速处理
    kc('prts:crushed_chromite_ore_5')
    .itemInputs('gtceu:refined_chromite_ore')
    .itemOutputs('18x gtceu:chromite_dust','6x gtceu:chromium_dust','6x gtceu:magnesium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼铬铁矿石高速处理

    kc('prts:crushed_cinnabar_ore_1')
    .itemInputs('#forge:ores/cinnabar')
    .itemOutputs('48x gtceu:cinnabar_dust','16x gtceu:sulfur_dust','16x minecraft:redstone','16x minecraft:glowstone_dust')
    .duration(20)
    .EUt(16)//粗朱砂矿高速处理
    kc('prts:crushed_cinnabar_ore_2')
    .itemInputs('gtceu:raw_cinnabar')
    .itemOutputs('36x gtceu:cinnabar_dust','12x gtceu:sulfur_dust','12x minecraft:redstone','12x minecraft:glowstone_dust')
    .duration(20)
    .EUt(16)//粗朱砂高速处理
    kc('prts:crushed_cinnabar_ore_3')
    .itemInputs('gtceu:crushed_cinnabar_ore')
    .itemOutputs('18x gtceu:cinnabar_dust','12x gtceu:sulfur_dust','12x minecraft:redstone','12x minecraft:glowstone_dust')
    .duration(20)
    .EUt(16)//粉碎朱砂矿石高速处理
    kc('prts:crushed_cinnabar_ore_4')
    .itemInputs('gtceu:purified_cinnabar_ore')
    .itemOutputs('18x gtceu:cinnabar_dust','12x gtceu:sulfur_dust','12x minecraft:redstone','12x minecraft:glowstone_dust')
    .duration(20)
    .EUt(16)//纯净朱砂矿石高速处理
    kc('prts:crushed_cinnabar_ore_5')
    .itemInputs('gtceu:refined_cinnabar_ore')
    .itemOutputs('18x gtceu:cinnabar_dust','12x gtceu:sulfur_dust','12x minecraft:redstone','12x minecraft:glowstone_dust')
    .duration(20)
    .EUt(16)//精炼朱砂矿石高速处理

    kc('prts:crushed_coal_ore_1')
    .itemInputs('#forge:ores/coal')
    .itemOutputs('80x gtceu:coal_dust','80x gtceu:coal_dust')
    .duration(20)
    .EUt(16)//粗煤炭矿高速处理
    kc('prts:crushed_coal_ore_2')
    .itemInputs('gtceu:raw_coal')
    .itemOutputs('64x gtceu:coal_dust','64x gtceu:coal_dust')
    .duration(20)
    .EUt(16)//粗煤炭高速处理
    kc('prts:crushed_coal_ore_3')
    .itemInputs('gtceu:crushed_coal_ore')
    .itemOutputs('16x gtceu:coal_dust','16x gtceu:coal_dust')
    .duration(20)
    .EUt(16)//粉碎煤炭矿石高速处理
    kc('prts:crushed_coal_ore_4')
    .itemInputs('gtceu:purified_coal_ore')
    .itemOutputs('16x gtceu:coal_dust','16x gtceu:coal_dust')
    .duration(20)
    .EUt(16)//纯净煤炭矿石高速处理
    kc('prts:crushed_coal_ore_5')
    .itemInputs('gtceu:refined_coal_ore')
    .itemOutputs('16x gtceu:coal_dust','16x gtceu:coal_dust')
    .duration(20)
    .EUt(16)//精炼煤炭矿石高速处理

    kc('prts:crushed_cobaltite_ore_1')
    .itemInputs('#forge:ores/cobaltite')
    .itemOutputs('48x gtceu:cobaltite_dust','24x gtceu:cobalt_dust','24x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗辉钴矿高速处理
    kc('prts:crushed_cobaltite_ore_2')
    .itemInputs('gtceu:raw_cobaltite')
    .itemOutputs('36x gtceu:cobaltite_dust','18x gtceu:cobalt_dust','18x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗辉钴高速处理
    kc('prts:crushed_cobaltite_ore_3')
    .itemInputs('gtceu:crushed_cobaltite_ore')
    .itemOutputs('18x gtceu:cobaltite_dust','9x gtceu:cobalt_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎辉钴矿石高速处理
    kc('prts:crushed_cobaltite_ore_4')
    .itemInputs('gtceu:purified_cobaltite_ore')
    .itemOutputs('18x gtceu:cobaltite_dust','9x gtceu:cobalt_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净辉钴矿石高速处理
    kc('prts:crushed_cobaltite_ore_5')
    .itemInputs('gtceu:refined_cobaltite_ore')
    .itemOutputs('18x gtceu:cobaltite_dust','9x gtceu:cobalt_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼辉钴矿石高速处理

    kc('prts:crushed_cooperite_ore_1')
    .itemInputs('#forge:ores/cooperite')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .itemOutputs('48x gtceu:cooperite_dust','16x gtceu:cobalt_dust','32x gtceu:platinum_group_sludge_dust','16x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗谢尔顿矿高速处理
    kc('prts:crushed_cooperite_ore_2')
    .itemInputs('gtceu:raw_cooperite')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .itemOutputs('36x gtceu:cooperite_dust','12x gtceu:cobalt_dust','24x gtceu:platinum_group_sludge_dust','12x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗谢尔顿高速处理
    kc('prts:crushed_cooperite_ore_3')
    .itemInputs('gtceu:crushed_cooperite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:cooperite_dust','6x gtceu:cobalt_dust','12x gtceu:platinum_group_sludge_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粉碎谢尔顿矿石高速处理
    kc('prts:crushed_cooperite_ore_4')
    .itemInputs('gtceu:purified_cooperite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:cooperite_dust','6x gtceu:cobalt_dust','12x gtceu:platinum_group_sludge_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//纯净谢尔顿矿石高速处理
    kc('prts:crushed_cooperite_ore_5')
    .itemInputs('gtceu:refined_cooperite_ore')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .itemOutputs('18x gtceu:cooperite_dust','6x gtceu:cobalt_dust','12x gtceu:platinum_group_sludge_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//精炼谢尔顿矿石高速处理

    kc('prts:crushed_diamond_ore_1')
    .itemInputs('#forge:ores/diamond')
    .itemOutputs('48x gtceu:diamond_dust','48x gtceu:graphite_dust')
    .duration(20)
    .EUt(16)//粗钻石矿高速处理
    kc('prts:crushed_diamond_ore_2')
    .itemInputs('gtceu:raw_diamond')
    .itemOutputs('36x gtceu:diamond_dust','36x gtceu:graphite_dust')
    .duration(20)
    .EUt(16)//粗钻石高速处理
    kc('prts:crushed_diamond_ore_3')
    .itemInputs('gtceu:crushed_diamond_ore')
    .itemOutputs('18x gtceu:diamond_dust','18x gtceu:graphite_dust')
    .duration(20)
    .EUt(16)//粉碎钻石矿石高速处理
    kc('prts:crushed_diamond_ore_4')
    .itemInputs('gtceu:purified_diamond_ore')
    .itemOutputs('18x gtceu:diamond_dust','18x gtceu:graphite_dust')
    .duration(20)
    .EUt(16)//纯净钻石矿石高速处理
    kc('prts:crushed_diamond_ore_5')
    .itemInputs('gtceu:refined_diamond_ore')
    .itemOutputs('18x gtceu:diamond_dust','18x gtceu:graphite_dust')
    .duration(20)
    .EUt(16)//精炼钻石矿石高速处理

    kc('prts:crushed_emerald_ore_1')
    .itemInputs('#forge:ores/emerald')
    .itemOutputs('80x gtceu:emerald_dust','40x gtceu:aluminium_dust','40x gtceu:beryllium_dust')
    .duration(20)
    .EUt(16)//粗绿宝石矿高速处理
    kc('prts:crushed_emerald_ore_2')
    .itemInputs('gtceu:raw_emerald')
    .itemOutputs('64x gtceu:emerald_dust','32x gtceu:aluminium_dust','32x gtceu:beryllium_dust')
    .duration(20)
    .EUt(16)//粗绿宝石高速处理
    kc('prts:crushed_emerald_ore_3')
    .itemInputs('gtceu:crushed_emerald_ore')
    .itemOutputs('16x gtceu:emerald_dust','8x gtceu:aluminium_dust','8x gtceu:beryllium_dust')
    .duration(20)
    .EUt(16)//粉碎绿宝石矿石高速处理
    kc('prts:crushed_emerald_ore_4')
    .itemInputs('gtceu:purified_emerald_ore')
    .itemOutputs('16x gtceu:emerald_dust','8x gtceu:aluminium_dust','8x gtceu:beryllium_dust')
    .duration(20)
    .EUt(16)//纯净绿宝石矿石高速处理
    kc('prts:crushed_emerald_ore_5')
    .itemInputs('gtceu:refined_emerald_ore')
    .itemOutputs('16x gtceu:emerald_dust','8x gtceu:aluminium_dust','8x gtceu:beryllium_dust')
    .duration(20)
    .EUt(16)//精炼绿宝石矿石高速处理

    kc('prts:crushed_lazurite_ore_1')
    .itemInputs('#forge:ores/lazurite')
    .itemOutputs('240x gtceu:lazurite_dust','120x gtceu:lapis_dust','120x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//粗蓝金石矿高速处理
    kc('prts:crushed_lazurite_ore_2')
    .itemInputs('gtceu:raw_lazurite')
    .itemOutputs('196x gtceu:lazurite_dust','98x gtceu:lapis_dust','98x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//粗蓝金石高速处理
    kc('prts:crushed_lazurite_ore_3')
    .itemInputs('gtceu:crushed_lazurite_ore')
    .itemOutputs('16x gtceu:lazurite_dust','8x gtceu:lapis_dust','8x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//粉碎蓝金石矿石高速处理
    kc('prts:crushed_lazurite_ore_4')
    .itemInputs('gtceu:purified_lazurite_ore')
    .itemOutputs('16x gtceu:lazurite_dust','8x gtceu:lapis_dust','8x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//纯净蓝金石矿石高速处理
    kc('prts:crushed_lazurite_ore_5')
    .itemInputs('gtceu:refined_lazurite_ore')
    .itemOutputs('16x gtceu:lazurite_dust','8x gtceu:lapis_dust','8x gtceu:sodalite_dust')
    .duration(20)
    .EUt(16)//精炼蓝金石矿石高速处理
    
    kc('prts:crushed_bauxite_ore_1')
    .itemInputs('#forge:ores/bauxite')
    .itemOutputs('48x gtceu:bauxite_dust','16x gtceu:gallium_dust','16x gtceu:rutile_dust','16x gtceu:grossular_dust')
    .duration(20)
    .EUt(16)//粗铝土矿高速处理
    kc('prts:crushed_bauxite_ore_2')
    .itemInputs('gtceu:raw_bauxite')
    .itemOutputs('36x gtceu:bauxite_dust','12x gtceu:gallium_dust','12x gtceu:rutile_dust','12x gtceu:grossular_dust')
    .duration(20)
    .EUt(16)//粗铝土高速处理
    kc('prts:crushed_bauxite_ore_3')
    .itemInputs('gtceu:crushed_bauxite_ore')
    .itemOutputs('18x gtceu:bauxite_dust','6x gtceu:gallium_dust','6x gtceu:rutile_dust','6x gtceu:grossular_dust')
    .duration(20)
    .EUt(16)//粉碎铝土矿石高速处理
    kc('prts:crushed_bauxite_ore_4')
    .itemInputs('gtceu:purified_bauxite_ore')
    .itemOutputs('18x gtceu:bauxite_dust','6x gtceu:gallium_dust','6x gtceu:rutile_dust','6x gtceu:grossular_dust')
    .duration(20)
    .EUt(16)//纯净铝土矿石高速处理
    kc('prts:crushed_bauxite_ore_5')
    .itemInputs('gtceu:refined_bauxite_ore')
    .itemOutputs('18x gtceu:bauxite_dust','6x gtceu:gallium_dust','6x gtceu:rutile_dust','6x gtceu:grossular_dust')
    .duration(20)
    .EUt(16)//精炼铝土矿石高速处理

    kc('prts:crushed_ilmenite_ore_1')
    .itemInputs('#forge:ores/ilmenite')
    .itemOutputs('48x gtceu:ilmenite_dust','24x gtceu:rutile_dust','24x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钛铁矿高速处理
    kc('prts:crushed_ilmenite_ore_2')
    .itemInputs('gtceu:raw_ilmenite')
    .itemOutputs('36x gtceu:ilmenite_dust','18x gtceu:rutile_dust','18x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钛铁高速处理
    kc('prts:crushed_ilmenite_ore_3')
    .itemInputs('gtceu:crushed_ilmenite_ore')
    .itemOutputs('18x gtceu:ilmenite_dust','9x gtceu:rutile_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎钛铁矿石高速处理
    kc('prts:crushed_ilmenite_ore_4')
    .itemInputs('gtceu:purified_ilmenite_ore')
    .itemOutputs('18x gtceu:ilmenite_dust','9x gtceu:rutile_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净钛铁矿石高速处理
    kc('prts:crushed_ilmenite_ore_5')
    .itemInputs('gtceu:refined_ilmenite_ore')
    .itemOutputs('18x gtceu:ilmenite_dust','9x gtceu:rutile_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼钛铁矿石高速处理

    kc('prts:crushed_grossular_ore_1')
    .itemInputs('#forge:ores/grossular')
    .itemOutputs('120x gtceu:grossular_dust','60x gtceu:calcium_dust','60x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粗钙铝榴石矿高速处理
    kc('prts:crushed_grossular_ore_2')
    .itemInputs('gtceu:raw_grossular')
    .itemOutputs('96x gtceu:grossular_dust','48x gtceu:calcium_dust','48x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粗钙铝榴石高速处理
    kc('prts:crushed_grossular_ore_3')
    .itemInputs('gtceu:crushed_grossular_ore')
    .itemOutputs('16x gtceu:grossular_dust','8x gtceu:calcium_dust','8x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粉碎钙铝榴石矿石高速处理
    kc('prts:crushed_grossular_ore_4')
    .itemInputs('gtceu:purified_grossular_ore')
    .itemOutputs('16x gtceu:grossular_dust','8x gtceu:calcium_dust','8x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//纯净钙铝榴石矿石高速处理
    kc('prts:crushed_grossular_ore_5')
    .itemInputs('gtceu:refined_grossular_ore')
    .itemOutputs('16x gtceu:grossular_dust','8x gtceu:calcium_dust','8x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//精炼钙铝榴石矿石高速处理

    kc('prts:crushed_green_sapphire_ore_1')
    .itemInputs('#forge:ores/green_sapphire')
    .itemOutputs('48x gtceu:green_sapphire_dust','24x gtceu:sapphire_dust','24x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗绿色蓝宝石矿高速处理
    kc('prts:crushed_green_sapphire_ore_2')
    .itemInputs('gtceu:raw_green_sapphire')
    .itemOutputs('36x gtceu:green_sapphire_dust','18x gtceu:sapphire_dust','18x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗绿色蓝宝石高速处理
    kc('prts:crushed_green_sapphire_ore_3')
    .itemInputs('gtceu:crushed_green_sapphire_ore')
    .itemOutputs('18x gtceu:green_sapphire_dust','9x gtceu:sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粉碎绿色蓝宝石矿石高速处理
    kc('prts:crushed_green_sapphire_ore_4')
    .itemInputs('gtceu:purified_green_sapphire_ore')
    .itemOutputs('18x gtceu:green_sapphire_dust','9x gtceu:sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//纯净绿色蓝宝石矿石高速处理
    kc('prts:crushed_green_sapphire_ore_5')
    .itemInputs('gtceu:refined_green_sapphire_ore')
    .itemOutputs('18x gtceu:green_sapphire_dust','9x gtceu:sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//精炼绿色蓝宝石矿石高速处理

    kc('prts:crushed_garnierite_ore_1')
    .itemInputs('#forge:ores/garnierite')
    .itemOutputs('48x gtceu:garnierite_dust','24x gtceu:nickel_dust','24x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗硅镁镍矿高速处理
    kc('prts:crushed_garnierite_ore_2')
    .itemInputs('gtceu:raw_garnierite')
    .itemOutputs('36x gtceu:garnierite_dust','18x gtceu:nickel_dust','18x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗硅镁镍高速处理
    kc('prts:crushed_garnierite_ore_3')
    .itemInputs('gtceu:crushed_garnierite_ore')
    .itemOutputs('18x gtceu:garnierite_dust','9x gtceu:nickel_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎绿色蓝宝石矿石高速处理
    kc('prts:crushed_garnierite_ore_4')
    .itemInputs('gtceu:purified_garnierite_ore')
    .itemOutputs('18x gtceu:garnierite_dust','9x gtceu:nickel_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净绿色蓝宝石矿石高速处理
    kc('prts:crushed_garnierite_ore_5')
    .itemInputs('gtceu:refined_garnierite_ore')
    .itemOutputs('18x gtceu:garnierite_dust','9x gtceu:nickel_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼绿色蓝宝石矿石高速处理

    kc('prts:crushed_galena_ore_1')
    .itemInputs('#forge:ores/galena')
    .itemOutputs('48x gtceu:galena_dust','24x gtceu:silver_dust','24x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗方铅矿高速处理
    kc('prts:crushed_galena_ore_2')
    .itemInputs('gtceu:raw_galena')
    .itemOutputs('36x gtceu:galena_dust','18x gtceu:silver_dust','18x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗方铅高速处理
    kc('prts:crushed_galena_ore_3')
    .itemInputs('gtceu:crushed_galena_ore')
    .itemOutputs('18x gtceu:galena_dust','9x gtceu:silver_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎方铅矿矿石高速处理
    kc('prts:crushed_galena_ore_4')
    .itemInputs('gtceu:purified_galena_ore')
    .itemOutputs('18x gtceu:galena_dust','9x gtceu:silver_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净方铅矿矿石高速处理
    kc('prts:crushed_galena_ore_5')
    .itemInputs('gtceu:refined_galena_ore')
    .itemOutputs('18x gtceu:galena_dust','9x gtceu:silver_dust','9x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼方铅矿矿石高速处理

    kc('prts:crushed_magnesite_ore_1')
    .itemInputs('#forge:ores/magnesite')
    .itemOutputs('48x gtceu:magnesite_dust','24x gtceu:cobaltite_dust','24x gtceu:magnesium_dust')
    .duration(20)
    .EUt(16)//粗菱镁矿高速处理
    kc('prts:crushed_magnesite_ore_2')
    .itemInputs('gtceu:raw_magnesite')
    .itemOutputs('36x gtceu:magnesite_dust','18x gtceu:cobaltite_dust','18x gtceu:magnesium_dust')
    .duration(20)
    .EUt(16)//粗菱镁高速处理
    kc('prts:crushed_magnesite_ore_3')
    .itemInputs('gtceu:crushed_magnesite_ore')
    .itemOutputs('18x gtceu:magnesite_dust','9x gtceu:cobaltite_dust','9x gtceu:magnesium_dust')
    .duration(20)
    .EUt(16)//粉碎菱镁矿矿石高速处理
    kc('prts:crushed_magnesite_ore_4')
    .itemInputs('gtceu:purified_magnesite_ore')
    .itemOutputs('18x gtceu:magnesite_dust','9x gtceu:cobaltite_dust','9x gtceu:magnesium_dust')
    .duration(20)
    .EUt(16)//纯净菱镁矿矿石高速处理
    kc('prts:crushed_magnesite_ore_5')
    .itemInputs('gtceu:refined_magnesite_ore')
    .itemOutputs('18x gtceu:magnesite_dust','9x gtceu:cobaltite_dust','9x gtceu:magnesium_dust')
    .duration(20)
    .EUt(16)//精炼菱镁矿矿石高速处理

    kc('prts:crushed_magnetite_ore_1')
    .itemInputs('#forge:ores/magnetite')
    .itemOutputs('48x gtceu:magnetite_dust','24x gtceu:gold_dust','24x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗磁铁矿高速处理
    kc('prts:crushed_magnetite_ore_2')
    .itemInputs('gtceu:raw_magnetite')
    .itemOutputs('36x gtceu:magnetite_dust','18x gtceu:gold_dust','18x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗磁铁矿高速处理
    kc('prts:crushed_magnetite_ore_3')
    .itemInputs('gtceu:crushed_magnetite_ore')
    .itemOutputs('18x gtceu:magnetite_dust','9x gtceu:gold_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎磁铁矿矿石高速处理
    kc('prts:crushed_magnetite_ore_4')
    .itemInputs('gtceu:purified_magnetite_ore')
    .itemOutputs('18x gtceu:magnetite_dust','9x gtceu:gold_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净磁铁矿矿石高速处理
    kc('prts:crushed_magnetite_ore_5')
    .itemInputs('gtceu:refined_magnetite_ore')
    .itemOutputs('18x gtceu:magnetite_dust','9x gtceu:gold_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼磁铁矿矿石高速处理

    kc('prts:crushed_molybdenite_ore_1')
    .itemInputs('#forge:ores/molybdenite')
    .itemOutputs('48x gtceu:molybdenite_dust','16x gtceu:quartzite_dust','16x gtceu:sulfur_dust','16x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粗辉钼矿高速处理
    kc('prts:crushed_molybdenite_ore_2')
    .itemInputs('gtceu:raw_molybdenite')
    .itemOutputs('36x gtceu:molybdenite_dust','12x gtceu:quartzite_dust','12x gtceu:sulfur_dust','12x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粗辉钼高速处理
    kc('prts:crushed_molybdenite_ore_3')
    .itemInputs('gtceu:crushed_molybdenite_ore')
    .itemOutputs('18x gtceu:molybdenite_dust','6x gtceu:quartzite_dust','6x gtceu:sulfur_dust','6x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//粉碎辉钼矿矿石高速处理
    kc('prts:crushed_molybdenite_ore_4')
    .itemInputs('gtceu:purified_molybdenite_ore')
    .itemOutputs('18x gtceu:molybdenite_dust','6x gtceu:quartzite_dust','6x gtceu:sulfur_dust','6x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//纯净辉钼矿矿石高速处理
    kc('prts:crushed_molybdenite_ore_5')
    .itemInputs('gtceu:refined_molybdenite_ore')
    .itemOutputs('18x gtceu:molybdenite_dust','6x gtceu:quartzite_dust','6x gtceu:sulfur_dust','6x gtceu:molybdenum_dust')
    .duration(20)
    .EUt(16)//精炼辉钼矿矿石高速处理

    kc('prts:crushed_powellite_ore_1')
    .itemInputs('#forge:ores/powellite')
    .itemOutputs('48x gtceu:powellite_dust','16x gtceu:molybdenite_dust','16x gtceu:potassium_dust','16x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钼钙矿高速处理
    kc('prts:crushed_powellite_ore_2')
    .itemInputs('gtceu:raw_powellite')
    .itemOutputs('36x gtceu:powellite_dust','12x gtceu:molybdenite_dust','12x gtceu:potassium_dust','12x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钼钙高速处理
    kc('prts:crushed_powellite_ore_3')
    .itemInputs('gtceu:crushed_powellite_ore')
    .itemOutputs('18x gtceu:powellite_dust','6x gtceu:molybdenite_dust','6x gtceu:potassium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎钼钙矿矿石高速处理
    kc('prts:crushed_powellite_ore_4')
    .itemInputs('gtceu:purified_powellite_ore')
    .itemOutputs('18x gtceu:powellite_dust','6x gtceu:molybdenite_dust','6x gtceu:potassium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净钼钙矿矿石高速处理
    kc('prts:crushed_powellite_ore_5')
    .itemInputs('gtceu:refined_powellite_ore')
    .itemOutputs('18x gtceu:powellite_dust','6x gtceu:molybdenite_dust','6x gtceu:potassium_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼钼钙矿矿石高速处理

    kc('prts:crushed_pyrite_ore_1')
    .itemInputs('#forge:ores/pyrite')
    .itemOutputs('48x gtceu:pyrite_dust','16x gtceu:iron_dust','16x gtceu:tricalcium_phosphate_dust','16x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗黄铁矿高速处理
    kc('prts:crushed_pyrite_ore_2')
    .itemInputs('gtceu:raw_pyrite')
    .itemOutputs('36x gtceu:pyrite_dust','12x gtceu:iron_dust','12x gtceu:tricalcium_phosphate_dust','12x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗黄铁高速处理
    kc('prts:crushed_pyrite_ore_3')
    .itemInputs('gtceu:crushed_pyrite_ore')
    .itemOutputs('18x gtceu:pyrite_dust','6x gtceu:iron_dust','6x gtceu:tricalcium_phosphate_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎黄铁矿矿石高速处理
    kc('prts:crushed_pyrite_ore_4')
    .itemInputs('gtceu:purified_pyrite_ore')
    .itemOutputs('18x gtceu:pyrite_dust','6x gtceu:iron_dust','6x gtceu:tricalcium_phosphate_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净黄铁矿矿石高速处理
    kc('prts:crushed_pyrite_ore_5')
    .itemInputs('gtceu:refined_pyrite_ore')
    .itemOutputs('18x gtceu:pyrite_dust','6x gtceu:iron_dust','6x gtceu:tricalcium_phosphate_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼黄铁矿矿石高速处理

    kc('prts:crushed_pyrolusite_ore_1')
    .itemInputs('#forge:ores/pyrolusite')
    .itemOutputs('48x gtceu:pyrolusite_dust','16x gtceu:niobium_dust','16x gtceu:tantalite_dust','16x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗软锰矿高速处理
    kc('prts:crushed_pyrolusite_ore_2')
    .itemInputs('gtceu:raw_pyrolusite')
    .itemOutputs('36x gtceu:pyrolusite_dust','12x gtceu:niobium_dust','12x gtceu:tantalite_dust','12x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗软锰高速处理
    kc('prts:crushed_pyrolusite_ore_3')
    .itemInputs('gtceu:crushed_pyrolusite_ore')
    .itemOutputs('18x gtceu:pyrolusite_dust','6x gtceu:niobium_dust','6x gtceu:tantalite_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粉碎软锰矿矿石高速处理
    kc('prts:crushed_pyrolusite_ore_4')
    .itemInputs('gtceu:purified_pyrolusite_ore')
    .itemOutputs('18x gtceu:pyrolusite_dust','6x gtceu:niobium_dust','6x gtceu:tantalite_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//纯净软锰矿矿石高速处理
    kc('prts:crushed_pyrolusite_ore_5')
    .itemInputs('gtceu:refined_pyrolusite_ore')
    .itemOutputs('18x gtceu:pyrolusite_dust','6x gtceu:niobium_dust','6x gtceu:tantalite_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//精炼软锰矿矿石高速处理

    kc('prts:crushed_pyrope_ore_1')
    .itemInputs('#forge:ores/pyrope')
    .itemOutputs('48x gtceu:pyrope_dust','24x gtceu:magnesium_dust','24x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗镁铝榴石矿高速处理
    kc('prts:crushed_pyrope_ore_2')
    .itemInputs('gtceu:raw_pyrope')
    .itemOutputs('36x gtceu:pyrope_dust','18x gtceu:magnesium_dust','18x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗镁铝榴石高速处理
    kc('prts:crushed_pyrope_ore_3')
    .itemInputs('gtceu:crushed_pyrope_ore')
    .itemOutputs('18x gtceu:pyrope_dust','9x gtceu:magnesium_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粉碎镁铝榴石矿石高速处理
    kc('prts:crushed_pyrope_ore_4')
    .itemInputs('gtceu:purified_pyrope_ore')
    .itemOutputs('18x gtceu:pyrope_dust','9x gtceu:magnesium_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//纯净镁铝榴石矿石高速处理
    kc('prts:crushed_pyrope_ore_5')
    .itemInputs('gtceu:refined_pyrope_ore')
    .itemOutputs('18x gtceu:pyrope_dust','9x gtceu:magnesium_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//精炼镁铝榴石矿石高速处理

    kc('prts:crushed_rock_salt_ore_1')
    .itemInputs('#forge:ores/rock_salt')
    .itemOutputs('48x gtceu:rock_salt_dust','24x gtceu:borax_dust','24x gtceu:salt_dust')
    .duration(20)
    .EUt(16)//粗岩盐矿石高速处理
    kc('prts:crushed_rock_salt_ore_2')
    .itemInputs('gtceu:raw_rock_salt')
    .itemOutputs('36x gtceu:rock_salt_dust','18x gtceu:borax_dust','18x gtceu:salt_dust')
    .duration(20)
    .EUt(16)//粗岩盐高速处理
    kc('prts:crushed_rock_salt_ore_3')
    .itemInputs('gtceu:crushed_rock_salt_ore')
    .itemOutputs('18x gtceu:rock_salt_dust','9x gtceu:borax_dust','9x gtceu:salt_dust')
    .duration(20)
    .EUt(16)//粉碎岩盐矿石高速处理
    kc('prts:crushed_rock_salt_ore_4')
    .itemInputs('gtceu:purified_rock_salt_ore')
    .itemOutputs('18x gtceu:rock_salt_dust','9x gtceu:borax_dust','9x gtceu:salt_dust')
    .duration(20)
    .EUt(16)//纯净岩盐矿石高速处理
    kc('prts:crushed_rock_salt_ore_5')
    .itemInputs('gtceu:refined_rock_salt_ore')
    .itemOutputs('18x gtceu:rock_salt_dust','9x gtceu:borax_dust','9x gtceu:salt_dust')
    .duration(20)
    .EUt(16)//精炼岩盐矿石高速处理

    kc('prts:crushed_ruby_ore_1')
    .itemInputs('#forge:ores/ruby')
    .itemOutputs('48x gtceu:ruby_dust','24x gtceu:red_garnet_dust','24x gtceu:chromium_dust')
    .duration(20)
    .EUt(16)//粗红宝石矿高速处理
    kc('prts:crushed_ruby_ore_2')
    .itemInputs('gtceu:raw_ruby')
    .itemOutputs('36x gtceu:ruby_dust','18x gtceu:red_garnet_dust','18x gtceu:chromium_dust')
    .duration(20)
    .EUt(16)//粗红宝石高速处理
    kc('prts:crushed_ruby_ore_3')
    .itemInputs('gtceu:crushed_ruby_ore')
    .itemOutputs('18x gtceu:ruby_dust','9x gtceu:red_garnet_dust','9x gtceu:chromium_dust')
    .duration(20)
    .EUt(16)//粉碎红宝石矿石高速处理
    kc('prts:crushed_ruby_ore_4')
    .itemInputs('gtceu:purified_ruby_ore')
    .itemOutputs('18x gtceu:ruby_dust','9x gtceu:red_garnet_dust','9x gtceu:chromium_dust')
    .duration(20)
    .EUt(16)//纯净红宝石矿石高速处理
    kc('prts:crushed_ruby_ore_5')
    .itemInputs('gtceu:refined_ruby_ore')
    .itemOutputs('18x gtceu:ruby_dust','9x gtceu:red_garnet_dust','9x gtceu:chromium_dust')
    .duration(20)
    .EUt(16)//精炼红宝石矿石高速处理

    kc('prts:crushed_salt_ore_1')
    .itemInputs('#forge:ores/salt')
    .itemOutputs('48x gtceu:salt_dust','24x gtceu:borax_dust','24x gtceu:rock_salt_dust')
    .duration(20)
    .EUt(16)//粗盐矿高速处理
    kc('prts:crushed_salt_ore_2')
    .itemInputs('gtceu:raw_salt')
    .itemOutputs('36x gtceu:salt_dust','18x gtceu:borax_dust','18x gtceu:rock_salt_dust')
    .duration(20)
    .EUt(16)//粗盐矿高速处理
    kc('prts:crushed_salt_ore_3')
    .itemInputs('gtceu:crushed_salt_ore')
    .itemOutputs('18x gtceu:salt_dust','9x gtceu:borax_dust','9x gtceu:rock_salt_dust')
    .duration(20)
    .EUt(16)//粉碎盐矿石高速处理
    kc('prts:crushed_salt_ore_4')
    .itemInputs('gtceu:purified_salt_ore')
    .itemOutputs('18x gtceu:salt_dust','9x gtceu:borax_dust','9x gtceu:rock_salt_dust')
    .duration(20)
    .EUt(16)//纯净盐矿石高速处理
    kc('prts:crushed_salt_ore_5')
    .itemInputs('gtceu:refined_salt_ore')
    .itemOutputs('18x gtceu:salt_dust','9x gtceu:borax_dust','9x gtceu:rock_salt_dust')
    .duration(20)
    .EUt(16)//精炼盐矿石高速处理

    kc('prts:crushed_saltpeter_ore_1')
    .itemInputs('#forge:ores/saltpeter')
    .itemOutputs('48x gtceu:saltpeter_dust','24x gtceu:salt_dust','24x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粗硝石矿高速处理
    kc('prts:crushed_saltpeter_ore_2')
    .itemInputs('gtceu:raw_saltpeter')
    .itemOutputs('36x gtceu:saltpeter_dust','18x gtceu:salt_dust','18x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粗硝石矿高速处理
    kc('prts:crushed_saltpeter_ore_3')
    .itemInputs('gtceu:crushed_saltpeter_ore')
    .itemOutputs('18x gtceu:saltpeter_dust','9x gtceu:salt_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粉碎硝石矿石高速处理
    kc('prts:crushed_saltpeter_ore_4')
    .itemInputs('gtceu:purified_saltpeter_ore')
    .itemOutputs('18x gtceu:saltpeter_dust','9x gtceu:salt_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//纯净硝石矿石高速处理
    kc('prts:crushed_saltpeter_ore_5')
    .itemInputs('gtceu:refined_saltpeter_ore')
    .itemOutputs('18x gtceu:saltpeter_dust','9x gtceu:salt_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//精炼硝石矿石高速处理

    kc('prts:crushed_sapphire_ore_1')
    .itemInputs('#forge:ores/sapphire')
    .itemOutputs('48x gtceu:sapphire_dust','24x gtceu:green_sapphire_dust','24x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗蓝宝石矿高速处理
    kc('prts:crushed_sapphire_ore_2')
    .itemInputs('gtceu:raw_sapphire')
    .itemOutputs('36x gtceu:sapphire_dust','18x gtceu:green_sapphire_dust','18x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗蓝宝石矿高速处理
    kc('prts:crushed_sapphire_ore_3')
    .itemInputs('gtceu:crushed_sapphire_ore')
    .itemOutputs('18x gtceu:sapphire_dust','9x gtceu:green_sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粉碎蓝宝石矿石高速处理
    kc('prts:crushed_sapphire_ore_4')
    .itemInputs('gtceu:purified_sapphire_ore')
    .itemOutputs('18x gtceu:sapphire_dust','9x gtceu:green_sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//纯净蓝宝石矿石高速处理
    kc('prts:crushed_sapphire_ore_5')
    .itemInputs('gtceu:refined_sapphire_ore')
    .itemOutputs('18x gtceu:sapphire_dust','9x gtceu:green_sapphire_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//精炼蓝宝石矿石高速处理

    kc('prts:crushed_scheelite_ore_1')
    .itemInputs('#forge:ores/scheelite')
    .itemOutputs('48x gtceu:scheelite_dust','16x gtceu:calcium_dust','16x gtceu:molybdenum_dust','16x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗白钨矿矿高速处理
    kc('prts:crushed_scheelite_ore_2')
    .itemInputs('gtceu:raw_scheelite')
    .itemOutputs('36x gtceu:scheelite_dust','12x gtceu:calcium_dust','12x gtceu:molybdenum_dust','12x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗白钨矿矿高速处理
    kc('prts:crushed_scheelite_ore_3')
    .itemInputs('gtceu:crushed_scheelite_ore')
    .itemOutputs('18x gtceu:scheelite_dust','6x gtceu:calcium_dust','6x gtceu:molybdenum_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粉碎白钨矿矿石高速处理
    kc('prts:crushed_scheelite_ore_4')
    .itemInputs('gtceu:purified_scheelite_ore')
    .itemOutputs('18x gtceu:scheelite_dust','6x gtceu:calcium_dust','6x gtceu:molybdenum_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//纯净白钨矿矿石高速处理
    kc('prts:crushed_scheelite_ore_5')
    .itemInputs('gtceu:refined_scheelite_ore')
    .itemOutputs('18x gtceu:scheelite_dust','6x gtceu:calcium_dust','6x gtceu:molybdenum_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//精炼白钨矿矿石高速处理

    kc('prts:crushed_sodalite_ore_1')
    .itemInputs('#forge:ores/sodalite')
    .itemOutputs('240x gtceu:sodalite_dust','120x gtceu:lapis_dust','120x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粗方纳石矿高速处理
    kc('prts:crushed_sodalite_ore_2')
    .itemInputs('gtceu:raw_sodalite')
    .itemOutputs('192x gtceu:sodalite_dust','96x gtceu:lapis_dust','96x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粗方纳石矿高速处理
    kc('prts:crushed_sodalite_ore_3')
    .itemInputs('gtceu:crushed_sodalite_ore')
    .itemOutputs('16x gtceu:sodalite_dust','8x gtceu:lapis_dust','8x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粉碎方纳石矿石高速处理
    kc('prts:crushed_sodalite_ore_4')
    .itemInputs('gtceu:purified_sodalite_ore')
    .itemOutputs('16x gtceu:sodalite_dust','8x gtceu:lapis_dust','8x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//纯净方纳石矿石高速处理
    kc('prts:crushed_sodalite_ore_5')
    .itemInputs('gtceu:refined_sodalite_ore')
    .itemOutputs('16x gtceu:sodalite_dust','8x gtceu:lapis_dust','8x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//精炼方纳石矿石高速处理

    kc('prts:crushed_tungstate_ore_1')
    .itemInputs('#forge:ores/tungstate')
    .itemOutputs('48x gtceu:tungstate_dust','16x gtceu:lithium_dust','16x gtceu:silver_dust','16x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗钨酸锂矿矿高速处理
    kc('prts:crushed_tungstate_ore_2')
    .itemInputs('gtceu:raw_tungstate')
    .itemOutputs('36x gtceu:tungstate_dust','12x gtceu:lithium_dust','12x gtceu:silver_dust','12x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗钨酸锂矿矿高速处理
    kc('prts:crushed_tungstate_ore_3')
    .itemInputs('gtceu:crushed_tungstate_ore')
    .itemOutputs('18x gtceu:tungstate_dust','6x gtceu:lithium_dust','6x gtceu:silver_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粉碎钨酸锂矿矿石高速处理
    kc('prts:crushed_tungstate_ore_4')
    .itemInputs('gtceu:purified_tungstate_ore')
    .itemOutputs('18x gtceu:tungstate_dust','6x gtceu:lithium_dust','6x gtceu:silver_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//纯净钨酸锂矿矿石高速处理
    kc('prts:crushed_tungstate_ore_5')
    .itemInputs('gtceu:refined_tungstate_ore')
    .itemOutputs('18x gtceu:tungstate_dust','6x gtceu:lithium_dust','6x gtceu:silver_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//精炼钨酸锂矿矿石高速处理

    kc('prts:crushed_topaz_ore_1')
    .itemInputs('#forge:ores/topaz')
    .itemOutputs('48x gtceu:topaz_dust','48x gtceu:blue_topaz_dust')
    .duration(20)
    .EUt(16)//粗黄玉矿高速处理
    kc('prts:crushed_topaz_ore_2')
    .itemInputs('gtceu:raw_topaz')
    .itemOutputs('36x gtceu:topaz_dust','36x gtceu:blue_topaz_dust')
    .duration(20)
    .EUt(16)//粗黄玉矿高速处理
    kc('prts:crushed_topaz_ore_3')
    .itemInputs('gtceu:crushed_topaz_ore')
    .itemOutputs('18x gtceu:topaz_dust','18x gtceu:blue_topaz_dust')
    .duration(20)
    .EUt(16)//粉碎黄玉矿石高速处理
    kc('prts:crushed_topaz_ore_4')
    .itemInputs('gtceu:purified_topaz_ore')
    .itemOutputs('18x gtceu:topaz_dust','18x gtceu:blue_topaz_dust')
    .duration(20)
    .EUt(16)//纯净黄玉矿石高速处理
    kc('prts:crushed_topaz_ore_5')
    .itemInputs('gtceu:refined_topaz_ore')
    .itemOutputs('18x gtceu:topaz_dust','18x gtceu:blue_topaz_dust')
    .duration(20)
    .EUt(16)//精炼黄玉矿石高速处理

    kc('prts:crushed_tetrahedrite_ore_1')
    .itemInputs('#forge:ores/tetrahedrite')
    .itemOutputs('48x gtceu:tetrahedrite_dust','12x gtceu:cadmium_dust','12x gtceu:zinc_dust','12x gtceu:antimony_dust','12x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗黝铜矿矿高速处理
    kc('prts:crushed_tetrahedrite_ore_2')
    .itemInputs('gtceu:raw_tetrahedrite')
    .itemOutputs('36x gtceu:tetrahedrite_dust','9x gtceu:cadmium_dust','9x gtceu:zinc_dust','9x gtceu:antimony_dust','9x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗黝铜矿矿高速处理
    kc('prts:crushed_tetrahedrite_ore_3')
    .itemInputs('gtceu:crushed_tetrahedrite_ore')
    .itemOutputs('18x gtceu:tetrahedrite_dust','4x gtceu:cadmium_dust','4x gtceu:zinc_dust','4x gtceu:antimony_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//粉碎黝铜矿矿石高速处理
    kc('prts:crushed_tetrahedrite_ore_4')
    .itemInputs('gtceu:purified_tetrahedrite_ore')
    .itemOutputs('18x gtceu:tetrahedrite_dust','4x gtceu:cadmium_dust','4x gtceu:zinc_dust','4x gtceu:antimony_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//纯净黝铜矿矿石高速处理
    kc('prts:crushed_tetrahedrite_ore_5')
    .itemInputs('gtceu:refined_tetrahedrite_ore')
    .itemOutputs('18x gtceu:tetrahedrite_dust','4x gtceu:cadmium_dust','4x gtceu:zinc_dust','4x gtceu:antimony_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//精炼黝铜矿矿石高速处理

    kc('prts:crushed_stibnite_ore_1')
    .itemInputs('#forge:ores/stibnite')
    .itemOutputs('48x gtceu:stibnite_dust','16x gtceu:cinnabar_dust','16x gtceu:antimony_dust','16x gtceu:antimony_trioxide_dust')
    .duration(20)
    .EUt(16)//粗辉锑矿矿高速处理
    kc('prts:crushed_stibnite_ore_2')
    .itemInputs('gtceu:raw_stibnite')
    .itemOutputs('36x gtceu:stibnite_dust','12x gtceu:cinnabar_dust','12x gtceu:antimony_dust','12x gtceu:antimony_trioxide_dust')
    .duration(20)
    .EUt(16)//粗辉锑矿矿高速处理
    kc('prts:crushed_stibnite_ore_3')
    .itemInputs('gtceu:crushed_stibnite_ore')
    .itemOutputs('18x gtceu:stibnite_dust','6x gtceu:cinnabar_dust','6x gtceu:antimony_dust','6x gtceu:antimony_trioxide_dust')
    .duration(20)
    .EUt(16)//粉碎辉锑矿矿石高速处理
    kc('prts:crushed_stibnite_ore_4')
    .itemInputs('gtceu:purified_stibnite_ore')
    .itemOutputs('18x gtceu:stibnite_dust','6x gtceu:cinnabar_dust','6x gtceu:antimony_dust','6x gtceu:antimony_trioxide_dust')
    .duration(20)
    .EUt(16)//纯净辉锑矿矿石高速处理
    kc('prts:crushed_stibnite_ore_5')
    .itemInputs('gtceu:refined_stibnite_ore')
    .itemOutputs('18x gtceu:stibnite_dust','6x gtceu:cinnabar_dust','6x gtceu:antimony_dust','6x gtceu:antimony_trioxide_dust')
    .duration(20)
    .EUt(16)//精炼辉锑矿矿石高速处理

    kc('prts:crushed_sphalerite_ore_1')
    .itemInputs('#forge:ores/sphalerite')
    .itemOutputs('48x gtceu:sphalerite_dust','16x gtceu:cadmium_dust','16x gtceu:gallium_dust','16x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粗闪锌矿矿高速处理
    kc('prts:crushed_sphalerite_ore_2')
    .itemInputs('gtceu:raw_sphalerite')
    .itemOutputs('36x gtceu:sphalerite_dust','12x gtceu:cadmium_dust','12x gtceu:gallium_dust','12x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粗闪锌矿矿高速处理
    kc('prts:crushed_sphalerite_ore_3')
    .itemInputs('gtceu:crushed_sphalerite_ore')
    .itemOutputs('18x gtceu:sphalerite_dust','6x gtceu:cadmium_dust','6x gtceu:gallium_dust','6x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//粉碎闪锌矿矿石高速处理
    kc('prts:crushed_sphalerite_ore_4')
    .itemInputs('gtceu:purified_sphalerite_ore')
    .itemOutputs('18x gtceu:sphalerite_dust','6x gtceu:cadmium_dust','6x gtceu:gallium_dust','6x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//纯净闪锌矿矿石高速处理
    kc('prts:crushed_sphalerite_ore_5')
    .itemInputs('gtceu:refined_sphalerite_ore')
    .itemOutputs('18x gtceu:sphalerite_dust','6x gtceu:cadmium_dust','6x gtceu:gallium_dust','6x gtceu:yellow_garnet_dust')
    .duration(20)
    .EUt(16)//精炼闪锌矿矿石高速处理

    kc('prts:crushed_spessartine_ore_1')
    .itemInputs('#forge:ores/spessartine')
    .itemOutputs('48x gtceu:spessartine_dust','24x gtceu:manganese_dust','24x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗锰铝榴石矿高速处理
    kc('prts:crushed_spessartine_ore_2')
    .itemInputs('gtceu:raw_spessartine')
    .itemOutputs('36x gtceu:spessartine_dust','18x gtceu:manganese_dust','18x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗锰铝榴石矿高速处理
    kc('prts:crushed_spessartine_ore_3')
    .itemInputs('gtceu:crushed_spessartine_ore')
    .itemOutputs('18x gtceu:spessartine_dust','9x gtceu:manganese_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粉碎锰铝榴石矿石高速处理
    kc('prts:crushed_spessartine_ore_4')
    .itemInputs('gtceu:purified_spessartine_ore')
    .itemOutputs('18x gtceu:spessartine_dust','9x gtceu:manganese_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//纯净锰铝榴石矿石高速处理
    kc('prts:crushed_spessartine_ore_5')
    .itemInputs('gtceu:refined_spessartine_ore')
    .itemOutputs('18x gtceu:spessartine_dust','9x gtceu:manganese_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//精炼锰铝榴石矿石高速处理

    kc('prts:crushed_tantalite_ore_1')
    .itemInputs('#forge:ores/tantalite')
    .itemOutputs('48x gtceu:tantalite_dust','16x gtceu:tantalum_dust','16x gtceu:niobium_dust','16x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗钽铁矿矿高速处理
    kc('prts:crushed_tantalite_ore_2')
    .itemInputs('gtceu:raw_tantalite')
    .itemOutputs('36x gtceu:tantalite_dust','12x gtceu:tantalum_dust','12x gtceu:niobium_dust','12x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粗钽铁矿矿高速处理
    kc('prts:crushed_tantalite_ore_3')
    .itemInputs('gtceu:crushed_tantalite_ore')
    .itemOutputs('18x gtceu:tantalite_dust','6x gtceu:tantalum_dust','6x gtceu:niobium_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//粉碎钽铁矿矿石高速处理
    kc('prts:crushed_tantalite_ore_4')
    .itemInputs('gtceu:purified_tantalite_ore')
    .itemOutputs('18x gtceu:tantalite_dust','6x gtceu:tantalum_dust','6x gtceu:niobium_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//纯净钽铁矿矿石高速处理
    kc('prts:crushed_tantalite_ore_5')
    .itemInputs('gtceu:refined_tantalite_ore')
    .itemOutputs('18x gtceu:tantalite_dust','6x gtceu:tantalum_dust','6x gtceu:niobium_dust','6x gtceu:manganese_dust')
    .duration(20)
    .EUt(16)//精炼钽铁矿矿石高速处理

    kc('prts:crushed_uraninite_ore_1')
    .itemInputs('#forge:ores/uraninite')
    .itemOutputs('48x gtceu:uraninite_dust','24x gtceu:silver_dust','24x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粗晶质铀矿矿高速处理
    kc('prts:crushed_uraninite_ore_2')
    .itemInputs('gtceu:raw_uraninite')
    .itemOutputs('36x gtceu:uraninite_dust','18x gtceu:silver_dust','18x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粗晶质铀矿矿高速处理
    kc('prts:crushed_uraninite_ore_3')
    .itemInputs('gtceu:crushed_uraninite_ore')
    .itemOutputs('18x gtceu:uraninite_dust','9x gtceu:silver_dust','9x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粉碎晶质铀矿矿石高速处理
    kc('prts:crushed_uraninite_ore_4')
    .itemInputs('gtceu:purified_uraninite_ore')
    .itemOutputs('18x gtceu:uraninite_dust','9x gtceu:silver_dust','9x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//纯净晶质铀矿矿石高速处理
    kc('prts:crushed_uraninite_ore_5')
    .itemInputs('gtceu:refined_uraninite_ore')
    .itemOutputs('18x gtceu:uraninite_dust','9x gtceu:silver_dust','9x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//精炼晶质铀矿矿石高速处理

    kc('prts:crushed_wulfenite_ore_1')
    .itemInputs('#forge:ores/wulfenite')
    .itemOutputs('48x gtceu:wulfenite_dust','24x gtceu:manganese_dust','24x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钼铅矿矿高速处理
    kc('prts:crushed_wulfenite_ore_2')
    .itemInputs('gtceu:raw_wulfenite')
    .itemOutputs('36x gtceu:wulfenite_dust','18x gtceu:manganese_dust','18x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗钼铅矿矿高速处理
    kc('prts:crushed_wulfenite_ore_3')
    .itemInputs('gtceu:crushed_wulfenite_ore')
    .itemOutputs('18x gtceu:wulfenite_dust','9x gtceu:manganese_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎钼铅矿矿石高速处理
    kc('prts:crushed_wulfenite_ore_4')
    .itemInputs('gtceu:purified_wulfenite_ore')
    .itemOutputs('18x gtceu:wulfenite_dust','9x gtceu:manganese_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净钼铅矿矿石高速处理
    kc('prts:crushed_wulfenite_ore_5')
    .itemInputs('gtceu:refined_wulfenite_ore')
    .itemOutputs('18x gtceu:wulfenite_dust','9x gtceu:manganese_dust','9x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼钼铅矿矿石高速处理

    kc('prts:crushed_yellow_limonite_ore_1')
    .itemInputs('#forge:ores/yellow_limonite')
    .itemOutputs('48x gtceu:yellow_limonite_dust','16x gtceu:cobalt_oxide_dust','16x gtceu:goethite_dust','16x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗黄褐铁矿矿高速处理
    kc('prts:crushed_yellow_limonite_ore_2')
    .itemInputs('gtceu:raw_yellow_limonite')
    .itemOutputs('36x gtceu:yellow_limonite_dust','12x gtceu:cobalt_oxide_dust','12x gtceu:goethite_dust','12x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粗黄褐铁矿矿高速处理
    kc('prts:crushed_yellow_limonite_ore_3')
    .itemInputs('gtceu:crushed_yellow_limonite_ore')
    .itemOutputs('18x gtceu:yellow_limonite_dust','6x gtceu:cobalt_oxide_dust','6x gtceu:goethite_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//粉碎黄褐铁矿矿石高速处理
    kc('prts:crushed_yellow_limonite_ore_4')
    .itemInputs('gtceu:purified_yellow_limonite_ore')
    .itemOutputs('18x gtceu:yellow_limonite_dust','6x gtceu:cobalt_oxide_dust','6x gtceu:goethite_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//纯净黄褐铁矿矿石高速处理
    kc('prts:crushed_yellow_limonite_ore_5')
    .itemInputs('gtceu:refined_yellow_limonite_ore')
    .itemOutputs('18x gtceu:yellow_limonite_dust','6x gtceu:cobalt_oxide_dust','6x gtceu:goethite_dust','6x gtceu:nickel_dust')
    .duration(20)
    .EUt(16)//精炼黄褐铁矿矿石高速处理

    kc('prts:crushed_nether_quartz_ore_1')
    .itemInputs('#forge:ores/nether_quartz')
    .itemOutputs('48x gtceu:nether_quartz_dust','48x gtceu:quartzite_dust')
    .duration(20)
    .EUt(16)//粗下界石英岩矿高速处理
    kc('prts:crushed_nether_quartz_ore_2')
    .itemInputs('gtceu:raw_nether_quartz')
    .itemOutputs('36x gtceu:nether_quartz_dust','36x gtceu:quartzite_dust')
    .duration(20)
    .EUt(16)//粗下界石英岩矿高速处理
    kc('prts:crushed_nether_quartz_ore_3')
    .itemInputs('gtceu:crushed_nether_quartz_ore')
    .itemOutputs('18x gtceu:nether_quartz_dust','18x gtceu:quartzite_dust')
    .duration(20)
    .EUt(16)//粉碎下界石英岩矿石高速处理
    kc('prts:crushed_nether_quartz_ore_4')
    .itemInputs('gtceu:purified_nether_quartz_ore')
    .itemOutputs('18x gtceu:nether_quartz_dust','18x gtceu:quartzite_dust')
    .duration(20)
    .EUt(16)//纯净下界石英岩矿石高速处理
    kc('prts:crushed_nether_quartz_ore_5')
    .itemInputs('gtceu:refined_nether_quartz_ore')
    .itemOutputs('18x gtceu:nether_quartz_dust','18x gtceu:quartzite_dust')
    .duration(20)
    .EUt(16)//精炼下界石英岩矿石高速处理

    kc('prts:crushed_certus_quartz_ore_1')
    .itemInputs('#forge:ores/certus_quartz')
    .itemOutputs('48x gtceu:certus_quartz_dust','24x gtceu:barite_dust','24x gtceu:nether_quartz_dust')
    .duration(20)
    .EUt(16)//粗赛特斯石英岩矿石矿高速处理
    kc('prts:crushed_certus_quartz_ore_2')
    .itemInputs('gtceu:raw_certus_quartz')
    .itemOutputs('36x gtceu:certus_quartz_dust','18x gtceu:barite_dust','18x gtceu:nether_quartz_dust')
    .duration(20)
    .EUt(16)//粗赛特斯石英岩矿石矿高速处理
    kc('prts:crushed_certus_quartz_ore_3')
    .itemInputs('gtceu:crushed_certus_quartz_ore')
    .itemOutputs('18x gtceu:certus_quartz_dust','9x gtceu:barite_dust','9x gtceu:nether_quartz_dust')
    .duration(20)
    .EUt(16)//粉碎赛特斯石英岩矿石矿石高速处理
    kc('prts:crushed_certus_quartz_ore_4')
    .itemInputs('gtceu:purified_certus_quartz_ore')
    .itemOutputs('18x gtceu:certus_quartz_dust','9x gtceu:barite_dust','9x gtceu:nether_quartz_dust')
    .duration(20)
    .EUt(16)//纯净赛特斯石英岩矿石矿石高速处理
    kc('prts:crushed_certus_quartz_ore_5')
    .itemInputs('gtceu:refined_certus_quartz_ore')
    .itemOutputs('18x gtceu:certus_quartz_dust','9x gtceu:barite_dust','9x gtceu:nether_quartz_dust')
    .duration(20)
    .EUt(16)//精炼赛特斯石英岩矿石矿石高速处理

    kc('prts:crushed_quartzite_ore_1')
    .itemInputs('#forge:ores/quartzite')
    .itemOutputs('48x gtceu:quartzite_dust','24x gtceu:barite_dust','24x gtceu:certus_quartz_dust')
    .duration(20)
    .EUt(16)//粗石英岩矿石矿高速处理
    kc('prts:crushed_quartzite_ore_2')
    .itemInputs('gtceu:raw_quartzite')
    .itemOutputs('36x gtceu:quartzite_dust','18x gtceu:barite_dust','18x gtceu:certus_quartz_dust')
    .duration(20)
    .EUt(16)//粗石英岩矿石矿高速处理
    kc('prts:crushed_quartzite_ore_3')
    .itemInputs('gtceu:crushed_quartzite_ore')
    .itemOutputs('18x gtceu:quartzite_dust','9x gtceu:barite_dust','9x gtceu:certus_quartz_dust')
    .duration(20)
    .EUt(16)//粉碎石英岩矿石矿石高速处理
    kc('prts:crushed_quartzite_ore_4')
    .itemInputs('gtceu:purified_quartzite_ore')
    .itemOutputs('18x gtceu:quartzite_dust','9x gtceu:barite_dust','9x gtceu:certus_quartz_dust')
    .duration(20)
    .EUt(16)//纯净石英岩矿石矿石高速处理
    kc('prts:crushed_quartzite_ore_5')
    .itemInputs('gtceu:refined_quartzite_ore')
    .itemOutputs('18x gtceu:quartzite_dust','9x gtceu:barite_dust','9x gtceu:certus_quartz_dust')
    .duration(20)
    .EUt(16)//精炼石英岩矿石矿石高速处理

    kc('prts:crushed_graphite_ore_1')
    .itemInputs('#forge:ores/graphite')
    .itemOutputs('48x gtceu:graphite_dust','48x gtceu:carbon_dust')
    .duration(20)
    .EUt(16)//粗石墨矿高速处理
    kc('prts:crushed_graphite_ore_2')
    .itemInputs('gtceu:raw_graphite')
    .itemOutputs('36x gtceu:graphite_dust','36x gtceu:carbon_dust')
    .duration(20)
    .EUt(16)//粗石墨矿高速处理
    kc('prts:crushed_graphite_ore_3')
    .itemInputs('gtceu:crushed_graphite_ore')
    .itemOutputs('18x gtceu:graphite_dust','18x gtceu:carbon_dust')
    .duration(20)
    .EUt(16)//粉碎石墨矿石高速处理
    kc('prts:crushed_graphite_ore_4')
    .itemInputs('gtceu:purified_graphite_ore')
    .itemOutputs('18x gtceu:graphite_dust','18x gtceu:carbon_dust')
    .duration(20)
    .EUt(16)//纯净石墨矿石高速处理
    kc('prts:crushed_graphite_ore_5')
    .itemInputs('gtceu:refined_graphite_ore')
    .itemOutputs('18x gtceu:graphite_dust','18x gtceu:carbon_dust')
    .duration(20)
    .EUt(16)//精炼石墨矿石高速处理

    kc('prts:crushed_lepidolite_ore_1')
    .itemInputs('#forge:ores/lepidolite')
    .itemOutputs('48x gtceu:lepidolite_dust','16x gtceu:boron_dust','16x gtceu:caesium_dust','16x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粗锂云母矿高速处理
    kc('prts:crushed_lepidolite_ore_2')
    .itemInputs('gtceu:raw_lepidolite')
    .itemOutputs('36x gtceu:lepidolite_dust','12x gtceu:boron_dust','12x gtceu:caesium_dust','12x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粗锂云母矿高速处理
    kc('prts:crushed_lepidolite_ore_3')
    .itemInputs('gtceu:crushed_lepidolite_ore')
    .itemOutputs('18x gtceu:lepidolite_dust','6x gtceu:boron_dust','6x gtceu:caesium_dust','6x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//粉碎锂云母矿石高速处理
    kc('prts:crushed_lepidolite_ore_4')
    .itemInputs('gtceu:purified_lepidolite_ore')
    .itemOutputs('18x gtceu:lepidolite_dust','6x gtceu:boron_dust','6x gtceu:caesium_dust','6x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//纯净锂云母矿石高速处理
    kc('prts:crushed_lepidolite_ore_5')
    .itemInputs('gtceu:refined_lepidolite_ore')
    .itemOutputs('18x gtceu:lepidolite_dust','6x gtceu:boron_dust','6x gtceu:caesium_dust','6x gtceu:lithium_dust')
    .duration(20)
    .EUt(16)//精炼锂云母矿石高速处理

    kc('prts:crushed_spodumene_ore_1')
    .itemInputs('#forge:ores/spodumene')
    .itemOutputs('48x gtceu:spodumene_dust','24x gtceu:lithium_dust','24x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗锂辉矿矿高速处理
    kc('prts:crushed_spodumene_ore_2')
    .itemInputs('gtceu:raw_spodumene')
    .itemOutputs('36x gtceu:spodumene_dust','18x gtceu:lithium_dust','18x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗锂辉矿矿高速处理
    kc('prts:crushed_spodumene_ore_3')
    .itemInputs('gtceu:crushed_spodumene_ore')
    .itemOutputs('18x gtceu:spodumene_dust','9x gtceu:lithium_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粉碎锂辉矿矿石高速处理
    kc('prts:crushed_spodumene_ore_4')
    .itemInputs('gtceu:purified_spodumene_ore')
    .itemOutputs('18x gtceu:spodumene_dust','9x gtceu:lithium_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//纯净锂辉矿矿石高速处理
    kc('prts:crushed_spodumene_ore_5')
    .itemInputs('gtceu:refined_spodumene_ore')
    .itemOutputs('18x gtceu:spodumene_dust','9x gtceu:lithium_dust','9x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//精炼锂辉矿矿石高速处理

    kc('prts:crushed_pentlandite_ore_1')
    .itemInputs('#forge:ores/pentlandite')
    .itemOutputs('48x gtceu:pentlandite_dust','16x gtceu:cobalt_dust','16x gtceu:sulfur_dust','16x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗镍黄铁矿矿高速处理
    kc('prts:crushed_pentlandite_ore_2')
    .itemInputs('gtceu:raw_pentlandite')
    .itemOutputs('36x gtceu:pentlandite_dust','12x gtceu:cobalt_dust','12x gtceu:sulfur_dust','12x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粗镍黄铁矿矿高速处理
    kc('prts:crushed_pentlandite_ore_3')
    .itemInputs('gtceu:crushed_pentlandite_ore')
    .itemOutputs('18x gtceu:pentlandite_dust','6x gtceu:cobalt_dust','6x gtceu:sulfur_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//粉碎镍黄铁矿矿石高速处理
    kc('prts:crushed_pentlandite_ore_4')
    .itemInputs('gtceu:purified_pentlandite_ore')
    .itemOutputs('18x gtceu:pentlandite_dust','6x gtceu:cobalt_dust','6x gtceu:sulfur_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//纯净镍黄铁矿矿石高速处理
    kc('prts:crushed_pentlandite_ore_5')
    .itemInputs('gtceu:refined_pentlandite_ore')
    .itemOutputs('18x gtceu:pentlandite_dust','6x gtceu:cobalt_dust','6x gtceu:sulfur_dust','6x gtceu:iron_dust')
    .duration(20)
    .EUt(16)//精炼镍黄铁矿矿石高速处理

    kc('prts:crushed_bastnasite_ore_1')
    .itemInputs('#forge:ores/bastnasite')
    .itemOutputs('48x gtceu:bastnasite_dust','24x gtceu:rare_earth_dust','24x gtceu:neodymium_dust')
    .duration(20)
    .EUt(16)//粗氟碳镧铈矿矿高速处理
    kc('prts:crushed_bastnasite_ore_2')
    .itemInputs('gtceu:raw_bastnasite')
    .itemOutputs('36x gtceu:bastnasite_dust','18x gtceu:rare_earth_dust','18x gtceu:neodymium_dust')
    .duration(20)
    .EUt(16)//粗氟碳镧铈矿矿高速处理
    kc('prts:crushed_bastnasite_ore_3')
    .itemInputs('gtceu:crushed_bastnasite_ore')
    .itemOutputs('18x gtceu:bastnasite_dust','9x gtceu:rare_earth_dust','9x gtceu:neodymium_dust')
    .duration(20)
    .EUt(16)//粉碎氟碳镧铈矿矿石高速处理
    kc('prts:crushed_bastnasite_ore_4')
    .itemInputs('gtceu:purified_bastnasite_ore')
    .itemOutputs('18x gtceu:bastnasite_dust','9x gtceu:rare_earth_dust','9x gtceu:neodymium_dust')
    .duration(20)
    .EUt(16)//纯净氟碳镧铈矿矿石高速处理
    kc('prts:crushed_bastnasite_ore_5')
    .itemInputs('gtceu:refined_bastnasite_ore')
    .itemOutputs('18x gtceu:bastnasite_dust','9x gtceu:rare_earth_dust','9x gtceu:neodymium_dust')
    .duration(20)
    .EUt(16)//精炼氟碳镧铈矿矿石高速处理

    kc('prts:crushed_realgar_ore_1')
    .itemInputs('#forge:ores/realgar')
    .itemOutputs('48x gtceu:realgar_dust','16x gtceu:barite_dust','16x gtceu:antimony_dust','16x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗雄黄矿矿高速处理
    kc('prts:crushed_realgar_ore_2')
    .itemInputs('gtceu:raw_realgar')
    .itemOutputs('36x gtceu:realgar_dust','12x gtceu:barite_dust','12x gtceu:antimony_dust','12x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗雄黄矿矿高速处理
    kc('prts:crushed_realgar_ore_3')
    .itemInputs('gtceu:crushed_realgar_ore')
    .itemOutputs('18x gtceu:realgar_dust','6x gtceu:barite_dust','6x gtceu:antimony_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎雄黄矿矿石高速处理
    kc('prts:crushed_realgar_ore_4')
    .itemInputs('gtceu:purified_realgar_ore')
    .itemOutputs('18x gtceu:realgar_dust','6x gtceu:barite_dust','6x gtceu:antimony_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净雄黄矿矿石高速处理
    kc('prts:crushed_realgar_ore_5')
    .itemInputs('gtceu:refined_realgar_ore')
    .itemOutputs('18x gtceu:realgar_dust','6x gtceu:barite_dust','6x gtceu:antimony_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼雄黄矿矿石高速处理

    kc('prts:crushed_chalcocite_ore_1')
    .itemInputs('#forge:ores/chalcocite')
    .itemOutputs('48x gtceu:chalcocite_dust','12x gtceu:silver_dust','12x gtceu:massicot_dust','12x gtceu:sulfur_dust','12x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗辉铜矿矿高速处理
    kc('prts:crushed_chalcocite_ore_2')
    .itemInputs('gtceu:raw_chalcocite')
    .itemOutputs('36x gtceu:chalcocite_dust','9x gtceu:silver_dust','9x gtceu:massicot_dust','9x gtceu:sulfur_dust','9x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗辉铜矿矿高速处理
    kc('prts:crushed_chalcocite_ore_3')
    .itemInputs('gtceu:crushed_chalcocite_ore')
    .itemOutputs('18x gtceu:chalcocite_dust','4x gtceu:silver_dust','4x gtceu:massicot_dust','4x gtceu:sulfur_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//粉碎辉铜矿矿石高速处理
    kc('prts:crushed_chalcocite_ore_4')
    .itemInputs('gtceu:purified_chalcocite_ore')
    .itemOutputs('18x gtceu:chalcocite_dust','4x gtceu:silver_dust','4x gtceu:massicot_dust','4x gtceu:sulfur_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//纯净辉铜矿矿石高速处理
    kc('prts:crushed_chalcocite_ore_5')
    .itemInputs('gtceu:refined_chalcocite_ore')
    .itemOutputs('18x gtceu:chalcocite_dust','4x gtceu:silver_dust','4x gtceu:massicot_dust','4x gtceu:sulfur_dust','4x gtceu:platinum_group_sludge_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//精炼辉铜矿矿石高速处理

    kc('prts:crushed_bornite_ore_1')
    .itemInputs('#forge:ores/bornite')
    .itemOutputs('48x gtceu:bornite_dust','12x gtceu:cadmium_dust','12x gtceu:cobalt_dust','12x gtceu:platinum_group_sludge_dust','12x gtceu:pyrite_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗斑铜矿矿高速处理
    kc('prts:crushed_bornite_ore_2')
    .itemInputs('gtceu:raw_bornite')
    .itemOutputs('36x gtceu:bornite_dust','9x gtceu:cadmium_dust','9x gtceu:cobalt_dust','9x gtceu:platinum_group_sludge_dust','9x gtceu:pyrite_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',100))
    .duration(20)
    .EUt(16)//粗斑铜矿矿高速处理
    kc('prts:crushed_bornite_ore_3')
    .itemInputs('gtceu:crushed_bornite_ore')
    .itemOutputs('18x gtceu:bornite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:platinum_group_sludge_dust','4x gtceu:pyrite_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//粉碎斑铜矿矿石高速处理
    kc('prts:crushed_bornite_ore_4')
    .itemInputs('gtceu:purified_bornite_ore')
    .itemOutputs('18x gtceu:bornite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:platinum_group_sludge_dust','4x gtceu:pyrite_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//纯净斑铜矿矿石高速处理
    kc('prts:crushed_bornite_ore_5')
    .itemInputs('gtceu:refined_bornite_ore')
    .itemOutputs('18x gtceu:bornite_dust','4x gtceu:cadmium_dust','4x gtceu:cobalt_dust','4x gtceu:platinum_group_sludge_dust','4x gtceu:pyrite_dust')
    .inputFluids(Fluid.of('gtceu:nitric_acid',50))
    .duration(20)
    .EUt(16)//精炼斑铜矿矿石高速处理

    kc('prts:crushed_glauconite_sand_ore_1')
    .itemInputs('#forge:ores/glauconite_sand')
    .itemOutputs('48x gtceu:glauconite_sand_dust','16x gtceu:iron_dust','16x gtceu:aluminium_dust','16x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粗海绿石砂矿高速处理
    kc('prts:crushed_glauconite_sand_ore_2')
    .itemInputs('gtceu:raw_glauconite_sand')
    .itemOutputs('36x gtceu:glauconite_sand_dust','12x gtceu:iron_dust','12x gtceu:aluminium_dust','12x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粗海绿石砂矿高速处理
    kc('prts:crushed_glauconite_sand_ore_3')
    .itemInputs('gtceu:crushed_glauconite_sand_ore')
    .itemOutputs('18x gtceu:glauconite_sand_dust','6x gtceu:iron_dust','6x gtceu:aluminium_dust','6x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粉碎海绿石砂矿石高速处理
    kc('prts:crushed_glauconite_sand_ore_4')
    .itemInputs('gtceu:purified_glauconite_sand_ore')
    .itemOutputs('18x gtceu:glauconite_sand_dust','6x gtceu:iron_dust','6x gtceu:aluminium_dust','6x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//纯净海绿石砂矿石高速处理
    kc('prts:crushed_glauconite_sand_ore_5')
    .itemInputs('gtceu:refined_glauconite_sand_ore')
    .itemOutputs('18x gtceu:glauconite_sand_dust','6x gtceu:iron_dust','6x gtceu:aluminium_dust','6x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//精炼海绿石砂矿石高速处理

    kc('prts:crushed_malachite_ore_1')
    .itemInputs('#forge:ores/malachite')
    .itemOutputs('48x gtceu:malachite_dust','16x gtceu:zincite_dust','16x gtceu:calcite_dust','16x gtceu:goethite_dust')
    .duration(20)
    .EUt(16)//粗孔雀石矿高速处理
    kc('prts:crushed_malachite_ore_2')
    .itemInputs('gtceu:raw_malachite')
    .itemOutputs('36x gtceu:malachite_dust','12x gtceu:zincite_dust','12x gtceu:calcite_dust','12x gtceu:goethite_dust')
    .duration(20)
    .EUt(16)//粗孔雀石矿高速处理
    kc('prts:crushed_malachite_ore_3')
    .itemInputs('gtceu:crushed_malachite_ore')
    .itemOutputs('18x gtceu:malachite_dust','6x gtceu:zincite_dust','6x gtceu:calcite_dust','6x gtceu:goethite_dust')
    .duration(20)
    .EUt(16)//粉碎孔雀石矿石高速处理
    kc('prts:crushed_malachite_ore_4')
    .itemInputs('gtceu:purified_malachite_ore')
    .itemOutputs('18x gtceu:malachite_dust','6x gtceu:zincite_dust','6x gtceu:calcite_dust','6x gtceu:goethite_dust')
    .duration(20)
    .EUt(16)//纯净孔雀石矿石高速处理
    kc('prts:crushed_malachite_ore_5')
    .itemInputs('gtceu:refined_malachite_ore')
    .itemOutputs('18x gtceu:malachite_dust','6x gtceu:zincite_dust','6x gtceu:calcite_dust','6x gtceu:goethite_dust')
    .duration(20)
    .EUt(16)//精炼孔雀石矿石高速处理

    kc('prts:crushed_mica_ore_1')
    .itemInputs('#forge:ores/mica')
    .itemOutputs('48x gtceu:mica_dust','24x gtceu:aluminium_dust','24x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粗云母矿高速处理
    kc('prts:crushed_mica_ore_2')
    .itemInputs('gtceu:raw_mica')
    .itemOutputs('36x gtceu:mica_dust','18x gtceu:aluminium_dust','18x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粗云母矿高速处理
    kc('prts:crushed_mica_ore_3')
    .itemInputs('gtceu:crushed_mica_ore')
    .itemOutputs('18x gtceu:mica_dust','9x gtceu:aluminium_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//粉碎云母矿石高速处理
    kc('prts:crushed_mica_ore_4')
    .itemInputs('gtceu:purified_mica_ore')
    .itemOutputs('18x gtceu:mica_dust','9x gtceu:aluminium_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//纯净云母矿石高速处理
    kc('prts:crushed_mica_ore_5')
    .itemInputs('gtceu:refined_mica_ore')
    .itemOutputs('18x gtceu:mica_dust','9x gtceu:aluminium_dust','9x gtceu:potassium_dust')
    .duration(20)
    .EUt(16)//精炼云母矿石高速处理

    kc('prts:crushed_barite_ore_1')
    .itemInputs('#forge:ores/barite')
    .itemOutputs('96x gtceu:barite_dust')
    .duration(20)
    .EUt(16)//粗重晶石矿高速处理
    kc('prts:crushed_barite_ore_2')
    .itemInputs('gtceu:raw_barite')
    .itemOutputs('72x gtceu:barite_dust')
    .duration(20)
    .EUt(16)//粗重晶石矿高速处理
    kc('prts:crushed_barite_ore_3')
    .itemInputs('gtceu:crushed_barite_ore')
    .itemOutputs('36x gtceu:barite_dust')
    .duration(20)
    .EUt(16)//粉碎重晶石矿石高速处理
    kc('prts:crushed_barite_ore_4')
    .itemInputs('gtceu:purified_barite_ore')
    .itemOutputs('36x gtceu:barite_dust')
    .duration(20)
    .EUt(16)//纯净重晶石矿石高速处理
    kc('prts:crushed_barite_ore_5')
    .itemInputs('gtceu:refined_barite_ore')
    .itemOutputs('36x gtceu:barite_dust')
    .duration(20)
    .EUt(16)//精炼重晶石矿石高速处理

    kc('prts:crushed_alunite_ore_1')
    .itemInputs('#forge:ores/alunite')
    .itemOutputs('96x gtceu:alunite_dust')
    .duration(20)
    .EUt(16)//粗明矾石矿高速处理
    kc('prts:crushed_alunite_ore_2')
    .itemInputs('gtceu:raw_alunite')
    .itemOutputs('72x gtceu:alunite_dust')
    .duration(20)
    .EUt(16)//粗明矾石矿高速处理
    kc('prts:crushed_alunite_ore_3')
    .itemInputs('gtceu:crushed_alunite_ore')
    .itemOutputs('36x gtceu:alunite_dust')
    .duration(20)
    .EUt(16)//粉碎明矾石矿石高速处理
    kc('prts:crushed_alunite_ore_4')
    .itemInputs('gtceu:purified_alunite_ore')
    .itemOutputs('36x gtceu:alunite_dust')
    .duration(20)
    .EUt(16)//纯净明矾石矿石高速处理
    kc('prts:crushed_alunite_ore_5')
    .itemInputs('gtceu:refined_alunite_ore')
    .itemOutputs('36x gtceu:alunite_dust')
    .duration(20)
    .EUt(16)//精炼明矾石矿石高速处理
    
    kc('prts:crushed_talc_ore_1')
    .itemInputs('#forge:ores/talc')
    .itemOutputs('48x gtceu:talc_dust','24x gtceu:carbon_dust','24x gtceu:clay_dust')
    .duration(20)
    .EUt(16)//粗滑石矿高速处理
    kc('prts:crushed_talc_ore_2')
    .itemInputs('gtceu:raw_talc')
    .itemOutputs('36x gtceu:talc_dust','18x gtceu:carbon_dust','18x gtceu:clay_dust')
    .duration(20)
    .EUt(16)//粗滑石矿高速处理
    kc('prts:crushed_talc_ore_3')
    .itemInputs('gtceu:crushed_talc_ore')
    .itemOutputs('18x gtceu:talc_dust','9x gtceu:carbon_dust','9x gtceu:clay_dust')
    .duration(20)
    .EUt(16)//粉碎滑石矿石高速处理
    kc('prts:crushed_talc_ore_4')
    .itemInputs('gtceu:purified_talc_ore')
    .itemOutputs('18x gtceu:talc_dust','9x gtceu:carbon_dust','9x gtceu:clay_dust')
    .duration(20)
    .EUt(16)//纯净滑石矿石高速处理
    kc('prts:crushed_talc_ore_5')
    .itemInputs('gtceu:refined_talc_ore')
    .itemOutputs('18x gtceu:talc_dust','9x gtceu:carbon_dust','9x gtceu:clay_dust')
    .duration(20)
    .EUt(16)//精炼滑石矿石高速处理

    kc('prts:crushed_soapstone_ore_1')
    .itemInputs('#forge:ores/soapstone')
    .itemOutputs('48x gtceu:soapstone_dust','16x gtceu:calcite_dust','16x gtceu:magnesium_dust','16x gtceu:silicon_dioxide_dust')
    .duration(20)
    .EUt(16)//粗皂石矿高速处理
    kc('prts:crushed_soapstone_ore_2')
    .itemInputs('gtceu:raw_soapstone')
    .itemOutputs('36x gtceu:soapstone_dust','12x gtceu:calcite_dust','12x gtceu:magnesium_dust','12x gtceu:silicon_dioxide_dust')
    .duration(20)
    .EUt(16)//粗皂石矿高速处理
    kc('prts:crushed_soapstone_ore_3')
    .itemInputs('gtceu:crushed_soapstone_ore')
    .itemOutputs('18x gtceu:soapstone_dust','6x gtceu:calcite_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dioxide_dust')
    .duration(20)
    .EUt(16)//粉碎皂石矿石高速处理
    kc('prts:crushed_soapstone_ore_4')
    .itemInputs('gtceu:purified_soapstone_ore')
    .itemOutputs('18x gtceu:soapstone_dust','6x gtceu:calcite_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dioxide_dust')
    .duration(20)
    .EUt(16)//纯净皂石矿石高速处理
    kc('prts:crushed_soapstone_ore_5')
    .itemInputs('gtceu:refined_soapstone_ore')
    .itemOutputs('18x gtceu:soapstone_dust','6x gtceu:calcite_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dioxide_dust')
    .duration(20)
    .EUt(16)//精炼皂石矿石高速处理

    kc('prts:crushed_lapis_ore_1')
    .itemInputs('#forge:ores/lapis')
    .itemOutputs('48x gtceu:lapis_dust','16x gtceu:pyrite_dust','16x gtceu:sodalite_dust','16x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粗青金石矿高速处理
    kc('prts:crushed_lapis_ore_2')
    .itemInputs('gtceu:raw_lapis')
    .itemOutputs('36x gtceu:lapis_dust','12x gtceu:pyrite_dust','12x gtceu:sodalite_dust','12x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粗青金石矿高速处理
    kc('prts:crushed_lapis_ore_3')
    .itemInputs('gtceu:crushed_lapis_ore')
    .itemOutputs('18x gtceu:lapis_dust','6x gtceu:pyrite_dust','6x gtceu:sodalite_dust','6x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//粉碎青金石矿石高速处理
    kc('prts:crushed_lapis_ore_4')
    .itemInputs('gtceu:purified_lapis_ore')
    .itemOutputs('18x gtceu:lapis_dust','6x gtceu:pyrite_dust','6x gtceu:sodalite_dust','6x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//纯净青金石矿石高速处理
    kc('prts:crushed_lapis_ore_5')
    .itemInputs('gtceu:refined_lapis_ore')
    .itemOutputs('18x gtceu:lapis_dust','6x gtceu:pyrite_dust','6x gtceu:sodalite_dust','6x gtceu:lazurite_dust')
    .duration(20)
    .EUt(16)//精炼青金石矿石高速处理

    kc('prts:crushed_amethyst_ore_1')
    .itemInputs('#forge:ores/amethyst')
    .itemOutputs('96x gtceu:amethyst_dust')
    .duration(20)
    .EUt(16)//粗紫水晶矿高速处理
    kc('prts:crushed_amethyst_ore_2')
    .itemInputs('gtceu:raw_amethyst')
    .itemOutputs('72x gtceu:amethyst_dust')
    .duration(20)
    .EUt(16)//粗紫水晶矿高速处理
    kc('prts:crushed_amethyst_ore_3')
    .itemInputs('gtceu:crushed_amethyst_ore')
    .itemOutputs('36x gtceu:amethyst_dust')
    .duration(20)
    .EUt(16)//粉碎紫水晶矿石高速处理
    kc('prts:crushed_amethyst_ore_4')
    .itemInputs('gtceu:purified_amethyst_ore')
    .itemOutputs('36x gtceu:amethyst_dust')
    .duration(20)
    .EUt(16)//纯净紫水晶矿石高速处理
    kc('prts:crushed_amethyst_ore_5')
    .itemInputs('gtceu:refined_amethyst_ore')
    .itemOutputs('36x gtceu:amethyst_dust')
    .duration(20)
    .EUt(16)//精炼紫水晶矿石高速处理

    kc('prts:crushed_opal_ore_1')
    .itemInputs('#forge:ores/opal')
    .itemOutputs('96x gtceu:opal_dust')
    .duration(20)
    .EUt(16)//粗猫眼石矿高速处理
    kc('prts:crushed_opal_ore_2')
    .itemInputs('gtceu:raw_opal')
    .itemOutputs('72x gtceu:opal_dust')
    .duration(20)
    .EUt(16)//粗猫眼石矿高速处理
    kc('prts:crushed_opal_ore_3')
    .itemInputs('gtceu:crushed_opal_ore')
    .itemOutputs('36x gtceu:opal_dust')
    .duration(20)
    .EUt(16)//粉碎猫眼石矿石高速处理
    kc('prts:crushed_opal_ore_4')
    .itemInputs('gtceu:purified_opal_ore')
    .itemOutputs('36x gtceu:opal_dust')
    .duration(20)
    .EUt(16)//纯净猫眼石矿石高速处理
    kc('prts:crushed_opal_ore_5')
    .itemInputs('gtceu:refined_opal_ore')
    .itemOutputs('36x gtceu:opal_dust')
    .duration(20)
    .EUt(16)//精炼猫眼石矿石高速处理

    kc('prts:crushed_olivine_ore_1')
    .itemInputs('#forge:ores/olivine')
    .itemOutputs('48x gtceu:olivine_dust','16x gtceu:manganese_dust','16x gtceu:magnesium_dust','16x gtceu:pyrope_dust')
    .duration(20)
    .EUt(16)//粗橄榄石矿高速处理
    kc('prts:crushed_olivine_ore_2')
    .itemInputs('gtceu:raw_olivine')
    .itemOutputs('36x gtceu:olivine_dust','12x gtceu:manganese_dust','12x gtceu:magnesium_dust','12x gtceu:pyrope_dust')
    .duration(20)
    .EUt(16)//粗橄榄石矿高速处理
    kc('prts:crushed_olivine_ore_3')
    .itemInputs('gtceu:crushed_olivine_ore')
    .itemOutputs('18x gtceu:olivine_dust','6x gtceu:manganese_dust','6x gtceu:magnesium_dust','6x gtceu:pyrope_dust')
    .duration(20)
    .EUt(16)//粉碎橄榄石矿石高速处理
    kc('prts:crushed_olivine_ore_4')
    .itemInputs('gtceu:purified_olivine_ore')
    .itemOutputs('18x gtceu:olivine_dust','6x gtceu:manganese_dust','6x gtceu:magnesium_dust','6x gtceu:pyrope_dust')
    .duration(20)
    .EUt(16)//纯净橄榄石矿石高速处理
    kc('prts:crushed_olivine_ore_5')
    .itemInputs('gtceu:refined_olivine_ore')
    .itemOutputs('18x gtceu:olivine_dust','6x gtceu:manganese_dust','6x gtceu:magnesium_dust','6x gtceu:pyrope_dust')
    .duration(20)
    .EUt(16)//精炼橄榄石矿石高速处理

    kc('prts:crushed_oilsands_ore_1')
    .itemInputs('#forge:ores/oilsands')
    .itemOutputs('96x gtceu:oilsands_dust')
    .duration(20)
    .EUt(16)//粗油砂矿高速处理
    kc('prts:crushed_oilsands_ore_2')
    .itemInputs('gtceu:raw_oilsands')
    .itemOutputs('72x gtceu:oilsands_dust')
    .duration(20)
    .EUt(16)//粗油砂矿高速处理
    kc('prts:crushed_oilsands_ore_3')
    .itemInputs('gtceu:crushed_oilsands_ore')
    .itemOutputs('36x gtceu:oilsands_dust')
    .duration(20)
    .EUt(16)//粉碎油砂矿石高速处理
    kc('prts:crushed_oilsands_ore_4')
    .itemInputs('gtceu:purified_oilsands_ore')
    .itemOutputs('36x gtceu:oilsands_dust')
    .duration(20)
    .EUt(16)//纯净油砂矿石高速处理
    kc('prts:crushed_oilsands_ore_5')
    .itemInputs('gtceu:refined_oilsands_ore')
    .itemOutputs('36x gtceu:oilsands_dust')
    .duration(20)
    .EUt(16)//精炼油砂矿石高速处理

    kc('prts:crushed_pyrochlore_ore_1')
    .itemInputs('#forge:ores/pyrochlore')
    .itemOutputs('48x gtceu:pyrochlore_dust','16x gtceu:niobium_dust','16x gtceu:calcium_dust','16x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粗烧绿石矿高速处理
    kc('prts:crushed_pyrochlore_ore_2')
    .itemInputs('gtceu:raw_pyrochlore')
    .itemOutputs('36x gtceu:pyrochlore_dust','12x gtceu:niobium_dust','12x gtceu:calcium_dust','12x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粗烧绿石矿高速处理
    kc('prts:crushed_pyrochlore_ore_3')
    .itemInputs('gtceu:crushed_pyrochlore_ore')
    .itemOutputs('18x gtceu:pyrochlore_dust','6x gtceu:niobium_dust','6x gtceu:calcium_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粉碎烧绿石矿石高速处理
    kc('prts:crushed_pyrochlore_ore_4')
    .itemInputs('gtceu:purified_pyrochlore_ore')
    .itemOutputs('18x gtceu:pyrochlore_dust','6x gtceu:niobium_dust','6x gtceu:calcium_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//纯净烧绿石矿石高速处理
    kc('prts:crushed_pyrochlore_ore_5')
    .itemInputs('gtceu:refined_pyrochlore_ore')
    .itemOutputs('18x gtceu:pyrochlore_dust','6x gtceu:niobium_dust','6x gtceu:calcium_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//精炼烧绿石矿石高速处理

    kc('prts:crushed_kyanite_ore_1')
    .itemInputs('#forge:ores/kyanite')
    .itemOutputs('48x gtceu:kyanite_dust','16x gtceu:silicon_dust','16x gtceu:aluminium_dust','16x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粗蓝晶石矿高速处理
    kc('prts:crushed_kyanite_ore_2')
    .itemInputs('gtceu:raw_kyanite')
    .itemOutputs('36x gtceu:kyanite_dust','12x gtceu:silicon_dust','12x gtceu:aluminium_dust','12x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粗蓝晶石矿高速处理
    kc('prts:crushed_kyanite_ore_3')
    .itemInputs('gtceu:crushed_kyanite_ore')
    .itemOutputs('18x gtceu:kyanite_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust','6x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粉碎蓝晶石矿石高速处理
    kc('prts:crushed_kyanite_ore_4')
    .itemInputs('gtceu:purified_kyanite_ore')
    .itemOutputs('18x gtceu:kyanite_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust','6x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//纯净蓝晶石矿石高速处理
    kc('prts:crushed_kyanite_ore_5')
    .itemInputs('gtceu:refined_kyanite_ore')
    .itemOutputs('18x gtceu:kyanite_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust','6x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//精炼蓝晶石矿石高速处理

    kc('prts:crushed_apatite_ore_1')
    .itemInputs('#forge:ores/apatite')
    .itemOutputs('48x gtceu:apatite_dust','12x gtceu:pyrochlore_dust','12x gtceu:phosphate_dust','12x gtceu:tricalcium_phosphate_dust','12x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粗磷灰石矿高速处理
    kc('prts:crushed_apatite_ore_2')
    .itemInputs('gtceu:raw_apatite')
    .itemOutputs('36x gtceu:apatite_dust','9x gtceu:pyrochlore_dust','9x gtceu:phosphate_dust','9x gtceu:tricalcium_phosphate_dust','9x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粗磷灰石矿高速处理
    kc('prts:crushed_apatite_ore_3')
    .itemInputs('gtceu:crushed_apatite_ore')
    .itemOutputs('18x gtceu:apatite_dust','4x gtceu:pyrochlore_dust','4x gtceu:phosphate_dust','4x gtceu:tricalcium_phosphate_dust','4x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//粉碎磷灰石矿石高速处理
    kc('prts:crushed_apatite_ore_4')
    .itemInputs('gtceu:purified_apatite_ore')
    .itemOutputs('18x gtceu:apatite_dust','4x gtceu:pyrochlore_dust','4x gtceu:phosphate_dust','4x gtceu:tricalcium_phosphate_dust','4x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//纯净磷灰石矿石高速处理
    kc('prts:crushed_apatite_ore_5')
    .itemInputs('gtceu:refined_apatite_ore')
    .itemOutputs('18x gtceu:apatite_dust','4x gtceu:pyrochlore_dust','4x gtceu:phosphate_dust','4x gtceu:tricalcium_phosphate_dust','4x gtceu:talc_dust')
    .duration(20)
    .EUt(16)//精炼磷灰石矿石高速处理

    kc('prts:crushed_tricalcium_phosphate_ore_1')
    .itemInputs('#forge:ores/tricalcium_phosphate')
    .itemOutputs('48x gtceu:tricalcium_phosphate_dust','16x gtceu:pyrochlore_dust','16x gtceu:phosphate_dust','16x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粗磷酸三钙矿高速处理
    kc('prts:crushed_tricalcium_phosphate_ore_2')
    .itemInputs('gtceu:raw_tricalcium_phosphate')
    .itemOutputs('36x gtceu:tricalcium_phosphate_dust','12x gtceu:pyrochlore_dust','12x gtceu:phosphate_dust','12x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粗磷酸三钙矿高速处理
    kc('prts:crushed_tricalcium_phosphate_ore_3')
    .itemInputs('gtceu:crushed_tricalcium_phosphate_ore')
    .itemOutputs('18x gtceu:tricalcium_phosphate_dust','6x gtceu:pyrochlore_dust','6x gtceu:phosphate_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//粉碎磷酸三钙矿石高速处理
    kc('prts:crushed_tricalcium_phosphate_ore_4')
    .itemInputs('gtceu:purified_tricalcium_phosphate_ore')
    .itemOutputs('18x gtceu:tricalcium_phosphate_dust','6x gtceu:pyrochlore_dust','6x gtceu:phosphate_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//纯净磷酸三钙矿石高速处理
    kc('prts:crushed_tricalcium_phosphate_ore_5')
    .itemInputs('gtceu:refined_tricalcium_phosphate_ore')
    .itemOutputs('18x gtceu:tricalcium_phosphate_dust','6x gtceu:pyrochlore_dust','6x gtceu:phosphate_dust','6x gtceu:apatite_dust')
    .duration(20)
    .EUt(16)//精炼磷酸三钙矿石高速处理

    kc('prts:crushed_red_garnet_ore_1')
    .itemInputs('#forge:ores/red_garnet')
    .itemOutputs('48x gtceu:red_garnet_dust','16x gtceu:almandine_dust','16x gtceu:pyrope_dust','16x gtceu:spessartine_dust')
    .duration(20)
    .EUt(16)//粗红石榴石矿高速处理
    kc('prts:crushed_red_garnet_ore_2')
    .itemInputs('gtceu:raw_red_garnet')
    .itemOutputs('36x gtceu:red_garnet_dust','12x gtceu:almandine_dust','12x gtceu:pyrope_dust','12x gtceu:spessartine_dust')
    .duration(20)
    .EUt(16)//粗红石榴石矿高速处理
    kc('prts:crushed_red_garnet_ore_3')
    .itemInputs('gtceu:crushed_red_garnet_ore')
    .itemOutputs('18x gtceu:red_garnet_dust','6x gtceu:almandine_dust','6x gtceu:pyrope_dust','6x gtceu:spessartine_dust')
    .duration(20)
    .EUt(16)//粉碎红石榴石矿石高速处理
    kc('prts:crushed_red_garnet_ore_4')
    .itemInputs('gtceu:purified_red_garnet_ore')
    .itemOutputs('18x gtceu:red_garnet_dust','6x gtceu:almandine_dust','6x gtceu:pyrope_dust','6x gtceu:spessartine_dust')
    .duration(20)
    .EUt(16)//纯净红石榴石矿石高速处理
    kc('prts:crushed_red_garnet_ore_5')
    .itemInputs('gtceu:refined_red_garnet_ore')
    .itemOutputs('18x gtceu:red_garnet_dust','6x gtceu:almandine_dust','6x gtceu:pyrope_dust','6x gtceu:spessartine_dust')
    .duration(20)
    .EUt(16)//精炼红石榴石矿石高速处理

    kc('prts:crushed_yellow_garnet_ore_1')
    .itemInputs('#forge:ores/yellow_garnet')
    .itemOutputs('48x gtceu:yellow_garnet_dust','16x gtceu:uvarovite_dust','16x gtceu:grossular_dust','16x gtceu:andradite_dust')
    .duration(20)
    .EUt(16)//粗黄石榴石矿高速处理
    kc('prts:crushed_yellow_garnet_ore_2')
    .itemInputs('gtceu:raw_yellow_garnet')
    .itemOutputs('36x gtceu:yellow_garnet_dust','12x gtceu:uvarovite_dust','12x gtceu:grossular_dust','12x gtceu:andradite_dust')
    .duration(20)
    .EUt(16)//粗黄石榴石矿高速处理
    kc('prts:crushed_yellow_garnet_ore_3')
    .itemInputs('gtceu:crushed_yellow_garnet_ore')
    .itemOutputs('18x gtceu:yellow_garnet_dust','6x gtceu:uvarovite_dust','6x gtceu:grossular_dust','6x gtceu:andradite_dust')
    .duration(20)
    .EUt(16)//粉碎黄石榴石矿石高速处理
    kc('prts:crushed_yellow_garnet_ore_4')
    .itemInputs('gtceu:purified_yellow_garnet_ore')
    .itemOutputs('18x gtceu:yellow_garnet_dust','6x gtceu:uvarovite_dust','6x gtceu:grossular_dust','6x gtceu:andradite_dust')
    .duration(20)
    .EUt(16)//纯净黄石榴石矿石高速处理
    kc('prts:crushed_yellow_garnet_ore_5')
    .itemInputs('gtceu:refined_yellow_garnet_ore')
    .itemOutputs('18x gtceu:yellow_garnet_dust','6x gtceu:uvarovite_dust','6x gtceu:grossular_dust','6x gtceu:andradite_dust')
    .duration(20)
    .EUt(16)//精炼黄石榴石矿石高速处理

    kc('prts:crushed_vanadium_magnetite_ore_1')
    .itemInputs('#forge:ores/vanadium_magnetite')
    .itemOutputs('48x gtceu:vanadium_magnetite_dust','24x gtceu:vanadium_dust','24x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粗钒磁铁矿矿高速处理
    kc('prts:crushed_vanadium_magnetite_ore_2')
    .itemInputs('gtceu:raw_vanadium_magnetite')
    .itemOutputs('36x gtceu:vanadium_magnetite_dust','18x gtceu:vanadium_dust','18x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粗钒磁铁矿矿高速处理
    kc('prts:crushed_vanadium_magnetite_ore_3')
    .itemInputs('gtceu:crushed_vanadium_magnetite_ore')
    .itemOutputs('18x gtceu:vanadium_magnetite_dust','9x gtceu:vanadium_dust','9x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//粉碎钒磁铁矿矿石高速处理
    kc('prts:crushed_vanadium_magnetite_ore_4')
    .itemInputs('gtceu:purified_vanadium_magnetite_ore')
    .itemOutputs('18x gtceu:vanadium_magnetite_dust','9x gtceu:vanadium_dust','9x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//纯净钒磁铁矿矿石高速处理
    kc('prts:crushed_vanadium_magnetite_ore_5')
    .itemInputs('gtceu:refined_vanadium_magnetite_ore')
    .itemOutputs('18x gtceu:vanadium_magnetite_dust','9x gtceu:vanadium_dust','9x gtceu:magnetite_dust')
    .duration(20)
    .EUt(16)//精炼钒磁铁矿矿石高速处理

    kc('prts:crushed_pollucite_ore_1')
    .itemInputs('#forge:ores/pollucite')
    .itemOutputs('48x gtceu:pollucite_dust','16x gtceu:potassium_dust','16x gtceu:aluminium_dust','16x gtceu:caesium_dust')
    .duration(20)
    .EUt(16)//粗铯榴石矿矿高速处理
    kc('prts:crushed_pollucite_ore_2')
    .itemInputs('gtceu:raw_pollucite')
    .itemOutputs('36x gtceu:pollucite_dust','12x gtceu:potassium_dust','12x gtceu:aluminium_dust','12x gtceu:caesium_dust')
    .duration(20)
    .EUt(16)//粗铯榴石矿矿高速处理
    kc('prts:crushed_pollucite_ore_3')
    .itemInputs('gtceu:crushed_pollucite_ore')
    .itemOutputs('18x gtceu:pollucite_dust','6x gtceu:potassium_dust','6x gtceu:aluminium_dust','6x gtceu:caesium_dust')
    .duration(20)
    .EUt(16)//粉碎铯榴石矿矿石高速处理
    kc('prts:crushed_pollucite_ore_4')
    .itemInputs('gtceu:purified_pollucite_ore')
    .itemOutputs('18x gtceu:pollucite_dust','6x gtceu:potassium_dust','6x gtceu:aluminium_dust','6x gtceu:caesium_dust')
    .duration(20)
    .EUt(16)//纯净铯榴石矿矿石高速处理
    kc('prts:crushed_pollucite_ore_5')
    .itemInputs('gtceu:refined_pollucite_ore')
    .itemOutputs('18x gtceu:pollucite_dust','6x gtceu:potassium_dust','6x gtceu:aluminium_dust','6x gtceu:caesium_dust')
    .duration(20)
    .EUt(16)//精炼铯榴石矿矿石高速处理

    kc('prts:crushed_fullers_earth_ore_1')
    .itemInputs('#forge:ores/fullers_earth')
    .itemOutputs('48x gtceu:fullers_earth_dust','16x gtceu:magnesium_dust','16x gtceu:silicon_dust','16x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗漂白石矿高速处理
    kc('prts:crushed_fullers_earth_ore_2')
    .itemInputs('gtceu:raw_fullers_earth')
    .itemOutputs('36x gtceu:fullers_earth_dust','12x gtceu:magnesium_dust','12x gtceu:silicon_dust','12x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗漂白石矿高速处理
    kc('prts:crushed_fullers_earth_ore_3')
    .itemInputs('gtceu:crushed_fullers_earth_ore')
    .itemOutputs('18x gtceu:fullers_earth_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粉碎漂白石矿石高速处理
    kc('prts:crushed_fullers_earth_ore_4')
    .itemInputs('gtceu:purified_fullers_earth_ore')
    .itemOutputs('18x gtceu:fullers_earth_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//纯净漂白石矿石高速处理
    kc('prts:crushed_fullers_earth_ore_5')
    .itemInputs('gtceu:refined_fullers_earth_ore')
    .itemOutputs('18x gtceu:fullers_earth_dust','6x gtceu:magnesium_dust','6x gtceu:silicon_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//精炼漂白石矿石高速处理

    kc('prts:crushed_diatomite_ore_1')
    .itemInputs('#forge:ores/diatomite')
    .itemOutputs('48x gtceu:diatomite_dust','24x gtceu:sapphire_dust','24x gtceu:hematite_dust')
    .duration(20)
    .EUt(16)//粗硅藻土矿高速处理
    kc('prts:crushed_diatomite_ore_2')
    .itemInputs('gtceu:raw_diatomite')
    .itemOutputs('36x gtceu:diatomite_dust','18x gtceu:sapphire_dust','18x gtceu:hematite_dust')
    .duration(20)
    .EUt(16)//粗硅藻土矿高速处理
    kc('prts:crushed_diatomite_ore_3')
    .itemInputs('gtceu:crushed_diatomite_ore')
    .itemOutputs('18x gtceu:diatomite_dust','9x gtceu:sapphire_dust','9x gtceu:hematite_dust')
    .duration(20)
    .EUt(16)//粉碎硅藻土矿石高速处理
    kc('prts:crushed_diatomite_ore_4')
    .itemInputs('gtceu:purified_diatomite_ore')
    .itemOutputs('18x gtceu:diatomite_dust','9x gtceu:sapphire_dust','9x gtceu:hematite_dust')
    .duration(20)
    .EUt(16)//纯净硅藻土矿石高速处理
    kc('prts:crushed_diatomite_ore_5')
    .itemInputs('gtceu:refined_diatomite_ore')
    .itemOutputs('18x gtceu:diatomite_dust','9x gtceu:sapphire_dust','9x gtceu:hematite_dust')
    .duration(20)
    .EUt(16)//精炼硅藻土矿石高速处理

    kc('prts:crushed_electrotine_ore_1')
    .itemInputs('#forge:ores/electrotine')
    .itemOutputs('48x gtceu:electrotine_dust','16x gtceu:diamond_dust','16x gtceu:electrum_dust','16x minecraft:redstone')
    .duration(20)
    .EUt(16)//粗蓝石矿高速处理
    kc('prts:crushed_electrotine_ore_2')
    .itemInputs('gtceu:raw_electrotine')
    .itemOutputs('36x gtceu:electrotine_dust','12x gtceu:diamond_dust','12x gtceu:electrum_dust','12x minecraft:redstone')
    .duration(20)
    .EUt(16)//粗蓝石矿高速处理
    kc('prts:crushed_electrotine_ore_3')
    .itemInputs('gtceu:crushed_electrotine_ore')
    .itemOutputs('18x gtceu:electrotine_dust','6x gtceu:diamond_dust','6x gtceu:electrum_dust','6x minecraft:redstone')
    .duration(20)
    .EUt(16)//粉碎蓝石矿石高速处理
    kc('prts:crushed_electrotine_ore_4')
    .itemInputs('gtceu:purified_electrotine_ore')
    .itemOutputs('18x gtceu:electrotine_dust','6x gtceu:diamond_dust','6x gtceu:electrum_dust','6x minecraft:redstone')
    .duration(20)
    .EUt(16)//纯净蓝石矿石高速处理
    kc('prts:crushed_electrotine_ore_5')
    .itemInputs('gtceu:refined_electrotine_ore')
    .itemOutputs('18x gtceu:electrotine_dust','6x gtceu:diamond_dust','6x gtceu:electrum_dust','6x minecraft:redstone')
    .duration(20)
    .EUt(16)//精炼蓝石矿石高速处理

    kc('prts:crushed_redstone_ore_1')
    .itemInputs('#forge:ores/redstone')
    .itemOutputs('48x minecraft:redstone','16x minecraft:glowstone_dust','16x gtceu:rare_earth_dust','16x gtceu:cinnabar_dust')
    .duration(20)
    .EUt(16)//粗红石矿高速处理
    kc('prts:crushed_redstone_ore_2')
    .itemInputs('gtceu:raw_redstone')
    .itemOutputs('36x minecraft:redstone','12x minecraft:glowstone_dust','12x gtceu:rare_earth_dust','12x gtceu:cinnabar_dust')
    .duration(20)
    .EUt(16)//粗红石矿高速处理
    kc('prts:crushed_redstone_ore_3')
    .itemInputs('gtceu:crushed_redstone_ore')
    .itemOutputs('18x minecraft:redstone','6x minecraft:glowstone_dust','6x gtceu:rare_earth_dust','6x gtceu:cinnabar_dust')
    .duration(20)
    .EUt(16)//粉碎红石矿石高速处理
    kc('prts:crushed_redstone_ore_4')
    .itemInputs('gtceu:purified_redstone_ore')
    .itemOutputs('18x minecraft:redstone','6x minecraft:glowstone_dust','6x gtceu:rare_earth_dust','6x gtceu:cinnabar_dust')
    .duration(20)
    .EUt(16)//纯净红石矿石高速处理
    kc('prts:crushed_redstone_ore_5')
    .itemInputs('gtceu:refined_redstone_ore')
    .itemOutputs('18x minecraft:redstone','6x minecraft:glowstone_dust','6x gtceu:rare_earth_dust','6x gtceu:cinnabar_dust')
    .duration(20)
    .EUt(16)//精炼红石矿石高速处理

    kc('prts:crushed_zeolite_ore_1')
    .itemInputs('#forge:ores/zeolite')
    .itemOutputs('48x gtceu:zeolite_dust','16x gtceu:aluminium_dust','16x gtceu:silicon_dust','16x gtceu:calcium_dust')
    .duration(20)
    .EUt(16)//粗沸石矿高速处理
    kc('prts:crushed_zeolite_ore_2')
    .itemInputs('gtceu:raw_zeolite')
    .itemOutputs('36x gtceu:zeolite_dust','12x gtceu:aluminium_dust','12x gtceu:silicon_dust','12x gtceu:calcium_dust')
    .duration(20)
    .EUt(16)//粗沸石矿高速处理
    kc('prts:crushed_zeolite_ore_3')
    .itemInputs('gtceu:crushed_zeolite_ore')
    .itemOutputs('18x gtceu:zeolite_dust','6x gtceu:aluminium_dust','6x gtceu:silicon_dust','6x gtceu:calcium_dust')
    .duration(20)
    .EUt(16)//粉碎沸石矿石高速处理
    kc('prts:crushed_zeolite_ore_4')
    .itemInputs('gtceu:purified_zeolite_ore')
    .itemOutputs('18x gtceu:zeolite_dust','6x gtceu:aluminium_dust','6x gtceu:silicon_dust','6x gtceu:calcium_dust')
    .duration(20)
    .EUt(16)//纯净沸石矿石高速处理
    kc('prts:crushed_zeolite_ore_5')
    .itemInputs('gtceu:refined_zeolite_ore')
    .itemOutputs('18x gtceu:zeolite_dust','6x gtceu:aluminium_dust','6x gtceu:silicon_dust','6x gtceu:calcium_dust')
    .duration(20)
    .EUt(16)//精炼沸石矿石高速处理

    kc('prts:crushed_gypsum_ore_1')
    .itemInputs('#forge:ores/gypsum')
    .itemOutputs('48x gtceu:gypsum_dust','16x gtceu:salt_dust','16x tceu:calcium_dust','16x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗石膏矿高速处理
    kc('prts:crushed_gypsum_ore_2')
    .itemInputs('gtceu:raw_gypsum')
    .itemOutputs('36x gtceu:gypsum_dust','12x gtceu:salt_dust','12x tceu:calcium_dust','12x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粗石膏矿高速处理
    kc('prts:crushed_gypsum_ore_3')
    .itemInputs('gtceu:crushed_gypsum_ore')
    .itemOutputs('18x gtceu:gypsum_dust','6x gtceu:salt_dust','6x tceu:calcium_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//粉碎石膏矿石高速处理
    kc('prts:crushed_gypsum_ore_4')
    .itemInputs('gtceu:purified_gypsum_ore')
    .itemOutputs('18x gtceu:gypsum_dust','6x gtceu:salt_dust','6x tceu:calcium_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//纯净石膏矿石高速处理
    kc('prts:crushed_gypsum_ore_5')
    .itemInputs('gtceu:refined_gypsum_ore')
    .itemOutputs('18x gtceu:gypsum_dust','6x gtceu:salt_dust','6x tceu:calcium_dust','6x gtceu:sulfur_dust')
    .duration(20)
    .EUt(16)//精炼石膏矿石高速处理

    kc('prts:crushed_trona_ore_1')
    .itemInputs('#forge:ores/trona')
    .itemOutputs('48x gtceu:trona_dust','24x gtceu:soda_ash_dust','24x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粗天然碱矿高速处理
    kc('prts:crushed_trona_ore_2')
    .itemInputs('gtceu:raw_trona')
    .itemOutputs('36x gtceu:trona_dust','18x gtceu:soda_ash_dust','18x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粗天然碱矿高速处理
    kc('prts:crushed_trona_ore_3')
    .itemInputs('gtceu:crushed_trona_ore')
    .itemOutputs('18x gtceu:trona_dust','9x gtceu:soda_ash_dust','9x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//粉碎天然碱矿石高速处理
    kc('prts:crushed_trona_ore_4')
    .itemInputs('gtceu:purified_trona_ore')
    .itemOutputs('18x gtceu:trona_dust','9x gtceu:soda_ash_dust','9x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//纯净天然碱矿石高速处理
    kc('prts:crushed_trona_ore_5')
    .itemInputs('gtceu:refined_trona_ore')
    .itemOutputs('18x gtceu:trona_dust','9x gtceu:soda_ash_dust','9x gtceu:sodium_dust')
    .duration(20)
    .EUt(16)//精炼天然碱矿石高速处理

    kc('prts:crushed_monazite_ore_1')
    .itemInputs('#forge:ores/monazite')
    .itemOutputs('48x gtceu:monazite_dust','16x gtceu:rare_earth_dust','16x gtceu:neodymium_dust','16x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粗独居石矿高速处理
    kc('prts:crushed_monazite_ore_2')
    .itemInputs('gtceu:raw_monazite')
    .itemOutputs('36x gtceu:monazite_dust','12x gtceu:rare_earth_dust','12x gtceu:neodymium_dust','12x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粗独居石矿高速处理
    kc('prts:crushed_monazite_ore_3')
    .itemInputs('gtceu:crushed_monazite_ore')
    .itemOutputs('18x gtceu:monazite_dust','6x gtceu:rare_earth_dust','6x gtceu:neodymium_dust','6x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//粉碎独居石矿石高速处理
    kc('prts:crushed_monazite_ore_4')
    .itemInputs('gtceu:purified_monazite_ore')
    .itemOutputs('18x gtceu:monazite_dust','6x gtceu:rare_earth_dust','6x gtceu:neodymium_dust','6x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//纯净独居石矿石高速处理
    kc('prts:crushed_monazite_ore_5')
    .itemInputs('gtceu:refined_monazite_ore')
    .itemOutputs('18x gtceu:monazite_dust','6x gtceu:rare_earth_dust','6x gtceu:neodymium_dust','6x gtceu:thorium_dust')
    .duration(20)
    .EUt(16)//精炼独居石矿石高速处理

    kc('prts:crushed_granitic_mineral_sand_ore_1')
    .itemInputs('#forge:ores/granitic_mineral_sand')
    .itemOutputs('48x gtceu:granitic_mineral_sand_dust','24x gtceu:magnetite_dust','24x gtceu:deepslate_dust')
    .duration(20)
    .EUt(16)//粗花岗岩矿砂矿高速处理
    kc('prts:crushed_granitic_mineral_sand_ore_2')
    .itemInputs('gtceu:raw_granitic_mineral_sand')
    .itemOutputs('36x gtceu:granitic_mineral_sand_dust','18x gtceu:magnetite_dust','18x gtceu:deepslate_dust')
    .duration(20)
    .EUt(16)//粗花岗岩矿砂矿高速处理
    kc('prts:crushed_granitic_mineral_sand_ore_3')
    .itemInputs('gtceu:crushed_granitic_mineral_sand_ore')
    .itemOutputs('18x gtceu:granitic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:deepslate_dust')
    .duration(20)
    .EUt(16)//粉碎花岗岩矿砂矿石高速处理
    kc('prts:crushed_granitic_mineral_sand_ore_4')
    .itemInputs('gtceu:purified_granitic_mineral_sand_ore')
    .itemOutputs('18x gtceu:granitic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:deepslate_dust')
    .duration(20)
    .EUt(16)//纯净花岗岩矿砂矿石高速处理
    kc('prts:crushed_granitic_mineral_sand_ore_5')
    .itemInputs('gtceu:refined_granitic_mineral_sand_ore')
    .itemOutputs('18x gtceu:granitic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:deepslate_dust')
    .duration(20)
    .EUt(16)//精炼花岗岩矿砂矿石高速处理

    kc('prts:crushed_basaltic_mineral_sand_ore_1')
    .itemInputs('#forge:ores/basaltic_mineral_sand')
    .itemOutputs('48x gtceu:basaltic_mineral_sand_dust','24x gtceu:magnetite_dust','24x gtceu:basalt_dust')
    .duration(20)
    .EUt(16)//粗玄武岩矿砂矿高速处理
    kc('prts:crushed_basaltic_mineral_sand_ore_2')
    .itemInputs('gtceu:raw_basaltic_mineral_sand')
    .itemOutputs('36x gtceu:basaltic_mineral_sand_dust','18x gtceu:magnetite_dust','18x gtceu:basalt_dust')
    .duration(20)
    .EUt(16)//粗玄武岩矿砂矿高速处理
    kc('prts:crushed_basaltic_mineral_sand_ore_3')
    .itemInputs('gtceu:crushed_basaltic_mineral_sand_ore')
    .itemOutputs('18x gtceu:basaltic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:basalt_dust')
    .duration(20)
    .EUt(16)//粉碎玄武岩矿砂矿石高速处理
    kc('prts:crushed_basaltic_mineral_sand_ore_4')
    .itemInputs('gtceu:purified_basaltic_mineral_sand_ore')
    .itemOutputs('18x gtceu:basaltic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:basalt_dust')
    .duration(20)
    .EUt(16)//纯净玄武岩矿砂矿石高速处理
    kc('prts:crushed_basaltic_mineral_sand_ore_5')
    .itemInputs('gtceu:refined_basaltic_mineral_sand_ore')
    .itemOutputs('18x gtceu:basaltic_mineral_sand_dust','9x gtceu:magnetite_dust','9x gtceu:basalt_dust')
    .duration(20)
    .EUt(16)//精炼玄武岩矿砂矿石高速处理

    kc('prts:crushed_garnet_sand_ore_1')
    .itemInputs('#forge:ores/garnet_sand')
    .itemOutputs('48x gtceu:garnet_sand_dust','24x gtceu:yellow_garnet_dust','24x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗石榴石砂矿高速处理
    kc('prts:crushed_garnet_sand_ore_2')
    .itemInputs('gtceu:raw_garnet_sand')
    .itemOutputs('36x gtceu:garnet_sand_dust','18x gtceu:yellow_garnet_dust','18x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粗石榴石砂矿高速处理
    kc('prts:crushed_garnet_sand_ore_3')
    .itemInputs('gtceu:crushed_garnet_sand_ore')
    .itemOutputs('18x gtceu:garnet_sand_dust','9x gtceu:yellow_garnet_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//粉碎石榴石砂矿石高速处理
    kc('prts:crushed_garnet_sand_ore_4')
    .itemInputs('gtceu:purified_garnet_sand_ore')
    .itemOutputs('18x gtceu:garnet_sand_dust','9x gtceu:yellow_garnet_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//纯净石榴石砂矿石高速处理
    kc('prts:crushed_garnet_sand_ore_5')
    .itemInputs('gtceu:refined_garnet_sand_ore')
    .itemOutputs('18x gtceu:garnet_sand_dust','9x gtceu:yellow_garnet_dust','9x gtceu:red_garnet_dust')
    .duration(20)
    .EUt(16)//精炼石榴石砂矿石高速处理

    kc('prts:crushed_bentonite_ore_1')
    .itemInputs('#forge:ores/bentonite')
    .itemOutputs('48x gtceu:bentonite_dust','16x gtceu:magnesium_dust','16x gtceu:calcium_dust','16x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗膨润土矿高速处理
    kc('prts:crushed_bentonite_ore_2')
    .itemInputs('gtceu:raw_bentonite')
    .itemOutputs('36x gtceu:bentonite_dust','12x gtceu:magnesium_dust','12x gtceu:calcium_dust','12x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粗膨润土矿高速处理
    kc('prts:crushed_bentonite_ore_3')
    .itemInputs('gtceu:crushed_bentonite_ore')
    .itemOutputs('18x gtceu:bentonite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//粉碎膨润土矿石高速处理
    kc('prts:crushed_bentonite_ore_4')
    .itemInputs('gtceu:purified_bentonite_ore')
    .itemOutputs('18x gtceu:bentonite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//纯净膨润土矿石高速处理
    kc('prts:crushed_bentonite_ore_5')
    .itemInputs('gtceu:refined_bentonite_ore')
    .itemOutputs('18x gtceu:bentonite_dust','6x gtceu:magnesium_dust','6x gtceu:calcium_dust','6x gtceu:aluminium_dust')
    .duration(20)
    .EUt(16)//精炼膨润土矿石高速处理

    event.shaped('prts:gaoxiaoshuiyayanmofangkuai',[
        "ASA",
        "COC",
        "ASA"
    ],{
        A:'minecraft:iron_block',
        S:'prts:basic_wanzi_impact_resistant_plate',
        O:'prts:low_voltage_wanzi_circuit',
        C:'minecraft:copper_block'
    })//高效水压研磨方块制作

    event.shaped('gtceu:super_kc_1',[
        "ASA",
        "COC",
        "ASA"
    ],{
        A:'gtceu:invar_frame',
        S:'prts:basic_wanzi_impact_resistant_plate',
        O:'gtceu:heatproof_machine_casing',
        C:'prts:low_voltage_wanzi_circuit'
    })//超高速矿物处理机
})