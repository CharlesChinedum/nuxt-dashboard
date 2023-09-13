export const useSidebar = () => useState<boolean>("sidebar", () => true);
export const useMobileSidebar = () =>
  useState<boolean>("mobileSidebar", () => false);
