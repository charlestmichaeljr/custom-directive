import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter(evt: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue' );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(evt: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
    this.backgroundColor = this.defaultColor;
  }

}
