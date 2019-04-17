import {Quality, Costs, Crafting, Techniques} from './DSACraftingData';

export const DefaultMaterial = {quality: Quality[2], materials: undefined, complex: false, magic: false};

export const DefaultCost = Costs[0];

export const DefaultType = Crafting[0];

export const DefaultTechnique = Techniques.default;

export function DefaultState() {
  return {
    activeStep: 0,
    craft: {
      materials: DefaultMaterial,
      cost: DefaultCost,
      objecttype: DefaultType,
      technique: DefaultTechnique
    }
  }
}

