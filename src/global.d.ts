
// Tell TypeScript how to handle image imports
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";
declare module "*.mp4" {
  const src: string;
  export default src;
}


