export function checkColor(string){
  return /^#[0-9A-F]{6}$/i.test(string);
}