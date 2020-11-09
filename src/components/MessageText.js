import React from 'react';
import {truncate} from '../utils';
import {MessageUserBar} from './MessageHeader';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useChannelContext, useThreadContext} from 'stream-chat-expo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SCText} from './SCText';

export const MessageText = props => {
  const {colors} = useTheme();
  const {message} = props;
  const {thread} = useThreadContext();
  const {channel} = useChannelContext();
  const navigation = useNavigation();

  return (
    <React.Fragment>
      {message.attachments.length === 0 && <MessageUserBar {...props} />}
      {message.show_in_channel && !thread && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThreadScreen', {
              channelId: channel.id,
              threadId: message.parent_id,
            });
          }}
          style={{
            marginBottom: 10,
          }}>
          <SCText
            style={{
              color: colors.dimmedText,
            }}>
            replied to a thread:{' '}
            <SCText
              style={{
                color: colors.linkText,
              }}>
              {message.parentMessageText
                ? truncate(message.parentMessageText, 70, '...')
                : 'click to go'}
            </SCText>
          </SCText>
        </TouchableOpacity>
      )}

      {props.renderText({
        message,
        markdownStyles: {
          text: {
            fontSize: 16,
            color: colors.text,
            fontFamily: 'Lato-Regular',
          },
          // link: {
          //   color: 'blue',
          //   fontSize: 25,
          // },
          inlineCode: {
            fontWeight: '200',
            color: 'red',
          },
        },
      })}
    </React.Fragment>
  );
};
