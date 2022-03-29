import { TreeViewNodes } from '../components/tree-view';
import { nodes } from './mukc';

export enum ProductClassKeys {
  HomeAndKitchen,
  FridgeAndFreezer,
  Oven,
  SideBySideFridgeAndFreezer,
  SinglePersonFridgeAndFreezer,
}

export function getTree(...key: ProductClassKeys[]): TreeViewNodes[] {
  // TODO this is the place that we give the list of keys and get a tree view base on the products grouping
  return nodes;
}
