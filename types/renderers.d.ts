import { html as litHTML, render as litRenderer } from 'lit-html'
import { html as uhtmlHTML, render as uhtmlRenderer } from 'uhtml'
import { html as htmPreactHTML, render as htmPreactRenderer } from 'htm/preact'

declare module '@ficusjs/renderers' {
  export { uhtmlHTML as html, uhtmlRenderer as renderer }
}

declare module '@ficusjs/renderers/uhtml' {
  export { uhtmlHTML as html, uhtmlRenderer as renderer }
}

declare module '@ficusjs/renderers/lit-html' {
  export { litHTML as html, litRenderer as renderer }
}

type TemplateFunction<T> = (
  template: TemplateStringsArray,
  ...values: any[]
) => T;

declare module '@ficusjs/renderers/htm' {
  const html: TemplateFunction<Node>;
  function renderer<T extends Node>(what: T, where: HTMLElement): void;
  export { html, renderer }
}

declare module '@ficusjs/renderers/htm-preact' {
  export { htmPreactHTML as html, htmPreactRenderer as renderer }
}

declare module '@ficusjs/renderers/css' {
  const css: TemplateFunction<CSSStyleSheet>;
  export { css }
}
