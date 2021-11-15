import React, { useState, useEffect } from 'react';
import {
  Container, FlatList, ButtonPrimary, HeadingSmall, SubtitleSmall,
  ParagraphSmall, Text, NewsImage, CardContent, CardContentHeading, CardContentSubtitle, CardContentParagraph
} from './styles';
import { Linking } from "react-native";

export default () => {

  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ffec30be7204e41a765ddb6685d842a`).then(r => r.json());
    setNews(res.articles)
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <CardContent key={item}>
            <NewsImage source={{ uri: item.urlToImage }} />
            <CardContentHeading>
              <HeadingSmall>{item.title}</HeadingSmall>
            </CardContentHeading>
            <CardContentSubtitle>
              <SubtitleSmall>{item.author}</SubtitleSmall>
            </CardContentSubtitle>
            <CardContentParagraph>
              <ParagraphSmall>{item.description}</ParagraphSmall>
            </CardContentParagraph>
            <ButtonPrimary onPress={() => Linking.openURL(item.url)}>
              <Text>Read More</Text>
            </ButtonPrimary>
          </CardContent>
        )}

      />
    </Container>
  );
}
