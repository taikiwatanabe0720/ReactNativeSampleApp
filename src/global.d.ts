import {start} from '@storybook/react-native';

declare global {
  var view: ReturnType<typeof start>;
  var STORIES: unknown;
}
