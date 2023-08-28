interface IPathIcon {
  d: string;
  fill?: string;
  fillRule?: 'inherit' | 'nonzero' | 'evenodd' | null | undefined;
  clipRule?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLineCap?: 'inherit' | 'butt' | 'round' | 'square' | null | undefined;
  strokeLineJoin?: 'inherit' | 'round' | 'miter' | 'bevel' | null | undefined;
  transform?: string;
  id?: string;
}

interface IIcon {
  viewBox: string;
  fill: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  g?: {
    style?: string;
    transform?: string;
    id?: string;
  };
  path: IPathIcon[];
}
