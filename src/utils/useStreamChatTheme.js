import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';

export default () => {
  const {colors} = useTheme();
  const getChatStyle = () => {
    return {
      'loadingIndicator.loadingText': `color: ${colors.text}`,
      'messageList.dateSeparator.date': 'color: black;',
      'messageInput.container': `border-top-color: #979A9A; border-top-width: 0.4px; backgroundColor: ${
        colors.background
      }; margin: 0; border-radius: 0;`,
      'messageInput.sendButtonIcon': 'height: 20px; width: 20px;',
      'messageInput.attachButtonIcon': 'height: 20px; width: 20px;',
      'messageInput.inputBox': `font-size: 15px; color: ${colors.text}`,
      'messageInput.fileUploadPreview.filenameText': `color: ${colors.text}`,
      'messageInput.fileUploadPreview.attachmentContainerView': `border-color: ${
        colors.border
      }`,
      'messageInput.suggestions.container': `background-color: ${
        colors.background
      }`,
      'messageInput.suggestions.mention.name': `color: ${colors.text}`,
      'messageInput.suggestions.title': `color: ${colors.text}`,
      'messageInput.suggestions.command.title': `color: ${colors.text}`,
      'messageInput.suggestions.command.args': `color: ${colors.text}`,
      'messageInput.suggestions.command.description': `color: ${colors.text}`,
      'thread.newThread': 'display: none',
      'messageList.dateSeparator.container':
        'margin-top: 10; margin-bottom: 5;',
      'messageList.typingIndicatorContainer': 'height: 30',
      'typingIndicator.container': `backgroundColor: ${colors.background};`,
      'typingIndicator.text': `color: ${colors.text};font-size: 12px`,
      'message.file.container': `background-color: ${
        colors.background
      }; border-color: ${colors.border}; border-width: 1px`,
      'message.file.title': `color: ${colors.text}`,
      'message.file.size': `color: ${colors.text}`,
      'message.reactionPicker.container': 'justify-content: flex-end;',
      'message.reactionPicker.containerView':
        'width: 100%; height: 100px; flex-wrap: wrap; border-radius: 0; padding-bottom: 20px;',
      'message.reactionPicker.emoji': 'font-size: 30px;margin: 5px;',
      'message.avatarWrapper.spacer': 'height: 0;',
      'message.content.container':
        'flex: 1; align-items: stretch; max-width: 320px; padding-top: 0; border-radius: 0;',
      'message.content.textContainer':
        'align-self: stretch; padding-top: 0;margin-top: 0;border-color: transparent;width: 100%',
      'message.container': 'margin-bottom: 0; margin-top: 0',
      'message.avatarWrapper.container': 'align-self: flex-start',
      'avatar.image': 'border-radius: 5px;',
      'message.card.container':
        'border-top-left-radius: 8px; border-top-right-radius: 8px;border-bottom-left-radius: 8px; border-bottom-right-radius: 8px',
      'message.gallery.single':
        'border-top-left-radius: 8px;border-top-right-radius: 8px;border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; margin-left: 5px; width: 95%',
      'message.gallery.galleryContainer':
        'border-top-left-radius: 8px;border-top-right-radius: 8px;border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; margin-left: 5px; width: 95%',
      'message.replies.messageRepliesText': 'color: #0064c2',
    };
  };
  const [chatStyle, setChatStyle] = useState(getChatStyle());

  useEffect(() => {
    setChatStyle(getChatStyle());
  }, [colors]);

  return chatStyle;
};
