import Engine from './engine.js'
export default class TemplateV1 {
  constructor({root}) {
    this.root = root;
    this.engine = new Engine()
  }

  render(templateDom, data) {
    let dom = this.engine.render(templateDom.render(), data);
    console.log('html>>>', dom);
    this.root.appendChild(dom)
  }
}
