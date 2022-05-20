export function isMobileDevice(navigator: Navigator): boolean {
  let isMobile: number;
  isMobile = navigator.userAgent.indexOf('Mobile');
  if (isMobile === -1) {
    isMobile = navigator.userAgent.indexOf('Tablet');
  }
  if (isMobile === -1) {
    return false;
  }
  return true;
}
