import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  NgModuleRef,
  ViewContainerRef,
  Injector,
  NgModuleFactoryLoader,
  Inject,
  NgModuleFactory,
  Type} from '@angular/core';
import { LAZY_MODULES, LAZY_MODULES_MAP } from './lazy-loading-map';

type ModuleWithRoot = Type<any> & {rootComponent: Type<any>};

@Directive({
  selector: '[appLoadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {
  @Input('appLoadModule') moduleName: keyof LAZY_MODULES;

  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {}

  ngOnInit() {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);
        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;

        const componentFactory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
        this.vcr.createComponent(componentFactory);
      });
  }

  ngOnDestroy() {
    if (this.moduleRef) {
      this.moduleRef.destroy();
    }
  }
}
