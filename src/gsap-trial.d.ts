declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
