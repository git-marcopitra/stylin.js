export interface ControllerData {
  defClassName: string;
  useClassNameList: ReadonlyArray<string>;
}

export interface GetStyleArguments extends ControllerData {
  element: Element;
}

export interface MakeStyleIdArguments extends ControllerData {
  hasStyle: boolean;
  hasPseudos: boolean;
  reusableClass?: string;
}

export type PseudoSelectors = ReadonlyArray<{
  pseudo: string;
  parsedStyles: RawStyle;
}>;

export interface RenderStylesArguments {
  isDefine: boolean;
  styles: RawStyle;
  styleId: ReadonlyArray<string>;
  pseudos: PseudoSelectors;
}

export type MakeStyleIdReturn = [
  ReadonlyArray<string>,
  ReadonlyArray<string>,
  ReadonlyArray<string>
];

export interface RawStyleEntry {
  name: string;
  value: ReadonlyArray<string>;
}

export type RawStyle = ReadonlyArray<RawStyleEntry>;

export interface RemoveAttributesArgument {
  element: Element;
  attributes: ReadonlyArray<string>;
}

export type StylinControllersKey = 'def-class' | 'use-class';

export type StylinControllers = Partial<Record<StylinControllersKey, string>>;
export type StylinAttributesList = ReadonlyArray<{
  name: string;
  value: string;
}>;

export type StylinAttributesMap = Record<string, string>;
