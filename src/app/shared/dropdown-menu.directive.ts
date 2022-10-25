import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]',
})
export class DropdownMenuDirective {
  constructor() {}

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click')
  toggleOpen(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
