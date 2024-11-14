import * as React from 'react';
import styled from 'styled-components';
import { Item } from '../Item/Item';
import { Card } from '../Card/Card';

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  selected?: string;
  onChange?: (selected: string) => void;
  tabs: Tab[];
  elevation?: number;
  width?: string;
}

const TabList = styled.div<{ width?: string }>`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  width: ${({ width }) => width || '100%'};
`;

const TabContent = styled(Card)`
  padding: 16px;
  min-height: 200px;
`;

export const Tabs: React.FC<TabsProps> = ({ selected, onChange, tabs, elevation = 1, width }) => {
  const [activeTab, setActiveTab] = React.useState(selected || tabs[0]?.title);

  React.useEffect(() => {
    if (selected) {
      setActiveTab(selected);
    }
  }, [selected]);

  const handleTabClick = (title: string) => {
    setActiveTab(title);
    onChange?.(title);
  };

  const activeContent = tabs.find(tab => tab.title === activeTab)?.content;

  return (
    <div>
      <TabList width={width}>
        {tabs.map((tab) => (
          <Item
            key={tab.title}
            value={tab.title}
            selected={tab.title === activeTab}
            borderBottom={tab.title === activeTab ? '1px solid var(--wired-item-selected-color)' : 'none'}
            onClick={() => handleTabClick(tab.title)}
          >
            {tab.title}
          </Item>
        ))}
      </TabList>
      <TabContent elevation={elevation === 0 ? undefined : elevation} width={width}>
        {activeContent}
      </TabContent>
    </div>
  );
};
