import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appJsonEditor]'
})
export class JsonEditorDirective implements OnInit {
  @Input() data: any;

  public editor: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // console.log(JSONEditor);
    // this.editor = new JSONEditor(this.el.nativeElement, {
    //   theme: 'bootstrap2'
    // });

    // this.editor.setValue(this.data);
  }
}
