function gtceuRecipe(event, type, id, eu, time, inputs, outputs) {
    const gtceu = event.recipes.gtceu;

    let recipe = gtceu[type](id).duration(time).EUt(eu);

    // 处理输入
    let itemInputs = [];
    let fluidInputs = [];

    inputs.forEach(input => {
        if (input[0] === 'item') {
            itemInputs.push(input[1]);
        } else if (input[0] === 'fluid') {
            fluidInputs.push(input[1]);
        }
    });

    if (itemInputs.length > 0) {
        recipe = recipe.itemInputs(itemInputs);
    }
    if (fluidInputs.length > 0) {
        recipe = recipe.inputFluids(fluidInputs);
    }

    // 处理输出
    let itemOutputs = [];
    let fluidOutputs = [];

    outputs.forEach(output => {
        if (output[0] === 'item') {
            itemOutputs.push(output[1]);
        } else if (output[0] === 'fluid') {
            fluidOutputs.push(output[1]);
        }
    });

    if (itemOutputs.length > 0) {
        recipe = recipe.itemOutputs(itemOutputs);
    }
    if (fluidOutputs.length > 0) {
        recipe = recipe.outputFluids(fluidOutputs);
    }

    return recipe;
}