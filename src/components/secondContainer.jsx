import React from "react";
import { Block, Card, Toggle,
  ToggleItem,
  Text,
  LineChart,
  Title } from "@tremor/react";

  const data = [
    {
      date: "2021-01-01",
      Sales: 900.73,
      Profit: 173,
      Customers: 73,
    },
    {
      date: "2021-01-02",
      Sales: 300.74,
      Profit: 174.6,
      Customers: 74,
    },
    {
      date: "2021-03-13",
      Sales: 882,
      Profit: 682,
      Customers: 582,
    },
    {
      date: "2021-05-07",
      Sales: 582,
      Profit: 382,
      Customers: 662,
    },
    {
      date: "2021-07-10",
      Sales: 752,
      Profit: 942,
      Customers: 282,
    },
  ];
  
  const dollarFormatter = (value) =>
    `$ ${Intl.NumberFormat("us").format(value).toString()}`;
  
  const numberFormatter = (value) =>
    `${Intl.NumberFormat("us").format(value).toString()}`;
  
  export default function SecondContainer() {
    const [selectedKpi, setSelectedKpi] = React.useState("Sales");
  
    const formatters = {
      Sales: dollarFormatter,
      Profit: dollarFormatter,
      Customers: numberFormatter,
    };
  
    return (
      <Block marginTop="mt-6">
        <Card>
          <div className="md:flex justify-between">
            <Block>
              <Title> Performance History </Title>
              <Text> Daily increase or decrease per domain </Text>
            </Block>
            <div className="mt-6 md:mt-0">
              <Toggle
                color="zinc"
                defaultValue={selectedKpi}
                handleSelect={(value) => setSelectedKpi(value)}
              >
                <ToggleItem value="Sales" text="Sales" />
                <ToggleItem value="Profit" text="Profit" />
                <ToggleItem value="Customers" text="Customers" />
              </Toggle>
            </div>
          </div>
          <LineChart
            data={data}
            dataKey="date"
            categories={[selectedKpi]}
            colors={["blue"]}
            valueFormatter={formatters[selectedKpi]}
            marginTop="mt-6"
            yAxisWidth="w-10"
          />
        </Card>
      </Block>
    );
  }