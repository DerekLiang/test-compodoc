import { Component, OnInit, Input } from '@angular/core';

/**
 * this was hello world component [HelloWorldComponent]{@link HelloWorldComponent#test}
 * <example-url>http://localhost:4200/dashboard</example-url>
 * <example-url>http://localhost:4200/</example-url>
 *
 * @example
 * <!-- example 1 -->
 * <mwl-calendar-day-view
 *                 [input]="'doc'"
 *                 [events]="events">
 * </mwl-calendar-day-view>
 *
 * @example
 * <!-- example 2 -->
 * <mwl-calendar-day-view
 *                 [input]="'doc'"
 *                 [events]="events">
 * </mwl-calendar-day-view>
 *
 * @export
 * @class HelloWorldComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() {   }

  @Input()
  test = 'abc';
  @Input()
  test1 = 'abc';
  @Input()
  test2 = 'abc';
  @Input()
  test3 = 'abc';
  @Input()
  test4 = 'abc';
  @Input()
  test5 = 'abc';
  @Input()
  test6 = 'abc';

  ngOnInit() {
  }

}
