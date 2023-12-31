import { downFontByJSON } from '@/utils/utils';
import { fabric } from 'fabric';
import Editor from '../core';
type IEditor = Editor;

class DownFontPlugin {
  public canvas: fabric.Canvas;
  public editor: IEditor;
  static pluginName = 'DownFontPlugin';
  constructor(canvas: fabric.Canvas, editor: IEditor) {
    this.canvas = canvas;
    this.editor = editor;
  }

  hookImportBefore(json) {
    // console.log(downFontByJSON(json).then, 111);
    return downFontByJSON(json);
  }

  destroy() {
    console.log('pluginDestroy');
  }
}

export default DownFontPlugin;
