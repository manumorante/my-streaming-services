import SERVICES from "./services.json";
import { ActionPanel, Action, List } from "@raycast/api";

export default function Command() {
  return (
    <List>
      {SERVICES.map(({ id, icon, name, featured, url }) => {
        return (
          <List.Item
            key={id}
            icon={icon}
            title={name}
            accessories={featured
              .filter((movie) => movie !== "")
              .map((movie) => ({
                tag: { value: `${movie}` },
              }))}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser url={url} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}
