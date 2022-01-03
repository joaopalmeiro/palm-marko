import template from "./template.marko";

// https://markojs.com/docs/rendering/#rendersyncinput
template.renderSync({}).appendTo(document.body);
