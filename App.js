import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  VictoryChart,
  VictoryArea,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryPie,
  VictoryLine,
} from 'victory-native';

function App() {
  const sampleData = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '1px solid #ccc'},
            }}
            data={[
              {x: 1, y: 2},
              {x: 2, y: 3},
              {x: 3, y: 5},
              {x: 4, y: 4},
              {x: 5, y: 7},
            ]}
          />
        </VictoryChart>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 40},
            {x: 'Birds', y: 55},
          ]}
        />
        <VictoryChart polar theme={VictoryTheme.material}>
          <VictoryArea data={sampleData} />
          <VictoryPolarAxis />
        </VictoryChart>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
