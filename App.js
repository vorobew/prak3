import React, { useState } from 'react';
import { View, FlatList, Image, useColorScheme } from 'react-native';
import { Provider as PaperProvider, Card, Title, Paragraph, Button, DefaultTheme, DarkTheme } from 'react-native-paper';

const factData = [
  { text: "Начало Великой Французской революции — борьба за свободу и равенство.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS5MlsgP2PosaFElRCNe4jUDlgfKBZYv-ng&s", name: "Великая Французская революция", place: "Франция" },
  { text: "Первый полет человека в космос — Юрий Гагарин облетел Землю.", image: "https://illustrators.ru/uploads/illustration/image/1600043/%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD2021-0.jpg", name: "Первый полет в космос", place: "СССР" },
  { text: "Открытие Америки — Христофор Колумб достиг Нового Света.", image: "https://pgbooks.ru/upload/blog/c2c/c2c82941d37e52da714b3c51e0a3fa07.jpg", name: "Открытие Америки", place: "Америка" },
  { text: "Падение Западной Римской империи — конец античности и начало Средневековья.", image: "https://x-legio.com/photo/3253/3.jpg", name: "Падение Римской империи", place: "Римская империя" },
  { text: "Принятие христианства на Руси — крещение князя Владимира и народа.", image: "https://upload.wikimedia.org/wikipedia/commons/7/75/%D0%9A%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A0%D1%83%D1%81%D0%B8.jpg", name: "Принятие христианства на Руси", place: "Киевская Русь" },
  { text: "Начало Великой Отечественной войны — борьба с нацистской Германией.", image: "https://www.sechenov.ru/upload/medialibrary/66b/KHroniki-velikikh-strazheniy.jpeg", name: "Великая Отечественная война", place: "СССР" },
  { text: "Падение Берлинской стены — объединение Германии.", image: "https://gdb.voanews.com/df0f1907-b5e0-4c53-a804-88327aa6737e_cx0_cy11_cw0_w1080_h608_s.jpg", name: "Падение Берлинской стены", place: "Германия" },
  { text: "Октябрьская революция — свержение Временного правительства в России.", image: "https://s0.rbk.ru/v6_top_pics/media/img/7/76/754598845555767.jpeg", name: "Октябрьская революция", place: "Россия" },
  { text: "Основание Рима — легенда о Ромуле и Реме.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt3CXSN6HMlVijQhIEGgK1Jr3fvgV3SG-Pg&s", name: "Основание Рима", place: "Италия" },
  { text: "Начало промышленной революции — переход к фабричному производству.", image: "https://humanities.by/wp-content/uploads/2020/08/promyshlennaya-revolyucziya-v-anglii.jpg", name: "Промышленная революция", place: "Великобритания" }
];


const facts = factData.map((fact, i) => ({
  id: i.toString(),
  title: `Факт ${fact.name}`,
  description: fact.text,
  date: new Date().toLocaleDateString(),
  image: fact.image, // Используем ссылку на картинку из factData
}));


const App = () => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === 'dark' ? DarkTheme : DefaultTheme);

  return (
    <PaperProvider theme={theme}>
      <FlatList
        data={facts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>{item.date}</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </PaperProvider>
  );
};

export default App;
