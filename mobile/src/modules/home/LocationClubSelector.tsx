import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import GenericAccordion from "@/src/components/GenericAccordion";
import { ApiClient } from "@/src/api/apiClient";
import VenuesApi from "@/src/api/venues/VenuesApi";
import { IVenue } from "@/src/entities/interfaces/IVenue";
import { router } from "expo-router";

type sampleCity = {
  name: string;
  value: string;
  venueId: number;
  capacity: number;
  coverImage?: string;
};

interface ICity {
  name: string;
  value: string;
  location: string;
  expanded: boolean;
  clubs: IVenue[] | sampleCity[];
}

const citiesData: ICity[] = [
  {
    name: "Ottawa",
    value: "Ottawa",
    location: "Ottawa, Canada",
    expanded: false,
    clubs: [],
  },
];

const LocationClubSelector = () => {
  const [cities, setCities] = useState(citiesData);
  console.log("debug cities", cities);
  const navigateToVenue = (venue: IVenue | sampleCity) => {
    const { name = "", venueId = 0, capacity = 0, coverImage = "" } = venue;
    // router.push({
    //   pathname: "/venues",
    //   params: {
    //     name,
    //     venueId,
    //     capacity,
    //     coverImage,
    //   },
    // });
  };

  useEffect(() => {
    const getVenues = async () => {
      try {
        const venuesApi = new VenuesApi(new ApiClient());
        const data = await venuesApi.getVenues();

        setCities((currentCities) => {
          const copy = [...currentCities];
          copy[0].clubs = data;
          return copy;
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    getVenues();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{"Select A City"}</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cities.map((city, index) => (
          <GenericAccordion key={index} title={city.name} headerTheme={"badge"}>
            {city.clubs.map((club: IVenue | sampleCity, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigateToVenue(club);
                }}
              >
                <View key={index}>
                  <Text style={styles.contentName}>{club.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </GenericAccordion>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  scrollView: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  contentName: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: 10,
  },
});
export default LocationClubSelector;
