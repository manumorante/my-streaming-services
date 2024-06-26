import { useEffect, useState } from "react";
import { openGoogleChrome } from "./openGoogleChrome";
import SERVICES from "./services.json";
import { ActionPanel, Action, List, getPreferenceValues, Icon } from "@raycast/api";
import { useLocalStorage, getFavicon } from "@raycast/utils";
import MyServices from "./my-services";
import type { Service } from "./types";

export default function Command() {
  const [services, setServices] = useState<Service[]>([]);
  const [searchText, setSearchText] = useState("");
  const { value: localServices, isLoading } = useLocalStorage<Service[]>("services", SERVICES);
  const preferences = getPreferenceValues();

  useEffect(() => {
    if (localServices && localServices.length > 0) {
      const activeServices = localServices.filter((service) => service.active);
      setServices(activeServices);
    }
  }, [localServices]);

  if (!isLoading && services.length == 0) {
    return (
      <List searchBarPlaceholder="Manage services">
        <List.EmptyView
          icon={Icon.Play}
          title="You have not activated any service yet"
          actions={
            <ActionPanel>
              <Action.Push icon={Icon.BulletPoints} title="Manage Services" target={<MyServices />} />
            </ActionPanel>
          }
        />
      </List>
    );
  }

  return (
    <List
      isLoading={isLoading || services.length <= 0}
      filtering={false}
      searchBarPlaceholder="Search for movies, series"
      onSearchTextChange={setSearchText}
    >
      {services?.map(({ name, url, search }) => {
        const searchURL = () => {
          if (search && searchText) return search?.replace("{query}", searchText);
          return url;
        };

        return (
          <List.Item
            key={url}
            icon={getFavicon(url)}
            title={name}
            subtitle={search && `${searchText}`}
            actions={
              <ActionPanel>
                <ActionPanel.Section>
                  {preferences.UseGoogleChrome == "yes" ? (
                    <Action
                      icon={getFavicon(url)}
                      title={`${name}`}
                      onAction={() => openGoogleChrome({ directory: preferences.directory, url: searchURL() })}
                    />
                  ) : (
                    <Action.OpenInBrowser icon={getFavicon(url)} title={`${name}`} url={searchURL()} />
                  )}
                </ActionPanel.Section>
                <Action.Push icon={Icon.BulletPoints} title="Manage Services" target={<MyServices />} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
