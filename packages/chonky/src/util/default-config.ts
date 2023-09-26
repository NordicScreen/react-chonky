import { ChonkyActions } from '../action-definitions/index';
import { ChonkyIconFA } from "../components/external/ChonkyIconFA";
import { FileBrowserProps } from '../types/file-browser.types';

export type ChonkyConfig = Pick<
  FileBrowserProps,
  | 'fileActions'
  | 'onFileAction'
  | 'thumbnailGenerator'
  | 'doubleClickDelay'
  | 'disableSelection'
  | 'disableDefaultFileActions'
  | 'hideToolbarInfo'
  | 'forceEnableOpenParent'
  | 'disableDragAndDrop'
  | 'disableDragAndDropProvider'
  | 'defaultSortActionId'
  | 'defaultFileViewActionId'
  | 'clearSelectionOnOutsideClick'
  | 'iconComponent'
  | 'darkMode'
  | 'i18n'
>;

export const defaultConfig: ChonkyConfig = {
  fileActions: null,
  onFileAction: null,
  thumbnailGenerator: null,
  doubleClickDelay: 300,
  disableSelection: false,
  disableDefaultFileActions: false,
  forceEnableOpenParent: false,
  hideToolbarInfo: false,
  disableDragAndDrop: false,
  disableDragAndDropProvider: false,
  defaultSortActionId: ChonkyActions.SortFilesByName.id,
  defaultFileViewActionId: ChonkyActions.EnableGridView.id,
  clearSelectionOnOutsideClick: true,
  iconComponent: ChonkyIconFA,
  darkMode: false,
  i18n: {},
};

export const setChonkyDefaults = (config: Partial<ChonkyConfig>) => {
  for (const key of Object.keys(defaultConfig)) {
    if (key in config) {
      defaultConfig[key as keyof ChonkyConfig] = config[key as keyof ChonkyConfig] as any;
    }
  }
};
