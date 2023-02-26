export interface ControllerData {
  defClassName: string;
  useClassNameList: ReadonlyArray<string>;
}

export interface GetStyleArguments extends ControllerData {
  element: Element;
}

export interface MakeStyleIdArguments extends ControllerData {
  reusableClass?: string;
}

export type MakeStyleIdReturn = [ReadonlyArray<string>, ReadonlyArray<string>];

export interface RawStyleEntry {
  name: string;
  value: string;
}

export type RawStyle = ReadonlyArray<RawStyleEntry>;

export interface RemoveAttributesArgument {
  element: Element;
  attributes: ReadonlyArray<string>;
}

export type StylinControllersKey = 'def-class' | 'use-class';

export type StylinControllers = Partial<Record<StylinControllersKey, string>>;
