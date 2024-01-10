import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabBar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Wedding Info</Tab>
        <Tab>Registry</Tab>
        <Tab>Wedding Party</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>
            Wedding is August 16, 2024 Located at Hightpointe Estate 5555 Co Rd
            258, Liberty Hill, TX 78642 Starting at 5pm.{" "}
          </p>
        </TabPanel>
        <TabPanel>
          <p>https://www.amazon.com/wedding/registry/11WX48EK7UR58</p>
        </TabPanel>
        <TabPanel>
          <p>Groomsmen: Donovan, Gavin, Joe, Jeremy, Nick, Kyle</p>
          <p>Bridesmaids: Crimson, Isabel, Emily, Olivia, Alyson, Megan</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabBar;
