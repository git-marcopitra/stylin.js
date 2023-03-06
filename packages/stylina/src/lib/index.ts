import { NON_STYLE_ELEMENTS } from '../constants/index.js';
import getControllerClassNames from './controllers/index.js';
import getStylinPseudos from './pseudo-selectors/index.js';
import getStyleProperties from './style-properties/index.js';
import { GetStyleArguments, RenderStylesArguments } from './types';
import { invalidStylinAttributes, makeStyleId, parseStyle } from './utils.js';

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

    this.stylinStyleElement = document.querySelector(`style#${stylinId}`);
    this.stylinCustomStyleElement = document.querySelector(
      `style#${stylinCustomId}`
    );
  }

  init(element?: Element) {
    this.runStylin(element ?? document.body);
  }

  runStylin(element: Element): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (NON_STYLE_ELEMENTS.includes(element.localName)) return;

    const { useClassNameList, defClassName } = getControllerClassNames(element);

    const styleId = this.getStyle({ element, defClassName, useClassNameList });

    if (!styleId) return;

    const space = element.className ? ' ' : '';

    element.className += space + styleId.replace(/\./g, ' ');

    invalidStylinAttributes(element);

    [...element.children].forEach(function (child) {
      self.runStylin(child);
    });
  }

  getReusableClassByStyle(styles: string) {
    if (!styles) return;

    return this.classes.find(([, style]) => style === styles)?.[0];
  }

  addNewClass(classNameList: ReadonlyArray<string>, styles: string) {
    if (!classNameList.length || !styles) return;

    this.classes.push([classNameList.join(' '), styles]);
  }

  getStyle({ element, defClassName, useClassNameList }: GetStyleArguments) {
    const styles = getStyleProperties(element);
    const pseudos = getStylinPseudos(element);

    if (!styles.length && !useClassNameList.length) return;

    const parsedStyles = parseStyle(styles);

    const reusableClass = this.getReusableClassByStyle(parsedStyles);

    const [creatingClassList, usingClassList, reusingClassList] = makeStyleId({
      defClassName,
      useClassNameList,
      reusableClass,
      hasStyle: !!parsedStyles,
      hasPseudos: !!pseudos.length,
    });

    this.renderStyle({
      parsedStyles,
      isDefine: !!defClassName,
      styleId: creatingClassList,
      pseudos,
    });

    this.addNewClass(creatingClassList, parsedStyles);

    return creatingClassList
      .concat(usingClassList, reusingClassList)
      .join(' ')
      .trim();
  }

  renderStyle({
    styleId,
    isDefine,
    parsedStyles,
    pseudos,
  }: RenderStylesArguments) {
    if (!styleId.length) return;

    const styleTagElement = isDefine
      ? this.stylinCustomStyleElement
      : this.stylinStyleElement;

    if (parsedStyles) {
      const generatedSimpleClassName = `.${styleId.join(`,\n.`)}`;

      styleTagElement!.innerHTML += `${generatedSimpleClassName} {\n ${parsedStyles} }\n`;
    }

    if (pseudos.length) {
      pseudos.forEach(({ pseudo, parsedStyle }) => {
        const generatedPseudosClassName = `.${styleId
          .map((id) => id + pseudo)
          .join(`,\n.`)}`;

        styleTagElement!.innerHTML += `${generatedPseudosClassName} {\n ${parsedStyle} }\n`;
      });
    }
  }
}
