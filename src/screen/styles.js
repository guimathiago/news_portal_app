import React from 'react';
import styled from 'styled-components/native';
import * as variables from '../../tokens/variables';

export const Container = styled.SafeAreaView`
  flex:1;
  padding: 10px;
`;

export const FlatList = styled.FlatList``;

export const Text = styled.Text`
  color: ${variables.neutralColor1};
`;

export const NewsImage = styled.Image`
  width:100%;
  height:170px;
  margin-bottom: ${variables.spacingSquishSizeNanoStack};
`;

export const ButtonPrimary = styled.TouchableOpacity`
  font-size: ${variables.fontSizeSm};
  border-radius: ${variables.radiusSizeNone};
  padding: ${variables.spacingSquishSizeXsStack};
  font-weight: ${variables.fontWeightMedium};
  background-color: ${variables.brandColorPrimary3};
`;

export const HeadingSmall = styled.Text`
  font-size: ${variables.fontSizeMd};
  font-weight: ${variables.fontWeightBold};
  color: ${variables.neutralColor5};
`;

export const SubtitleSmall = styled.Text`
  font-size: ${variables.fontSizeSm};
  font-weight: ${variables.fontWeightMedium};
  color: ${variables.neutralColor4};
`;

export const ParagraphSmall = styled.Text`
  font-size: ${variables.fontSizeXs};
  font-weight: ${variables.fontWeightRegular};
  color: ${variables.neutralColor4};
`;

export const CardContent = styled.View`
  margin-bottom: ${variables.spacingSquishSizeSmStack};
  border-radius: ${variables.radiusSizeNone};
  padding:${variables.spacingSizeSm};
  border: solid ${variables.borderSizeThin} ${variables.neutralColor2};
  background-color: ${variables.neutralColor1};
`;

export const CardContentHeading = styled.View`
  margin-bottom: ${variables.spacingSquishSizeNanoStack};
`;
export const CardContentSubtitle = styled.View`
  margin-bottom: ${variables.spacingSquishSizeXsStack};
`;
export const CardContentParagraph = styled.View`
  margin-bottom: ${variables.spacingSquishSizeSmStack};
`;

