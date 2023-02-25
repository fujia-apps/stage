interface DragElement {
  element: HTMLElement | null;
  index?: number;
  firstIndex?: number;
}

interface CloneElement {
  element: HTMLElement | null;
  x?: number;
  y?: number;
}

export class Draggable {
  isPointerDown = false;
  containerElement: HTMLElement | null = null;
  rectList: HTMLElement[] = [];
  drag: DragElement = {
    element: null,
    index: 0,
    firstIndex: 0,
  };

  clone: CloneElement = {
    element: null,
    x: 0,
    y: 0,
  };
  lastPointerMove = { x: 0, y: 0 };

  constructor(options: DragElement) {
    this.containerElement = options.element;

    this.init();
  }

  init() {
    this.bindEventListener();
  }

  onPointerDown(e: PointerEvent) {
    this.drag.element = e.target as HTMLElement;
    this.drag.element.classList.add('active');

    this.clone.element = this.drag.element.cloneNode(true) as HTMLElement;
    document.body.appendChild(this.clone.element);
    // this.clone.element.className = 'clone-item';

    const index = [].indexOf.call(
      this.containerElement?.children,
      this.drag.element as never
    );

    this.drag.index = index;
    this.drag.firstIndex = index;
    // @ts-ignore
    this.clone.x = this.rectList[index].left;
    // @ts-ignore
    this.clone.y = this.rectList[index].top;

    this.clone.element.style.transition = 'none';
    this.clone.element.className = 'clone-item';
    this.clone.element.style.transform =
      'translate3d(' + this.clone.x + 'px, ' + this.clone.y + 'px, 0)';
  }

  onPointerMove(e: PointerEvent) {}

  onPointerUp(e: PointerEvent) {}

  bindEventListener() {
    if (this.containerElement) {
      this.containerElement.addEventListener(
        'pointerdown',
        this.onPointerDown.bind(this)
      );
      this.containerElement.addEventListener(
        'pointermove',
        this.onPointerMove.bind(this)
      );

      this.containerElement.addEventListener(
        'pointerup',
        this.onPointerUp.bind(this)
      );
    }
  }
}
