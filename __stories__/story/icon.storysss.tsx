import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Icon } from '../../src/components/icon';
import { Story, UseCase } from '../views';
import { iconNames } from '../../assets/xml/icon-names';
import { folderNames } from '../../assets/xml/folder-names';

storiesOf('Icon', module)
  .add('icon1', () : ReactElement => (
    <Story>
      <UseCase
        text="Icon => "
      // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        {iconNames.map(iconName => {
          folderNames.map(folderName => {
            const str = folderName.split('-')[0];
            console.log('str', str);
            if (str.match(new RegExp(str, 'g'))) {
              console.log('here')
              return (
                <Icon icon={iconName} />
              )
            }
          });
        })}
      </UseCase>
    </Story>
  ))
