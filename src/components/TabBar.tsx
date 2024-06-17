import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import venue from "../assets/venue.jpg";
import proposal from "../assets/proposal2.jpg";
import InfoCard from "./InfoCard";
import sheraton from "../assets/Sheraton.jpg";
import springhill from "../assets/Springhill.jpg";
import React, { useState } from "react";

const TabBar = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  async function rsvp(ev: any) {
    ev.preventDefault;
    await fetch("http://localhost:4000/rsvp", {
      method: "POST",
      body: JSON.stringify({ name, guests }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <Tabs>
      <TabList>
        <Tab>Wedding Info</Tab>
        <Tab>Wedding Party</Tab>
        <Tab>Hotel Info</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <div className="container">
            <header className="header">
              <h1>Welcome!</h1>
            </header>

            <section className="section">
              <div className="card centered-image-container">
                <p text-align="center">
                  Our wedding will be on Friday August 16, 2024 at 5:30 pm! It
                  will be located at Highpointe Estate in Liberty Hill, Texas.
                  The address is 5555 Co Rd 258, Liberty Hill, TX 78642.
                </p>
                <img src={venue} className="home-image" alt="Venue Image"></img>
                <header className="header">
                  <h1>How we met!</h1>
                </header>
                <p text-align="center">
                  We met on a dating app called Bumble! Our first date was at a
                  coffee shop in Denton, Texas called Golden Boy Coffee. We sat
                  and talked for a few hours, got to know each other well. The
                  rest is history!
                </p>
                <header className="header">
                  <h1>The Proposal!</h1>
                </header>
                <p text-align="center">
                  We went on a trip to Europe in the Summer of 2023, visiting
                  many countries. We visited Germany, the Netherlands, Belgium,
                  the United Kingdom and, our last stop was France. Chandler
                  proposed at the last stop of our trip at the Eiffel Tower!
                </p>
                <img
                  src={proposal}
                  className="home-image"
                  alt="Proposal Image"
                ></img>
              </div>
            </section>
          </div>
        </TabPanel>
        <TabPanel>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            spacing={10}
            padding="10px"
          >
            <InfoCard></InfoCard>
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <div className="hotel">
            <p className="title">
              Sheraton Austin Georgetown Hotel & Conference Center 20 minute
              drive to the venue
            </p>
            <p>$151 per night for one King </p>
            <p>$171 per night for 2 Queens</p>
            <p>
              Amenities include: Business center, Fitness center, Free
              high-speed internet, Meeting event space, Parking, Pet friendly.
            </p>
            <img src={sheraton} className="hotel-image" alt="Sheraton" />
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1715703066186&key=GRP&app=resvlink"
              className="book-link"
            >
              Book here
            </a>
          </div>

          <div className="hotel">
            <p className="title">
              SpringHill Suites Austin Cedar Park 24 minute drive to the venue
            </p>
            <p>$129 per night for one King </p>
            <p>$139 per night for 2 Queens</p>
            <p>
              Amenities include: Business center, Fitness center, Free
              breakfast, Free high-speed internet, Meeting event space, Onsite
              Bar, Parking.
            </p>
            <img src={springhill} className="hotel-image" alt="SpringHill" />
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1717697930079&key=GRP&app=resvlink"
              className="book-link"
            >
              Book here
            </a>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabBar;
