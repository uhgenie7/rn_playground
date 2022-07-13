import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppLayout from '~/components/AppLayout';
import Theme from '~/styles/theme';
import Button from '~/components/Button';
import {useNavigation} from '@react-navigation/native';
import {TextMedium, TextRegular} from '~/components/Text';
import {TabRoutineJson, RoutineJson} from '~/utils/routine';
import type {TabRoutineType, RoutineType} from '~/utils/routine';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from 'types/navigation';
import type {FC} from 'react';

type PrevNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AfternoonScreen'
>;

interface HorizontalTabProps extends TabRoutineType {
  index: number;
}

const MorningScreen = () => {
  const navigation = useNavigation<PrevNavigationProp>();
  const [username, setUsername] = useState('지니');
  const [morningTodo, setMorningTodo] = useState<string[]>([]);

  const useTabs = (initialTabs: number, allTabs: RoutineType[]) => {
    const [contentIndex, setContentIndex] = useState(initialTabs);
    return {
      contentItem: allTabs[contentIndex],
      contentChange: setContentIndex,
    };
  };

  const {contentItem, contentChange} = useTabs(0, RoutineJson);

  const handleAfternoonPage = () =>
    morningTodo.length > 0 && navigation.navigate('AfternoonScreen');

  const handleTodo = useCallback(
    (title: string) => {
      const isIncludesMorningTodo = morningTodo.includes(title);
      if (!isIncludesMorningTodo) {
        return setMorningTodo([...morningTodo, title]);
      } else {
        const filterTodo = morningTodo.filter(v => v !== title);
        return setMorningTodo([...filterTodo]);
      }
    },
    [morningTodo],
  );

  const HorizontalTabSection: FC<HorizontalTabProps> = ({title, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.horizontalTabContent}
        activeOpacity={0.6}
        onPress={() => {
          contentChange(index);
        }}>
        <Text style={styles.horizontalTabContentText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppLayout>
      <View style={styles.container}>
        <View>
          <TextMedium>아침을 어떻게 보내고 싶나요?</TextMedium>
        </View>
        <View>
          <TextRegular>
            {morningTodo.length === 0
              ? `${username}님의 아침을 활력있게 만들어 줄 루틴을 골라보세요`
              : morningTodo.length === 1
              ? '멋진 루틴이네요! 현재 하고 있는 루틴도 추가해 봐요'
              : morningTodo.length === 2
              ? '원하는 아침 루틴을 직접 만들 수도 있어요'
              : '모두 골랐다면 오후 루틴으로 넘어가요 :)'}
          </TextRegular>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.horizontalTabContainer}>
            {TabRoutineJson.map((item, index) => {
              return (
                <HorizontalTabSection
                  key={index}
                  title={item.title}
                  index={index}
                />
              );
            })}
          </View>
        </ScrollView>
        <ScrollView>
          <View>
            {contentItem?.content.map((title, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={
                    morningTodo.includes(title)
                      ? styles.routineContentActive
                      : styles.routineContent
                  }
                  activeOpacity={0.6}
                  onPress={() => handleTodo(title)}>
                  <Text
                    style={
                      morningTodo.includes(title)
                        ? styles.contentTextActive
                        : styles.contentText
                    }>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            isCorrect={morningTodo.length > 0}
            isLoading={false}
            textLabel={
              morningTodo.length === 0
                ? '최소 1개의 루틴을 골라주세요'
                : '아침 루틴 완성'
            }
            onSubmit={handleAfternoonPage}
          />
        </View>
      </View>
    </AppLayout>
  );
};

export default MorningScreen;

const styles = StyleSheet.create({
  container: {
    paddingRight: Theme.width(16),
    paddingLeft: Theme.width(16),
    marginTop: Theme.height(40),
  },

  horizontalTabContainer: {
    flexDirection: 'row',
    marginVertical: Theme.height(16),
  },

  horizontalTabContent: {
    paddingHorizontal: Theme.width(16),
    paddingVertical: Theme.height(8),
    borderRadius: Theme.width(5),
    backgroundColor: Theme.colors.main,
    marginRight: Theme.width(8),
  },
  horizontalTabContentText: {
    color: Theme.colors.white,
  },

  routineContent: {
    paddingHorizontal: Theme.width(16),
    paddingVertical: Theme.height(8),
    borderRadius: Theme.width(5),
    backgroundColor: Theme.colors.card,
    marginBottom: Theme.width(8),
  },
  contentText: {
    color: Theme.colors.black,
  },

  routineContentActive: {
    paddingHorizontal: Theme.width(16),
    paddingVertical: Theme.height(8),
    borderRadius: Theme.width(5),
    backgroundColor: Theme.colors.minus,
    marginBottom: Theme.width(8),
  },
  contentTextActive: {
    color: Theme.colors.white,
  },
  buttonContainer: {
    marginTop: Theme.height(16),
  },
});
