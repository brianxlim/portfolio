// declaration.d.ts (create in the `src` folder)
declare module '*.css';
declare module '*?url' {
  const src: string;
  export default src;
}
