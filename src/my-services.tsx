import { Action, ActionPanel, Color, Icon, List } from "@raycast/api";
import { useLocalStorage, getFavicon } from "@raycast/utils";
import SERVICES from "./services.json";
import type { Service } from "./types";

export default function MyServices() {
  const { value: services, setValue, isLoading } = useLocalStorage<Service[]>("services", SERVICES);

  async function toggleService(url: string) {
    const newServices =
      services?.map((service) => (service.url === url ? { ...service, active: !service.active } : service)) ?? [];
    await setValue(newServices);
  }

  return (
    <List isLoading={isLoading} searchBarPlaceholder="Search for services">
      {services?.map((service) => (
        <List.Item
          icon={getFavicon(service.url)}
          key={service.url}
          title={service.name}
          accessories={[{ icon: service.active ? { source: Icon.Checkmark, tintColor: Color.Green } : Icon.Circle }]}
          actions={
            <ActionPanel>
              <Action title={service.active ? "Inactive" : "Active"} onAction={() => toggleService(service.url)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
