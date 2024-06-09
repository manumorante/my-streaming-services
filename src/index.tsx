import { useState } from "react";
import SERVICES from "./services.json";
import { ActionPanel, Action, Grid } from "@raycast/api";

export default function Command() {
  const [searchText, setSearchText] = useState("");

  return (
    <Grid filtering={false} onSearchTextChange={setSearchText} columns={7} aspectRatio="16/9" inset={Grid.Inset.Small}>
      {SERVICES.map(({ icon, name, url, search }) => {
        const title = () => {
          if (search && searchText) return searchText;
          return name;
        };
        return (
          <Grid.Item
            key={url}
            content={icon}
            title={title()}
            actions={
              <ActionPanel>
                {(searchText && search) || <Action.OpenInBrowser title={`Go to ${name}`} url={url} />}
                {searchText && search && (
                  <Action.OpenInBrowser
                    title={`Search "${searchText}" on ${name}`}
                    url={search.replace("{query}", searchText)}
                  />
                )}
              </ActionPanel>
            }
          />
        );
      })}
    </Grid>
  );
}
