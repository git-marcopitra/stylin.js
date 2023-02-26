import { NON_STYLE_ELEMENTS } from '../constants';
import getControllerClassNames from './controllers';
import { GetStyleArguments } from './types';
import {
  getStylinStyles,
  makeStyleId,
  parseStyle,
  removeAttributes,
} from './utils';

export default class Stylin {
  classes: Array<[string, string]>;
  stylinStyleElement: Element | null;
  stylinCustomStyleElement: Element | null;

  constructor() {
    this.classes = [];
    this.stylinStyleElement = null;
    this.stylinCustomStyleElement = null;

    this.setup();
  }

  setup() {
    const id = crypto.randomUUID().split('-')[0];

    const stylinId = `stylin-${id}`;
    const stylinCustomId = `stylin-${id}__custom`;

    document.head.insertAdjacentHTML(
      'beforeend',
      `<style id="${stylinCustomId}"></style>\n
      <style id="${stylinId}"></style>`
    );

    this.stylinCustomStyleElement = document.querySelector(
      `style#${stylinCustomId}`
    );

    this.stylinStyleElement = document.querySelector(`style#${stylinId}`);
  }

  init(element?: Element) {
    this.runStylin(element ?? document.body);
  }

  runStylin(element: Element): void {
    if (NON_STYLE_ELEMENTS.includes(element.localName)) return;

    this.stylinChildren(element);

    const { useClassNameList, defClassName } = getControllerClassNames(element);

    const styleId = this.getStyle({ element, defClassName, useClassNameList });

    if (!styleId) return;

    element.className += styleId.replace(/\./g, ' ');
  }

  getReusableClassByStyle(styles: string) {
    return this.classes.find(([, style]) => style === styles)?.[0];
  }

  addNewClass(classNameList: ReadonlyArray<string>, styles: string) {
    if (!classNameList.length) return;

    this.classes.push([classNameList.join(' '), styles]);
  }

  stylinChildren(element: Element) {
    [...element.children].forEach(this.runStylin);
  }

  getStyle({ element, defClassName, useClassNameList }: GetStyleArguments) {
    const styles = getStylinStyles(element);

    if (!styles.length && !useClassNameList.length) return;

    const parsedStyles = parseStyle(styles);

    const reusableClass = this.getReusableClassByStyle(parsedStyles);

    const [styleId, reusableClassList] = makeStyleId({
      defClassName,
      useClassNameList,
      reusableClass,
    });

    if (styleId.length) {
      const styleTagElement = defClassName
        ? this.stylinCustomStyleElement
        : this.stylinStyleElement;

      const generatedClassName = `.${styleId.join(`,\n.`)}`;

      styleTagElement!.innerHTML += `${generatedClassName} {\n ${parsedStyles} }\n`;
    }

    this.addNewClass(styleId, parsedStyles);

    removeAttributes({
      element,
      attributes: styles.map(({ name }) => `in-${name}`),
    });

    return [...styleId, ...reusableClassList].join(' ');
  }
}
