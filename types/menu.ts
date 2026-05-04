export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  hidden?: true;
  /** Show a “new” indicator in nav (e.g. Costa Rica retreat). */
  isNew?: boolean;
};
