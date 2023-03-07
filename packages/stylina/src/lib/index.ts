import { NON_STYLE_ELEMENTS } from '../constants/index.js';
import getControllerClassNames from './controllers/index.js';
import getStylinPseudos from './pseudo-selectors/index.js';
import renderResponsiveStyle from './responsiveness/index.js';
import getStyleProperties from './style-properties/index.js';
import { GetStyleArguments, RawStyle, RenderStylesArguments } from './types';
import {
  invalidStylinAttributes,
  makeStyleId,
  rawStyleArrayEquals,
} from './utils.js';

export default class Stylin {
  classes: Array<[string, RawStyle]>;
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

  observer(element: Element, mutationObserver: MutationObserver) {
    const config = { attributes: true, childList: true, subtree: true };

    mutationObserver.observe(element, config);
  }

  init(element?: Element) {
    const target = element ?? document.body;
    this.runStylin(target);

    const runStylin = this.runStylin.bind(this);

    const observer = new MutationObserver(() => runStylin(target));
    this.observer(target, observer);
  }

  runStylin(element: Element): void {
    const runStylin = this.runStylin.bind(this);

    if (NON_STYLE_ELEMENTS.includes(element.localName)) return;

    const { useClassNameList, defClassName } = getControllerClassNames(element);

    const styleId = this.getStyle({ element, defClassName, useClassNameList });

    if (styleId) {
      const space = element.className ? ' ' : '';
      element.className += space + styleId.replace(/\./g, ' ');
    }

    invalidStylinAttributes(element);

    [...element.children].forEach(runStylin);
  }

  getReusableClassByStyle(styles: RawStyle) {
    if (!styles.length) return;

    return this.classes.find(([, style]) =>
      rawStyleArrayEquals(style, styles)
    )?.[0];
  }

  addNewClass(classNameList: ReadonlyArray<string>, styles: RawStyle) {
    if (!classNameList.length || !styles.length) return;

    this.classes.push([classNameList.join(' '), styles]);
  }

  getStyle({ element, defClassName, useClassNameList }: GetStyleArguments) {
    const styles = getStyleProperties(element);

    const pseudos = getStylinPseudos(element);

    if (!styles.length && !useClassNameList.length) return;

    const reusableClass = this.getReusableClassByStyle(styles);

    const [creatingClassList, usingClassList, reusingClassList] = makeStyleId({
      defClassName,
      useClassNameList,
      reusableClass,
      hasStyle: !!styles.length,
      hasPseudos: !!pseudos.length,
    });

    this.renderStyle({
      styles,
      isDefine: !!defClassName,
      styleId: creatingClassList,
      pseudos,
    });

    this.addNewClass(creatingClassList, styles);

    return creatingClassList
      .concat(usingClassList, reusingClassList)
      .join(' ')
      .trim();
  }

  renderStyle({ styleId, isDefine, styles, pseudos }: RenderStylesArguments) {
    if (!styleId.length) return;

    const styleTagElement = isDefine
      ? this.stylinCustomStyleElement
      : this.stylinStyleElement;

    if (styles.length) {
      const generatedSimpleClassName = `.${styleId.join(`,\n.`)}`;

      styleTagElement!.innerHTML += renderResponsiveStyle(
        generatedSimpleClassName,
        styles
      );
    }

    if (pseudos.length) {
      pseudos.forEach(({ pseudo, parsedStyles }) => {
        const generatedPseudosClassName = `.${styleId
          .map((id) => id + pseudo)
          .join(`,\n.`)}`;

        styleTagElement!.innerHTML += renderResponsiveStyle(
          generatedPseudosClassName,
          parsedStyles
        );
      });
    }
  }
}
